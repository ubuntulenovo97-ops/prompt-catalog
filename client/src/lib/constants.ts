/**
 * Organic Warm & Accessible Design System
 * Constants and sample data for Prompt Catalog
 */

import { CategoryConfig, Prompt } from '@/types';

export const CATEGORIES: Record<string, CategoryConfig> = {
  image: {
    id: 'image',
    label: 'Generazione Immagini',
    icon: '🎨',
    color: '#D97757',
    description: 'Prompt per generare immagini con AI',
  },
  text: {
    id: 'text',
    label: 'Testo & Scrittura',
    icon: '✍️',
    color: '#7B9E89',
    description: 'Prompt per generare e modificare testi',
  },
  strategy: {
    id: 'strategy',
    label: 'Strategia & Analisi',
    icon: '🎯',
    color: '#A89968',
    description: 'Prompt per analisi strategiche e pianificazione',
  },
};

export const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'Paesaggio Montano Cinematico',
    content: 'Create a breathtaking cinematic landscape of snow-capped mountains at sunset, with golden light reflecting off pristine snow, dramatic clouds, and a serene alpine lake in the foreground. Ultra-realistic, 8K resolution, professional photography style.',
    category: 'image',
    description: 'Perfetto per generare sfondi e immagini di paesaggi montani',
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
    tags: ['paesaggio', 'montagna', 'natura'],
  },
  {
    id: '2',
    title: 'Articolo Blog Professionale',
    content: 'Scrivi un articolo blog di 1500 parole su [TOPIC]. Lo stile deve essere professionale ma accessibile, con una struttura chiara (introduzione, 3-4 sezioni principali, conclusione). Includi esempi pratici e dati rilevanti. Tono: informativo e coinvolgente.',
    category: 'text',
    description: 'Template per generare articoli blog di qualità',
    createdAt: new Date('2026-01-14'),
    updatedAt: new Date('2026-01-14'),
    tags: ['blog', 'articolo', 'scrittura'],
  },
  {
    id: '3',
    title: 'Analisi SWOT Strategica',
    content: 'Analizza [AZIENDA/PRODOTTO] con una matrice SWOT completa. Per ogni quadrante (Strengths, Weaknesses, Opportunities, Threats), fornisci 5-7 punti specifici e dettagliati. Includi raccomandazioni strategiche basate sull\'analisi.',
    category: 'strategy',
    description: 'Prompt per analisi strategiche dettagliate',
    createdAt: new Date('2026-01-13'),
    updatedAt: new Date('2026-01-13'),
    tags: ['strategia', 'analisi', 'business'],
  },
  {
    id: '4',
    title: 'Personaggio Fantasy Dettagliato',
    content: 'Create a detailed fantasy character portrait: a mysterious elf sorceress with intricate magical tattoos, flowing ethereal robes, holding an ornate staff glowing with arcane energy. Mystical atmosphere, dramatic lighting, fantasy art style, highly detailed, 4K.',
    category: 'image',
    description: 'Per creare personaggi fantasy dettagliati e affascinanti',
    createdAt: new Date('2026-01-12'),
    updatedAt: new Date('2026-01-12'),
    tags: ['fantasy', 'personaggio', 'arte'],
  },
  {
    id: '5',
    title: 'Email Marketing Persuasiva',
    content: 'Scrivi un\'email di marketing persuasiva per [PRODOTTO/SERVIZIO]. Struttura: subject line accattivante, opening hook, 3 benefici chiave, social proof/testimonial, CTA forte. Tono: conversazionale ma professionale. Lunghezza: 150-200 parole.',
    category: 'text',
    description: 'Template per email marketing ad alta conversione',
    createdAt: new Date('2026-01-11'),
    updatedAt: new Date('2026-01-11'),
    tags: ['email', 'marketing', 'persuasione'],
  },
  {
    id: '6',
    title: 'Piano di Crescita Startup',
    content: 'Sviluppa un piano di crescita dettagliato per una startup nel settore [SETTORE]. Includi: target market, strategie di acquisizione, metriche KPI, timeline 12 mesi, budget allocation, rischi e mitigazioni.',
    category: 'strategy',
    description: 'Framework per pianificare la crescita di startup',
    createdAt: new Date('2026-01-10'),
    updatedAt: new Date('2026-01-10'),
    tags: ['startup', 'crescita', 'pianificazione'],
  },
];
