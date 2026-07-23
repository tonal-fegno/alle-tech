import type { Metadata } from "next";
import BlogsHero from "@/components/blog/BlogsHero";
import BlogListGrid from "@/components/blog/BlogListGrid";
import ContactFormSection from "@/components/ContactFormSection";
import { blogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <main>
      {/* Hero Section */}
      <BlogsHero />

      {/* Blog List Section */}
      <section className="section-padding bg-bg-3 px-4 md:px-8">
        <div className="container-main">
          <BlogListGrid blogs={blogs} />
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <ContactFormSection /> */}
    </main>
  );
}
