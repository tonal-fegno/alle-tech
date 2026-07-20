import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import ImageFrame from "@/components/ui/ImageFrame";
import RichText from "@/components/ui/RichText";
import CtaSection from "@/components/CtaSection";
import ContactFormSection from "@/components/ContactFormSection";
import { getService, services } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-bg-3 px-4 pb-[80px] pt-[200px] md:px-8">
        <div className="container-main flex flex-col items-center gap-8 text-center">
          {/* Number Badge */}
          <Badge>{service.number}</Badge>

          {/* Title */}
          <h1 className="heading-1">{service.title}</h1>

          {/* Short Description */}
          <p className="max-w-[700px] text-body-18 text-body-gray md:text-[18px]">
            {service.shortDescription}
          </p>

          {/* Category Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {service.categories.map((category) => (
              <span
                key={category}
                className="inline-block rounded-full bg-bg-2 px-5 py-2 text-[14px] font-semibold text-primary"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          {service.imageVisible && service.image && (
            <ImageFrame
              src={service.image}
              alt={service.title}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
              className="mt-6 max-w-[900px]"
            />
          )}
        </div>
      </section>

      {/* Content Section 01 */}
      {service.content01Visible && service.content01 && (
        <section className="bg-white px-4 py-[80px] md:px-8">
          <div className="container-main max-w-[900px]">
            <RichText html={service.content01} />
          </div>
        </section>
      )}

      {/* Body Image Section */}
      {service.bodyImageVisible && service.bodyImage && (
        <section className="bg-bg-3 px-4 py-[80px] md:px-8">
          <div className="container-main max-w-[900px]">
            <ImageFrame
              src={service.bodyImage}
              alt={`${service.title} additional view`}
              aspect="aspect-[4/3]"
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        </section>
      )}

      {/* Content Section 02 */}
      {service.content02Visible && service.content02 && (
        <section className="bg-white px-4 py-[80px] md:px-8">
          <div className="container-main max-w-[900px]">
            <RichText html={service.content02} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Form Section */}
      <ContactFormSection />
    </main>
  );
}
