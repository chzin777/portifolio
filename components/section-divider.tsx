"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-14 sm:my-24 flex flex-col items-center gap-1.5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
      <div className="h-8 sm:h-12 w-px bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700 dark:to-transparent" />
    </motion.div>
  );
}
