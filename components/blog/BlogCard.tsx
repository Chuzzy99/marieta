"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/data/blog-posts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full flex flex-col overflow-hidden group border-slate-200 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md bg-white border rounded-lg"
    >
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-video relative">
        <div className="absolute inset-0 bg-slate-100 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-24 h-24 border-primary/20 border-4 rounded-full" />
        </div>
      </Link>
      <Card className="h-full flex flex-col overflow-hidden group-hover:bg-slate-50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <Badge className="absolute top-4 left-4 z-10 bg-white text-primary border border-slate-200 shadow-sm capitalize font-bold">
            {post.category}
          </Badge>
        </CardHeader>
        <CardContent className="p-6 pt-4 flex-grow">
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <div className="flex items-center justify-between w-full pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">By {post.author}</span>
            </div>
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
            >
              Read More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
