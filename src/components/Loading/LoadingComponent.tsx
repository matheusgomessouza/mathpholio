"use client";

import { motion } from "framer-motion";

export function LoadingComponent() {
  return (
    <div className="flex items-center justify-center">
      <h2 className="relative text-2xl font-semibold tracking-wide">
        <span className="text-color-one/30">Loading...</span>
        <motion.span
          className="absolute inset-0 text-color-one"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Loading...
        </motion.span>
      </h2>
    </div>
  );
}
