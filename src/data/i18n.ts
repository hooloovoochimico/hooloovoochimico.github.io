export type Lang = 'en' | 'it';

export const ui = {
  en: {
    title: 'Angelo Moroni — Software developer',
    description:
      'Software developer: Android and Kotlin Multiplatform apps, Python, AI agents. I use AI throughout my workflow to build faster and better.',
    nav: { about: 'About', projects: 'Projects', contact: 'Contact' },
    hello: "Hi, I'm Angelo Moroni",
    headline: 'I build apps and software, and AI is part of the team.',
    tagline:
      'Software developer between Santhià and Rome. I have been building Android apps for over ten years; today I work mostly with Kotlin Multiplatform, Python and AI agents.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'See my work',
    aboutTitle: 'How I work',
    about: [
      'AI is part of my daily workflow: I use coding agents like Claude Code, and OpenCode with Z.ai models, to plan, write, test and review software, while design decisions and quality stay in my hands. That lets me take a small project from idea to store in weeks rather than months.',
      'I like building things that people actually use: an app on the Play Store, a bot that answers on Telegram, a map that changes how you look at your region. Most of the projects below were born from a concrete need.',
    ],
    projectsTitle: 'Projects',
    projectsIntro: 'Some things I built and keep alive.',
    code: 'Code',
    live: 'Live',
    store: 'Google Play',
    skillsTitle: 'Tech I work with',
    contactTitle: 'Have an idea or a problem to solve?',
    contactText:
      'An app, an internal tool, or a way to bring AI into how your business works: I bring the same AI-assisted workflow I use on my own projects. Write me, even just to talk it through.',
    contactCta: 'Write me an email',
    switchLang: 'Italiano',
  },
  it: {
    title: 'Angelo Moroni — Sviluppatore software',
    description:
      'Sviluppatore software: app Android e Kotlin Multiplatform, Python, agenti AI. Uso l\'intelligenza artificiale in tutto il mio flusso di lavoro.',
    nav: { about: 'Chi sono', projects: 'Progetti', contact: 'Contatti' },
    hello: 'Ciao, sono Angelo Moroni',
    headline: "Costruisco app e software e l'AI è parte del team.",
    tagline:
      'Sviluppatore software tra Santhià e Roma. Faccio app Android da oltre dieci anni; oggi lavoro soprattutto con Kotlin Multiplatform, Python e agenti AI.',
    ctaPrimary: 'Contattami',
    ctaSecondary: 'Guarda i progetti',
    aboutTitle: 'Come lavoro',
    about: [
      "L'intelligenza artificiale fa parte del mio lavoro di ogni giorno: uso agenti di sviluppo come Claude Code e OpenCode con i modelli di Z.ai per progettare, scrivere, testare e rivedere il codice, mentre le scelte di progetto e la qualità restano in mano mia. Così un progetto piccolo passa dall'idea allo store in settimane invece che in mesi.",
      'Mi piace costruire cose che le persone usano davvero: un\'app sul Play Store, un bot che risponde su Telegram, una mappa che cambia il modo di guardare il proprio territorio. Quasi tutti i progetti qui sotto sono nati da un bisogno concreto.',
    ],
    projectsTitle: 'Progetti',
    projectsIntro: 'Alcune cose che ho costruito e che tengo vive.',
    code: 'Codice',
    live: 'Demo',
    store: 'Google Play',
    skillsTitle: 'Tecnologie',
    contactTitle: 'Hai un\'idea o un problema da risolvere?',
    contactText:
      "Un'app, uno strumento interno o un modo per portare l'AI nel lavoro della tua azienda: porto lo stesso metodo che uso sui miei progetti, con l'AI integrata in ogni fase. Scrivimi, anche solo per parlarne.",
    contactCta: 'Scrivimi una email',
    switchLang: 'English',
  },
} as const;
