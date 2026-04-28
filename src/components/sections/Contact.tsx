import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rpraveen.0010@gmail.com',
    href: 'mailto:rpraveen.0010@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9159305465',
    href: 'tel:+919159305465',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Coimbatore, TN, India',
    href: null,
  },
];

const SOCIALS = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/praveenr10',
    href: 'https://www.linkedin.com/in/praveenr10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/praveenravi10',
    href: 'https://github.com/praveenravi10',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32" aria-label="Contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="get in touch"
          title="Let's Work Together"
          subtitle="Open to full-time roles, contracts, and collaborations. Reach out directly — I typically respond within 24 hours."
        />

        <div className="mt-16 space-y-10">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities — actively looking for new roles
            </div>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col items-center gap-3 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-gray-200 hover:text-primary-400 transition-colors font-medium break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-200 font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SOCIALS.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-card border border-dark-border rounded-xl p-5 flex items-center gap-4 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm text-gray-200 font-medium group-hover:text-primary-400 transition-colors">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm mb-5">
              Prefer email? Click below to open your mail client.
            </p>
            <a
              href="mailto:rpraveen.0010@gmail.com"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-glow"
            >
              <Mail className="w-4 h-4" />
              rpraveen.0010@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
