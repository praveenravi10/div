import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import { cn } from '@/lib/utils';
import { ContactFormData } from '@/types';

// ─── Validation schema ───────────────────────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(60, 'Name is too long'),
  email: z.string().email('Please enter a valid email'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject is too long'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message is too long'),
});

// ─── Sub-components ──────────────────────────────────────────────
function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-primary-400 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-400 flex items-center gap-1"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

const inputClass = cn(
  'w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm',
  'placeholder-gray-500 transition-all duration-200',
  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
  'hover:border-white/20'
);

// ─── Main component ──────────────────────────────────────────────
export function Contact() {
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const messageLength = watch('message')?.length ?? 0;

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call — wire up EmailJS / your API here
      await new Promise((res) => setTimeout(res, 1500));
      addToast('Message sent! I\'ll get back to you soon.', 'success');
      reset();
    } catch {
      addToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32" aria-label="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="get in touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'praveenravi550@gmail.com',
                    href: 'mailto:praveenravi550@gmail.com',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Coimbatore, TN, India',
                    href: null,
                  },
                  {
                    icon: MessageSquare,
                    label: 'Availability',
                    value: 'Open to full-time & contracts',
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                Find me on
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/praveen', label: 'GitHub' },
                  {
                    icon: Linkedin,
                    href: 'https://www.linkedin.com/in/praveenr10',
                    label: 'LinkedIn',
                  },
                  { icon: Mail, href: 'mailto:praveenravi550@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">Quick responder</span>
              </div>
              <p className="text-xs text-gray-400">
                I typically respond within 24–48 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 space-y-5"
              noValidate
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Name" error={errors.name?.message} required>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Praveen Kumar"
                    className={cn(inputClass, errors.name && 'border-red-500/50 focus:ring-red-500')}
                    autoComplete="name"
                  />
                </FormField>

                <FormField label="Email" error={errors.email?.message} required>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className={cn(
                      inputClass,
                      errors.email && 'border-red-500/50 focus:ring-red-500'
                    )}
                    autoComplete="email"
                  />
                </FormField>
              </div>

              <FormField label="Subject" error={errors.subject?.message} required>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder="Let's discuss a project..."
                  className={cn(
                    inputClass,
                    errors.subject && 'border-red-500/50 focus:ring-red-500'
                  )}
                />
              </FormField>

              <FormField label="Message" error={errors.message?.message} required>
                <div className="relative">
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell me about your project, role, or anything you'd like to discuss..."
                    className={cn(
                      inputClass,
                      'resize-none',
                      errors.message && 'border-red-500/50 focus:ring-red-500'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute bottom-2 right-3 text-xs',
                      messageLength > 900 ? 'text-amber-400' : 'text-gray-600'
                    )}
                  >
                    {messageLength}/1000
                  </span>
                </div>
              </FormField>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                rightIcon={<Send className="w-4 h-4" />}
                className="w-full justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Your data is safe. I never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
