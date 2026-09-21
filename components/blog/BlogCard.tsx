"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full border-b border-border pb-8">
      <div className="mb-6 overflow-hidden bg-muted aspect-[4/3] relative">
        <Link href={`/blog/${post.slug}`} className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        </Link>
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
          <span className="text-primary">{post.category}</span>
          <span>&mdash;</span>
          <span>{post.date}</span>
        </div>
        
        <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
          <span className="text-sm font-bold text-foreground">{post.author}</span>
          <span className="text-sm text-muted-foreground">{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
