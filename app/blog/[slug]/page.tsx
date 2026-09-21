import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog-posts";
import { BlogCard } from "@/components/blog/BlogCard";

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
    title: `${post.title} | Marieta Eye Clinic Blog`,
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
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Simple markdown-to-html transformation for ## headers and bold text
  const renderContent = (content: string) => {
    const parseBold = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j} className="text-foreground font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    return content.split("\n").map((line, i) => {
      const trimmedLine = line.trim();
      
      if (line.startsWith("## ")) {
        const text = line.replace("## ", "");
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        return <h2 key={i} id={id} className="font-heading text-3xl font-bold mt-12 mb-6 text-foreground">{parseBold(text)}</h2>;
      }
      
      if (trimmedLine.startsWith("- ")) {
        const text = line.replace("- ", "");
        return <li key={i} className="ml-6 mb-3 text-lg">{parseBold(text)}</li>;
      }

      if (trimmedLine === "") return <br key={i} />;
      
      return (
        <p key={i} className="mb-6 text-muted-foreground leading-relaxed text-lg">
          {parseBold(line)}
        </p>
      );
    });
  };

  return (
    <article className="flex flex-col min-h-screen bg-background">

      {/* Article Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 border-b border-border bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-block text-sm font-bold tracking-widest uppercase text-primary hover:underline mb-10"
          >
            &larr; Back to Journal
          </Link>
          
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
            <span className="text-primary">{post.category}</span>
            <span>&mdash;</span>
            <span>{post.date}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 pt-6 border-t border-border">
            <div>
              <p className="text-foreground font-bold">{post.author}</p>
              <p className="text-sm text-muted-foreground mt-1">{post.authorTitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {renderContent(post.content)}
          </div>
        </div>
      </section>

      {/* Related Section at Bottom */}
      <section className="py-20 md:py-28 bg-[#faf9f6] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold">More Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {relatedPosts.map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
