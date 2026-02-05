# Brainstorming Design - Prompt Catalog

## Contesto
Un'applicazione web per catalogare e gestire prompt divisi per categorie (immagini, testo, strategia). L'interfaccia deve essere intuitiva, responsive, ottimizzata per mobile-first e facilitare la copia rapida dei prompt.

---

## Idea 1: Minimalismo Funzionale Moderno (Probabilità: 0.08)

<response>
<text>
### Design Movement
**Bauhaus Digitale** - Semplicità estrema, funzionalità prima di tutto, griglia rigorosa

### Core Principles
1. **Spazio Negativo Generoso** - Ampi margini e padding creano respiro e chiarezza
2. **Tipografia Gerarchica Forte** - Contrasti marcati tra titoli (bold, grande) e corpo (light, piccolo)
3. **Monocromatico con Accenti Mirati** - Palette neutra (bianco, grigio, nero) con un colore accent (arancione) solo per azioni critiche
4. **Componenti Geometrici Puri** - Rettangoli, linee, cerchi senza decorazioni

### Color Philosophy
- **Background**: Bianco puro (#FFFFFF) per massima leggibilità
- **Text Primary**: Grigio scuro (#1A1A1A) per contrasto ottimale
- **Accent**: Arancione vivace (#FF6B35) per pulsanti "Copia" e azioni primarie
- **Secondary**: Grigio chiaro (#F5F5F5) per card e separatori
- **Reasoning**: Minimalismo che riduce distrazioni, l'arancione cattura l'attenzione su azioni importanti

### Layout Paradigm
- **Sidebar Verticale Sinistra** (sticky) con categorie e filtri
- **Griglia Asimmetrica nel Main**: Card di prompt in layout 2-colonne su desktop, 1-colonna su mobile
- **Header Minimale**: Solo logo e search bar
- **Footer Invisibile**: Informazioni nascoste in menu hamburger

### Signature Elements
1. **Card Prompt Minimalista** - Bordo sottile grigio, padding interno 16px, nessuna ombra
2. **Pulsante Copia Circolare** - Icona copy in cerchio arancione, hover: sfondo più scuro
3. **Separatori Orizzontali Sottili** - Linee grigio chiaro per dividere sezioni

### Interaction Philosophy
- **Hover Sottile**: Cambio colore di sfondo (grigio #F9F9F9) senza animazione
- **Click Immediato**: Feedback istantaneo con cambio colore pulsante
- **Transizioni Rapide**: 150ms per hover, 100ms per click
- **No Animations**: Movimento ridotto, focus su funzionalità

### Animation
- **Fade-in**: Categorie si caricano con fade 200ms al mount
- **Slide Drawer**: Sidebar su mobile scorre da sinistra in 250ms
- **Pulse Copia**: Pulsante copia fa un breve pulse (scale 1.05) al click, poi ritorna

### Typography System
- **Display**: Montserrat Bold 28px per titoli sezione
- **Heading**: Inter SemiBold 18px per titoli card
- **Body**: Inter Regular 14px per testo prompt
- **Label**: Inter Medium 12px per categorie e tag
</text>
<probability>0.08</probability>
</response>

---

## Idea 2: Glassmorphism Contemporaneo (Probabilità: 0.07)

<response>
<text>
### Design Movement
**Neumorphismo Moderno** - Effetti glass, blur, e profondità soft per un look premium

### Core Principles
1. **Trasparenza Stratificata** - Livelli di vetro con blur progressivo creano profondità
2. **Ombre Soft e Diffuse** - Nessuna ombra dura, solo blur e sfumature
3. **Colori Saturi ma Armoniosi** - Palette fredda (blu, teal, viola) con sfumature
4. **Micro-interazioni Fluide** - Ogni elemento reagisce dolcemente all'interazione

### Color Philosophy
- **Background Gradient**: Da blu scuro (#0F172A) a viola profondo (#2D1B69)
- **Glass Cards**: Bianco semi-trasparente (rgba(255,255,255,0.1)) con backdrop-filter blur
- **Text**: Bianco puro (#FFFFFF) per contrasto su sfondo scuro
- **Accent**: Teal luminoso (#06D6A0) per pulsanti e hover
- **Secondary Accent**: Viola chiaro (#A78BFA) per elementi secondari
- **Reasoning**: Eleganza moderna, sensazione di profondità, focus su contenuto

### Layout Paradigm
- **Asymmetric Hero Section**: Immagine grande a sinistra, filtri a destra (su desktop)
- **Card Floating**: Prompt card "galleggiano" sopra il background con glassmorphism
- **Sticky Top Bar**: Barra di ricerca/filtri fissa in alto con glass effect
- **Sidebar Collapsibile**: Categorie in sidebar che si ripiega su mobile

### Signature Elements
1. **Card Glassmorphic**: Sfondo semi-trasparente con blur, bordo sottile bianco, ombra soft
2. **Pulsante Copia Glow**: Icona copy con glow teal, hover: intensità aumenta
3. **Separatori Gradient**: Linee sottili con gradiente teal-viola

### Interaction Philosophy
- **Hover Glow**: Card si illumina con glow teal, testo diventa più luminoso
- **Click Ripple**: Effetto ripple teal dal punto di click
- **Smooth Transitions**: 300ms per hover, 200ms per click
- **Parallax Leggero**: Scroll parallax su hero section

### Animation
- **Entrance Staggered**: Card entrano con fade + slide-up staggerato (50ms offset)
- **Glow Pulse**: Pulsante copia ha glow che pulsa lentamente (2s loop)
- **Backdrop Blur**: Al hover della card, blur aumenta leggermente
- **Scroll Reveal**: Categorie appaiono con fade al scroll

### Typography System
- **Display**: Poppins Bold 32px per titoli (font moderna e geometrica)
- **Heading**: Poppins SemiBold 20px per titoli card
- **Body**: Inter Regular 15px per testo prompt (leggibile su sfondo scuro)
- **Label**: Inter Medium 13px per tag e categorie
</text>
<probability>0.07</probability>
</response>

---

## Idea 3: Organico Caldo e Accessibile (Probabilità: 0.06)

<response>
<text>
### Design Movement
**Soft Modernism** - Forme organiche, colori caldi, accessibilità come priorità

### Core Principles
1. **Forme Arrotondate Generose** - Bordi radius 16-24px per sensazione amichevole
2. **Palette Terrosa e Naturale** - Beige, ocra, verde salvia, terracotta
3. **Spazi Respiranti** - Padding generoso, gap ampi tra elementi
4. **Accessibilità Integrata** - Alto contrasto, font leggibile, icone chiare

### Color Philosophy
- **Background**: Beige caldo (#FBF7F2) per sensazione accogliente
- **Primary Text**: Marrone scuro (#3E3E3E) per leggibilità
- **Accent Primary**: Terracotta (#D97757) per pulsanti "Copia"
- **Accent Secondary**: Verde salvia (#7B9E89) per categorie
- **Card Background**: Bianco sporco (#FEFDFB) con bordo terracotta sottile
- **Reasoning**: Calore umano, naturale, accogliente; palette che riduce affaticamento visivo

### Layout Paradigm
- **Sidebar Organico Sinistra**: Categorie con icone illustrate, bordi arrotondati
- **Masonry Layout Asimmetrico**: Card di diverse altezze in layout masonry (Pinterest-style)
- **Hero Section Illustrato**: Illustrazione custom in alto (non foto)
- **Bottom Navigation Mobile**: Categorie in tab bar inferiore su mobile

### Signature Elements
1. **Card Organica**: Bordi radius 16px, ombra soft beige, icona categoria illustrata in alto
2. **Pulsante Copia Organico**: Forma arrotondata (radius 12px), terracotta, icona copy stilizzata
3. **Separatori Organici**: Linee ondulate leggere tra sezioni

### Interaction Philosophy
- **Hover Caldo**: Card cambia sfondo a beige più scuro, ombra aumenta
- **Click Gentle**: Pulsante copia cambia colore a terracotta più scuro senza animazione aggressiva
- **Transizioni Smooth**: 250ms per hover, 150ms per click
- **Feedback Tattile**: Sensazione di pressione simulata

### Animation
- **Entrance Dolce**: Card entrano con fade + scale (0.95 → 1) staggerato
- **Bounce Leggero**: Pulsante copia ha bounce leggero (scale 1.08) al hover
- **Pulse Copia**: Al click, pulsante fa pulse terracotta (opacity 0.7 → 1)
- **Scroll Smooth**: Scroll comportamento smooth, nessun parallax aggressivo

### Typography System
- **Display**: Crimson Text Bold 36px per titoli (serif elegante e caldo)
- **Heading**: Outfit SemiBold 22px per titoli card (font geometrica moderna)
- **Body**: Inter Regular 16px per testo prompt (leggibile su sfondo caldo)
- **Label**: Outfit Medium 14px per categorie (coerente con heading)
</text>
<probability>0.06</probability>
</response>

---

## Design Scelto: **Organico Caldo e Accessibile**

Ho scelto l'**Idea 3** come approccio principale per il Prompt Catalog. Questa filosofia di design offre:

✅ **Accessibilità Naturale**: Alto contrasto, font leggibili, icone chiare - perfetto per un'app di produttività
✅ **Calore Umano**: Palette terrosa e forme organiche creano un'atmosfera accogliente e non fredda
✅ **Usabilità Mobile-First**: Layout masonry e bottom navigation sono ideali per dispositivi mobili
✅ **Differenziazione Visiva**: Icone illustrate per categorie rendono il catalogo visivamente interessante
✅ **Funzionalità Prioritaria**: Spazi respiranti e gerarchia chiara facilitano la navigazione e la copia rapida

### Palette Colori Finale
- **Background**: #FBF7F2 (beige caldo)
- **Text Primary**: #3E3E3E (marrone scuro)
- **Accent Primary**: #D97757 (terracotta)
- **Accent Secondary**: #7B9E89 (verde salvia)
- **Card**: #FEFDFB (bianco sporco)

### Font Stack
- **Display**: Crimson Text (serif elegante)
- **Heading**: Outfit (geometrica moderna)
- **Body**: Inter (leggibile e professionale)

### Elementi Distintivi
1. **Card Organica** con icona categoria illustrata
2. **Pulsante Copia Arrotondato** in terracotta
3. **Separatori Ondulati** tra sezioni
4. **Bottom Navigation** per mobile
5. **Masonry Layout** per visual interest
