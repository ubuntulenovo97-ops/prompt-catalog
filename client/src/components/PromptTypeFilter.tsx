/**
 * Organic Warm & Accessible Design System
 * PromptTypeFilter Component - Filter prompts by type (positive/negative)
 */

import { PromptType } from '@/types';

interface PromptTypeFilterProps {
  activeType: PromptType | 'all';
  onTypeChange: (type: PromptType | 'all') => void;
}

export function PromptTypeFilter({ activeType, onTypeChange }: PromptTypeFilterProps) {
  const types: Array<{ id: PromptType | 'all'; label: string; icon: string }> = [
    { id: 'all', label: 'Tutti', icon: '✨' },
    { id: 'positive', label: 'Positive Prompt', icon: '✅' },
    { id: 'negative', label: 'Negative Prompt', icon: '❌' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => (
        <button
          key={type.id}
          onClick={() => onTypeChange(type.id)}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 ${
            activeType === type.id
              ? 'bg-secondary text-secondary-foreground shadow-md'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          <span className="text-lg">{type.icon}</span>
          <span className="text-sm font-medium">{type.label}</span>
        </button>
      ))}
    </div>
  );
}
