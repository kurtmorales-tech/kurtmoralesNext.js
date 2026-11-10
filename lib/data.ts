/**
 * Site content for KM Web Design.
 *
 * Everything on the site reads from this file — there is no backend
 * and no API call. Copy was carried over from the original build's
 * fallback data (apps/web/src/lib/fallback.ts and the section
 * components) so the words on the page are the original words.
 * Edit here to change services, projects, templates, posts, etc.
 */

export interface Project {
  id: string;
  title: string;
  type: string;
  tech: string;
  description: string;
  link: string;
}

export interface SiteTemplate {
  id: string;
  title: string;
  description: string;
  tech: string;
  thumbnail: string;
  thumbnailAlt: string;
  demoUrl?: string;
  sourceUrl?: string;
  tags: string[];
  featured: boolean;
  price: number;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readTime: string;
  tags: string[];
}

export interface PackagePlan {
  title: string;
  desc: string;
  /** Lowest price this track starts at. Leave undefined for custom-quoted work. */
  price?: number;
  items: string[];
  featured?: boolean;
}

export const site = {
  name: 'KM Web Design',
  url: 'https://kmwebdesign.xyz',
  email: 'hello@kmwebdesign.xyz',
  tagline: 'Las Vegas restaurant web design',
  startingPrice: 299,
  homeTitle: 'Restaurant Web Design Las Vegas | KM Web Design',
  homeDescription:
    'Custom restaurant websites in Las Vegas from $299. Fast, mobile-first builds with online menus, reservations, ordering, and local SEO.',
};

export const heroCapabilities: string[] = [
  'Restaurant-first strategy and design',
  'Mobile menus built for hungry guests',
  'Reservations, ordering, and POS integrations',
  'Fast Cloudflare-ready deployment',
];

export interface DemoMenuItem {
  name: string;
  note?: string;
  price: string;
}

export interface DemoMenuSection {
  title: string;
  kicker?: string;
  items: DemoMenuItem[];
}

export interface DemoHours {
  days: string;
  hours: string;
}

/**
 * Content for a live demo restaurant site. The demo pages under
 * /demos/[slug] are real, working pages a client can open and scroll — the
 * menus, hours and neighbourhoods in here are sample content for the demo.
 */
export interface DemoContent {
  slug: string;
  tagline: string;
  bestFor: string;
  /** Background, accent, ink — the three colours the direction is built from. */
  palette: [string, string, string];
  hero: {
    kicker: string;
    title: string;
    emphasis: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  story: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  menu: {
    kicker: string;
    title: string;
    note: string;
    sections: DemoMenuSection[];
  };
  visit: {
    kicker: string;
    title: string;
    hours: DemoHours[];
    location: string;
    note: string;
  };
  close: {
    title: string;
    text: string;
    cta: string;
  };
}

export interface Concept {
  title: string;
  category: string;
  image: string;
  alt: string;
  summary: string;
  accent: string;
  demo: DemoContent;
}

export const concepts: Concept[] = [
  {
    title: 'Ember & Vine',
    category: 'Fine dining website',
    image: '/portfolio/ember-vine-concept.webp',
    alt: 'Ember and Vine fine-dining restaurant website shown on desktop and mobile',
    summary:
      'A reservation-first experience with private dining, menu storytelling, and an elevated hospitality identity.',
    accent: 'from-[#6f251f]/80 to-[#1d1010]/20',
    demo: {
      slug: 'ember-vine',
      tagline: 'Wood-fired fine dining, built around the reservation.',
      bestFor: 'Steakhouses, tasting menus, special-occasion dining',
      palette: ['#120d0a', '#c9622a', '#ede4d8'],
      hero: {
        kicker: 'Downtown Las Vegas · Wood fire',
        title: 'Cooked over fire.',
        emphasis: 'Poured with intent.',
        text: 'A seasonal menu built around oak, mesquite, and the producers within a day’s drive. Dinner runs long here on purpose.',
        primaryCta: 'Reserve a table',
        secondaryCta: 'Read the menu',
      },
      story: {
        kicker: 'The room',
        title: 'Low light, warm stone, and a hearth at the centre.',
        paragraphs: [
          'The dining room was designed around one focal point: an open hearth running the length of the back wall. Every seat has a view of it. The lighting drops after eight, the room gets louder, and the pace slows down.',
          'Menus change with what the farms send us. The format does not — three courses, a tasting option, and a wine list weighted toward Rhône varieties and older Champagne.',
        ],
      },
      menu: {
        kicker: 'Dinner',
        title: 'Tonight we are serving',
        note: 'Sample menu. Dishes change with the season and what the farms deliver.',
        sections: [
          {
            title: 'To begin',
            items: [
              { name: 'Hearth bread', note: 'cultured butter, smoked salt', price: '$12' },
              { name: 'Roasted bone marrow', note: 'parsley, lemon', price: '$18' },
              { name: 'Little gem', note: 'aged sherry, pecorino', price: '$16' },
            ],
          },
          {
            title: 'From the fire',
            items: [
              { name: '45-day dry-aged ribeye', note: 'black garlic butter', price: '$68' },
              { name: 'Juniper-brined pork chop', note: 'charred apple', price: '$42' },
              { name: 'Coal-roasted branzino', note: 'salsa verde', price: '$44' },
              { name: 'Ember-roasted squash', note: 'brown butter, sage', price: '$28' },
            ],
          },
          {
            title: 'To finish',
            items: [
              { name: 'Basque cheesecake', note: 'burnt honey', price: '$14' },
              { name: 'Dark chocolate tart', note: 'olive oil, sea salt', price: '$15' },
            ],
          },
        ],
      },
      visit: {
        kicker: 'Visit',
        title: 'Find us after dark',
        hours: [
          { days: 'Tuesday – Thursday', hours: '5pm – 10pm' },
          { days: 'Friday – Saturday', hours: '5pm – 11pm' },
          { days: 'Sunday', hours: '5pm – 9pm' },
          { days: 'Monday', hours: 'Closed' },
        ],
        location: 'Downtown Las Vegas, Nevada',
        note: 'Reservations recommended. Walk-ins at the bar.',
      },
      close: {
        title: 'Save your table.',
        text: 'Book online in under a minute. For parties of six or more, call the restaurant directly.',
        cta: 'Reserve a table',
      },
    },
  },
  {
    title: 'Sol y Sabor',
    category: 'Modern Mexican restaurant',
    image: '/portfolio/sol-sabor-concept.webp',
    alt: 'Sol y Sabor Mexican restaurant website shown on desktop and mobile',
    summary:
      'A bold mobile ordering journey designed around visual menus, catering leads, and location discovery.',
    accent: 'from-[#c5533f]/80 to-[#0b5b5d]/20',
    demo: {
      slug: 'sol-sabor',
      tagline: 'Modern Mexican with ordering that works one-handed.',
      bestFor: 'Taquerias, cantinas, fast-casual Mexican',
      palette: ['#f7ecd9', '#e2603f', '#0b5b5d'],
      hero: {
        kicker: 'East Las Vegas · Open late',
        title: 'Bold flavor.',
        emphasis: 'No waiting.',
        text: 'Street tacos, birria, and aguas frescas made fresh daily. Order ahead, skip the line, and pick up without the wait.',
        primaryCta: 'Order pickup',
        secondaryCta: 'See the menu',
      },
      story: {
        kicker: 'Our kitchen',
        title: 'Nixtamal in the morning, mesquite by noon.',
        paragraphs: [
          'We grind corn in house every morning. The tortillas you get at noon were nixtamalized the night before, which is why they taste like corn and not like packaging.',
          'Salsas are made in small batches and rotated weekly. If you want the hot one, ask — it is not on the table by default.',
        ],
      },
      menu: {
        kicker: 'Menu',
        title: 'Made to order',
        note: 'Sample menu. Prices include tax, and there are no service fees at pickup.',
        sections: [
          {
            title: 'Tacos',
            kicker: 'Three per order',
            items: [
              { name: 'Al pastor', note: 'pineapple, onion, cilantro', price: '$6' },
              { name: 'Baja fish', note: 'cabbage, crema', price: '$7' },
              { name: 'Hongos', note: 'salsa macha, queso fresco', price: '$6' },
              { name: 'Birria', note: 'consommé for dipping', price: '$8' },
            ],
          },
          {
            title: 'Platos',
            items: [
              { name: 'Birria de res', note: 'handmade tortillas', price: '$24' },
              { name: 'Enchiladas verdes', note: 'chicken, crema', price: '$20' },
              { name: 'Chile relleno', note: 'roasted corn, salsa roja', price: '$19' },
            ],
          },
          {
            title: 'Bebidas',
            items: [
              { name: 'Michelada', price: '$9' },
              { name: 'Agua fresca del día', price: '$5' },
              { name: 'Mezcal old fashioned', price: '$14' },
            ],
          },
        ],
      },
      visit: {
        kicker: 'Find us',
        title: 'Two blocks off the boulevard',
        hours: [
          { days: 'Monday – Thursday', hours: '11am – 10pm' },
          { days: 'Friday – Saturday', hours: '11am – 12am' },
          { days: 'Sunday', hours: '11am – 9pm' },
        ],
        location: 'East Las Vegas, Nevada',
        note: 'Pickup window on the east side of the building. Catering needs 48 hours.',
      },
      close: {
        title: 'Skip the line tonight.',
        text: 'Order online for pickup, or walk in and eat at the counter.',
        cta: 'Start an order',
      },
    },
  },
  {
    title: 'Desert Bloom Coffee',
    category: 'Coffee shop website',
    image: '/portfolio/desert-bloom-concept.webp',
    alt: 'Desert Bloom Coffee cafe website shown on laptop and mobile',
    summary:
      'A warm neighborhood cafe presence with order-ahead, directions, hours, and catering paths.',
    accent: 'from-[#6d7350]/80 to-[#a57855]/20',
    demo: {
      slug: 'desert-bloom',
      tagline: 'A neighbourhood coffee bar with a menu that loads before you reach the counter.',
      bestFor: 'Cafés, bakeries, coffee bars',
      palette: ['#f6efe4', '#7a8b5a', '#2f2a24'],
      hero: {
        kicker: 'Summerlin · Coffee and bakery',
        title: 'Coffee worth',
        emphasis: 'walking over for.',
        text: 'Single-origin espresso, a rotating bakery case, and a patio that catches the morning sun. Order ahead and it will be waiting on the counter.',
        primaryCta: 'Order ahead',
        secondaryCta: 'See today’s menu',
      },
      story: {
        kicker: 'The bar',
        title: 'Small menu, made properly.',
        paragraphs: [
          'One espresso machine, one grinder for filter, and a bakery case that changes daily. We would rather do six things well than thirty things quickly.',
          'Beans are roasted nearby and rested four days before they hit the hopper. If you want to know what is on bar, ask — the team tastes it every morning.',
        ],
      },
      menu: {
        kicker: 'The counter',
        title: 'On the board today',
        note: 'Sample menu. The bakery rotates daily and sells out most mornings.',
        sections: [
          {
            title: 'Espresso',
            items: [
              { name: 'Cortado', price: '$4.50' },
              { name: 'Flat white', price: '$5' },
              { name: 'Cold brew', note: '18-hour steep', price: '$5.50' },
              { name: 'Batch filter', note: 'bottomless', price: '$3.50' },
            ],
          },
          {
            title: 'Not coffee',
            items: [
              { name: 'Matcha', note: 'oat milk', price: '$6' },
              { name: 'Hojicha latte', price: '$6' },
              { name: 'Desert bloom tonic', note: 'prickly pear, citrus', price: '$6.50' },
            ],
          },
          {
            title: 'Bakery',
            items: [
              { name: 'Cardamom bun', price: '$5' },
              { name: 'Date and walnut loaf', price: '$5.50' },
              { name: 'Savory galette', price: '$7' },
            ],
          },
        ],
      },
      visit: {
        kicker: 'Visit',
        title: 'Morning light, all year',
        hours: [
          { days: 'Every day', hours: '6:30am – 4pm' },
          { days: 'Bakery', hours: 'Until sold out' },
        ],
        location: 'Summerlin, Las Vegas',
        note: 'Street parking on the north side. Dogs welcome on the patio.',
      },
      close: {
        title: 'Your order, ready when you are.',
        text: 'Order ahead for pickup, or come in and stay a while.',
        cta: 'Order ahead',
      },
    },
  },
];

export const metrics = [
  { val: '19+', label: 'Public Repos' },
  { val: '4+', label: 'Badges Earned' },
  { val: '100%', label: 'Responsive' },
  { val: '<1s', label: 'Load Times' },
];

export const services = [
  {
    title: 'Restaurant Websites',
    desc: 'Custom, mobile-first websites that put your food, atmosphere, location, and next action front and center.',
    num: '01',
  },
  {
    title: 'Menus & Integrations',
    desc: 'Easy-to-update menus with reservation, online ordering, gift card, POS, and delivery integrations.',
    num: '02',
  },
  {
    title: 'Local Growth',
    desc: 'Technical SEO, speed, analytics, and conversion improvements that help nearby guests discover and choose you.',
    num: '03',
  },
];

export const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Define your goals, audience, services, competitors, must-have pages, and the primary action visitors should take.',
  },
  {
    num: '02',
    title: 'Structure',
    desc: 'Map the experience, shape conversion-focused content, and set a visual direction that feels clear and trustworthy.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Develop responsive pages with fast-loading assets, SEO basics, accessible markup, and clean reusable components.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Test across devices, connect contact flows, deploy to production, and hand off the next steps for confident ownership.',
  },
];

export const reviews = [
  {
    label: 'Fast turnaround',
    quote:
      'Launch-focused builds with clean milestones, quick feedback loops, and production-ready delivery.',
    name: 'Built for',
    role: 'Small businesses & founders',
  },
  {
    label: 'Clear process',
    quote:
      'Every project starts with goals, audience, pages, content needs, and conversion actions before design begins.',
    name: 'Built for',
    role: 'Structured project planning',
  },
  {
    label: 'Better results',
    quote:
      'Pages are designed around trust, speed, mobile usability, and clear calls-to-action—not just visuals.',
    name: 'Built for',
    role: 'Lead generation & growth',
  },
  {
    label: 'Reliable partner',
    quote:
      'Deployment, responsive QA, performance checks, and post-launch support keep handoff simple.',
    name: 'Built for',
    role: 'Long-term website ownership',
  },
  {
    label: 'Modern build',
    quote:
      'TypeScript-friendly workflows, Cloudflare/Vercel hosting, reusable components, and SEO-conscious structure.',
    name: 'Built for',
    role: 'Scalable digital foundations',
  },
];

export const projects: Project[] = [
  {
    id: 'p10',
    title: 'Ravfia Cleaning Service',
    type: 'Client Website',
    tech: 'Web Design / SEO',
    description:
      'Las Vegas cleaning service website for homes, rentals, and offices — standard, deep, move-out, Airbnb turnover, and office cleaning with fast quote paths.',
    link: 'https://ravfia.online/',
  },
  {
    id: 'p7',
    title: 'Kacm1Network',
    type: 'Platform',
    tech: 'Next.js / TypeScript',
    description:
      'AI-assisted app building platform for planning, building, and deploying full-stack apps on Cloudflare.',
    link: 'https://kacm1network-dev.pages.dev/',
  },
  {
    id: 'p8',
    title: 'Kurt Morales 3D Portfolio',
    type: 'Portfolio',
    tech: 'Three.js / Vite',
    description:
      'Personal portfolio with a real-time WebGL hero, selected work, skills, and a build breakdown of how the site works.',
    link: 'https://portfolio-3d.anthonycabalo2.workers.dev/',
  },
  {
    id: 'p9',
    title: 'Ravfia Line Striping',
    type: 'Client Website',
    tech: 'React / Vite / Tailwind',
    description:
      'Parking lot striping website for a Las Vegas crew — services, ADA checklist, service areas, and free estimate requests.',
    link: 'https://ravfiastrategic0perations.com/',
  },
  {
    id: 'p1',
    title: 'Braids by Kurt Morales',
    type: 'Client Concept',
    tech: 'React / Vite',
    description: 'Boutique hair styling site with booking flow, gallery, and AI-powered consult.',
    link: 'https://github.com/Kacmnetworkk/Braids-by-jairah',
  },
  {
    id: 'p2',
    title: 'RavFia Platform',
    type: 'Platform',
    tech: 'Cloudflare',
    description: 'Open-source platform focused on AI tooling and serverless deployment.',
    link: 'https://github.com/Kacmnetworkk/ravfia',
  },
  {
    id: 'p3',
    title: 'QuickCart',
    type: 'Ecommerce',
    tech: 'Next / Tailwind',
    description: 'Minimal e-commerce starter template made for fast online store launches.',
    link: 'https://github.com/Kacmnetworkk/QuickCart',
  },
  {
    id: 'p4',
    title: 'Cuepal Directory',
    type: 'Directory',
    tech: 'TypeScript',
    description: 'A pool league finder concept connecting players with local game communities.',
    link: 'https://github.com/Kacmnetworkk/Cuepal-Directory',
  },
  {
    id: 'p5',
    title: 'RavFia SecurePass',
    type: 'Web App',
    tech: 'React / Vite / Gemini',
    description:
      'AI-assisted password security app with generator flows, encrypted vault patterns, QR tools, and master-password strength checks.',
    link: 'https://securepass.ravfia.online/',
  },
  {
    id: 'p6',
    title: 'KurtMorales Design',
    type: 'Studio',
    tech: 'Web Design',
    description: 'Brand focused on modern, fast, SEO-conscious websites for local companies.',
    link: 'https://kurtmorales.com',
  },
];

export const packages: PackagePlan[] = [
  {
    title: 'Starter Website',
    desc: 'For personal brands and small service businesses that need a polished online presence.',
    price: 299,
    items: [
      '1–3 core pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact CTA',
      'Deployment support',
    ],
  },
  {
    title: 'Growth Website',
    desc: 'For businesses that need stronger positioning, service pages, and conversion-focused structure.',
    items: [
      '4–8 pages',
      'Conversion-focused copy structure',
      'Portfolio or gallery section',
      'Performance optimization',
      'Analytics-ready setup',
    ],
    featured: true,
  },
  {
    title: 'Custom Build',
    desc: 'For dashboards, booking flows, calculators, directories, and advanced business tools.',
    items: [
      'Custom interface design',
      'TypeScript-friendly architecture',
      'API/integration planning',
      'Admin or workflow logic',
      'Launch and iteration support',
    ],
  },
];

export const templates: SiteTemplate[] = [
  {
    id: 't1',
    title: 'SaaS Dashboard',
    description: 'Modern SaaS dashboard template with dark mode, charts, and responsive layout.',
    tech: 'React / Tailwind / Vite',
    thumbnail: '/template-previews/saas-dashboard.webp',
    thumbnailAlt: 'SaaS Dashboard template preview',
    demoUrl: 'https://saas-dashboard-demo.kurtmorales.com',
    sourceUrl: 'https://github.com/Kacmnetworkk/saas-dashboard',
    tags: ['SaaS', 'Dashboard', 'React'],
    featured: true,
    price: 49,
  },
  {
    id: 't2',
    title: 'Ecommerce Starter',
    description: 'Clean e-commerce starter with product grid, cart, and checkout flow.',
    tech: 'Next.js / Stripe',
    thumbnail: '/template-previews/ecommerce-starter.webp',
    thumbnailAlt: 'Ecommerce Starter template preview',
    demoUrl: 'https://ecommerce-starter-demo.kurtmorales.com',
    sourceUrl: 'https://github.com/Kacmnetworkk/ecommerce-starter',
    tags: ['Ecommerce', 'Next.js', 'Stripe'],
    featured: false,
    price: 0,
  },
  {
    id: 't3',
    title: 'Portfolio Minimal',
    description: 'Minimal portfolio template for creatives with smooth animations.',
    tech: 'React / Tailwind',
    thumbnail: '/template-previews/portfolio-minimal.webp',
    thumbnailAlt: 'Portfolio Minimal template preview',
    demoUrl: 'https://portfolio-minimal-demo.kurtmorales.com',
    sourceUrl: 'https://github.com/Kacmnetworkk/portfolio-minimal',
    tags: ['Portfolio', 'React', 'Minimal'],
    featured: true,
    price: 29,
  },
  {
    id: 't4',
    title: 'SecurePass',
    description:
      'AI-assisted password security template with generator flows, encrypted vault patterns, QR tools, and master-password strength checks.',
    tech: 'React / Vite / Gemini',
    thumbnail: '/template-previews/securepass.webp',
    thumbnailAlt: 'SecurePass template preview',
    demoUrl: 'https://securepass.ravfia.online/',
    sourceUrl: 'https://github.com/Kacmnetworkk/SecurePass',
    tags: ['Security', 'React', 'AI'],
    featured: false,
    price: 0,
  },
  {
    id: 't5',
    title: 'Portfolio Theme',
    description:
      'Clean, responsive portfolio template for freelancers and creatives. Built with semantic HTML, CSS, and vanilla JS — ready for Cloudflare Pages deploy.',
    tech: 'HTML / CSS / JS',
    thumbnail: '/template-previews/portfolio-theme.webp',
    thumbnailAlt: 'Portfolio Theme template preview',
    sourceUrl: 'https://github.com/kurtmorales-tech/km-portfolio-themed',
    tags: ['Portfolio', 'Static', 'Freelance'],
    featured: false,
    price: 0,
  },
];

export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Vite',
  'Tailwind CSS',
  'Cloudflare Pages',
  'Cloudflare Workers',
  'Google Cloud',
  'GitHub',
  'Linux',
  'AI Integration',
  'SEO Fundamentals',
  'Node.js',
  'Bun',
  'SQLite',
];

export const platforms = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kurtanthonymorales/' },
  { name: 'GitHub', url: 'https://github.com/kurtmorales-tech' },
  { name: 'Google Dev', url: 'https://developers.google.com/profile/u/kurtmorales-developer' },
  { name: 'Google Skills', url: 'https://www.skills.google/public_profiles/e568df3b' },
  { name: 'MS Learn', url: 'https://learn.microsoft.com/' },
  { name: 'Facebook', url: 'https://www.facebook.com/kamhypeofficial' },
  { name: 'X', url: 'https://x.com/xkamhype' },
];

export const social = [
  { label: 'GitHub', href: 'https://github.com/kurtmorales-tech' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kurtanthonymorales/' },
  { label: 'X', href: 'https://x.com/xkamhype' },
];

export const focusLanes = [
  'AI-assisted delivery',
  'Solana & Token-2022 tooling',
  'Local service funnels',
  'Cloudflare-fast web apps',
];

export const labNotes = [
  {
    label: 'Build style',
    value: 'Ship small, learn fast, keep the interface sharp.',
  },
  {
    label: 'Writing style',
    value: 'Practical notes from experiments, client builds, and founder work.',
  },
  {
    label: 'Current thesis',
    value: 'Personal sites should feel like living operating systems, not resumes.',
  },
];

export const posts: Post[] = [
  {
    slug: 'how-to-build-a-small-business-website-that-actually-converts',
    title: 'How to Build a Small Business Website That Actually Converts',
    excerpt:
      'A practical guide to planning, writing, and launching a small business website that brings in calls, bookings, and qualified leads.',
    date: '2026-05-08',
    readTime: '7 min read',
    tags: ['Web Design', 'Small Business', 'Conversion'],
  },
  {
    slug: 'how-to-make-your-website-load-faster-without-a-full-redesign',
    title: 'How to Make Your Website Load Faster Without a Full Redesign',
    excerpt:
      'Improve site speed with practical fixes for images, fonts, scripts, and hosting before you commit to a complete rebuild.',
    date: '2026-05-07',
    readTime: '6 min read',
    tags: ['Performance', 'Web Development', 'Core Web Vitals'],
  },
  {
    slug: 'when-dnssec-goes-wrong-how-we-responded-to-the-de-tld-outage-9apsqt',
    title: 'When DNSSEC goes wrong: how we responded to the .de TLD outage',
    excerpt:
      "On May 5, 2026, DENIC published broken DNSSEC signatures for the .de TLD, making millions of domains unreachable. Here's what 1.1.1.1 saw, how serve. A practical take on modern publishing.",
    date: '2026-05-06',
    readTime: '3 min read',
    tags: ['Security', 'Ai Infrastructure', 'Edge Computing', 'Workers', 'Cloudflare'],
  },
  {
    slug: 'how-to-choose-the-right-cms-for-a-service-business-website',
    title: 'How to Choose the Right CMS for a Service Business Website',
    excerpt:
      'Compare the tradeoffs between simple editors, headless CMS setups, and fully custom builds for a service business website.',
    date: '2026-05-06',
    readTime: '7 min read',
    tags: ['CMS', 'Content Strategy', 'Small Business'],
  },
  {
    slug: 'building-cms-for-non-developer-team-members-and-users',
    title: 'Building CMS for Non-Developer Team Members & Users',
    excerpt:
      'How I design CMS workflows that let clients, staff, and non-technical users publish content confidently without touching code.',
    date: '2026-05-05',
    readTime: '6 min read',
    tags: ['CMS', 'UX', 'Clients'],
  },
  {
    slug: 'how-to-write-homepage-copy-that-turns-visitors-into-leads',
    title: 'How to Write Homepage Copy That Turns Visitors Into Leads',
    excerpt:
      'Use clear messaging, trust signals, and strong calls to action to make your homepage easier to understand and easier to convert from.',
    date: '2026-05-05',
    readTime: '6 min read',
    tags: ['Copywriting', 'Conversion', 'Marketing'],
  },
  {
    slug: 'how-to-create-a-landing-page-for-a-local-service-offer',
    title: 'How to Create a Landing Page for a Local Service Offer',
    excerpt:
      'Plan a focused landing page for one service, one audience, and one action without turning it into a mini homepage.',
    date: '2026-05-04',
    readTime: '6 min read',
    tags: ['Landing Pages', 'Local SEO', 'Leads'],
  },
  {
    slug: 'how-to-use-cloudflare-pages-to-deploy-a-fast-static-website',
    title: 'How to Use Cloudflare Pages to Deploy a Fast Static Website',
    excerpt:
      'A practical workflow for deploying static websites with Cloudflare Pages, cleaner builds, and simpler global delivery.',
    date: '2026-05-03',
    readTime: '7 min read',
    tags: ['Cloudflare', 'Deployment', 'Static Sites'],
  },
  {
    slug: 'how-to-improve-local-seo-for-your-website-and-google-business-profile',
    title: 'How to Improve Local SEO for Your Website and Google Business Profile',
    excerpt:
      'Use your website and Google Business Profile together so local customers can find you, trust you, and contact you faster.',
    date: '2026-05-02',
    readTime: '7 min read',
    tags: ['SEO', 'Local Business', 'Google Business Profile'],
  },
  {
    slug: 'how-to-turn-an-ai-website-idea-into-a-feature-customers-will-use',
    title: 'How to Turn an AI Website Idea Into a Feature Customers Will Use',
    excerpt:
      'Move past the hype by defining a real user problem, a narrow workflow, and a simple AI feature with measurable value.',
    date: '2026-05-01',
    readTime: '6 min read',
    tags: ['AI', 'Product Strategy', 'Web Apps'],
  },
  {
    slug: 'how-to-build-a-portfolio-website-that-wins-better-clients',
    title: 'How to Build a Portfolio Website That Wins Better Clients',
    excerpt:
      'Position your work, process, and offer so your portfolio attracts stronger-fit projects instead of random low-intent inquiries.',
    date: '2026-04-30',
    readTime: '6 min read',
    tags: ['Portfolio', 'Freelancing', 'Web Design'],
  },
  {
    slug: 'how-to-plan-monthly-website-maintenance-without-guesswork',
    title: 'How to Plan Monthly Website Maintenance Without Guesswork',
    excerpt:
      'Create a simple monthly website maintenance routine for content, performance, SEO, forms, and security checks.',
    date: '2026-04-29',
    readTime: '5 min read',
    tags: ['Website Maintenance', 'SEO', 'Operations'],
  },
];

export function formatDate(value: string): string {
  return new Date(`${value}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
