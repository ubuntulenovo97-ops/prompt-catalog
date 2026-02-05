/**
 * Organic Warm & Accessible Design System
 * Type definitions for Prompt Catalog
 */

export type PromptCategory = 'image' | 'text' | 'strategy';
export type PromptType = 'positive' | 'negative';

export interface Prompt {
  id: string;
  title: string;
  content: string;
  category: PromptCategory;
  promptType: PromptType;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}

export interface CategoryConfig {
  id: PromptCategory;
  label: string;
  icon: string;
  color: string;
  description: string;
}

export interface FilterState {
  category: PromptCategory | 'all';
  promptType: PromptType | 'all';
  searchTerm: string;
  sortBy: 'newest' | 'oldest' | 'alphabetical';
}
