"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "support@beg1nner4ever.com",
    href: "mailto:support@beg1nner4ever.com",
    description: "Best for project inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Beg1nner4ever",
    href: "https://github.com/Beg1nner4ever",
    description: "See my open source work",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Philipp Widenfels",
    href: "https://www.linkedin.com/in/pwidenfels/",
    description: "Let's connect professionally",
  },
];

export function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
              Get in touch
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[0.95]">
              Let&apos;s build something{" "}
              <span className="italic text-gradient">great</span> together.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Whether you have a specific project in mind or want to explore how
              AI can benefit your organization, I&apos;d love to hear from you.
              No commitment — just a conversation.
            </p>

            {/* Availability */}
            <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">
                Currently available for freelance
              </span>
            </div>
          </motion.div>

          {/* Right — contact methods */}
          <div className="md:col-span-5">
            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-500">
                    <method.icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {method.label}
                    </p>
                    <p className="text-sm text-foreground/80 mt-0.5 truncate">
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {method.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0"
                  />
                </motion.a>
              ))}
            </div>

            {/* Response time note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 text-xs text-muted-foreground text-center"
            >
              I typically respond within 24 hours.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
