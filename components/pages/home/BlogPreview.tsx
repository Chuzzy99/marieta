"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/data/blog-posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Latest from Our Eye Care Blog
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay up-to-date with the latest news, expert advice, and insights on maintaining optimal eye health for you and your family.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link 
              href="/blog" 
              className={cn(buttonVariants({ variant: "outline" }), "flex items-center")}
            >
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center md:hidden"
        >
          <Link 
            href="/blog" 
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

