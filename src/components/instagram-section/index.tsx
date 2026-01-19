'use client';

import Script from 'next/script';
import { SectionTitle } from '../section-title';

export function InstagramSection() {
  return (
    <section className="space-y-3">
      <SectionTitle title="Siga-nos no Instagram" />
      <div className="w-full overflow-hidden">
        {/* Script do widget */}
        <Script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          strategy="afterInteractive"
        />

        {/* Iframe */}
        <iframe
          src="http://lightwidget.com/widgets/aa40676cd6cf59d9b2025fd593a732ce.html"
          scrolling="no"
          className="lightwidget-widget w-full border-0 overflow-hidden"
          style={{ width: '100%', height: '600px' }} // ajuste conforme necessário
          title="Instagram Feed"
        />
      </div>
    </section>
  );
}
