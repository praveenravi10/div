import { motion } from 'framer-motion';
import { Briefcase, MapPin, ExternalLink, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';

const typeVariants: Record<string, 'primary' | 'accent' | 'success' | 'warning'> = {
  'full-time': 'primary',
  contract: 'accent',
  freelance: 'warning',
  internship: 'success',
};

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-dark-surface/50" aria-label="Experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="career"
          title="Work Experience"
          subtitle="My professional journey building real-world products"
        />

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    'absolute left-4 top-6 w-5 h-5 rounded-full border-2 hidden sm:flex items-center justify-center',
                    'border-primary-500 bg-dark-bg',
                    exp.endDate === 'Present' && 'border-emerald-400'
                  )}
                  aria-hidden="true"
                >
                  {exp.endDate === 'Present' && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-white text-base">{exp.role}</h3>
                        <Badge variant={typeVariants[exp.type] || 'default'}>{exp.type}</Badge>
                      </div>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                          >
                            <Briefcase className="w-3.5 h-3.5" />
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="flex items-center gap-1 text-gray-300 text-sm font-medium">
                            <Briefcase className="w-3.5 h-3.5 text-primary-400" />
                            {exp.company}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-gray-500 text-xs">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 shrink-0">
                      <Calendar className="w-3 h-3" />
                      {exp.startDate} — {exp.endDate}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <span className="text-primary-500 mt-1 shrink-0">▸</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="default" className="text-[11px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
