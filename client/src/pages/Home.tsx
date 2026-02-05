/**
 * Organic Warm & Accessible Design System
 * Home Page - Main Prompt Catalog Interface
 */

import { useState } from 'react';
import { PromptCard } from '@/components/PromptCard';
import { PromptModal } from '@/components/PromptModal';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SearchBar } from '@/components/SearchBar';
import { SortDropdown } from '@/components/SortDropdown';
import { usePrompts } from '@/hooks/usePrompts';
import { Prompt } from '@/types';

export default function Home() {
  const { prompts, filters, updateFilters } = usePrompts();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="display text-2xl font-bold text-foreground">
                📚 Prompt Catalog
              </h1>
              <p className="text-sm text-muted-foreground">
                Il tuo catalogo personale di prompt
              </p>
            </div>
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden rounded-full bg-accent p-2.5 text-accent-foreground"
              title="Toggle filters"
            >
              ⚙️
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Search and Sort Bar */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <SearchBar
              value={filters.searchTerm}
              onChange={(term) => updateFilters({ searchTerm: term })}
              placeholder="Cerca per titolo, descrizione o tag..."
            />
          </div>
          <div className="flex gap-2">
            <SortDropdown
              value={filters.sortBy}
              onChange={(sort) => updateFilters({ sortBy: sort })}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className={`mb-8 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
          <CategoryFilter
            activeCategory={filters.category}
            onCategoryChange={(cat) => updateFilters({ category: cat })}
          />
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {prompts.length} prompt{prompts.length !== 1 ? 's' : ''} trovato
            {prompts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Prompts Grid */}
        {prompts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {prompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onViewFull={setSelectedPrompt}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-card py-16 text-center">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="heading mb-2 text-lg">Nessun prompt trovato</h3>
            <p className="text-muted-foreground">
              Prova a modificare i filtri o la ricerca
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-6 text-center text-sm text-muted-foreground">
        <p>
          Prompt Catalog • Ottimizzato per Cloudflare Pages • Mobile-first design
        </p>
      </footer>

      {/* Prompt Modal */}
      {selectedPrompt && (
        <PromptModal
          prompt={selectedPrompt}
          isOpen={!!selectedPrompt}
          onClose={() => setSelectedPrompt(null)}
        />
      )}
    </div>
  );
}
