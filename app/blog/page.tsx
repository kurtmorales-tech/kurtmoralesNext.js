import type { Metadata } from 'next';
import { formatDate, posts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Restaurant Website Blog',
  description:
    'Practical guidance on restaurant websites, online menus, local SEO, ordering integrations, speed, and accessible digital experiences.',
};

export default function BlogPage() {
  const latestPost = posts[0];
  const featuredTags = [...new Set(posts.flatMap((post) => post.tags))].slice(0, 4);

  return (
    <main id="main-content" className="pt-12 pb-24">
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="km-pill km-text-muted mb-6 text-[10px] font-black uppercase tracking-[0.28em]">
                <span className="h-2 w-2 bg-brand pulse-dot" />
                Blog archive
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-medium leading-[0.94] km-text-strong mb-6">
                Better websites for <span className="text-brand">busy restaurants.</span>
              </h1>
              <p className="km-text-muted text-lg leading-relaxed max-w-2xl">
                Practical notes for restaurant owners who want more direct bookings, clearer
                menus, and a stronger presence in local search.
              </p>
              {featuredTags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {featuredTags.map((tag) => (
                    <span
                      key={tag}
                      className="border km-border-strong km-surface-soft px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] km-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {latestPost && (
              <div className="km-panel live-card p-7">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-brand/70">
                  Latest note
                </span>
                <h2 className="mt-3 text-2xl font-display font-medium km-text-strong leading-snug">
                  {latestPost.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed km-text-muted">{latestPost.excerpt}</p>
                <p className="mt-4 font-mono text-[9px] font-black uppercase tracking-[0.18em] km-text-soft">
                  {formatDate(latestPost.date)} · {latestPost.readTime}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="reveal group km-panel live-card p-8 card-lift flex flex-col"
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[9px] font-black uppercase tracking-[0.18em] km-text-soft">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-display font-medium km-text-strong leading-snug mb-3 group-hover:text-brand transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="km-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] font-black uppercase tracking-widest km-text-muted bg-[var(--km-surface-muted)] px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
