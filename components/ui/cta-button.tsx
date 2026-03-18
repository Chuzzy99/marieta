"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
  className?: string;
}

export function CTAButton({ href, label, variant = "secondary", className }: CTAButtonProps) {
  return (
    <Link 
      href={href}
      className={cn(buttonVariants({ variant }), className)}
    >
      {label}
    </Link>
  );
}
