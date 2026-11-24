import Link from 'next/link';
import { IconArrow } from '@/components/icons/Icon';

interface CtaBlockProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBlock({
  title,
  description,
  primaryLabel = 'Start your project',
  primaryHref = '/contact',
  secondaryLabel = 'Book a call',
  secondaryHref = '/book',
}: CtaBlockProps) {
  return (
    <section className="py-20 km-surface-tint">
      <div className="max-w-6xl mx-auto px-6">
        <div className="km-panel p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-medium km-text-strong mb-2">
              {title}
            </h2>
            {description && <p className="text-sm km-text-muted leading-relaxed">{description}</p>}
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href={primaryHref} className="km-button km-button-primary">
              {primaryLabel} <IconArrow className="h-4 w-4" />
            </Link>
            {secondaryLabel && (
              <Link href={secondaryHref} className="km-button km-button-secondary">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
