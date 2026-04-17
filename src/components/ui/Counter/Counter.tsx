import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  prefix?: string;
  suffix?: string;
}

export function Counter({
  value,
  direction = "up",
  prefix = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, value, direction]);

  const displayValue = useTransform(springValue, (latest) => {
    const rounded = Math.floor(latest);
    return `${prefix}${rounded}${suffix}`;
  });

  return (
    <motion.span 
        ref={ref}
        style={{ display: "inline-block" }}
    >
        {displayValue}
    </motion.span>
  );
}
