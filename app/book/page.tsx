import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  title: 'Book a discovery call',
  description:
    'Pick a time for a 15-minute intro call about your restaurant website. No cost, no pressure — just a clear next step. Projects start at $299.',
  path: '/book',
});

// Public Google Calendar Appointment Scheduling link.
const SCHEDULE_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2p-kwSbbDlMsM3Y-M8zQ5MUaSdz7eB0k6TXosViwhq6HeFzYCmABHDzy_VJP7L0z055JqI1u4x?gv=true';

const expectations = [
  { label: 'Length', value: '15 minutes' },
  { label: 'Where', value: 'Google Meet or phone' },
  { label: 'Cost', value: 'Free, no obligation' },
];

export default function BookPage() {
  return (
    <main id="main-content">
      <section className="pt-32 pb-16 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 md:gap-20 items-start">
          <div>
            <span className="km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6 reveal">
              $ booking
            </span>
            <h1
              className="text-4xl md:text-6xl font-display font-medium leading-[0.95] km-text-strong reveal"
              style={{ animationDelay: '80ms' }}
            >
              Book a <span className="text-brand">discovery call.</span>
            </h1>
            <p
              className="mt-6 km-text-muted text-lg leading-relaxed reveal"
              style={{ animationDelay: '160ms' }}
            >
              Bring your current site and the one thing that is not working. We will look at it
              together and you will leave with a clear next step — whether or not you hire us.
            </p>

            <dl
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 reveal"
              style={{ animationDelay: '240ms' }}
            >
              {expectations.map((item) => (
                <div key={item.label} className="km-panel p-5">
                  <dt className="font-mono text-[9px] font-black uppercase tracking-[0.18em] km-text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold km-text-strong">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div
              className="mt-10 flex flex-wrap gap-4 reveal"
              style={{ animationDelay: '320ms' }}
            >
              <a
                href={SCHEDULE_URL}
                target="_blank"
                rel="noreferrer"
                className="km-button km-button-primary"
              >
                Open the calendar
                <span aria-hidden> ↗</span>
              </a>
              <Link href="/contact" className="km-button km-button-secondary">
                Prefer to write?
              </Link>
            </div>

            <p
              className="mt-8 font-mono text-[10px] font-black uppercase tracking-[0.16em] km-text-soft reveal"
              style={{ animationDelay: '380ms' }}
            >
              Projects from ${site.startingPrice}
            </p>
          </div>

          <div className="reveal" style={{ animationDelay: '200ms' }}>
            <div className="relative km-panel p-2 sm:p-3">
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-brand" />
              <div className="absolute top-0 left-0 w-[2px] h-12 bg-brand" />
              <iframe
                src={SCHEDULE_URL}
                title="KM Web Design appointment scheduling calendar"
                className="block h-[640px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-center text-xs km-text-muted">
              Calendar not loading?{' '}
              <a
                href={SCHEDULE_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand underline"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
