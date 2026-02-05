/**
 * Organic Warm & Accessible Design System
 * SortDropdown Component - Sort prompts by different criteria
 */

import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  value: 'newest' | 'oldest' | 'alphabetical';
  onChange: (value: 'newest' | 'oldest' | 'alphabetical') => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const options = [
    { value: 'newest' as const, label: 'Più recenti' },
    { value: 'oldest' as const, label: 'Più vecchi' },
    { value: 'alphabetical' as const, label: 'Alfabetico' },
  ];

  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as any)}
        className="appearance-none rounded-full border border-border bg-card py-2 pl-3 pr-9 text-sm font-medium text-foreground transition-all hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
