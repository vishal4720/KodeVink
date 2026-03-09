"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "ShodhKosh",
    category: "Web App",
    description: "Academic R&D management platform for faculty publication tracking with real-time analytics and interactive dashboards.",
    tech: ["React 18", "Supabase", "Chart.js", "Material-UI", "PostgreSQL"],
    metrics: "40% faster reporting",
    features: ["Real-time dashboards", "Role-based access", "Data visualization", "Export reports"],
    link: "#",
    github: "#",
    color: "blue"
  },
  {
    title: "RentEase",
    category: "Mobile App",
    description: "Cross-platform property rental management app with real-time bookings, approval workflows, and integrated payments.",
    tech: ["Flutter", "Firebase", "Riverpod", "Razorpay", "Dart"],
    metrics: "Play Store & App Store",
    features: ["Real-time sync", "Payment integration", "Booking management", "Push notifications"],
    link: "#",
    github: "#",
    color: "purple"
  },
  {
    title: "Shared Parking",
    category: "Web Platform",
    description: "P2P parking marketplace connecting hosts with drivers. Features RBAC, payment processing, and cost-optimized AWS deployment.",
    tech: ["React", "Django", "PostgreSQL", "AWS", "Razorpay"],
    metrics: "Secure payment integration",
    features: ["User authentication", "Payment processing", "Real-time availability", "Admin dashboard"],
    link: "#",
    github: "#",
    color: "cyan"
  },
  {
    title: "Smart Attendance System",
    category: "IoT + Mobile",
    description: "WiFi-based automated attendance tracking system replacing manual methods with real-time solutions for educational institutions.",
    tech: ["Java", "PHP", "AWS RDS", "AWS EC2", "Python", "FastAPI", "Android"],
    metrics: "Automated tracking",
    features: ["WiFi detection", "Real-time sync", "Admin panel", "Automated reports"],
    link: "#",
    github: "#",
    color: "green"
  },
  {
    title: "Aptitude & Logical Reasoning",
    category: "Mobile App",
    description: "Android application for improving aptitude skills with topic-wise quizzes, explanations, and study materials.",
    tech: ["Java", "Android Studio", "Firebase"],
    metrics: "Educational tool",
    features: ["Topic-wise quizzes", "Detailed explanations", "Formula sheets", "Progress tracking"],
    link: "#",
    github: "#",
    color: "orange"
  },
  {
    title: "C/C++ Learning Apps",
    category: "Mobile App",
    description: "Educational apps for learning C and C++ programming with interactive lessons, quizzes, and interview questions.",
    tech: ["Java", "Firebase", "Android Studio"],
    metrics: "Learning platform",
    features: ["Interactive lessons", "Code examples", "Interview questions", "Progress tracking"],
    link: "#",
    github: "#",
    color: "red"
  }
];

const categories = ["All", "Web App", "Mobile App", "Web Platform", "IoT + Mobile"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Featured Work
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A selection of projects I've built — from mobile apps to cloud platforms.
              </p>
            </motion.div>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Filter className="h-4 w-4 text-muted-foreground mr-2 self-center" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                    {/* Project Image Placeholder */}
                    <div className={`aspect-video relative overflow-hidden bg-gradient-to-br ${
                      project.color === "blue" ? "from-blue-500/20 to-purple-500/20" :
                      project.color === "purple" ? "from-purple-500/20 to-pink-500/20" :
                      project.color === "cyan" ? "from-cyan-500/20 to-blue-500/20" :
                      project.color === "green" ? "from-green-500/20 to-emerald-500/20" :
                      project.color === "orange" ? "from-orange-500/20 to-red-500/20" :
                      "from-red-500/20 to-orange-500/20"
                    }`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-foreground/10">
                          {project.title[0]}
                        </span>
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
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
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">{project.category}</Badge>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          {project.metrics}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1 mb-4">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-xs px-2 py-1 text-muted-foreground">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-4">
                Want to see more? Check out my GitHub.
              </p>
              <Button variant="outline" asChild>
                <Link href="https://github.com/vishal-patole" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}