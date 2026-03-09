"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "ShodhKosh",
    description:
      "Academic R&D management platform with real-time analytics. Built for faculty publication tracking with interactive dashboards.",
    tech: ["React 18", "Supabase", "Chart.js", "Material-UI"],
    metrics: "40% faster reporting",
    link: "#",
    github: "#",
  },
  {
    title: "RentEase",
    description:
      "Property rental management app with real-time bookings, approval workflows, and integrated Razorpay payments.",
    tech: ["Flutter", "Firebase", "Riverpod", "Razorpay"],
    metrics: "Cross-platform mobile app",
    link: "#",
    github: "#",
  },
  {
    title: "Shared Parking",
    description:
      "P2P parking marketplace connecting hosts with drivers. Features RBAC, payment processing, and cost-optimized deployment.",
    tech: ["React", "Django", "PostgreSQL", "AWS"],
    metrics: "Secure payment integration",
    link: "#",
    github: "#",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Recent projects showcasing full-stack development, cloud
              architecture, and mobile solutions.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="/work">View All Projects</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="text-sm">Project Screenshot</span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.link}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.metrics}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}