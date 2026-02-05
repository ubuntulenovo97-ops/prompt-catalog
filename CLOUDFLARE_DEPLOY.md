# Guida al Deploy su Cloudflare Pages

## Panoramica

Questo progetto è un'applicazione React statica ottimizzata per il deploy su **Cloudflare Pages**. L'applicazione cataloga prompt divisi per categorie (immagini, testo, strategia) con funzionalità di ricerca, filtro e copia rapida.

## Prerequisiti

- Account Cloudflare attivo
- Repository GitHub connesso a Cloudflare Pages
- Node.js 22+ e pnpm 10+

## Configurazione Iniziale

### 1. Connettere Repository GitHub a Cloudflare Pages

1. Accedi a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Seleziona **Pages** dal menu laterale
3. Clicca **Create a project** → **Connect to Git**
4. Autorizza Cloudflare ad accedere al tuo account GitHub
5. Seleziona il repository `prompt-catalog`
6. Clicca **Begin setup**

### 2. Configurare Build e Deploy

Nella schermata di configurazione del progetto:

**Project name**: `prompt-catalog`

**Production branch**: `main`

**Build command**: `npm run build`

**Build output directory**: `dist/public`

**Environment variables**: (Nessuno richiesto per questa versione statica)

Clicca **Save and Deploy**

## Struttura del Progetto

```
prompt-catalog/
├── client/
│   ├── public/
│   │   ├── _redirects      # Routing SPA
│   │   └── _headers        # Header di sicurezza
│   ├── src/
│   │   ├── components/     # Componenti React
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilità e costanti
│   │   ├── pages/          # Pagine
│   │   ├── types/          # Definizioni TypeScript
│   │   ├── App.tsx         # Componente principale
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Stili globali
│   └── index.html
├── server/                 # Placeholder (non usato in Pages)
├── wrangler.toml          # Configurazione Cloudflare Workers
├── package.json
└── vite.config.ts
```

## Flusso di Deploy

### Deploy Automatico (Consigliato)

1. **Push su GitHub**:
   ```bash
   git add .
   git commit -m "feat: initial commit"
   git push origin main
   ```

2. **Cloudflare Pages rileva il push** e avvia automaticamente:
   - Build: `npm run build`
   - Deploy: Carica `dist/public` su Cloudflare Edge

3. **Verifica il deploy**:
   - Dashboard Cloudflare Pages mostra lo stato
   - URL di anteprima: `https://<branch>.<project>.pages.dev`
   - URL di produzione: `https://<project>.pages.dev`

### Deploy Manuale (Alternativa)

```bash
# Installare Wrangler CLI
npm install -g wrangler

# Autenticarsi
wrangler login

# Deploy
wrangler pages deploy dist/public
```

## Configurazione Avanzata

### Variabili d'Ambiente

Se in futuro aggiungerai API o configurazioni, crea un file `.env.example`:

```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Prompt Catalog
```

Aggiungi le variabili reali nel Cloudflare Dashboard:
1. Pages → Progetto → Settings → Environment variables
2. Aggiungi per **Production** e **Preview**

### Custom Domain

1. Cloudflare Dashboard → Pages → Progetto → Custom domains
2. Clicca **Add custom domain**
3. Inserisci il dominio (es. `prompts.example.com`)
4. Segui le istruzioni DNS

### Rollback

Se un deploy ha problemi:
1. Dashboard Pages → Deployments
2. Seleziona un deploy precedente
3. Clicca **Rollback to this deployment**

## Ottimizzazioni Cloudflare Pages

### Cache Control

Il file `_headers` configura:
- **Assets**: Cache 1 anno (immutable)
- **HTML**: No cache (always fresh)
- **Security headers**: CSP, X-Frame-Options, etc.

### Routing SPA

Il file `_redirects` reindirizza tutte le rotte a `index.html` per il routing lato client con React Router.

### Edge Caching

Cloudflare Pages distribuisce il sito su edge server globali per latenza minima.

## Monitoraggio e Analytics

### Cloudflare Analytics

1. Dashboard Pages → Progetto → Analytics
2. Visualizza:
   - Richieste totali
   - Larghezza di banda
   - Errori 4xx/5xx
   - Paesi di provenienza

### Logs

1. Dashboard Pages → Progetto → Deployments
2. Seleziona un deploy
3. Visualizza build log e deploy status

## Troubleshooting

### Build fallisce

**Problema**: "npm run build" fallisce
**Soluzione**:
1. Verifica `package.json` ha script `build`
2. Controlla `vite.config.ts` per errori
3. Esegui localmente: `npm run build`

### Sito non carica

**Problema**: Pagina bianca o 404
**Soluzione**:
1. Verifica `_redirects` esiste in `client/public/`
2. Controlla build output: `dist/public/index.html` deve esistere
3. Cancella cache Cloudflare: Dashboard → Caching → Purge Cache

### Stile non applica

**Problema**: CSS non carica
**Soluzione**:
1. Verifica Tailwind build in `dist/public/assets/`
2. Controlla `_headers` per Cache-Control
3. Forza refresh: Ctrl+Shift+R (hard refresh)

## Aggiornamenti Futuri

### Aggiungere Database (D1)

Se vuoi persistenza dati:
1. `webdev_add_feature` con `web-db-user`
2. Crea D1 database
3. Aggiungi binding in Pages Settings
4. Implementa Pages Functions in `functions/`

### Aggiungere Autenticazione

1. Abilita Manus OAuth in Pages Settings
2. Usa `context.env.JWT_SECRET` nelle Pages Functions
3. Implementa login/logout flow

## Riferimenti

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Router Docs](https://reactrouter.com/)

## Support

Per domande o problemi:
1. Controlla [Cloudflare Status](https://www.cloudflarestatus.com/)
2. Consulta [Cloudflare Community](https://community.cloudflare.com/)
3. Apri issue su GitHub
