"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headers (e.g., ## Header Name)
    const headerRegex = /^##\s+(.*)$/gm;
    const matches = Array.from(content.matchAll(headerRegex));
    
    const tocItems = matches.map((match) => {
      const text = match[1];
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return { id, text };
    });

    setItems(tocItems);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="space-y-4">
      <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
        Table of Contents
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "text-sm transition-colors hover:text-primary block py-1 border-l-2 pl-4 -ml-px",
                activeId === item.id 
                  ? "text-primary border-primary font-medium" 
                  : "text-muted-foreground border-transparent"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
