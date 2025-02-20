"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionItem = ({
  children,
  className,
  initial,
  animate,
  whileInView,
  exit,
}: {
  children: React.ReactNode;
  className?: string;
  initial?: Record<string, string | number>;
  animate?: Record<string, string | number>;
  whileInView?: Record<string, string | number>;
  exit?: Record<string, string | number>;
}) => {
  return (
    <motion.div
      initial={initial}
      exit={exit}
      animate={animate}
      whileInView={whileInView}
      className={`${className || ""}`}
    >
      {children}
    </motion.div>
  );
};

export default MotionItem;
