"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // ALL useTransform hooks first
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -270]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.1]);

  const bracketY1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const bracketY2 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const bracketY3 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Dynamic gradient based on theme */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDark 
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" 
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`} />
      
      {/* Floating shapes - colors adapt to theme */}
      <motion.div
        style={{ y: y1, rotate: rotate1, scale: scale1 }}
        className={`absolute top-[10%] left-[5%] w-64 h-64 rounded-full blur-3xl transition-colors duration-500 ${
          isDark ? "bg-blue-600/20" : "bg-blue-500/10"
        }`}
      />
      
      <motion.div
        style={{ y: y2, rotate: rotate2, scale: scale2 }}
        className={`absolute top-[20%] right-[10%] w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${
          isDark ? "bg-purple-600/20" : "bg-purple-500/10"
        }`}
      />
      
      <motion.div
        style={{ y: y3, rotate: rotate3 }}
        className={`absolute top-[50%] left-[15%] w-48 h-48 blur-2xl rotate-45 transition-colors duration-500 ${
          isDark ? "bg-cyan-600/15" : "bg-cyan-500/10"
        }`}
      />
      
      <motion.div
        style={{ y: y4, rotate: rotate4 }}
        className={`absolute top-[60%] right-[5%] w-72 h-72 rounded-3xl blur-3xl transition-colors duration-500 ${
          isDark ? "bg-indigo-600/20" : "bg-indigo-500/10"
        }`}
      />

      {/* Code brackets floating */}
      <motion.div
        style={{ y: bracketY1 }}
        className={`absolute top-[30%] left-[8%] text-9xl font-mono font-bold select-none transition-colors duration-500 ${
          isDark ? "text-blue-500/10" : "text-blue-500/5"
        }`}
      >
        {"{"}
      </motion.div>
      
      <motion.div
        style={{ y: bracketY2 }}
        className={`absolute top-[40%] right-[8%] text-9xl font-mono font-bold select-none transition-colors duration-500 ${
          isDark ? "text-purple-500/10" : "text-purple-500/5"
        }`}
      >
        {"}"}
      </motion.div>

      <motion.div
        style={{ y: bracketY3 }}
        className={`absolute top-[70%] left-[20%] text-8xl font-mono font-bold select-none transition-colors duration-500 ${
          isDark ? "text-cyan-500/10" : "text-cyan-500/5"
        }`}
      >
        {"</>"}
      </motion.div>

      {/* Grid pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark ? "opacity-[0.03]" : "opacity-[0.02]"
        }`}
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
}