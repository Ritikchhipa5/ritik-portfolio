"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PROJECT_TYPES = ["Website", "Mobile App", "Web + Mobile", "Other"];
const BUDGETS = ["Under $3k", "$3k – $8k", "$8k – $15k", "$15k+"];

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.email("Enter a valid email").trim(),
  company: z.string().trim().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().min(1, "Tell me a bit about your project"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
      form.reset();
      toast.success("Message sent — I'll get back to you within 24 hours.");
    } catch {
      toast.error("Something went wrong. Try emailing me directly instead.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 mt-16"
    >
      {/* Form */}
      <div className="md:col-span-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 font-dm-sans"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-900">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="h-12 rounded-xl bg-card"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-900">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        className="h-12 rounded-xl bg-card"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-900">
                    Company
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company (optional)"
                      className="h-12 rounded-xl bg-card"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-900">
                      Project Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 w-full rounded-xl bg-card">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {PROJECT_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-900">
                      Budget Range
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 w-full rounded-xl bg-card">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {BUDGETS.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-900">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="rounded-xl bg-card resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="relative font-dm-sans font-medium text-sm rounded-full h-12 px-8 bg-black text-white flex items-center justify-center gap-2 w-full sm:w-auto transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={16} />
                </>
              )}
            </button>

            {submitted && (
              <p className="text-sm text-gray-500 font-dm-sans">
                Thanks — I&apos;ll reply within 24 hours.
              </p>
            )}
          </form>
        </Form>
      </div>

      {/* Sidebar info */}
      <div className="md:col-span-2 space-y-8 font-dm-sans">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Email</h3>
          <a
            href="mailto:ritikchhipa5@gmail.com"
            className="text-gray-500 hover:text-gray-900 transition-colors text-base"
          >
            ritikchhipa5@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">WhatsApp</h3>
          <a
            href="https://wa.me/919001586400"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors text-base"
          >
            +91 90015 86400
          </a>
        </div>

        <div className="pt-4 border-t">
          <p className="text-gray-400 text-sm leading-relaxed">
            I typically respond within 24 hours. For urgent inquiries, reach
            out directly via WhatsApp or email.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
