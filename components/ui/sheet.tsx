"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

type SheetSide = "top" | "right" | "bottom" | "left"

interface SheetContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextValue>({
  open: false,
  onOpenChange: () => {},
})

function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isOpen = open !== undefined ? open : internalOpen
  const handleChange = onOpenChange ?? setInternalOpen

  return (
    <SheetContext.Provider value={{ open: isOpen, onOpenChange: handleChange }}>
      {children}
    </SheetContext.Provider>
  )
}

function SheetTrigger({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = React.useContext(SheetContext)
  return (
    <button
      data-slot="sheet-trigger"
      type="button"
      className={cn("", className)}
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  )
}

function SheetContent({
  children,
  side = "right",
  className,
  showCloseButton = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  side?: SheetSide
  showCloseButton?: boolean
}) {
  const { open, onOpenChange } = React.useContext(SheetContext)

  // Lock body scroll when open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!open) return null

  const sideClasses: Record<SheetSide, string> = {
    right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l data-[open=true]:translate-x-0 translate-x-full",
    left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r data-[open=true]:translate-x-0 -translate-x-full",
    top: "inset-x-0 top-0 h-auto w-full border-b data-[open=true]:translate-y-0 -translate-y-full",
    bottom: "inset-x-0 bottom-0 h-auto w-full border-t data-[open=true]:translate-y-0 translate-y-full",
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        data-slot="sheet-content"
        data-side={side}
        data-open={open}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-white p-6 shadow-lg transition-transform duration-200 ease-in-out",
          sideClasses[side],
          className
        )}
        style={{ backgroundColor: 'white', opacity: 1 }}
        {...props}
      >
        {children}
        {showCloseButton && (
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute top-3 right-3 rounded-md p-1 text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    </>
  )
}

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="sheet-title"
      className={cn("text-base font-medium text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function SheetClose({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = React.useContext(SheetContext)
  return (
    <button
      data-slot="sheet-close"
      type="button"
      className={cn("", className)}
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </button>
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
