import Button from "@/components/ui/Button";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  features: string[];
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bg-2 text-primary">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 6.5L4.5 9L10 3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex flex-col gap-6 rounded-3xl bg-white p-8 md:p-10 ${
        plan.popular
          ? "border-2 border-primary shadow-[0_8px_30px_rgba(10,76,224,0.15)]"
          : "border border-border-gray/40"
      }`}
    >
      {plan.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-primary px-4 py-1.5 text-[14px] font-semibold text-white">
          Most Popular
        </span>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="heading-6">{plan.name}</h3>
        <p className="text-body-18 text-body-gray">{plan.description}</p>
      </div>

      <div className="flex items-end gap-2">
        <span className="heading-2 !text-primary">{plan.price}</span>
        <span className="pb-2 text-body-16 text-body-gray">{plan.period}</span>
      </div>

      <Button href="/contact" variant={plan.popular ? "primary" : "outline"}>
        Schedule Now
      </Button>

      <div className="flex flex-col gap-4 border-t border-border-gray/40 pt-6">
        <p className="text-body-16 font-semibold text-body-gray">
          Features Included
        </p>
        <ul className="flex flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-body-18 text-body-gray">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
