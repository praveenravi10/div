import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ProjectCategory } from '@/types';

/**
 * Zustand store for projects filter state.
 * Demonstrates Zustand usage with devtools middleware.
 */
interface ProjectStore {
  search: string;
  category: ProjectCategory;
  setSearch: (q: string) => void;
  setCategory: (cat: ProjectCategory) => void;
  reset: () => void;
}

export const useProjectStore = create<ProjectStore>()(
  devtools(
    (set) => ({
      search: '',
      category: 'all',
      setSearch: (search) => set({ search }, false, 'setSearch'),
      setCategory: (category) => set({ category }, false, 'setCategory'),
      reset: () => set({ search: '', category: 'all' }, false, 'reset'),
    }),
    { name: 'ProjectStore' }
  )
);
