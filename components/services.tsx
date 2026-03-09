"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "React, Next.js, and Node.js applications. Dashboards, admin panels, and data-heavy platforms built for performance.",
    tech: ["React", "Next.js", "Node.js", "Django", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform Flutter apps and native Android development. Published on Play Store and App Store with real-time sync.",
    tech: ["Flutter", "Firebase", "Android", "iOS", "Riverpod"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "AWS infrastructure setup, Docker containerization, and scalable backend solutions that won't break the bank.",
    tech: ["AWS EC2", "RDS", "Cognito", "Docker", "CI/CD"],
  },
];

export function Services() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What I Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end development services. From concept to deployment, I
            deliver production-ready solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}