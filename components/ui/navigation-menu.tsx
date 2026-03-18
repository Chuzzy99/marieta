"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

const navigationMenuTriggerStyle = cva(
  "inline-flex h-9 w-max items-center justify-center rounded-lg bg-background px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted disabled:pointer-events-none disabled:opacity-50"
)

interface NavMenuContextValue {
  activeItem: string | null
  setActiveItem: (item: string | null) => void
}

const NavMenuContext = React.createContext<NavMenuContextValue>({
  activeItem: null,
  setActiveItem: () => {},
})

function NavigationMenu({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { align?: string }) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  // Close on outside click
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActiveItem(null)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <NavMenuContext.Provider value={{ activeItem, setActiveItem }}>
      <div
        ref={ref}
        data-slot="navigation-menu"
        className={cn("relative flex max-w-max flex-1 items-center justify-center", className)}
        {...props}
      >
        {children}
      </div>
    </NavMenuContext.Provider>
  )
}

function NavigationMenuList({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      data-slot="navigation-menu-list"
      className={cn("flex flex-1 list-none items-center justify-center gap-0", className)}
      {...props}
    />
  )
}

interface NavigationMenuItemContextValue {
  itemId: string
}

const NavigationMenuItemContext = React.createContext<NavigationMenuItemContextValue>({
  itemId: "",
})

function NavigationMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  const itemId = React.useId()
  return (
    <NavigationMenuItemContext.Provider value={{ itemId }}>
      <li
        data-slot="navigation-menu-item"
        className={cn("relative", className)}
        {...props}
      />
    </NavigationMenuItemContext.Provider>
  )
}

function NavigationMenuTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { activeItem, setActiveItem } = React.useContext(NavMenuContext)
  const { itemId } = React.useContext(NavigationMenuItemContext)
  const isOpen = activeItem === itemId

  return (
    <button
      type="button"
      data-slot="navigation-menu-trigger"
      aria-expanded={isOpen}
      onClick={() => setActiveItem(isOpen ? null : itemId)}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className={cn(
          "relative top-px ml-1 size-3 transition duration-300",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  )
}

function NavigationMenuContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { activeItem } = React.useContext(NavMenuContext)
  const { itemId } = React.useContext(NavigationMenuItemContext)
  const isOpen = activeItem === itemId

  if (!isOpen) return null

  return (
    <div
      data-slot="navigation-menu-content"
      className={cn(
        "absolute top-full left-0 mt-2 rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 p-1 z-50 animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function NavigationMenuPositioner({ children }: { children?: React.ReactNode; align?: string }) {
  return <>{children}</>
}

function NavigationMenuLink({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      data-slot="navigation-menu-link"
      className={cn(
        "flex items-center gap-2 rounded-md p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="navigation-menu-indicator"
      className={cn("top-full z-10 flex h-1.5 items-end justify-center overflow-hidden", className)}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </div>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
