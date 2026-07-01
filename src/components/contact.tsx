"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (form.name.length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!form.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background glowing rings */}
      <div className="absolute bottom-0 right-[10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-[20%] left-[5%] w-[35%] h-[35%] bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Info Column */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-500">Contact Us</h2>
            <p className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Let's build something <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                extraordinary.
              </span>
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed max-w-lg">
              Have a revolutionary idea or an exciting project in mind? We'd love to chat. Fill out the form, and our design leads will get back to you within 24 hours.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-indigo-500/10 p-2.5 text-indigo-500">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">General Inquiries</h4>
                  <p className="text-sm text-foreground/60">hello@aetherstudio.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Boxed inputs card */}
          <div className="rounded-3xl border border-foreground/10 bg-background/50 p-8 shadow-xl shadow-indigo-500/5 backdrop-blur-xl relative min-h-[440px] flex flex-col justify-center">
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 transition-all duration-300">
                <CheckCircle className="h-16 w-16 text-emerald-500" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-foreground/65 max-w-sm text-sm">
                  Thank you for reaching out. We have received your message and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="your name"
                    className={`w-full rounded-xl border bg-background/50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-foreground/10 focus:border-indigo-500 focus:ring-indigo-500/25"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your email"
                    className={`w-full rounded-xl border bg-background/50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-foreground/10 focus:border-indigo-500 focus:ring-indigo-500/25"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`w-full rounded-xl border bg-background/50 px-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-foreground/10 focus:border-indigo-500 focus:ring-indigo-500/25"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-indigo-500/25 cursor-pointer"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
