import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useThemeContext } from '@/context/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scrollToSection, cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: 'about', label: 'About' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'experience', label: 'Experience' },
  { href: 'services', label: 'Services' },
  { href: 'contact', label: 'Contact' },
];

export function Navbar() {
  const { isDark, toggleTheme } = useThemeContext();
  const activeSection = useActiveSection();
  const scrollProgress = useScrollProgress();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-dark-bg/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border/50 shadow-xl'
            : 'bg-transparent'
        )}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
            aria-label="Go to top"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg hidden sm:block">
              praveen<span className="text-primary-400">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    'relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    activeSection === href
                      ? 'text-primary-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                  aria-current={activeSection === href ? 'page' : undefined}
                >
                  {label}
                  {activeSection === href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-primary-500/10 border border-primary-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Resume button */}
            <a
              href={`${import.meta.env.BASE_URL}rpraveen.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-all duration-200 shadow-glow hover:shadow-glow-lg"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-surface/95 backdrop-blur-xl border-b border-dark-border md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4">
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className={cn(
                        'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                        activeSection === href
                          ? 'text-primary-400 bg-primary-500/10 border border-primary-500/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
