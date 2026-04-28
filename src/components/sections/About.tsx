import { motion } from 'framer-motion';
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Coffee,
  Phone,
  Wifi,
  Code,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const STATS = [
  { value: '4+', label: 'Years Experience', icon: Briefcase },
  { value: '15+', label: 'Projects Shipped', icon: Code },
  { value: '500+', label: 'Daily Agent Users', icon: Phone },
  { value: '99.9%', label: 'System Uptime', icon: Zap },
];

const INTERESTS = [
  { icon: Code, text: 'React & TypeScript' },
  { icon: Wifi, text: 'Real-time systems' },
  { icon: GraduationCap, text: 'Frontend architecture' },
  { icon: Coffee, text: 'Agile & clean code' },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" aria-label="About me">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="who I am"
          title="About Me"
          subtitle="A bit more about the person behind the code"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative flex flex-col items-center">
              {/* Glow behind circle */}
              <div className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 opacity-20 blur-3xl" />
              {/* Spinning gradient ring */}
              <div className="relative w-56 h-56 rounded-full p-[3px] bg-gradient-to-tr from-primary-400 via-accent-400 to-emerald-400 shadow-glow-lg">
                {/* Photo */}
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg ring-2 ring-dark-bg">
                  <img
                    src={`${import.meta.env.BASE_URL}praveen.jpeg`}
                    alt="Praveen R"
                    className="w-full h-full object-cover object-top scale-105"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Floating badge centred below */}
              <div className="mt-4 bg-dark-card border border-dark-border rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-gray-300">Available for hire</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>Coimbatore, TN, India</span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {STATS.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-dark-card border border-dark-border rounded-xl p-4 flex flex-col gap-2"
                >
                  <Icon className="w-5 h-5 text-primary-400" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hi! I&apos;m <span className="text-white font-semibold">Praveen R</span>, a Skilled
                Frontend Developer with <span className="text-primary-400 font-medium">4 years</span> of
                experience building intuitive, high-performance web applications using React, Redux,
                JavaScript, and TypeScript. My core stack is{' '}
                <span className="text-white font-medium">React.js + TypeScript</span>, and I
                specialize in modern UI architecture, state management, and responsive design.
              </p>
              <p>
                Strong in collaborating directly with clients, gathering requirements, and delivering
                tailored solutions in Agile environments. While primarily focused on frontend, I have
                also worked on backend architecture through personal projects using{' '}
                <span className="text-emerald-400 font-medium">Node.js</span>,{' '}
                <span className="text-emerald-400 font-medium">Express</span>, and{' '}
                <span className="text-emerald-400 font-medium">MongoDB</span>.
              </p>
              <p>
                I care deeply about{' '}
                <span className="text-white font-medium">code quality, performance,</span> and
                delivering{' '}
                <span className="text-accent-400 font-medium">
                  clean, user-centric solutions
                </span>{' '}
                that solve real problems.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                What I&apos;m into
              </h3>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map(({ icon: Icon, text }) => (
                  <Badge key={text} variant="primary" className="flex items-center gap-1.5 py-1.5">
                    <Icon className="w-3 h-3" />
                    {text}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tech mention */}
            <div className="p-4 rounded-xl bg-dark-card border border-dark-border font-mono text-sm">
              <p className="text-gray-500">// current focus</p>
              <p className="text-primary-400 mt-1">
                const stack = [<span className="text-emerald-400">&apos;React&apos;</span>,{' '}
                <span className="text-emerald-400">&apos;TypeScript&apos;</span>,{' '}
                <span className="text-emerald-400">&apos;Redux&apos;</span>,{' '}
                <span className="text-emerald-400">&apos;Node.js&apos;</span>];
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
