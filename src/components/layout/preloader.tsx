"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Skip preloader on repeat visits within the session
    if (sessionStorage.getItem("visited")) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("visited", "true");
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <div className="text-center">
              {/* Logo animation */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-heading text-5xl tracking-tight text-foreground"
              >
                pw.
              </motion.span>

              {/* Subtle loading bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, delay: 0.1, ease: "easeInOut" }}
                className="mt-6 h-px w-16 mx-auto bg-primary origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content — hidden during preloader */}
      <motion.div
        initial={false}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.3, delay: loading ? 0 : 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
