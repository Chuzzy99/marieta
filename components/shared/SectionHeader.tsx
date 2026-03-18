"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <motion.div
      className={cn("flex flex-col gap-3 mb-12", alignClass, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {badge && (
        <motion.div variants={fadeInUp}>
          <Badge
            variant="secondary"
            className="bg-accent text-primary border-primary/20 font-semibold uppercase text-xs tracking-wider px-3 py-1"
          >
            {badge}
          </Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl font-bold text-foreground leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
