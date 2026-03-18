"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  activeTab: string
  onTabChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue>({
  activeTab: "",
  onTabChange: () => {},
})

function Tabs({
  className,
  defaultValue,
  value,
  onValueChange,
  orientation = "horizontal",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
  const controlled = value !== undefined
  const activeTab = controlled ? value! : internalValue

  const handleChange = (val: string) => {
    if (!controlled) setInternalValue(val)
    onValueChange?.(val)
  }

  return (
    <TabsContext.Provider value={{ activeTab, onTabChange: handleChange }}>
      <div
        data-slot="tabs"
        data-orientation={orientation}
        className={cn(
          "flex gap-2",
          orientation === "horizontal" ? "flex-col" : "flex-row",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const tabsListVariants = cva(
  "inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-muted h-8",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof tabsListVariants>) {
  return (
    <div
      role="tablist"
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  value,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const { activeTab, onTabChange } = React.useContext(TabsContext)
  const isActive = activeTab === value

  return (
    <button
      type="button"
      role="tab"
      data-slot="tabs-trigger"
      aria-selected={isActive}
      data-active={isActive || undefined}
      onClick={() => onTabChange(value)}
      className={cn(
        "relative inline-flex h-[calc(100%-4px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-0.5 text-sm font-medium whitespace-nowrap transition-all hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-background text-foreground shadow-sm dark:border-input dark:bg-input/30"
          : "text-foreground/60",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function TabsContent({
  className,
  value,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const { activeTab } = React.useContext(TabsContext)

  if (activeTab !== value) return null

  return (
    <div
      role="tabpanel"
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
