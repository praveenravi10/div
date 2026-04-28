import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
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
    <span className="text-primary-400">
      {displayText}
      <span className="animate-pulse text-primary-300">|</span>
    </span>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-600/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
          className="font-mono text-primary-400 text-sm sm:text-base mb-4 tracking-widest"
        >
          <Terminal className="inline w-4 h-4 mr-2" />
          Hello, World! I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-7xl font-extrabold text-white mb-4 tracking-tight"
        >
          Praveen
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
            .
          </span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 h-10"
        >
          <TypingText texts={ROLES} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          4 years building scalable, high-performance web apps with{' '}
          <span className="text-primary-400 font-medium">React.js</span>,{' '}
          <span className="text-accent-400 font-medium">TypeScript</span>, and integrating
          frontend systems with{' '}
          <span className="text-emerald-400 font-medium">Node.js & MongoDB</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('projects')}
            rightIcon={<ArrowDown className="w-4 h-4" />}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            as="a"
            href={`${import.meta.env.BASE_URL}rpraveen.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<Download className="w-4 h-4" />}
          >
            Download Resume
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: 'https://github.com/praveenravi10', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/praveenr10', icon: Linkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
          <div className="w-px h-6 bg-white/10" aria-hidden="true" />
          <p className="text-xs text-gray-500 font-mono">praveen@dev</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors duration-200 focus-visible:outline-none group"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-mono tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="group-hover:text-primary-400"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
