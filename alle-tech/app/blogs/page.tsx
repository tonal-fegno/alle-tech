import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import ContactFormSection from "@/components/ContactFormSection";
import { blogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-1 px-4 py-16 md:px-8 md:py-20 xl:py-24">
        <div className="container-main">
          <PageHero
            title="Our latest blogs & trends"
            subtitle="Expert advice, practical tips, and cleaning guides to help you maintain a fresh, healthy, and spotless space."
          />
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </>
  );
}
