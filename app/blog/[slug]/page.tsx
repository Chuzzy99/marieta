import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blog-posts";
import { SocialShare } from "@/components/blog/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogCard } from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CTAButton } from "@/components/ui/cta-button";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Marrieta Eye Clinic Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || post.tags.some(t => p.tags.includes(t))))
    .slice(0, 2);

  // Simple markdown-to-html transformation for ## headers and bold text
  const renderContent = (content: string) => {
    const parseBold = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j} className="text-foreground">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    return content.split("\n").map((line, i) => {
      const trimmedLine = line.trim();
      
      if (line.startsWith("## ")) {
        const text = line.replace("## ", "");
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        return <h2 key={i} id={id} className="text-2xl font-bold mt-10 mb-4 text-foreground">{parseBold(text)}</h2>;
      }
      
      if (trimmedLine.startsWith("- ")) {
        const text = line.replace("- ", "");
        return <li key={i} className="ml-6 mb-2">{parseBold(text)}</li>;
      }

      if (trimmedLine === "") return <br key={i} />;
      
      return (
        <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
          {parseBold(line)}
        </p>
      );
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Marrieta Eye Clinic"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://marrietaeye.com/blog/${post.slug}`
    }
  };

  const articleUrl = `https://marrietaeye.com/blog/${post.slug}`;

  return (
    <article className="flex flex-col min-h-screen">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-primary/5 border-b border-border">
        <div className="container px-4 md:px-6 relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 text-sm font-medium capitalize">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">

                <div>
                  <p className="text-foreground font-semibold text-sm leading-none">{post.author}</p>
                  <p className="text-xs mt-1">{post.authorTitle}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Article Content & Sidebar */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              <Separator className="my-12" />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-muted/30 p-8 rounded-2xl border">
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-lg mb-1">Found this helpful?</h4>
                  <p className="text-sm text-muted-foreground">Share this article with your network.</p>
                </div>
                <SocialShare url={articleUrl} title={post.title} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="sticky top-24 space-y-12">
                {/* TOC */}
                <div className="p-8 rounded-2xl border bg-card shadow-sm">
                  <TableOfContents content={post.content} />
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg border-b pb-4">Related Articles</h4>
                    <div className="space-y-6">
                      {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group flex gap-4">
                           <div className="w-20 h-20 rounded-lg bg-primary/5 border flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                              <BookOpen className="w-8 h-8 text-primary/20 group-hover:scale-110 transition-transform" />
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                           </div>
                           <div className="flex flex-col justify-center">
                             <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">
                               {relatedPost.title}
                             </h5>
                             <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                           </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="p-8 rounded-2xl bg-primary text-primary-foreground shadow-lg relative overflow-hidden group">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4">Ready for your eye exam?</h4>
                    <p className="text-primary-foreground/80 mb-6 text-sm">
                      Schedule a comprehensive eye exam with our expert team today!
                    </p>
                    <CTAButton 
                      href="/book-appointment"
                      label="Book Appointment"
                      variant="secondary"
                      className="w-full shadow-md hover:shadow-lg transition-all"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Section at Bottom */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Explore More</h2>
              <p className="text-muted-foreground">Continue learning about eye health and treatments.</p>
            </div>
            <CTAButton 
              href="/blog"
              label="View All Posts"
              variant="outline"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
          </div>
        </div>
      </section>
    </article>
  );
}
