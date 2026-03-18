import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { services } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://Marietaeye.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/how-it-works",
    "/privacy-policy",
    "/services",
    "/terms-of-use",
    "/testimonials",
    "/book-appointment",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes];
}
