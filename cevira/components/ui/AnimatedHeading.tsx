"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ElementType,
  type ReactNode,
} from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// motion.create() must not be called during render — it mints a new component
// type each time, which remounts the heading (resetting whileInView) on every
// re-render of the parent. Cache one motion component per tag instead.
const motionTagCache = new Map<string, ElementType>();
function getMotionTag(tag: keyof React.JSX.IntrinsicElements): ElementType {
  let MotionTag = motionTagCache.get(tag);
  if (!MotionTag) {
    MotionTag = motion.create(tag) as ElementType;
    motionTagCache.set(tag, MotionTag);
  }
  return MotionTag;
}

// Word-by-word blur reveal, ported from the Framer "Title" text effect used
// across the source site's Hero, Features, Services, Testimonial, FAQ, etc.
const WORD_STAGGER = 0.08;
const WORD_DURATION = 0.6;
const WORD_BLUR = 10;
const WORD_OFFSET = 10;
const WORD_EASE = [0.22, 1, 0.36, 1] as const;

function splitWords(
  node: ReactNode,
  wordVariants: Variants,
  keyPrefix: string
): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((token, i) =>
      token.trim() === "" ? (
        token
      ) : (
        <motion.span
          key={`${keyPrefix}-${i}`}
          variants={wordVariants}
          className="inline-block"
        >
          {token}
        </motion.span>
      )
    );
  }
  if (Array.isArray(node)) {
    return Children.map(node, (child, i) =>
      splitWords(child, wordVariants, `${keyPrefix}-${i}`)
    );
  }
  if (isValidElement<{ children?: ReactNode; className?: string }>(node)) {
    if (node.props.children === undefined) return node;
    // background-clip:text breaks the moment an inline-block descendant is
    // nested inside it, so gradient text can't be split word-by-word — animate
    // it as a single atomic unit instead of recursing into its children.
    if (node.props.className?.includes("bg-clip-text")) {
      return (
        <motion.span
          key={keyPrefix}
          variants={wordVariants}
          className="inline-block"
        >
          {node}
        </motion.span>
      );
    }
    return cloneElement(node, {
      children: splitWords(node.props.children, wordVariants, keyPrefix),
    });
  }
  return node;
}

export default function AnimatedHeading({
  as = "h2",
  className,
  children,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = getMotionTag(as);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : WORD_STAGGER },
    },
  };
  const word: Variants = {
    hidden: reduceMotion
      ? {}
      : { opacity: 0, y: WORD_OFFSET, filter: `blur(${WORD_BLUR}px)` },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0 : WORD_DURATION,
        ease: WORD_EASE,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      {splitWords(children, word, "w")}
    </MotionTag>
  );
}
