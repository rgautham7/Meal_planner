import React from "react";
import { motion } from "framer-motion";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx: string;
  ry: string;
  className?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  className,
}: MovingBorderProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration / 1000,
        repeat: Infinity,
        ease: "linear",
      }}
      className={className}
      style={{
        borderRadius: `${rx} ${ry}`,
      }}
    >
      {children}
    </motion.div>
  );
}