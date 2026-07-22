interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div className="rounded-2xl bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-body-18 font-semibold text-dark-blue">
          {question}
        </span>
        <span
          className={`shrink-0 text-ink transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[820px] px-6 pb-6 text-body-16 text-body-gray md:px-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
