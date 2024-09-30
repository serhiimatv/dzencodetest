"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
