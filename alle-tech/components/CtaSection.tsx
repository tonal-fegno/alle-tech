import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="px-4 pb-16 pt-0 md:px-8 md:pb-24 xl:pb-[120px]">
      <div className="container-main">
        <div className="flex flex-col items-center gap-6 rounded-section bg-dark-blue px-6 py-16 text-center md:px-16 md:py-20">
          <h2 className="heading-2 !text-white">
            Stay consistent with cleaning routine
          </h2>
          <p className="max-w-[600px] text-body-20 text-white/70">
            A better home starts with better cleaning.
          </p>
          <Button href="/contact">Schedule Now</Button>
        </div>
      </div>
    </section>
  );
}
