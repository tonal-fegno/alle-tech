import Link from "next/link";
import ImageFrame from "@/components/ui/ImageFrame";

interface Solution {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex flex-col gap-5 rounded-section border border-border-gray/40 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,11,34,0.08)] md:p-8"
    >
      <div className="flex flex-wrap gap-2">
        {solution.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border-gray/60 px-4 py-1.5 text-[14px] text-body-gray"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="heading-6">{solution.title}</h3>
          <p className="text-body-16 text-body-gray">{solution.description}</p>
        </div>

        <ImageFrame
          src={solution.image}
          alt={solution.title}
          aspect="aspect-[16/10]"
          rounded="rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
