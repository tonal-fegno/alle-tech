"use client";

import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Alle Tech Team have always shown a marked ability to work with people in entrepreneurial spirit and an admirable work ethic. Their talent for solving complex problems is unique! We as Al Watani Group have invested in multiple solutions from Alle Tech which automated our business cycle and optimized workflow enabling control and increasing efficiency.",
    author: "Al Watani Group",
    role: "Digital Company",
    avatar: "/assets/client/alwatani.png",
  },
  {
    quote:
      "Alle Tech software development capabilities and unique and practical implementation of ERP systems helped us transform our complex business requirements through powerful, sophisticated, intuitive, and accessible solutions that streamlined our operations, automated our workflows, and improved our bottom line across all departments.",
    author: "Euro Poly Plast",
    role: "Plastic Factory",
    avatar: "/assets/client/euro-poly-plast.png",
  },
  {
    quote:
      "Alle Tech enabled us with real-time reports in a dynamic method which unlocked our opportunities in the market and optimized workflow performance.",
    author: "Beltel FZE",
    role: "Communication Company",
    avatar: "/assets/client/belltel.png",
  },
  {
    quote:
      "Is a leading car trading company specializing in Japanese vehicles. Operating across multiple locations, including Dubai, Oman, Libya, and North Africa, faced challenges in managing their logistics and intercompany transactions efficiently. With our TransSync add-on for SAP Business One and our comprehensive consultation services, we helped them transform their operations and achieve significant improvements.",
    author: "Middle East Group",
    role: "Digital Company",
    avatar: "/assets/client/middle-ease-group.png",
  },
  {
    quote:
      "Our logistics management was a cumbersome and error-prone process. With Freight Pulse, we now have a robust tool that handles everything from managing requests and tracking shipments to creating jobs, receiving goods, and arranging them in the warehouse. The ability to efficiently pack and arrange shipments for outbound logistics according to best practices has greatly improved our operations.",
    author: "Orbit logistics",
    role: "Logistics Company",
    avatar: "/assets/client/orbit-logistics.png",
  },
  {
    quote:
      "One of the standout features of Freight Pulse is its integration of billing and cost tracking. We can now easily manage the cost structure for each job, ensuring accurate billing and cost allocation. This integration has not only streamlined our financial processes but also provided us with a comprehensive view of our logistics costs, enhancing our financial management and planning.",
    author: "Captain Freight",
    role: "Freight & Logistics",
    avatar: "/assets/client/cfs.png",
  },
  {
    quote:
      "Working with ALLE TECH to implement SAP Business One has been a game-changer for our business. As a paint manufacturing and trading company with locations in Iraq we faced significant challenges in managing our operations and maintaining control over our extensive activities. The implementation of SAP Business One has not only addressed these challenges but also provided us with enhanced operational efficiency and control.",
    author: "United Colors",
    role: "Paint Factory",
    avatar: "/assets/client/united-colors.png",
  },
  // {
  //   quote:
  //     "ALLE TECH ensured that SAP Business One was seamlessly integrated with our existing systems. This integration has allowed for smooth data transfer and communication between different departments, further enhancing our operational efficiency. The system's flexibility and scalability also mean that it can grow with our business, adapting to our changing needs.",
  //   author: "Brightcom",
  //   role: "Electronics Distributor",
  //   avatar: "/assets/client/brightcom.png",
  // },
  {
    quote:
      "ALLE TECH ensured that SAP Business One was seamlessly integrated with our existing systems. This integration has allowed for smooth data transfer and communication between different departments, further enhancing our operational efficiency. The system's flexibility and scalability also mean that it can grow with our business, adapting to our changing needs.",
    author: "Najm Properties",
    role: "Real Estate Company",
    avatar: "/assets/client/najm.png",
  },
  {
    quote:
      "With ALLE TECH consultation along with SAP Business One, we now have a centralized platform that integrates all aspects of our trading operations. This has streamlined our processes, allowing us to manage vehicle trades more efficiently, track transactions in real-time, and ensure consistent data across all locations.",
    author: "AYT Motors",
    role: "Cars Dealer",
    avatar: "/assets/client/ayt.png",
  },
  {
    quote:
      "Partnering with ALLE TECH to implement SAP Business One has been a game-changer for our car spare parts dealership. Managing an inventory of over 150,000 items across multiple locations was a daunting task that often led to operational inefficiencies and challenges in maintaining control over trades. The implementation of SAP Business One has not only addressed these issues but has also significantly enhanced our overall operational efficiency and control.",
    author: "Explorations",
    role: "Vehicle Spare Parts Distribution",
    avatar: "/assets/client/exploration.png",
  },
  {
    quote:
      "In addition to the TransSync add-on, the consultation services provided by Alle Tech have been exceptional. Their team took the time to understand our unique challenges and provided tailored solutions that have greatly benefited our business. The ongoing support and guidance have been instrumental in our continued success.",
    author: "North Africa General Trading",
    role: "General Trading",
    avatar: "/assets/client/natco.png",
  },
  {
    quote:
      "The comprehensive tools provided by Van Sales solution of ALLE TECH have optimized our logistics operations. From managing incoming and outgoing shipments to tracking inventory and assigning sales reps, every aspect of our logistics is now more efficient and effective. The ability to set up price rules and promotions within the app has also helped us drive sales and better manage our distribution.",
    author: "Smart Electronics Company",
    role: "Digital Company",
    avatar: "/assets/client/sec.png",
  },
  {
    quote:
      "The integration of SAP Business One through ALLE TECH has significantly improved our day-to-day operations. Tasks such as processing orders, managing stock, and tracking financials are now automated, freeing up our team to focus on strategic initiatives and customer service. The system's intuitive interface and comprehensive features have made it easier for our staff to perform their duties efficiently.",
    author: "VAPEY",
    role: "Vape Wholesale",
    avatar: "/assets/client/vapey.png",
  },
  {
    quote:
      "We rely on ALLE TECH for streamline and accelerate our daily mass operation's transactions, and it has exceeded our expectations in terms of reliability and performance. The real-time updates and customizable features have allowed us to tailor the application to our unique needs, resulting in a more streamlined and productive operation.",
    author: "Focuz Company",
    role: "Spare Parts Trading",
    avatar: "/assets/client/ft.png",
  },
];

// Autoplay + line-reveal timing, ported from the Framer "Testimonial Rotation" component.
const DURATION = 6;
const LINE_DURATION = 0.55;
const LINE_STAGGER = 0.075;
const LINE_OFFSET = 18;
const BLUR_AMOUNT = 8;
const AUTHOR_DELAY = 0.05;
const EASE = [0.22, 1, 0.36, 1] as const;

const visuallyHidden: CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

function sameLines(a: string[], b: string[]) {
  return a.length === b.length && a.every((line, i) => line === b[i]);
}

/** Splits text into word spans so useWrappedLines can read each word's rendered line via its bounding box. */
function MeasureWords({ text }: { text: string }) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  return (
    <>
      {words.map((word, i) => (
        <span key={i} data-line-word="true">
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

/** Measures which words fall on which rendered line, so each line can be revealed independently. */
function useWrappedLines(text: string) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([text]);

  useEffect(() => {
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const element = measureRef.current;
      if (!element) return;
      const wordNodes = Array.from(
        element.querySelectorAll<HTMLElement>("[data-line-word]")
      );
      if (wordNodes.length === 0) {
        setLines((prev) => (sameLines(prev, [""]) ? prev : [""]));
        return;
      }
      const nextLines: string[] = [];
      let currentTop: number | null = null;
      let currentWords: string[] = [];
      wordNodes.forEach((node) => {
        const top = Math.round(node.getBoundingClientRect().top * 2) / 2;
        const word = (node.textContent || "").trim();
        if (currentTop !== null && Math.abs(top - currentTop) > 0.75) {
          nextLines.push(currentWords.join(" "));
          currentWords = [];
        }
        currentTop = top;
        currentWords.push(word);
      });
      if (currentWords.length > 0) nextLines.push(currentWords.join(" "));
      setLines((prev) => (sameLines(prev, nextLines) ? prev : nextLines));
    };

    measure();
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : undefined;
    if (measureRef.current) observer?.observe(measureRef.current);
    window.addEventListener("resize", measure);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure);
    }
    return () => {
      cancelled = true;
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [text]);

  return { lines, measureRef };
}

function LineReveal({
  text,
  lines,
  measureRef,
  delay,
  reduceMotion,
}: {
  text: string;
  lines: string[];
  measureRef: RefObject<HTMLDivElement | null>;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <span className="relative block w-full min-w-0">
      <span style={visuallyHidden}>{text}</span>
      <div
        ref={measureRef}
        aria-hidden
        className="w-full whitespace-normal break-normal"
        style={{ visibility: "hidden", pointerEvents: "none" }}
      >
        <MeasureWords text={text} />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 w-full">
        {lines.map((line, i) => (
          <span
            key={`${i}-${line}`}
            className="block overflow-hidden"
            style={{ marginBlock: "-0.12em", paddingBlock: "0.12em" }}
          >
            <motion.span
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: LINE_OFFSET, filter: `blur(${BLUR_AMOUNT}px)` }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: reduceMotion ? 0 : LINE_DURATION,
                delay: reduceMotion ? 0 : delay + i * LINE_STAGGER,
                ease: EASE,
              }}
              className="block whitespace-pre"
            >
              {line || " "}
            </motion.span>
          </span>
        ))}
      </div>
    </span>
  );
}

/** Invisible copy of every testimonial's text block, stacked in one grid cell so the card reserves the tallest height and never jumps between slides. */
function StaticSizer({ item }: { item: Testimonial }) {
  const quoted = `“${item.quote}”`;
  return (
    <div
      className="[grid-area:1/1] w-full"
      style={{ visibility: "hidden", pointerEvents: "none" }}
    >
      <p className="max-w-[720px] whitespace-pre-wrap text-[17px] font-medium leading-[1.5] tracking-[-0.01em] md:text-[19px]">
        {quoted}
      </p>
      <div className="mt-8 flex items-center gap-5">
        <span className="h-16 w-16 shrink-0 rounded-full md:h-20 md:w-20" />
        <span>
          <p className="text-[19px] font-medium md:text-[21px]">
            {item.author}
          </p>
          <p className="mt-1 text-[15px] md:text-[16px]">{item.role}</p>
        </span>
      </div>
    </div>
  );
}

function AnimatedCard({
  item,
  index,
  count,
  reduceMotion,
  live,
}: {
  item: Testimonial;
  index: number;
  count: number;
  reduceMotion: boolean;
  live: "polite" | "off";
}) {
  const quoted = `“${item.quote}”`;
  const quoteMeasurement = useWrappedLines(quoted);
  const authorMeasurement = useWrappedLines(item.author);
  const roleMeasurement = useWrappedLines(item.role);

  const quoteTail =
    Math.max(0, quoteMeasurement.lines.length - 1) * LINE_STAGGER +
    LINE_DURATION * 0.55;
  const authorStart = quoteTail + AUTHOR_DELAY;
  const roleStart =
    authorStart + Math.max(1, authorMeasurement.lines.length) * LINE_STAGGER;

  return (
    <motion.figure
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${count}`}
      aria-live={live}
      aria-atomic="true"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.16 }}
      className="m-0 flex h-full w-full min-w-0 flex-col justify-between"
    >
      <blockquote className="max-w-[720px] text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-white md:text-[19px]">
        <LineReveal
          text={quoted}
          lines={quoteMeasurement.lines}
          measureRef={quoteMeasurement.measureRef}
          delay={0}
          reduceMotion={reduceMotion}
        />
      </blockquote>

      <div className="mt-8 flex items-center gap-5">
        <motion.div
          initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 380, damping: 26, delay: authorStart }
          }
          className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/95 ring-1 ring-white/10 md:h-20 md:w-20"
        >
          <Image
            src={item.avatar}
            alt={item.author}
            width={80}
            height={80}
            className="h-full w-full object-contain p-2.5"
          />
        </motion.div>
        <div>
          <div className="text-[19px] font-medium italic text-[#9DB4FF] md:text-[21px]">
            <LineReveal
              text={item.author}
              lines={authorMeasurement.lines}
              measureRef={authorMeasurement.measureRef}
              delay={authorStart}
              reduceMotion={reduceMotion}
            />
          </div>
          <div className="mt-1 text-[15px] text-[#9DB4FF]/70 md:text-[16px]">
            <LineReveal
              text={item.role}
              lines={roleMeasurement.lines}
              measureRef={roleMeasurement.measureRef}
              delay={roleStart}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </div>
    </motion.figure>
  );
}

export default function TestimonialSection() {
  const count = testimonials.length;
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const canRotate = count > 1 && !prefersReducedMotion;
  const isPaused = canRotate && (hovered || !isInView || !pageVisible);

  const progress = useMotionValue(canRotate ? 0 : 1);
  const timerRef = useRef<ReturnType<typeof animate> | null>(null);
  const pausedRef = useRef(isPaused);
  pausedRef.current = isPaused;

  useEffect(() => {
    timerRef.current?.stop();
    if (!canRotate) {
      progress.set(1);
      return;
    }
    progress.set(0);
    const controls = animate(progress, 1, {
      duration: DURATION,
      ease: "linear",
      onComplete: () => {
        progress.set(0);
        setActive((c) => (c + 1) % count);
        setCycle((c) => c + 1);
      },
    });
    timerRef.current = controls;
    if (pausedRef.current) controls.pause();
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, canRotate, count, cycle]);

  useEffect(() => {
    if (!canRotate || !timerRef.current) return;
    if (isPaused) timerRef.current.pause();
    else timerRef.current.play();
  }, [isPaused, canRotate]);

  const selectItem = (i: number) => {
    progress.set(0);
    setActive(i);
    setCycle((c) => c + 1);
  };
  const prev = () => selectItem((active - 1 + count) % count);
  const next = () => selectItem((active + 1) % count);

  const activeItem = testimonials[active];

  return (
    <section className="section-padding bg-[#F7F8FA] px-4 md:px-8">
      <div className="container-main flex flex-col items-center gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-base font-semibold text-ink uppercase">
              Testimonial
            </span>
          </span>
          <AnimatedHeading className="heading-2 max-w-[800px]">
            Our Reputation, Built on Client Trust
          </AnimatedHeading>
        </div>

        {/* Rotator */}
        <div
          ref={rootRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setHovered(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setHovered(false);
            }
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          className="relative w-full max-w-[900px] overflow-hidden rounded-[28px] bg-[#0B0714] p-8 shadow-[0_20px_60px_-15px_rgba(0,11,34,0.25)] md:p-12 lg:p-14"
        >
          {/* Autoplay progress bars */}
          <div
            role="tablist"
            aria-label="Testimonials progress"
            className="grid gap-[6px]"
            style={{
              gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
            }}
          >
            {testimonials.map((_, i) => {
              const isPast = i < active;
              const isActive = i === active;
              const staticScale = isPast || isActive ? 1 : 0;
              const scale = isActive && canRotate ? progress : staticScale;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show testimonial ${i + 1} of ${count}`}
                  onClick={() => selectItem(i)}
                  className="relative h-4 w-full cursor-pointer bg-transparent p-0"
                >
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/10">
                    <motion.span
                      className="block h-full w-full origin-left rounded-full bg-[#3B82F6]"
                      style={{ scaleX: scale }}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quote + author, height-reserved so slides never jump */}
          <div className="relative mt-9 grid w-full">
            <div aria-hidden className="grid w-full [grid-area:1/1]">
              {testimonials.map((t, i) => (
                <StaticSizer key={i} item={t} />
              ))}
            </div>
            <div className="absolute inset-0 h-full w-full">
              <AnimatedCard
                key={`${active}-${cycle}`}
                item={activeItem}
                index={active}
                count={count}
                reduceMotion={!!prefersReducedMotion}
                live={canRotate && !isPaused ? "off" : "polite"}
              />
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute bottom-8 right-8 flex items-center gap-1 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14">
            <motion.button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="flex h-9 w-9 items-center justify-center text-white/40 transition-colors duration-200 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 5L8 12L15 19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
            <motion.button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="flex h-9 w-9 items-center justify-center text-white/40 transition-colors duration-200 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
