"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { motion } from "framer-motion";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "I offer end-to-end product development — from UI/UX design and branding to full-stack web and mobile app development. Whether you need a landing page, a SaaS platform, or a complete design system, I can help bring your vision to life.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A landing page or small web app typically takes 1–2 weeks. A full-stack product or mobile app usually takes 4–8 weeks. I always share a clear timeline before starting so there are no surprises.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Pricing depends on the complexity and scope of the project. I offer both fixed-price packages for well-defined work and hourly rates for ongoing collaboration. Book a call or message me and I'll send you a custom quote within 24 hours.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. I work with clients across the US, UK, Europe, and beyond. All communication happens over video calls, Slack, or email — timezone differences are never a barrier.",
  },
  {
    question: "How do I get started working with you?",
    answer:
      "Simply reach out via the contact page, email, or WhatsApp. Share a brief about your project — what you're building, your goals, and your timeline — and I'll get back to you within 24 hours to schedule a discovery call.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading
        primaryHeading="FAQ"
        secondHeading="Common questions"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-12 max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-base font-dm-sans font-medium text-left no-underline hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-dm-sans text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
