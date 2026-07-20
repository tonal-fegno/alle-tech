import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col gap-6 rounded-section border border-border-gray/40 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,11,34,0.08)] md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="heading-4 !text-primary">{service.number}</span>
        <div className="flex flex-wrap justify-end gap-2">
          {service.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-bg-2 px-3 py-1 text-[14px] font-semibold text-primary"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {service.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <h3 className="heading-6">{service.title}</h3>
        <p className="text-body-18 text-body-gray">{service.shortDescription}</p>
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-body-18 font-semibold text-primary transition-colors hover:text-dark-blue"
      >
        View Details
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
