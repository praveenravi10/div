import { lazy, Suspense } from 'react';
import { Hero } from '@/components/sections/Hero';
import { ProjectCardSkeleton } from '@/components/ui/Skeleton';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

// ─── Lazy-loaded sections for code splitting ──────────────────────
const About = lazy(() =>
  import('@/components/sections/About').then((m) => ({ default: m.About }))
);
const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills }))
);
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects }))
);
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience }))
);
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact }))
);

function SectionFallback() {
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero is eagerly loaded — it's the LCP element */}
      <Hero />

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
