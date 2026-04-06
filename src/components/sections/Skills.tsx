import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { skills, skillCategories } from '@/data/skills';
import { SkillCategory } from '@/types';

function SkillBar({ name, level, color }: { name: string; level: number; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-2 group"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-gray-500">{level}%</span>
      </div>
      <div
        className="h-1.5 bg-white/5 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency: ${level}%`}
        ref={ref}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color || '#3b82f6' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-dark-surface/50" aria-label="Skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="expertise"
          title="Skills & Technologies"
          subtitle="The tools I use to turn ideas into high-quality products"
        />

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {skillCategories.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value as SkillCategory)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                activeCategory === value
                  ? 'bg-primary-600 text-white shadow-glow'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              )}
              aria-pressed={activeCategory === value}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto"
        >
          {filtered.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </motion.div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-6">
            // Also comfortable with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'React Query',
              'Redux Toolkit',
              'Axios',
              'Storybook',
              'Cypress',
              'Docker basics',
              'CI/CD',
              'Figma',
              'Postman',
              'Linux',
              'PostgreSQL',
              'MongoDB',
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:border-primary-500/30 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
