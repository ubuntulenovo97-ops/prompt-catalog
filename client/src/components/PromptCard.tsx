/**
 * Organic Warm & Accessible Design System
 * PromptCard Component - Displays individual prompt with copy functionality
 */

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Prompt } from '@/types';
import { CATEGORIES } from '@/lib/constants';

interface PromptCardProps {
  prompt: Prompt;
  onDelete?: (id: string) => void;
  onViewFull?: (prompt: Prompt) => void;
}

export function PromptCard({ prompt, onDelete, onViewFull }: PromptCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const category = CATEGORIES[prompt.category];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer" onClick={() => onViewFull?.(prompt)}>
      {/* Category Badge and Prompt Type */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{category.icon}</span>
          <span className="label text-sm font-medium" style={{ color: category.color }}>
            {category.label}
          </span>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
          prompt.promptType === 'positive'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}>
          {prompt.promptType === 'positive' ? '✅ Positive' : '❌ Negative'}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        {/* Title */}
        <h3 className="heading text-lg font-semibold leading-tight">
          {prompt.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {prompt.description}
        </p>

        {/* Preview of content */}
        <div className="line-clamp-3 rounded-lg bg-muted/30 p-3 text-xs text-foreground/70 cursor-pointer hover:bg-muted/50 transition-colors">
          {prompt.content}
        </div>

        {/* Tags */}
        {prompt.tags && prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {prompt.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-secondary/20 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
            {prompt.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{prompt.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer with Actions */}
      <div className="flex items-center justify-between border-t border-border px-5 py-3">
        <span className="text-xs text-muted-foreground">
          {prompt.createdAt.toLocaleDateString('it-IT')}
        </span>

        {/* Copy Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          className="group/btn relative inline-flex items-center justify-center rounded-full p-2.5 transition-all duration-200"
          style={{
            backgroundColor: isCopied ? '#7B9E89' : '#D97757',
            color: '#FEFDFB',
          }}
          onMouseEnter={(e) => {
            if (!isCopied) {
              e.currentTarget.style.backgroundColor = '#C85A54';
            }
          }}
          onMouseLeave={(e) => {
            if (!isCopied) {
              e.currentTarget.style.backgroundColor = '#D97757';
            }
          }}
          title="Copia prompt negli appunti"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
