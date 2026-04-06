import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, Star, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { ProjectCardSkeleton } from '@/components/ui/Skeleton';
import { Button } from '@/components/ui/Button';
import { useDebounce } from '@/hooks/useDebounce';
import { projects, projectCategories } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

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
      transition={{ delay: index * 0.05, duration: 0.3 }}
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
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="warning" className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400" />
              Featured
            </Badge>
          </div>
        )}
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
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('all');
  const [isLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category;
      const q = debouncedSearch.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, category]);

  return (
    <section id="projects" className="py-24 sm:py-32" aria-label="Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="my work"
          title="Featured Projects"
          subtitle="A selection of real-world projects I've built and shipped"
        />

        {/* Filter bar */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              aria-label="Search projects"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setCategory(value as ProjectCategory)}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                  category === value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                )}
                aria-pressed={category === value}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {debouncedSearch && (
          <p className="mt-4 text-sm text-gray-500">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &quot;
            {debouncedSearch}&quot;
          </p>
        )}

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)
            : null}

          <AnimatePresence mode="popLayout">
            {!isLoading && filtered.length > 0
              ? filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))
              : !isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full text-center py-16"
                  >
                    <p className="text-gray-500 text-sm">
                      No projects found. Try a different search or filter.
                    </p>
                    <button
                      onClick={() => {
                        setSearch('');
                        setCategory('all');
                      }}
                      className="mt-3 text-primary-400 text-sm hover:underline"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
