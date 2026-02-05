/**
 * Organic Warm & Accessible Design System
 * CategoryFilter Component - Filter prompts by category
 */

import { PromptCategory } from '@/types';
import { CATEGORIES } from '@/lib/constants';

interface CategoryFilterProps {
  activeCategory: PromptCategory | 'all';
  onCategoryChange: (category: PromptCategory | 'all') => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: Array<{ id: PromptCategory | 'all'; label: string; icon: string }> = [
    { id: 'all', label: 'Tutti', icon: '📚' },
    ...Object.values(CATEGORIES).map((cat) => ({
      id: cat.id as PromptCategory,
      label: cat.label,
      icon: cat.icon,
    })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 ${
            activeCategory === cat.id
              ? 'bg-accent text-accent-foreground shadow-md'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          <span className="text-lg">{cat.icon}</span>
          <span className="text-sm font-medium">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
