import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactElement;
  width?: "fit-content" | "100%";
  height?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  yOffset?: number;
}

export const Reveal = ({ children, width = "fit-content", height = "fit-content", className = "", delay = 0, yOffset = 75 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", width, height, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 + delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ height }}
      >
        {children}
      </motion.div>
    </div>
  );
};
