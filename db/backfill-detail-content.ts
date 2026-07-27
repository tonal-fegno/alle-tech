import { eq } from "drizzle-orm";

import { db } from "./index";
import { products, solutions } from "./schema";
import { PRODUCTS_SEED } from "./seed-data/products";
import { SOLUTIONS_SEED } from "./seed-data/solutions";

// One-off backfill: db/seed.ts's seedTable() only inserts when a table is
// empty, so it can't push the newly-enriched detail-page content (why/
// challenges/modules/faqs/etc.) into rows that were already seeded with the
// old, shallow SOLUTIONS_SEED/PRODUCTS_SEED. This updates existing rows by
// slug instead. Safe to re-run.
async function main() {
  for (const row of SOLUTIONS_SEED) {
    const { slug, ...rest } = row;
    await db.update(solutions).set(rest).where(eq(solutions.slug, slug));
    console.log(`Updated solution: ${slug}`);
  }

  for (const row of PRODUCTS_SEED) {
    const { slug, ...rest } = row;
    await db.update(products).set(rest).where(eq(products.slug, slug));
    console.log(`Updated product: ${slug}`);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
