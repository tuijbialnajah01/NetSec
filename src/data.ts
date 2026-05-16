export type Category = 
  | 'Privacy & Security Tools' 
  | 'Search & Directories' 
  | 'Forums & Info' 
  | 'Historical Black Markets' 
  | 'Myths & Legends';

export interface WebEntity {
  id: string;
  name: string;
  category: Category;
  explanation: string;
  link?: string;
  isShutDown?: boolean;
}

export const webEntities: WebEntity[] = [
  // Privacy & Security Tools (Safe, Legal, highly recommended for cybersecurity)
  {
    id: 'tor',
    name: 'Tor (The Onion Router)',
    category: 'Privacy & Security Tools',
    explanation: 'The literal backbone of the dark web, but actually created by US Naval Research. It routes your internet traffic through multiple encrypted layers across the globe, hiding your location and identity. Used widely by journalists and activists in oppressive regimes.',
    link: 'https://www.torproject.org/'
  },
  {
    id: 'protonmail',
    name: 'ProtonMail',
    category: 'Privacy & Security Tools',
    explanation: 'A highly secure, end-to-end encrypted email service based in Switzerland. It ensures that even Proton cannot read your emails. Often used by privacy advocates and those wanting to step away from data-mining giants.',
    link: 'https://proton.me/'
  },
  {
    id: 'signal',
    name: 'Signal',
    category: 'Privacy & Security Tools',
    explanation: 'The gold standard for secure messaging. It uses end-to-end encryption so only you and the receiver can read the messages. It is completely open-source and run by a non-profit.',
    link: 'https://signal.org/'
  },
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    category: 'Privacy & Security Tools',
    explanation: 'A popular search engine that refuses to track your searches or build a profile on you. It also serves as a gateway to the Tor network because it runs an official .onion search version.',
    link: 'https://duckduckgo.com/'
  },
  {
    id: 'keybase',
    name: 'Keybase',
    category: 'Privacy & Security Tools',
    explanation: 'An app that links public identities (like Twitter or GitHub) to encryption keys. It allows you to prove you are really you across the internet and securely share files or messages.',
    link: 'https://keybase.io/'
  },
  {
    id: 'securedrop',
    name: 'SecureDrop',
    category: 'Privacy & Security Tools',
    explanation: 'An open-source whistleblower submission system. Media organizations use it to securely and anonymously receive documents and tips from anonymous sources (like the Snowden leaks).',
    link: 'https://securedrop.org/'
  },
  {
    id: 'wasabi-wallet',
    name: 'Wasabi Wallet',
    category: 'Privacy & Security Tools',
    explanation: "A privacy-focused Bitcoin wallet. It uses a technique called CoinJoin, which mixes your Bitcoin with other users' Bitcoin to obscure the transaction history and protect your financial privacy.",
    link: 'https://wasabiwallet.io/'
  },
  {
    id: 'zeronet',
    name: 'ZeroNet',
    category: 'Privacy & Security Tools',
    explanation: 'A decentralized web-like network using Bitcoin cryptography and BitTorrent technology. Instead of servers hosting websites, users host the websites they visit, making them virtually impossible to take down.',
    link: 'https://zeronet.io/'
  },

  // Search Engines & Directories (Navigating the dark web)
  {
    id: 'hidden-wiki',
    name: 'The Hidden Wiki',
    category: 'Search & Directories',
    explanation: 'Think of this as the Wikipedia or Yellow Pages of the dark web. It holds crowdsourced links to various .onion websites since standard search engines like Google cannot see them. Note: There are many fake/scam versions of it now.'
  },
  {
    id: 'ahmia',
    name: 'Ahmia',
    category: 'Search & Directories',
    explanation: 'A clearnet search engine for the dark web. It allows you to search for Tor hidden services (.onion links) from a normal browser, though you still need Tor to actually visit them. It filters out child abuse material.'
  },
  {
    id: 'haystak',
    name: 'Haystak',
    category: 'Search & Directories',
    explanation: 'One of the most popular dark web search engines. It claims to index over 1.5 billion pages and provides a very "Google-like" experience for navigating the Tor network.'
  },
  {
    id: 'torch',
    name: 'Torch',
    category: 'Search & Directories',
    explanation: 'One of the oldest search engines on the Tor network. It indexes a massive amount of hidden services and does not censor search results.'
  },
  {
    id: 'not-evil',
    name: 'Not Evil',
    category: 'Search & Directories',
    explanation: "A search engine on the Tor network that (ironically named after Google's old motto) indexes dark web sites without serving ads or tracking user behavior."
  },
  {
    id: 'kilos',
    name: 'Kilos',
    category: 'Search & Directories',
    explanation: 'A highly controversial search engine specifically designed to search across dark web markets for drugs, vendors, and illegal services. It evolved from older market search tools.'
  },
  {
    id: 'onionland',
    name: 'OnionLand',
    category: 'Search & Directories',
    explanation: 'A search engine and directory that helps users discover Tor hidden services and provides statistics on the dark web.'
  },
  {
    id: 'darkero',
    name: 'Darkero / Dexpose',
    category: 'Search & Directories',
    explanation: 'These act as link directories or aggregators, often providing both clearnet gateways and dark web links to help users find active URLs for markets or forums.'
  },
  {
    id: 'vormweb',
    name: 'VormWeb',
    category: 'Search & Directories',
    explanation: 'Another directory and search portal designed to categorize and index active onion links.'
  },

  // Forums & Info
  {
    id: 'dread',
    name: 'Dread',
    category: 'Forums & Info',
    explanation: 'Essentially the "Reddit of the Dark Web." When Reddit banned several controversial communities, users moved to Dread. It is widely used to review black markets, discuss cybersecurity, and share guides.'
  },
  {
    id: 'scihub',
    name: 'Sci-Hub',
    category: 'Forums & Info',
    explanation: 'A shadow library that bypasses publisher paywalls to provide free access to millions of academic papers and research articles. Heroic to many students, illegal according to publishers.',
    link: 'https://sci-hub.se/'
  },
  {
    id: 'breachforums',
    name: 'BreachForums',
    category: 'Forums & Info',
    explanation: 'An infamous hacking and cybercrime forum where massive stolen databases (from company data breaches) are sold or leaked to the public. Regularly tracked by global intelligence agencies.',
    isShutDown: true
  },
  {
    id: 'propublica',
    name: 'ProPublica',
    category: 'Forums & Info',
    explanation: 'A Pulitzer Prize-winning investigative journalism publication. They created a dark web (.onion) version of their website to allow whistleblowers to leak information safely and anonymously.',
    link: 'https://www.propublica.org/'
  },
  {
    id: 'anonhacker',
    name: 'AHD Anonhacker',
    category: 'Forums & Info',
    explanation: 'Typically refers to hacktivist groups or associated forums where individuals share hacking tools, political agendas, and coordinate cyber-attacks.'
  },

  // Historical Black Markets
  {
    id: 'silk-road',
    name: 'Silk Road',
    category: 'Historical Black Markets',
    explanation: 'The granddaddy of them all. The first modern darknet market, created by Ross Ulbricht. It revolutionized the illegal drug trade using Tor and Bitcoin before the FBI spectacularly shut it down in 2013.',
    isShutDown: true
  },
  {
    id: 'alphabay',
    name: 'AlphaBay',
    category: 'Historical Black Markets',
    explanation: 'Once the largest dark web market in history (10x bigger than Silk Road), selling everything from drugs to stolen credit cards. It was taken down in 2017 in a massive global police operation.',
    isShutDown: true
  },
  {
    id: 'dream-road',
    name: 'Dream Market',
    category: 'Historical Black Markets',
    explanation: 'One of the longest-running dark web markets. It strangely shut down "voluntarily" in 2019, leading many to suspect law enforcement had silently taken control to catch buyers.',
    isShutDown: true
  },
  {
    id: 'empire-market',
    name: 'Empire Market',
    category: 'Historical Black Markets',
    explanation: "Rose to power after AlphaBay and Dream Market died. However, the admins abruptly stole all the users' money (an \"exit scam\") in 2020 and vanished into the digital night.",
    isShutDown: true
  },
  {
    id: 'wall-street-market',
    name: 'Wall Street Market',
    category: 'Historical Black Markets',
    explanation: 'A massive market that suffered an exit scam attempt by its admins, only for them to mistakenly leave digital footprints that allowed German police to track them down and arrest them offline in 2019.',
    isShutDown: true
  },
  {
    id: 'the-armory',
    name: 'The Armory',
    category: 'Historical Black Markets',
    explanation: 'A spinoff from the original Silk Road focused entirely on selling firearms. It actually failed organically because moving heavy physical weapons through international mail is drastically harder than moving pills.',
    isShutDown: true
  },
  {
    id: 'tochka',
    name: 'Tochka Market',
    category: 'Historical Black Markets',
    explanation: 'Also known as Point Market, a prominent Russian-speaking dark web market. Dark web markets often fracture along geographical and language lines.',
    isShutDown: true
  },
  {
    id: 'abacus-styx',
    name: 'Abacus & STYX Markets',
    category: 'Historical Black Markets',
    explanation: 'Represent the newer generation of markets and forums. Styx specifically gained notoriety as a financial cybercrime hub dealing in money laundering and stolen identities.'
  },

  // Myths
  {
    id: 'red-room',
    name: 'Red Room',
    category: 'Myths & Legends',
    explanation: 'An urban legend claiming there are hidden sites where people pay to watch live-streamed tortures/murders. In reality, the Tor network is terribly slow—it can barely load a thumbnail, let alone a 4K livestream. It simply exists to scare people or scam them out of Bitcoin.'
  }
];
