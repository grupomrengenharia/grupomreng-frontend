'use client';

import Script from 'next/script';
import { SectionTitle } from '../section-title';
import { useEffect } from 'react';

export function InstagramSection() {
  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.querySelector(
        '#eapps-instagram-feed-1 > a',
      ) as HTMLAnchorElement | null;

      if (el) {
        el.style = '';
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-3 instagram-section">
      <SectionTitle title="Siga-nos no Instagram" />
      <div className="w-full overflow-hidden">
        <Script src="https://elfsightcdn.com/platform.js" async></Script>
        <div
          className="elfsight-app-a09de708-fca6-4b3c-b7a2-58afb80f3ef2"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
