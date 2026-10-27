import type { Lang } from './i18n';

const GH = 'https://github.com/chemickypes';

export interface Project {
  name: string;
  repo?: string;
  live?: string;
  store?: string;
  image?: string;
  tags: string[];
  tone: 'navy' | 'teal' | 'ink' | 'yellow' | 'violet' | 'pink' | 'gray';
  summary: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    name: 'HPDFViewer',
    tone: 'navy',
    store: 'https://play.google.com/store/apps/details?id=com.hooloovoochimico.hpdfviewer',
    image: '/img/hpdfviewer.png',
    tags: ['Kotlin', 'Jetpack Compose', 'Android', 'Claude Code'],
    summary: {
      en: 'An Android app to read, fill in, sign and share PDFs, live on Google Play. Built with a team of AI coding agents (Claude Code): spec, task waves, parallel branches and AI review, with me as architect and reviewer.',
      it: "App Android per leggere, compilare, firmare e condividere PDF, pubblicata su Google Play. Costruita con un team di agenti AI (Claude Code): specifiche, task a ondate, branch in parallelo e revisione automatica, con me nel ruolo di architetto e revisore.",
    },
  },
  {
    name: 'HBible',
    tone: 'teal',
    repo: `${GH}/hbible`,
    tags: ['Kotlin Multiplatform', 'Compose', 'Android', 'iOS', 'AI'],
    summary: {
      en: 'A Bible study app for Android and iOS: Hebrew/Greek interlinear word by word, Strong lexicon, cross-references, notes and search, all offline. Optional AI assistant with your own API key (OpenAI, Anthropic, Gemini).',
      it: 'App di studio biblico per Android e iOS: interlineare ebraico/greco parola per parola, lessico di Strong, rimandi, note e ricerca, tutto offline. Assistente AI facoltativo con la propria chiave (OpenAI, Anthropic, Gemini).',
    },
  },
  {
    name: 'Termina Launcher',
    tone: 'ink',
    repo: `${GH}/termina-launcher`,
    image: '/img/termina.png',
    tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    summary: {
      en: 'An Android home screen reimagined as a terminal. Type `chrome` to launch an app, `ls` to browse files, `/battery` for your charge. Themes and bash-style aliases in a `.terminarc` file.',
      it: 'La home di Android trasformata in un terminale. Scrivi `chrome` per aprire un\'app, `ls` per sfogliare i file, `/battery` per la carica. Temi e alias in stile bash in un file `.terminarc`.',
    },
  },
  {
    name: 'AnClaw',
    tone: 'yellow',
    repo: `${GH}/AnClaw-Telegram-AI-Agent-`,
    tags: ['Python', 'Agno', 'Gemini', 'Multi-agent'],
    summary: {
      en: 'A personal AI assistant on Telegram. An Architect agent reads each message and assembles a team at runtime from a catalog of agents (search, scraping, YouTube, files, calendar, Drive, code), so simple questions stay cheap and complex ones scale up.',
      it: 'Assistente AI personale su Telegram. Un agente "architetto" analizza ogni messaggio e compone al volo un team da un catalogo di agenti (ricerca, scraping, YouTube, file, calendario, Drive, codice): le domande semplici costano poco, quelle complesse scalano.',
    },
  },
  {
    name: 'Yellow Racer',
    tone: 'violet',
    repo: `${GH}/Yellow-Racer`,
    image: '/img/yellow-racer.png',
    tags: ['C++', 'ESP32', 'PlatformIO', 'Game dev'],
    summary: {
      en: 'A pseudo-3D racer in the style of Pole Position for the ESP32 "Cheap Yellow Display". Projected-segment renderer with curves and hills, 8-bit double buffering, touch controls, ~25 FPS without PSRAM.',
      it: 'Un racing pseudo-3D in stile Pole Position per la scheda ESP32 "Cheap Yellow Display". Renderer a segmenti proiettati con curve e salite, double buffer a 8 bit, comandi touch, ~25 FPS senza PSRAM.',
    },
  },
  {
    name: 'Redrawing Italy\'s Provinces',
    tone: 'pink',
    repo: `${GH}/map-project`,
    live: 'https://chemickypes.github.io/map-project/',
    tags: ['Python', 'GeoPandas', 'scikit-learn', 'Leaflet'],
    summary: {
      en: 'What if every Italian municipality joined the province whose capital is closest? A Voronoi-style reassignment of 7,896 comuni: 27% would change province. Interactive map and infographic.',
      it: 'E se ogni comune italiano passasse alla provincia col capoluogo più vicino? Una riassegnazione in stile Voronoi di 7.896 comuni: il 27% cambierebbe provincia. Mappa interattiva e infografica.',
    },
  },
  {
    name: 'YT WrAIter',
    tone: 'gray',
    repo: `${GH}/YTWrAIter`,
    tags: ['Python', 'Cheshire Cat AI', 'LLM'],
    summary: {
      en: 'A Cheshire Cat AI plugin that fetches YouTube transcripts and uses them for writing tasks such as summaries and translations.',
      it: 'Plugin per Cheshire Cat AI che recupera le trascrizioni dei video YouTube e le usa per scrivere riassunti, traduzioni e altro.',
    },
  },
];

export const skills: { group: Record<Lang, string>; items: string[] }[] = [
  { group: { en: 'Mobile', it: 'Mobile' }, items: ['Kotlin', 'Jetpack Compose', 'Kotlin Multiplatform', 'Android SDK', 'Flutter'] },
  { group: { en: 'AI & backend', it: 'AI e backend' }, items: ['Python', 'LLM agents', 'Claude Code', 'OpenCode', 'Z.ai GLM', 'Claude / OpenAI / Gemini APIs', 'Agno', 'TypeScript'] },
  { group: { en: 'Data', it: 'Dati' }, items: ['GeoPandas', 'scikit-learn', 'SQL', 'Leaflet'] },
  { group: { en: 'Embedded', it: 'Embedded' }, items: ['C++', 'ESP32', 'Arduino', 'PlatformIO'] },
];

export interface Job {
  product: string;
  years: string;
  role: string;
  tone: Project['tone'];
  link?: string;
  status: 'live' | 'closed';
  summary: Record<Lang, string>;
}

export const jobs: Job[] = [
  {
    product: 'FIFA+',
    years: '2022 — 2026',
    role: 'Android Senior Engineer · Chili Tech, Globant',
    tone: 'ink',
    status: 'closed',
    summary: {
      en: "FIFA's official streaming platform for global football. Core contributor to the mobile and Android TV apps: complex video playback and UI in Jetpack Compose and Media3/ExoPlayer, tuned for everything from budget phones to large TV screens. The standalone service has since moved to DAZN.",
      it: 'La piattaforma streaming ufficiale della FIFA per il calcio mondiale. Core contributor delle app mobile e Android TV: riproduzione video complessa e interfacce in Jetpack Compose e Media3/ExoPlayer, ottimizzate dagli smartphone economici ai grandi schermi TV. Il servizio è poi confluito in DAZN.',
    },
  },
  {
    product: 'CHILI',
    years: '2022 — 2023',
    role: 'Android Senior Developer · Chili Tech',
    tone: 'pink',
    link: 'https://it.chili.com',
    status: 'live',
    summary: {
      en: 'Italian video-on-demand platform for renting and buying films. Built and maintained streaming features for CHILI and ITsArt on mobile and Android TV, with a focus on memory, playback stability and consistency across devices.',
      it: 'Piattaforma italiana di video on demand per noleggiare e acquistare film. Ho sviluppato e mantenuto le funzionalità di streaming di CHILI e ITsArt su mobile e Android TV, curando memoria, stabilità della riproduzione e coerenza tra dispositivi.',
    },
  },
  {
    product: 'HYPE',
    years: '2015 — 2021',
    role: 'Android Developer & Team Leader · Bemind Interactive',
    tone: 'teal',
    link: 'https://www.hype.it',
    status: 'live',
    summary: {
      en: 'One of the leading Italian challenger banks. I led the Android team from the early stages to millions of active users: app architecture, security standards for financial services, code reviews and mentoring.',
      it: "Una delle principali challenger bank italiane. Ho guidato il team Android dalle prime fasi fino a milioni di utenti attivi: architettura dell'app, standard di sicurezza per i servizi finanziari, code review e mentoring.",
    },
  },
];

export const earlier: { years: string; text: Record<Lang, string> }[] = [
  {
    years: '2014 — 2015',
    text: {
      en: 'Android Developer at Datawizard (Pharmawizard app), training new Android developers.',
      it: 'Android Developer in Datawizard (app Pharmawizard), formazione dei nuovi sviluppatori Android.',
    },
  },
  {
    years: '2009 — 2013',
    text: {
      en: "BSc in Computer Science, University of Rome Tor Vergata (105/110). Thesis on geolocation and Voronoi maps.",
      it: 'Laurea in Informatica, Università di Roma Tor Vergata (105/110). Tesi su geolocalizzazione e mappe di Voronoi.',
    },
  },
];
