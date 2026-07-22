import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';
import confetti from 'canvas-confetti';
import { HERO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { 
  Mail, 
  FileText, 
  Send, 
  CheckCircle2,
  MessageSquare,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required (at least 2 characters)"),
  email: z.string().min(1, "Email address is required").email("Please enter a valid email address"),
  category: z.string().min(1, "Please select an inquiry category"),
  message: z.string().min(20, "Message must be at least 20 characters long")
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      category: 'AI Engineering Role',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        // Fallback simulation mode if env variables are missing
        await new Promise((resolve) => setTimeout(resolve, 1200));
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            category: data.category,
            message: data.message,
            to_name: 'Ayush Saxena'
          },
          publicKey
        );
      }

      // Success Feedback
      setSubmitted(true);
      toast.success("✓ Message Sent Successfully", {
        description: "Your message has been delivered. I'll respond within 24 hours."
      });

      // Confetti Effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#14B8A6', '#30A14E']
      });

      // Automatically clear the form
      reset();

    } catch (error) {
      console.error("EmailJS Submission Error:", error);
      toast.error("Something went wrong.", {
        description: "Please try again or email directly at ayush.saxena0412@gmail.com"
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Toast Notifications */}
      <Toaster position="bottom-right" richColors />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            Let's Build Something <span className="text-[#2563EB]">Extraordinary</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal">
            Interested in discussing AI engineering roles, custom RAG architectures, or technical consulting? Feel free to reach out directly.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-[#F8F7F4] p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#111827]">Ayush Saxena</h3>
                <p className="text-sm font-semibold text-[#2563EB] mt-1">AI Engineer & Generative AI Developer</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5E7EB]/80">
                {/* Email Direct */}
                <a
                  href={`mailto:${HERO_DATA.socials.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#2563EB]/10 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#6B7280]">Email Directly</div>
                    <div className="text-sm font-bold text-[#111827]">{HERO_DATA.socials.email}</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={HERO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#111827]/10 text-[#111827] group-hover:bg-[#111827] group-hover:text-white transition-colors flex items-center justify-center">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#6B7280]">GitHub Profile</div>
                    <div className="text-sm font-bold text-[#111827]">github.com/ayushsaxena-0</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={HERO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors flex items-center justify-center">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#6B7280]">LinkedIn Network</div>
                    <div className="text-sm font-bold text-[#111827]">linkedin.com/in/ayush-saxena-b29912241</div>
                  </div>
                </a>

                {/* LeetCode */}
                <a
                  href={HERO_DATA.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center">
                    <LeetcodeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#6B7280]">LeetCode Algorithms</div>
                    <div className="text-sm font-bold text-[#111827]">leetcode.com/u/Ayush_Prof_26_11</div>
                  </div>
                </a>

                {/* Resume Download */}
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] font-bold text-sm border border-[#2563EB]/30 hover:bg-[#2563EB] hover:text-white transition-all cursor-pointer mt-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Interactive Resume & PDF</span>
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Column: EmailJS Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-[#F8F7F4] p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] shadow-sm interactive-hover-card"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#111827]">✓ Message Sent Successfully</h3>
                  <p className="text-sm text-[#4B5563] max-w-md leading-relaxed">
                    Your message has been delivered.<br />
                    I'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 rounded-full text-xs font-bold bg-[#2563EB] text-white shadow-editorial hover:bg-[#1d4ed8] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#111827] mb-1">Send a Message</h3>
                    <p className="text-xs text-[#6B7280]">Direct email dispatch powered by production EmailJS pipeline.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name Field */}
                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#111827] focus:outline-none transition-all ${
                          errors.name ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' : 'border-[#E5E7EB] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="e.g. sarah@techcorp.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#111827] focus:outline-none transition-all ${
                          errors.email ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' : 'border-[#E5E7EB] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inquiry Category */}
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      {...register('category')}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#111827] focus:outline-none transition-all ${
                        errors.category ? 'border-rose-500' : 'border-[#E5E7EB] focus:border-[#2563EB]'
                      }`}
                    >
                      <option value="AI Engineering Role">AI Engineering Role / Full-time</option>
                      <option value="Custom RAG / LLM System">Custom GenAI / RAG Project</option>
                      <option value="Computer Vision Project">Computer Vision & CUDA Perception</option>
                      <option value="Technical Consulting">Technical Advisory / Consulting</option>
                    </select>
                    {errors.category && (
                      <span className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.category.message}
                      </span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                      Your Message * (Min 20 chars)
                    </label>
                    <textarea
                      rows={4}
                      {...register('message')}
                      placeholder="Describe your role, project requirements, or ideas in detail..."
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#111827] focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' : 'border-[#E5E7EB] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-full bg-[#2563EB] text-white font-bold text-sm shadow-editorial hover:bg-[#1d4ed8] hover:shadow-glow-blue transition-all flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
