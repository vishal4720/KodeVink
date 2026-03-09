"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Code2, Award, Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Flutter", "Dart",
  "Python", "Django", "AWS", "Firebase", "PostgreSQL", "MongoDB",
  "Docker", "Git", "Tailwind CSS", "Material-UI"
];

const experience = [
  {
    icon: Briefcase,
    title: "Collab Lab",
    role: "Full-Stack Developer",
    period: "Jan 2021 - Nov 2021",
    description: "Led team of 3-4 developers. Built and deployed 'Chalkie' educational apps on Play Store & App Store. Implemented AWS infrastructure (Cognito, RDS, EC2).",
    tech: ["Ionic", "AWS", "SQL"]
  },
  {
    icon: GraduationCap,
    title: "PCCOE",
    role: "Masters in Computer Application",
    period: "2024 - 2026",
    description: "Pursuing advanced studies in computer applications.",
    tech: []
  },
  {
    icon: GraduationCap,
    title: "MIT Arts, Commerce & Science",
    role: "Bachelors in Computer Application",
    period: "2019 - 2022",
    description: "Foundation in software development and computer science.",
    tech: []
  }
];

const achievements = [
  "2nd Prize — Insperia 2024, PCCOE Pune",
  "Semi-Finalist — Code Gladiators 2020, 2023, 2024",
  "Amazon Voucher Winner — Code Gladiators 2024",
  "Cleared MaTPO Programming Idol & Aptitude Idol"
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="h-8 w-8 text-blue-600" />
                <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                I'm a full-stack developer with 5+ years of building and shipping digital products. 
                From leading teams at Collab Lab to launching apps on the Play Store and App Store, 
                I've helped businesses turn ideas into scalable solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>KodeVink</strong> is my independent practice — where I bring that same 
                engineering rigor to your projects. Whether you need a React dashboard, a Flutter 
                mobile app, or AWS infrastructure that won't break the bank, I build with precision 
                and deploy with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-12">Experience & Education</h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.role}</p>
                    <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    {item.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Achievements</h2>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}