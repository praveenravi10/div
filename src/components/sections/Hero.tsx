import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, MessageCircle, FolderOpen } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const ROLES = [
  'AI Integration Expert',
  'Frontend Engineer',
  'Full Stack Developer',
  'React JS Developer',
];

function TypingText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-primary-300">|</span>
    </span>
  );
}

const SOCIALS = [
  { icon: Github, href: 'https://github.com/praveenravi10', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/praveenr10', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:rpraveen.0010@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+919159305465', label: 'Phone' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07071a] via-[#0f0b2d] to-[#07071a]" />
        {/* Glow behind photo position (right side) */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[520px] h-[520px] bg-primary-600/25 rounded-full blur-[100px]" />
        {/* Secondary glow left */}
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary-800/20 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-28">

        {/* ── Left: Text content ── */}
        <div className="flex flex-col items-start">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg sm:text-xl mb-2 font-light"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight"
          >
            Praveen R
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl font-semibold text-primary-400 mb-6 h-9"
          >
            <TypingText texts={ROLES} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg"
          >
            Frontend Engineer with{' '}
            <span className="text-primary-400 font-medium">4+ years</span> of experience building
            scalable React.js applications. Specialized in AI-powered interfaces, real-time
            communication systems, and enterprise solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Talk
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <FolderOpen className="w-4 h-4" />
              View Projects
            </button>
            <a
              href={`${import.meta.env.BASE_URL}rpraveen.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3"
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('tel') || href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer glow ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full bg-primary-500/20 blur-3xl" />

            {/* Decorative dashed orbit ring */}
            <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-primary-500/20 animate-spin-slow" />

            {/* Gradient ring + photo */}
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full p-[3px] bg-gradient-to-tr from-primary-500 via-primary-400 to-primary-700 shadow-glow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg ring-4 ring-dark-bg">
                <img
                  src={`${import.meta.env.BASE_URL}praveen.jpeg`}
                  alt="Praveen R"
                  className="w-full h-full object-cover object-top scale-110"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating badge: Experience */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 sm:-left-8 top-1/4 bg-dark-card border border-dark-border rounded-xl px-3 py-2 shadow-xl"
            >
              <p className="text-xs text-gray-400">Experience</p>
              <p className="text-lg font-bold text-white">4+ <span className="text-xs font-normal text-gray-400">Years</span></p>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors duration-200 focus-visible:outline-none"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
