'use client'

import { useEffect } from 'react'

export function reportWebVitals(metric: { name: string; id: string; value: number }) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value)
  }
}

export default function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      import('web-vitals').then((webVitalsModule) => {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitalsModule
        onCLS(reportWebVitals)
        onINP(reportWebVitals)
        onFCP(reportWebVitals)
        onLCP(reportWebVitals)
        onTTFB(reportWebVitals)
      }).catch((error) => {
        console.warn('Failed to load web-vitals:', error)
      })
    }
  }, [])

  return null
}
