interface StatCardProps {
  label: string;
  number: string;
  description: string;
}

export default function StatCard({ label, number, description }: StatCardProps) {
  return (
    <div className="rounded-card bg-bg-1 p-8">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-body-gray">
        {label}
      </div>
      <div className="mb-2 text-[56px] font-bold leading-[1.1] text-dark-blue">
        {number}
      </div>
      <div className="text-body-16 text-body-gray">{description}</div>
    </div>
  );
}
