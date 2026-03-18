'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
    dataLayer: unknown[]
  }
}

function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag === 'undefined') return

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

export default function Analytics() {
  return (
    <Suspense>
      <AnalyticsInner />
    </Suspense>
  )
}

export function AnalyticsHead() {
  if (!process.env.NEXT_PUBLIC_GA_ID) return null

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
