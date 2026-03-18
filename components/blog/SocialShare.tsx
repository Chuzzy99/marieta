"use client";

import { useState } from "react";
import { Facebook, Link2, Twitter, Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    // If there's a toast utility, use it here
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
      {shareLinks.map((link) => (
        <a 
          key={link.name}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={`Share on ${link.name}`}
          className={cn(buttonVariants({ variant: "outline", size: "icon" }), "h-9 w-9 rounded-full")}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full"
        onClick={copyToClipboard}
        aria-label="Copy link"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link2 className="h-4 w-4" />}
      </Button>
    </div>
  );
}
