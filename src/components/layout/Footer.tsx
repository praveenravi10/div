import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/praveenravi10',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/praveenr10',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:rpraveen.0010@gmail.com',
    label: 'Email',
  },
];

const NAV_SECTIONS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                praveen<span className="text-primary-400">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Frontend Developer crafting high-performance web experiences with React, TypeScript,
              and WebRTC.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_SECTIONS.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 focus-visible:outline-none"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Praveen. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
