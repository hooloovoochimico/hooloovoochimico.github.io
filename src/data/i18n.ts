export type Lang = 'en' | 'it';

export const ui = {
  en: {
    title: 'Angelo Moroni — Custom AI & software for small businesses',
    description:
      'Freelance software developer. Custom AI integrations for small and medium businesses, web and mobile apps, automation.',
    nav: { services: 'Services', process: 'How I work', projects: 'Projects', contact: 'Contact' },
    hello: "Hi, I'm Angelo Moroni",
    headline: 'AI that actually fits how your business works.',
    tagline:
      'I help small and medium businesses use AI and custom software where it saves real time: assistants that know your documents, automations that remove repetitive work, apps built around your processes.',
    meta: 'Freelance software developer · Santhià · Rome · remote across Italy',
    ctaPrimary: "Let's talk about your project",
    ctaSecondary: 'See my work',
    servicesTitle: 'Services',
    servicesIntro: 'From a first prototype to a tool your team uses every day.',
    processTitle: 'How I work',
    processIntro: 'Small steps, clear costs, something working early.',
    projectsTitle: 'Things I built',
    projectsIntro: 'Personal and open-source projects that show the kind of work I do.',
    code: 'Code',
    live: 'Live',
    skillsTitle: 'Tech I work with',
    contactTitle: "Let's talk",
    contactText:
      'Tell me what slows your business down or what you would like to build. The first conversation is just about understanding the problem, with no commitment.',
    contactCta: 'Write me an email',
    switchLang: 'Italiano',
  },
  it: {
    title: 'Angelo Moroni — AI e software su misura per PMI',
    description:
      'Sviluppatore software freelance. Integrazioni AI su misura per piccole e medie imprese, app web e mobile, automazioni.',
    nav: { services: 'Servizi', process: 'Come lavoro', projects: 'Progetti', contact: 'Contatti' },
    hello: 'Ciao, sono Angelo Moroni',
    headline: "L'intelligenza artificiale, su misura per la tua azienda.",
    tagline:
      'Aiuto piccole e medie imprese a usare AI e software su misura dove fanno risparmiare tempo davvero: assistenti che conoscono i vostri documenti, automazioni che eliminano il lavoro ripetitivo, app costruite attorno ai vostri processi.',
    meta: 'Sviluppatore software freelance · Santhià · Roma · da remoto in tutta Italia',
    ctaPrimary: 'Parliamo del tuo progetto',
    ctaSecondary: 'Guarda i miei lavori',
    servicesTitle: 'Servizi',
    servicesIntro: 'Dal primo prototipo allo strumento che il tuo team usa ogni giorno.',
    processTitle: 'Come lavoro',
    processIntro: 'Passi piccoli, costi chiari, qualcosa di funzionante fin da subito.',
    projectsTitle: 'Cosa ho costruito',
    projectsIntro: 'Progetti personali e open source che mostrano il tipo di lavoro che faccio.',
    code: 'Codice',
    live: 'Demo',
    skillsTitle: 'Tecnologie',
    contactTitle: 'Parliamone',
    contactText:
      'Raccontami cosa rallenta la tua attività o cosa vorresti costruire. Il primo confronto serve solo a capire il problema, senza impegno.',
    contactCta: 'Scrivimi una email',
    switchLang: 'English',
  },
} as const;

export const services: { icon: string; title: Record<Lang, string>; text: Record<Lang, string>; examples: Record<Lang, string[]> }[] = [
  {
    icon: '✦',
    title: { en: 'Custom AI integrations', it: 'Integrazioni AI su misura' },
    text: {
      en: 'Assistants and agents connected to your data and tools, running on the model that fits your budget and privacy needs (Claude, GPT, Gemini or open models).',
      it: 'Assistenti e agenti collegati ai vostri dati e strumenti, sul modello più adatto a budget e privacy (Claude, GPT, Gemini o modelli open).',
    },
    examples: {
      en: ['Q&A over manuals, contracts, procedures', 'Email and document triage', 'Telegram / WhatsApp / web chatbots'],
      it: ['Risposte da manuali, contratti, procedure', 'Smistamento di email e documenti', 'Chatbot su Telegram, WhatsApp, sito web'],
    },
  },
  {
    icon: '⟳',
    title: { en: 'Process automation', it: 'Automazione dei processi' },
    text: {
      en: 'Remove repetitive work between the tools you already use: spreadsheets, email, calendars, management software.',
      it: 'Elimino il lavoro ripetitivo tra gli strumenti che già usate: fogli di calcolo, email, calendari, gestionali.',
    },
    examples: {
      en: ['Data extraction from PDFs and invoices', 'Automatic reports', 'Integrations between existing systems'],
      it: ['Estrazione dati da PDF e fatture', 'Report automatici', 'Integrazione tra sistemi esistenti'],
    },
  },
  {
    icon: '▢',
    title: { en: 'Web apps and portals', it: 'Web app e portali' },
    text: {
      en: 'Custom web tools for your team or your clients: reserved areas, dashboards, internal tools.',
      it: 'Strumenti web su misura per il team o i clienti: aree riservate, dashboard, gestionali interni.',
    },
    examples: {
      en: ['Client portals', 'Internal dashboards', 'Booking and request management'],
      it: ['Portali clienti', 'Dashboard interne', 'Gestione richieste e prenotazioni'],
    },
  },
  {
    icon: '▯',
    title: { en: 'Mobile apps', it: 'App mobile' },
    text: {
      en: 'Android and iOS apps with Kotlin Multiplatform: one codebase, native performance. Over ten years of Android experience.',
      it: 'App Android e iOS con Kotlin Multiplatform: un solo codice, prestazioni native. Oltre dieci anni di esperienza su Android.',
    },
    examples: {
      en: ['New apps from scratch', 'Modernising existing apps', 'Offline-first apps'],
      it: ['App nuove da zero', 'Modernizzazione di app esistenti', 'App che funzionano offline'],
    },
  },
];

export const steps: { title: Record<Lang, string>; text: Record<Lang, string> }[] = [
  {
    title: { en: 'Understand', it: 'Capire' },
    text: {
      en: 'A call to understand your problem and where software can actually help, and where it cannot.',
      it: 'Una call per capire il problema e dove il software può aiutare davvero, e dove no.',
    },
  },
  {
    title: { en: 'Propose', it: 'Proporre' },
    text: {
      en: 'A written proposal with scope, timeline and a fixed or capped cost.',
      it: 'Una proposta scritta con obiettivi, tempi e costo fisso o con un tetto massimo.',
    },
  },
  {
    title: { en: 'Prototype', it: 'Prototipare' },
    text: {
      en: 'A working version in a few weeks, tested on your real data.',
      it: 'Una prima versione funzionante in poche settimane, provata sui vostri dati reali.',
    },
  },
  {
    title: { en: 'Deliver and support', it: 'Consegnare e seguire' },
    text: {
      en: 'Deployment, documentation, training for your team and ongoing support.',
      it: 'Messa in produzione, documentazione, formazione del team e assistenza nel tempo.',
    },
  },
];
