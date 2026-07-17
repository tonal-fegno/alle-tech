const SOLUTIONS = [
  {
    title: "Intelligent Product Engineering",
    description: "Accelerate software delivery with agentic engineering",
    points: [
      "AI-assisted code generation",
      "Automated testing & QA",
      "Continuous delivery pipelines",
    ],
    art: {
      base: "linear-gradient(140deg,#071c4d 0%,#123a9e 30%,#2f7de0 55%,#5db4f5 72%,#0a2568 100%)",
      blobA:
        "radial-gradient(ellipse 60% 45% at 70% 25%, rgba(125,200,255,0.85), transparent 70%)",
      blobB:
        "radial-gradient(ellipse 55% 40% at 25% 65%, rgba(10,30,90,0.9), transparent 70%)",
    },
  },
  {
    title: "AI-Enhanced Experience Transformation",
    description: "Unlock growth with AI-led, human-centered experiences",
    points: [
      "Personalized customer journeys",
      "Conversational AI interfaces",
      "Data-driven experience design",
    ],
    art: {
      base: "linear-gradient(140deg,#22084d 0%,#5b21b6 32%,#a855f7 58%,#e9d5ff 75%,#3b0f78 100%)",
      blobA:
        "radial-gradient(ellipse 60% 45% at 65% 20%, rgba(240,225,255,0.9), transparent 70%)",
      blobB:
        "radial-gradient(ellipse 55% 45% at 30% 70%, rgba(40,8,90,0.9), transparent 70%)",
    },
  },
  {
    title: "Modern Business Platforms",
    description: "Maximize platform ROI with AI",
    points: [
      "Cloud-native architecture",
      "Seamless system integrations",
      "Scalable platform modernization",
    ],
    art: {
      base: "linear-gradient(140deg,#6b2447 0%,#c05585 30%,#f0a3c0 55%,#f7d4de 72%,#7c2d52 100%)",
      blobA:
        "radial-gradient(ellipse 60% 45% at 60% 30%, rgba(255,220,235,0.85), transparent 70%)",
      blobB:
        "radial-gradient(ellipse 55% 45% at 25% 75%, rgba(90,25,60,0.85), transparent 70%)",
    },
  },
  {
    title: "Agentic Business Reinvention",
    description: "Transform workflows with agentic AI teammates",
    points: [
      "Autonomous workflow agents",
      "Human-in-the-loop oversight",
      "Continuous process optimization",
    ],
    art: {
      base: "linear-gradient(140deg,#02121c 0%,#0a3d4d 32%,#15818e 58%,#67d6d0 78%,#092c3e 100%)",
      blobA:
        "radial-gradient(ellipse 60% 45% at 70% 25%, rgba(150,235,225,0.8), transparent 70%)",
      blobB:
        "radial-gradient(ellipse 55% 45% at 25% 70%, rgba(4,20,35,0.9), transparent 70%)",
    },
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0714] px-4 py-16 md:px-8 md:py-24 xl:py-[120px]">
      {/* Ambient purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(76,29,149,0.75), transparent 70%)",
        }}
      />

      <div className="container-main relative flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white">
            Our Products
          </span>
          <h2 className="max-w-[1020px] text-[32px] font-semibold leading-[1.25] tracking-[-0.01em] text-white md:text-[40px] xl:text-[46px]">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Enterprise AI solutions
            </span>{" "}
            for organizations at <br className="hidden sm:block" />
            every stage of adoption
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="group relative min-h-[420px] overflow-hidden rounded-[20px] border border-white/10 transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Abstract gradient artwork */}
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: `${item.art.blobA}, ${item.art.blobB}, ${item.art.base}`,
                }}
              />
              {/* Legibility scrim */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0B0714]/85 via-[#0B0714]/35 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              {/* Extra tint on hover so the title stays legible once it's over the artwork's top half */}
              <div className="absolute inset-0 bg-[#0B0714]/0 transition-colors duration-500 ease-in-out group-hover:bg-[#0B0714]/55" />

              <div className="absolute inset-0 z-10 flex flex-col p-7">
                <div className="grow shrink-0 basis-0 transition-[flex-grow] duration-500 ease-in-out group-hover:grow-0" />
                <div>
                  <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-16 text-white/85">
                    {item.description}
                  </p>
                </div>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <ul className="mt-4 flex flex-col gap-2 border-t border-white/15 pt-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-[14px] text-white/80"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-white/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
