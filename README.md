# Prompt Catalog Manager

Un'applicazione web moderna per catalogare, organizzare e gestire prompt AI divisi per categorie di utilizzo. Perfetto per professionisti che lavorano con modelli di linguaggio e generatori di immagini.

## 🎯 Caratteristiche

- **📚 Catalogo Organizzato**: Dividi prompt in 3 categorie principali
  - 🎨 Generazione Immagini
  - ✍️ Testo & Scrittura
  - 🎯 Strategia & Analisi

- **🔍 Ricerca Avanzata**: Cerca per titolo, descrizione, tag o contenuto

- **⚡ Copia Rapida**: Un click per copiare il prompt negli appunti

- **📱 Mobile-First**: Design responsive ottimizzato per tutti i dispositivi

- **🌐 Cloudflare Pages**: Deploy automatico da GitHub con zero latenza globale

- **♿ Accessibile**: Design inclusivo con alto contrasto e navigazione intuitiva

## 🚀 Quick Start

### Installazione

```bash
# Clonare il repository
git clone https://github.com/yourusername/prompt-catalog.git
cd prompt-catalog

# Installare dipendenze
pnpm install

# Avviare dev server
pnpm dev
```

Il sito sarà disponibile su `http://localhost:3000`

### Build per Produzione

```bash
pnpm build
```

Output: `dist/public/` (pronto per Cloudflare Pages)

## 📋 Struttura del Progetto

```
prompt-catalog/
├── client/
│   ├── src/
│   │   ├── components/        # Componenti React
│   │   │   ├── PromptCard.tsx
│   │   │   ├── PromptModal.tsx
│   │   │   ├── CategoryFilter.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SortDropdown.tsx
│   │   ├── hooks/
│   │   │   └── usePrompts.ts  # State management
│   │   ├── lib/
│   │   │   └── constants.ts   # Dati di esempio
│   │   ├── types/
│   │   │   └── index.ts       # TypeScript definitions
│   │   ├── pages/
│   │   │   └── Home.tsx       # Pagina principale
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css          # Stili globali
│   └── public/
│       ├── _redirects         # SPA routing
│       └── _headers           # Security headers
├── CLOUDFLARE_DEPLOY.md       # Guida deploy
└── package.json
```

## 🎨 Design System

### Palette Colori (Organico Caldo)

- **Background**: #FBF7F2 (beige caldo)
- **Text Primary**: #3E3E3E (marrone scuro)
- **Accent Primary**: #D97757 (terracotta)
- **Accent Secondary**: #7B9E89 (verde salvia)
- **Card**: #FEFDFB (bianco sporco)

### Font Stack

- **Display**: Crimson Text (serif elegante)
- **Heading**: Outfit (geometrica moderna)
- **Body**: Inter (leggibile professionale)

## 🔧 Utilizzo

### Aggiungere un Nuovo Prompt

Modifica `client/src/lib/constants.ts`:

```typescript
export const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: 'unique-id',
    title: 'Titolo Prompt',
    content: 'Contenuto completo del prompt...',
    category: 'image', // 'image' | 'text' | 'strategy'
    description: 'Breve descrizione',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['tag1', 'tag2'],
  },
  // ... altri prompt
];
```

### Personalizzare Categorie

Modifica `client/src/lib/constants.ts` - oggetto `CATEGORIES`:

```typescript
export const CATEGORIES: Record<string, CategoryConfig> = {
  image: {
    id: 'image',
    label: 'Generazione Immagini',
    icon: '🎨',
    color: '#D97757',
    description: 'Prompt per generare immagini con AI',
  },
  // ... altre categorie
};
```

## 🌐 Deploy su Cloudflare Pages

### Metodo 1: Deploy Automatico (Consigliato)

1. **Connettere GitHub**:
   - Vai a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Pages → Create a project → Connect to Git
   - Seleziona il repository

2. **Configurare Build**:
   - Build command: `npm run build`
   - Build output directory: `dist/public`

3. **Deploy**:
   - Ogni push su `main` triggera un deploy automatico
   - URL: `https://prompt-catalog.pages.dev`

### Metodo 2: Deploy Manuale

```bash
# Installare Wrangler
npm install -g wrangler

# Autenticarsi
wrangler login

# Deploy
wrangler pages deploy dist/public
```

Vedi [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md) per dettagli completi.

## 📦 Dipendenze Principali

- **React 19**: UI framework
- **Vite 7**: Build tool
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Styling
- **shadcn/ui**: Component library
- **Wouter**: Client-side routing
- **Lucide React**: Icons

## ♿ Accessibilità

- Alto contrasto (WCAG AA compliant)
- Navigazione da tastiera
- Icone con label testuale
- Font leggibile (16px minimo)
- Focus ring visibile

## 📱 Responsive Design

- **Mobile**: 1 colonna, bottom navigation
- **Tablet**: 2 colonne, sidebar collapsibile
- **Desktop**: 3 colonne, sidebar fisso

## 🔒 Sicurezza

- Content Security Policy headers
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 🚀 Prossimi Passi

### Versione 2.0 (Futura)

- [ ] Database D1 per persistenza dati
- [ ] Autenticazione utente
- [ ] Sincronizzazione cloud
- [ ] Export/Import JSON
- [ ] Dark mode
- [ ] Condivisione prompt
- [ ] Collaborazione team

## 📄 Licenza

MIT

## 🤝 Contribuire

1. Fork il repository
2. Crea un branch feature (`git checkout -b feature/amazing-feature`)
3. Commit i cambiamenti (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📞 Support

Per domande o problemi:
- Apri un issue su GitHub
- Consulta [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md)
- Visita [Cloudflare Community](https://community.cloudflare.com/)

---

**Creato con ❤️ per professionisti AI**
