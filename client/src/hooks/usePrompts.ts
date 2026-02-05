/**
 * Organic Warm & Accessible Design System
 * Custom hook for managing prompts state
 */

import { useState, useMemo } from 'react';
import { Prompt, FilterState, PromptCategory } from '@/types';
import { SAMPLE_PROMPTS } from '@/lib/constants';

export function usePrompts() {
  const [prompts, setPrompts] = useState<Prompt[]>(SAMPLE_PROMPTS);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    promptType: 'all',
    searchTerm: '',
    sortBy: 'newest',
  });

  const filteredAndSortedPrompts = useMemo(() => {
    let result = [...prompts];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Filter by prompt type
    if (filters.promptType !== 'all') {
      result = result.filter((p) => p.promptType === filters.promptType);
    }

    // Filter by search term
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.content.toLowerCase().includes(term) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    // Sort
    switch (filters.sortBy) {
      case 'oldest':
        result.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        break;
      case 'alphabetical':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    return result;
  }, [prompts, filters]);

  const addPrompt = (prompt: Omit<Prompt, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPrompt: Prompt = {
      ...prompt,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setPrompts([newPrompt, ...prompts]);
  };

  const updatePrompt = (id: string, updates: Partial<Prompt>) => {
    setPrompts(
      prompts.map((p) =>
        p.id === id
          ? { ...p, ...updates, updatedAt: new Date() }
          : p
      )
    );
  };

  const deletePrompt = (id: string) => {
    setPrompts(prompts.filter((p) => p.id !== id));
  };

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    prompts: filteredAndSortedPrompts,
    allPrompts: prompts,
    filters,
    updateFilters,
    addPrompt,
    updatePrompt,
    deletePrompt,
  };
}
