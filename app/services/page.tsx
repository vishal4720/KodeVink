"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Code2, 
  Database, 
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Full-stack web applications built with modern technologies. From dashboards to complex platforms, I deliver scalable solutions.",
    price: "Starting at $2,500",
    features: [
      "React / Next.js frontend",
      "Node.js or Django backend",
      "Database design & optimization",
      "API development & integration",
      "Responsive, mobile-first design",
      "Performance optimization"
    ],
    tech: ["React", "Next.js", "Node.js", "Django", "PostgreSQL", "MongoDB"],
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that work seamlessly on both iOS and Android. Published to app stores with real-time capabilities.",
    price: "Starting at $3,500",
    features: [
      "Flutter cross-platform apps",
      "Native Android development",
      "Firebase integration",
      "Real-time sync & notifications",
      "Payment gateway integration",
      "App Store & Play Store deployment"
    ],
    tech: ["Flutter", "Dart", "Firebase", "Riverpod", "Android", "iOS"],
    color: "purple"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description: "AWS infrastructure setup, deployment automation, and scalable backend solutions that grow with your business.",
    price: "Starting at $1,500",
    features: [
      "AWS infrastructure setup",
      "EC2, RDS, S3 configuration",
      "Cognito authentication",
      "Docker containerization",
      "CI/CD pipeline setup",
      "Cost optimization"
    ],
    tech: ["AWS", "Docker", "GitHub Actions", "Linux", "Nginx", "Terraform"],
    color: "cyan"
  },
  {
    icon: Code2,
    title: "Technical Consulting",
    description: "Strategic guidance on technology choices, architecture decisions, and development best practices for your project.",
    price: "Custom",
    features: [
      "Technology stack selection",
      "Architecture review",
      "Code review & optimization",
      "Performance auditing",
      "Security assessment",
      "Team training & mentorship"
    ],
    tech: ["System Design", "Best Practices", "Security", "Scalability"],
    color: "green"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database schemas and queries for performance. Migration, optimization, and maintenance services.",
    price: "Starting at $1,000",
    features: [
      "Schema design & optimization",
      "Query performance tuning",
      "Data migration",
      "Backup & recovery setup",
      "Replication & scaling",
      "NoSQL & SQL solutions"
    ],
    tech: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
    color: "orange"
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful and GraphQL APIs built for performance, security, and scalability. Third-party integrations included.",
    price: "Starting at $1,500",
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "Authentication & authorization",
      "Rate limiting & caching",
      "Third-party integrations",
      "Documentation"
    ],
    tech: ["Node.js", "Python", "FastAPI", "Express", "GraphQL", "REST"],
    color: "red"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your requirements, goals, and timeline to understand the full scope."
  },
  {
    step: "02",
    title: "Proposal",
    description: "I provide a detailed proposal with timeline, milestones, and pricing."
  },
  {
    step: "03",
    title: "Development",
    description: "Regular updates as I build your solution with best practices and clean code."
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final testing, deployment, and handover with documentation and support."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Services
              </h1>
              <p className="text-xl text-muted-foreground">
                End-to-end development services. From concept to deployment, 
                I deliver production-ready solutions tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        service.color === "blue" ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" :
                        service.color === "purple" ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300" :
                        service.color === "cyan" ? "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300" :
                        service.color === "green" ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300" :
                        service.color === "orange" ? "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300" :
                        "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"
                      }`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {service.price}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple, transparent process designed to deliver results.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-slate-100 dark:text-slate-800 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project. I'll provide a free consultation 
              and detailed proposal tailored to your needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}