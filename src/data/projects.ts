import type { Lang } from './i18n';

const GH = 'https://github.com/chemickypes';

export interface Project {
  name: string;
  repo?: string;
  live?: string;
  store?: string;
  image?: string;
  tags: string[];
  summary: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    name: 'HPDFViewer',
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
    repo: `${GH}/hbible`,
    tags: ['Kotlin Multiplatform', 'Compose', 'Android', 'iOS', 'AI'],
    summary: {
      en: 'A Bible study app for Android and iOS: Hebrew/Greek interlinear word by word, Strong lexicon, cross-references, notes and search, all offline. Optional AI assistant with your own API key (OpenAI, Anthropic, Gemini).',
      it: 'App di studio biblico per Android e iOS: interlineare ebraico/greco parola per parola, lessico di Strong, rimandi, note e ricerca, tutto offline. Assistente AI facoltativo con la propria chiave (OpenAI, Anthropic, Gemini).',
    },
  },
  {
    name: 'Termina Launcher',
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
    repo: `${GH}/AnClaw-Telegram-AI-Agent-`,
    tags: ['Python', 'Agno', 'Gemini', 'Multi-agent'],
    summary: {
      en: 'A personal AI assistant on Telegram. An Architect agent reads each message and assembles a team at runtime from a catalog of agents (search, scraping, YouTube, files, calendar, Drive, code), so simple questions stay cheap and complex ones scale up.',
      it: 'Assistente AI personale su Telegram. Un agente "architetto" analizza ogni messaggio e compone al volo un team da un catalogo di agenti (ricerca, scraping, YouTube, file, calendario, Drive, codice): le domande semplici costano poco, quelle complesse scalano.',
    },
  },
  {
    name: 'Yellow Racer',
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
  { group: { en: 'AI & backend', it: 'AI e backend' }, items: ['Python', 'LLM agents', 'Claude Code', 'Claude / OpenAI / Gemini APIs', 'Agno', 'TypeScript'] },
  { group: { en: 'Data', it: 'Dati' }, items: ['GeoPandas', 'scikit-learn', 'SQL', 'Leaflet'] },
  { group: { en: 'Embedded', it: 'Embedded' }, items: ['C++', 'ESP32', 'Arduino', 'PlatformIO'] },
];
