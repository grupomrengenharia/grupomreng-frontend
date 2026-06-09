'use client';

import { sendGAEvent } from '@next/third-parties/google';

export default function CitiesPage() {
  sendGAEvent('event', 'page_view', {
    page: 'cidades',
  });

  return (
    <div>
      <h1>Página de cidades</h1>
    </div>
  );
}
