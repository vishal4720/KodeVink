"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
            <Sparkles className="h-4 w-4" />
            <span>Available for freelance projects</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Building digital
            <br />
            products that <span className="text-blue-600">scale</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Full-stack development for founders and teams. Specializing in React
            web apps, Flutter mobile solutions, and AWS cloud architecture.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/work">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              <span>React & Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              <span>Flutter</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              <span>AWS Cloud</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}