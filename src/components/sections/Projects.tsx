import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-primary-500/40 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900/30 to-accent-900/20 h-40 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-2 p-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-4 bg-white rounded" />
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center">
          <div className="text-4xl font-black text-white/10 uppercase tracking-tight select-none">
            {project.title.slice(0, 2)}
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="success" className="flex items-center gap-1">
            Professional
          </Badge>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="primary">{project.year}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-white text-base group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="default" className="text-[11px]">
              {t}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="default" className="text-[11px]">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 pb-5 flex items-center gap-3">
        {project.liveUrl && (
          <Button
            variant="primary"
            size="sm"
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<ExternalLink className="w-3 h-3" />}
          >
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<Github className="w-3 h-3" />}
          >
            Source
          </Button>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32" aria-label="Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="professional work"
          title="Projects I've Built"
          subtitle="Real-world products I developed and shipped at my current company"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
