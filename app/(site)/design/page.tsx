import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { Mermaid } from '@/components/Mermaid';

export const metadata: Metadata = pageMetadata({
  title: 'Design & Architecture',
  description: 'How KM Web Design plans, builds, and ships restaurant websites — diagrams and system overview.',
  path: '/design',
});

const charts = [
  {
    title: 'Request flow',
    code: `flowchart LR
  Visitor -->|form| Worker[/api/contact/]
  Worker --> KV[(LEADS KV)]
  Worker --> Email[Email binding]
  KV --> LeadLog[Lead log]
  Email --> Inbox[Studio inbox]`,
  },
  {
    title: 'Site architecture',
    code: `flowchart TB
  Build[Next.js static export] --> Out[./out]
  Out --> Assets[Workers static assets]
  Assets --> CDN[Cloudflare edge]
  Worker[worker/index.ts] -->|/api/*| Assets
  Visitor --> CDN`,
  },
  {
    title: 'Project lifecycle',
    code: `sequenceDiagram
  Client->>Studio: Inquiry
  Studio->>Client: Discovery call
  Studio->>Studio: Design + build
  Studio->>Client: Preview
  Client->>Studio: Feedback
  Studio->>Client: Launch
  Studio->>Client: Handoff + support`,
  },
];

export default function DesignPage() {
  return (
    <main id="main-content" className="pt-24">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="km-pill mb-6 text-[10px] font-black uppercase tracking-[0.2em] km-text-muted">
            Design
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand mb-8">
            Architecture & flow
          </h1>
          <p className="km-text-muted text-lg leading-relaxed max-w-2xl mb-12">
            Mermaid diagrams of how the studio plans, builds, and ships. Rendered in your browser.
          </p>
          <div className="space-y-16">
            {charts.map((c) => (
              <div key={c.title} className="km-panel p-6">
                <h2 className="text-xl font-bold km-text-strong mb-4">{c.title}</h2>
                <Mermaid chart={c.code} className="overflow-x-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
