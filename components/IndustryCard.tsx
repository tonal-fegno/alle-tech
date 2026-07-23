interface Industry {
  slug: string;
  title: string;
  description: string;
  typicalSolutions: string[];
}

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="flex flex-col gap-5 rounded-section border border-border-gray/40 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,11,34,0.08)] md:p-8">
      <div className="flex flex-col gap-3">
        <h3 className="heading-6">{industry.title}</h3>
        <p className="text-body-16 text-body-gray">{industry.description}</p>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <span className="text-body-16 font-semibold text-ink">
          Typical Solutions
        </span>
        <div className="flex flex-wrap gap-2">
          {industry.typicalSolutions.map((solution) => (
            <span
              key={solution}
              className="rounded-full border border-gray/20 px-4 py-1.5 text-[14px] text-body-gray"
            >
              {solution}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
