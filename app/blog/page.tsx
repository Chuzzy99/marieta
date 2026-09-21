import { Metadata } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Eye Health Resources & Blog | Marieta Eye Clinic",
  description: "Stay informed with the latest eye health tips, vision care advice, and clinical insights from our expert optometrists.",
};

export default function BlogListingPage() {
  // JSON-LD Schema for the blog listing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Marieta Eye Clinic Blog",
    "description": "Expert eye care articles, vision health tips, and clinical information.",
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Marieta Eye Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marietaeyeclinic.com/logo.png"
      }
    },
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://marietaeyeclinic.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        headline="Eye Health Resources"
        subheadline="Your trusted source for vision care advice and the latest clinical insights."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid posts={blogPosts} />
        </div>
      </section>

    </div>
  );
}
