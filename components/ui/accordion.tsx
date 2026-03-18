"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

interface AccordionContextValue {
  value: string[]
  onToggle: (itemValue: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue>({
  value: [],
  onToggle: () => {},
})

function Accordion({
  className,
  defaultValue,
  value,
  onValueChange,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string[]) => void
}) {
  const [internalValue, setInternalValue] = React.useState<string[]>(() => {
    if (defaultValue) return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    return []
  })
  const controlled = value !== undefined
  const currentValue = controlled ? (Array.isArray(value) ? value : [value]) : internalValue

  const handleToggle = (itemValue: string) => {
    const next = currentValue.includes(itemValue)
      ? currentValue.filter((v) => v !== itemValue)
      : [...currentValue, itemValue]
    if (!controlled) setInternalValue(next)
    onValueChange?.(next)
  }

  return (
    <AccordionContext.Provider value={{ value: currentValue, onToggle: handleToggle }}>
      <div
        data-slot="accordion"
        className={cn("flex w-full flex-col", className)}
        {...props}
      />
    </AccordionContext.Provider>
  )
}

interface AccordionItemContextValue {
  itemValue: string
  isOpen: boolean
}

const AccordionItemContext = React.createContext<AccordionItemContextValue>({
  itemValue: "",
  isOpen: false,
})

function AccordionItem({
  className,
  value,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const { value: openValues } = React.useContext(AccordionContext)
  const isOpen = openValues.includes(value)

  return (
    <AccordionItemContext.Provider value={{ itemValue: value, isOpen }}>
      <div
        data-slot="accordion-item"
        className={cn("border-b", className)}
        {...props}
      />
    </AccordionItemContext.Provider>
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { itemValue, isOpen } = React.useContext(AccordionItemContext)
  const { onToggle } = React.useContext(AccordionContext)

  return (
    <div className="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        aria-expanded={isOpen}
        onClick={() => onToggle(itemValue)}
        className={cn(
          "flex flex-1 items-start justify-between py-4 text-left text-sm font-medium transition-all hover:underline focus-visible:outline-none",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "pointer-events-none ml-auto h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    </div>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = React.useContext(AccordionItemContext)

  if (!isOpen) return null

  return (
    <div
      data-slot="accordion-content"
      className={cn("overflow-hidden text-sm pb-4 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
