import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { faqs } from "@/db/schema";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import FaqAccordionList from "@/components/FaqAccordionList";

export default async function FaqSection() {
  const items = await db
    .select()
    .from(faqs)
    .where(eq(faqs.enabled, true))
    .orderBy(asc(faqs.sortOrder));

  if (items.length === 0) return null;

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col items-center gap-12 md:gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>FAQ</Eyebrow>
          <AnimatedHeading className="heading-2">
            Common Questions, <br className="hidden sm:block" />
            Clearly Answered
          </AnimatedHeading>
          <p className="max-w-[480px] text-body-18 text-body-gray">
            Find answers to common questions about our services, approach,
            and what it&apos;s like to partner with ALLE TECH.
          </p>
        </div>

        <FaqAccordionList faqs={items} />
      </div>
    </section>
  );
}
