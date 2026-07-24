import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { clientLogos } from "@/db/schema";
import BrandTickerTrack from "@/components/home/BrandTickerTrack";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default async function BrandTicker() {
  const logos = await db
    .select()
    .from(clientLogos)
    .where(eq(clientLogos.enabled, true))
    .orderBy(asc(clientLogos.sortOrder));

  if (logos.length === 0) return null;

  return (
    <section className="bg-bg-1 py-16">
      <div className="flex flex-col items-center gap-8">
        <AnimatedHeading
          as="p"
          className="px-4 text-center text-xl font-semibold text-body-gray"
        >
          Trusted 100+ corporate partners!
        </AnimatedHeading>
        <BrandTickerTrack logos={logos} />
      </div>
    </section>
  );
}
