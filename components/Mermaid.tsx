'use client';

import { useEffect, useRef } from 'react';

export function Mermaid({ chart, className = '' }: { chart: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });
      if (cancelled || !ref.current) return;
      try {
        const id = 'mmd-' + Math.random().toString(36).slice(2);
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      } catch (e) {
        if (ref.current) ref.current.textContent = String(e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return <div ref={ref} className={className} />;
}
