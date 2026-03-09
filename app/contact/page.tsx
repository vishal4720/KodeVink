"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Let's Work Together
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. 
                Send me a message and let's build something amazing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                          <Send className="h-8 w-8 text-green-600 dark:text-green-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thanks for reaching out. I'll get back to you soon.
                        </p>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => setSubmitted(false)}
                        >
                          Send Another
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Tell me about your project..."
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:hello@kodevink.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      hello@kodevink.com
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                      </div>
                      Pune, India
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <div className="space-y-4">
                    <Link 
                      href="https://github.com/vishal-patole"
                      target="_blank"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Github className="h-5 w-5" />
                      </div>
                      GitHub
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </Link>
                    <Link 
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      LinkedIn
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </Link>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-900">
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to all inquiries within 24 hours. 
                    For urgent projects, mention it in your message.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}