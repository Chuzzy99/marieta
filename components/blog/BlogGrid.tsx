"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/data/blog-posts";
import { BlogCard } from "./BlogCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="space-y-12">
      <div className="flex flex-col items-center gap-6">
        <Tabs 
          defaultValue="All" 
          value={activeCategory} 
          onValueChange={setActiveCategory}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="w-full flex flex-wrap h-auto p-1 bg-muted/50 justify-start md:justify-center rounded-xl overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all whitespace-nowrap"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {filteredPosts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-xl text-muted-foreground italic">
            No articles found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}
