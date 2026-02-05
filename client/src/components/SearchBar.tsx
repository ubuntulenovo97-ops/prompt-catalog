/**
 * Organic Warm & Accessible Design System
 * SearchBar Component - Search and filter prompts
 */

import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Cerca prompt...',
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-10 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          title="Cancella ricerca"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
