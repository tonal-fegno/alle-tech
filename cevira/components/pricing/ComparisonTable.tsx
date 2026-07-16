function CheckIcon() {
  return (
    <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 6.5L4.5 9L10 3.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <div className="inline-flex h-6 w-6 items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 3L11 11M11 3L3 11"
          stroke="#B2B6C2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

interface ComparisonRow {
  feature: string;
  basic: boolean;
  standard: boolean;
  business: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "General dusting & wiping",
    basic: true,
    standard: true,
    business: true,
  },
  {
    feature: "Floor cleaning & vacuuming",
    basic: true,
    standard: true,
    business: true,
  },
  {
    feature: "Bathroom & kitchen cleaning",
    basic: true,
    standard: true,
    business: true,
  },
  {
    feature: "Window and mirror polishing",
    basic: true,
    standard: true,
    business: true,
  },
  {
    feature: "Furniture dusting and polishing",
    basic: true,
    standard: true,
    business: true,
  },
  {
    feature: "Deep carpet cleaning",
    basic: false,
    standard: true,
    business: true,
  },
  {
    feature: "Appliance interior cleaning",
    basic: false,
    standard: true,
    business: true,
  },
  {
    feature: "Wall washing",
    basic: false,
    standard: false,
    business: true,
  },
  {
    feature: "Post-construction cleanup",
    basic: false,
    standard: false,
    business: true,
  },
  {
    feature: "Priority booking",
    basic: false,
    standard: false,
    business: true,
  },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-section bg-white shadow-[0_4px_20px_rgba(0,11,34,0.06)]">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="bg-bg-2">
            <th className="rounded-tl-section px-6 py-4 text-left text-body-16 font-semibold text-dark-blue">
              Feature
            </th>
            <th className="px-6 py-4 text-center text-body-16 font-semibold text-dark-blue">
              Basic
            </th>
            <th className="px-6 py-4 text-center text-body-16 font-semibold text-dark-blue">
              Standard
            </th>
            <th className="rounded-tr-section px-6 py-4 text-center text-body-16 font-semibold text-dark-blue">
              Business
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr
              key={row.feature}
              className={`${
                index % 2 === 1 ? "bg-bg-3/50" : "bg-white"
              } transition-colors hover:bg-bg-2/30`}
            >
              <td className="px-6 py-4 text-body-16 text-ink">
                {row.feature}
              </td>
              <td className="px-6 py-4 text-center">
                {row.basic ? <CheckIcon /> : <CrossIcon />}
              </td>
              <td className="px-6 py-4 text-center">
                {row.standard ? <CheckIcon /> : <CrossIcon />}
              </td>
              <td className="px-6 py-4 text-center">
                {row.business ? <CheckIcon /> : <CrossIcon />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
