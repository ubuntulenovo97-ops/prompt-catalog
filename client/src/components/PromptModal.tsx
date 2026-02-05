/**
 * Organic Warm & Accessible Design System
 * PromptModal Component - Full prompt view with copy functionality
 */

import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Prompt } from '@/types';
import { CATEGORIES } from '@/lib/constants';

interface PromptModalProps {
  prompt: Prompt;
  isOpen: boolean;
  onClose: () => void;
}

export function PromptModal({ prompt, isOpen, onClose }: PromptModalProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card text-card-foreground shadow-xl">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h2 className="heading text-xl font-semibold">{prompt.title}</h2>
              <p className="text-xs text-muted-foreground">{category.label}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted"
            title="Chiudi"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 px-6 py-6">
          {/* Description */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
              Descrizione
            </h3>
            <p className="text-foreground">{prompt.description}</p>
          </div>

          {/* Full Prompt Content */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
              Prompt Completo
            </h3>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="whitespace-pre-wrap text-sm text-foreground">
                {prompt.content}
              </p>
            </div>
          </div>

          {/* Tags */}
          {prompt.tags && prompt.tags.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
                Tag
              </h3>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              Creato il {prompt.createdAt.toLocaleDateString('it-IT')} •{' '}
              {prompt.updatedAt.toLocaleDateString('it-IT')}
            </p>
          </div>
        </div>

        {/* Footer with Copy Button */}
        <div className="sticky bottom-0 flex gap-3 border-t border-border bg-card px-6 py-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            Chiudi
          </button>
          <button
            onClick={handleCopy}
            className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-accent-foreground transition-all"
            style={{
              backgroundColor: isCopied ? '#7B9E89' : '#D97757',
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
          >
            {isCopied ? (
              <>
                <Check className="h-4 w-4" />
                Copiato!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copia Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
