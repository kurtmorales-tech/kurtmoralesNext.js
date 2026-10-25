import Link from 'next/link';
import { focusLanes, formatDate, labNotes, posts, projects } from '@/lib/data';

export function PortfolioLab() {
  const featuredProjects = projects.slice(0, 4);
  const featuredPosts = posts.slice(0, 3);
  const totalItems = projects.length + posts.length;

  return (
    <section id="portfolio-lab" className="relative py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="absolute left-[8%] top-20 h-72 w-72 bg-brand/10 blur-3xl" />
      <div className="absolute bottom-10 right-[10%] h-80 w-80 bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="reveal-left max-w-3xl">
            <span className="km-pill mb-8 text-[10px] font-black uppercase tracking-[0.26em] km-text-muted">
              <span className="h-2 w-2 bg-brand pulse-dot" />
              portfolio + field notes
            </span>
            <h2 className="font-display text-4xl font-medium leading-[0.96] tracking-tight km-text-strong md:text-6xl">
              A personal internet base for <span className="text-brand">build logs, products,</span>{' '}
              and experiments.
            </h2>
          </div>

          <div className="reveal km-panel live-card p-7 md:p-9">
            <div className="mb-7 flex items-start justify-between gap-6">
              <div>
                <span className="mb-2 block font-mono text-[10px] font-black uppercase tracking-[0.24em] text-brand/70">
                  ./kurt-os
                </span>
                <p className="max-w-md text-sm leading-relaxed km-text-muted">
                  A curated map of the work: what I build, what I am learning, and what readers
                  can hire me or collaborate with me on.
                </p>
              </div>
              <span className="number-chip">{String(totalItems).padStart(2, '0')}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {focusLanes.map((lane) => (
                <div
                  key={lane}
                  className="border km-border-strong km-surface-soft px-4 py-3 font-mono text-[10px] font-black uppercase tracking-[0.16em] km-text-muted"
                >
                  {lane}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="km-panel live-card p-5 md:p-7">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-brand/70">
                  Selected portfolio paths
                </span>
                <p className="mt-2 text-sm km-text-muted">
                  A quick scan of the projects behind the public brand.
                </p>
              </div>
              <Link href="/projects" className="km-button km-button-secondary text-[10px]">
                Open portfolio
              </Link>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group border km-border-strong km-surface-soft p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/40"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] km-text-soft">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="border border-brand/25 bg-brand/10 px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-brand">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-display font-medium km-text-strong transition-colors group-hover:text-brand">
                    {project.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed km-text-muted">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between gap-4 font-mono text-[10px] font-black uppercase tracking-[0.18em] km-text-soft">
                    <span>{project.tech}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="km-panel live-card p-6 md:p-7">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-brand/70">
                    Blog signal
                  </span>
                  <p className="mt-2 text-sm km-text-muted">Newest notes from the archive.</p>
                </div>
                <Link
                  href="/blog"
                  className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-brand hover:text-brand-light"
                >
                  Read all →
                </Link>
              </div>

              <div className="space-y-3">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href="/blog"
                    className="group block border km-border-strong km-surface-soft p-4 transition duration-300 hover:border-brand/40"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-[9px] font-black uppercase tracking-[0.18em] km-text-soft">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-display font-medium leading-snug km-text-strong transition-colors group-hover:text-brand">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {labNotes.map((note) => (
                <div key={note.label} className="border km-border-soft km-glass p-5">
                  <span className="mb-2 block font-mono text-[9px] font-black uppercase tracking-[0.2em] text-brand/70">
                    {note.label}
                  </span>
                  <p className="text-sm leading-relaxed km-text-muted">{note.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
