"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/data/blog-posts";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="space-y-16">
      <div className="flex flex-wrap gap-4 border-b border-border pb-6">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm font-bold uppercase tracking-widest pb-2 border-b-2 transition-colors ${
              activeCategory === category 
                ? "border-primary text-primary" 
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 border-y border-border">
          <p className="text-xl text-muted-foreground italic">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
