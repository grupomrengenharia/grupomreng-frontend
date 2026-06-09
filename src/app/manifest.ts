import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Grupo MR Engenharia',
    short_name: 'Grupo MR',
    description: 'Soluções em engenharia e segurança',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#d80004',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
