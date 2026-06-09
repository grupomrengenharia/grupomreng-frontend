'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { useEffect } from 'react';

export default function CitiesPage() {
  useEffect(() => {
    sendGAEvent('event', 'page_view', {
      page: 'cidades',
    });
  }, []);

  return (
    <div>
      <h1>Página de cidades</h1>
    </div>
  );
}
