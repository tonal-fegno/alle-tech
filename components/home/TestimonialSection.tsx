import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import TestimonialRotator from "@/components/home/TestimonialRotator";

export default async function TestimonialSection() {
  const items = await db
    .select()
    .from(testimonials)
    .where(eq(testimonials.enabled, true))
    .orderBy(asc(testimonials.sortOrder));

  if (items.length === 0) return null;

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col items-center gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-5 text-center">
          <Eyebrow>Testimonial</Eyebrow>
          <AnimatedHeading className="heading-2 max-w-[800px]">
            Our Reputation, Built on Client Trust
          </AnimatedHeading>
        </div>

        <TestimonialRotator testimonials={items} />
      </div>
    </section>
  );
}
