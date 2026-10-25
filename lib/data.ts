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

export const site = {
  name: 'KM Web Design',
  email: 'hello@kmwebdesign.xyz',
  tagline: 'Las Vegas restaurant web design',
  homeTitle: 'Restaurant Web Design Las Vegas | KM Web Design',
  homeDescription:
    'KM Web Design creates custom, fast restaurant websites in Las Vegas with mobile menus, ordering and reservation integrations, local SEO, and ongoing support.',
};

export const heroCapabilities: string[] = [
  'Restaurant-first strategy and design',
  'Mobile menus built for hungry guests',
  'Reservations, ordering, and POS integrations',
  'Fast Cloudflare-ready deployment',
];

export interface Concept {
  title: string;
  category: string;
  image: string;
  alt: string;
  summary: string;
  accent: string;
}

export const concepts: Concept[] = [
  {
    title: 'Ember & Vine',
    category: 'Fine dining concept',
    image: '/portfolio/ember-vine-concept.webp',
    alt: 'Ember and Vine fictional fine-dining restaurant website shown on desktop and mobile',
    summary:
      'A reservation-first experience with private dining, menu storytelling, and an elevated hospitality identity.',
    accent: 'from-[#6f251f]/80 to-[#1d1010]/20',
  },
  {
    title: 'Sol y Sabor',
    category: 'Modern Mexican concept',
    image: '/portfolio/sol-sabor-concept.webp',
    alt: 'Sol y Sabor fictional Mexican restaurant website shown on desktop and mobile',
    summary:
      'A bold mobile ordering journey designed around visual menus, catering leads, and location discovery.',
    accent: 'from-[#c5533f]/80 to-[#0b5b5d]/20',
  },
  {
    title: 'Desert Bloom Coffee',
    category: 'Cafe concept',
    image: '/portfolio/desert-bloom-concept.webp',
    alt: 'Desert Bloom Coffee fictional cafe website shown on laptop and mobile',
    summary:
      'A warm neighborhood cafe presence with order-ahead, directions, hours, and catering paths.',
    accent: 'from-[#6d7350]/80 to-[#a57855]/20',
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
    type: 'Tooling',
    tech: 'API Concept',
    description: 'Cryptographic password generation and privacy-first tooling direction.',
    link: 'https://github.com/Kacmnetworkk',
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

export const packages = [
  {
    title: 'Starter Website',
    desc: 'For personal brands and small service businesses that need a polished online presence.',
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
    thumbnail: '/template-previews/saas-dashboard.png',
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
    thumbnail: '/template-previews/ecommerce-starter.png',
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
    thumbnail: '/template-previews/portfolio-minimal.png',
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
    thumbnail: '/template-previews/securepass.png',
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
    thumbnail: '/template-previews/portfolio-theme.png',
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
