import { Metadata } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageHero } from "@/components/shared/PageHero";
import NewsletterSection from "@/components/shared/NewsletterSection";

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
    "description": "Expert eye care articles, vision health tips, and surgical information.",
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Marieta Eye Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://Marietaeye.com/logo.png"
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
      "url": `https://Marietaeye.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        headline="Eye Health Resources & Blog"
        subheadline="Your trusted source for vision care advice, patient success stories, and the latest in optometry."
      />

      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <BlogGrid posts={blogPosts} />
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
