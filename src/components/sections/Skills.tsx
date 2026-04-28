import { motion } from 'framer-motion';
import { Code2, Server, Database, Radio, Wrench, Lightbulb } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'text-primary-400',
    iconBg: 'bg-primary-500/10 border-primary-500/20',
    skills: [
      { name: 'React.js', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Redux Toolkit', highlight: false },
      { name: 'React Query', highlight: false },
      { name: 'Zustand', highlight: false },
      { name: 'TailwindCSS', highlight: false },
      { name: 'JavaScript (ES6+)', highlight: false },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3/SCSS', highlight: false },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'REST API', highlight: false },
      { name: 'JWT Auth', highlight: false },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    skills: [
      { name: 'MongoDB', highlight: false },
      { name: 'PostgreSQL', highlight: false },
    ],
  },
  {
    title: 'Real-Time & AI',
    icon: Radio,
    color: 'text-primary-400',
    iconBg: 'bg-primary-500/10 border-primary-500/20',
    skills: [
      { name: 'WebSockets', highlight: true },
      { name: 'SIP.js', highlight: true },
      { name: 'WebRTC', highlight: true },
      { name: 'Azure OpenAI', highlight: true },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    skills: [
      { name: 'Docker', highlight: false },
      { name: 'Nginx', highlight: false },
      { name: 'Git', highlight: false },
      { name: 'GitHub', highlight: false },
      { name: 'CI/CD', highlight: false },
      { name: 'Jest', highlight: false },
      { name: 'React Testing Library', highlight: false },
    ],
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    color: 'text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    skills: [
      { name: 'Component Architecture', highlight: false },
      { name: 'Performance Optimization', highlight: false },
      { name: 'State Management', highlight: false },
      { name: 'Real-Time Communication', highlight: false },
      { name: 'Agile/Scrum', highlight: false },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32" aria-label="Skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="expertise"
          title="Technical Skills"
          subtitle="Comprehensive skill set spanning frontend development, backend APIs, real-time systems, and AI integrations."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map(({ title, icon: Icon, color, iconBg, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary-500/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${iconBg}`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <h3 className="font-semibold text-white text-base">{title}</h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, highlight }) => (
                  <span
                    key={name}
                    className={
                      highlight
                        ? 'px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30'
                        : 'px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-gray-300 transition-colors'
                    }
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
