export type Lang = 'en' | 'it';

export const ui = {
  en: {
    title: 'Angelo Moroni — Developer',
    description:
      'Android, Kotlin Multiplatform and Python developer. Mobile apps, AI agents, embedded games and data projects.',
    nav: { projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hello: "Hi, I'm",
    tagline:
      'I build mobile apps with Kotlin and Compose, AI agents in Python, and the occasional game for a tiny screen.',
    role: 'Software developer @ Globant',
    location: 'Santhià · Rome, Italy',
    projectsTitle: 'Selected projects',
    projectsIntro: 'Things I built recently that I am happy to show.',
    code: 'Code',
    live: 'Live',
    skillsTitle: 'What I work with',
    olderTitle: 'From the archive',
    olderIntro:
      'Older Android open-source work, still around because people starred it.',
    contactTitle: 'Get in touch',
    contactText: 'Open to interesting projects and collaborations.',
    switchLang: 'Italiano',
  },
  it: {
    title: 'Angelo Moroni — Sviluppatore',
    description:
      'Sviluppatore Android, Kotlin Multiplatform e Python. App mobile, agenti AI, giochi embedded e progetti sui dati.',
    nav: { projects: 'Progetti', skills: 'Competenze', contact: 'Contatti' },
    hello: 'Ciao, sono',
    tagline:
      'Sviluppo app mobile con Kotlin e Compose, agenti AI in Python e, ogni tanto, un gioco per uno schermo minuscolo.',
    role: 'Sviluppatore software @ Globant',
    location: 'Santhià · Roma',
    projectsTitle: 'Progetti in evidenza',
    projectsIntro: 'Cose che ho costruito di recente e che mostro volentieri.',
    code: 'Codice',
    live: 'Demo',
    skillsTitle: 'Con cosa lavoro',
    olderTitle: "Dall'archivio",
    olderIntro:
      'Vecchi progetti open source Android, rimasti online perché qualcuno li ha messi tra i preferiti.',
    contactTitle: 'Contatti',
    contactText: 'Disponibile per progetti e collaborazioni interessanti.',
    switchLang: 'English',
  },
} as const;
