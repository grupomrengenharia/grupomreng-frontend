/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { LuCookie } from 'react-icons/lu';

export function CookieConsentBanner() {
  const [accepted, setAccepted] = useState(true);

  const handleAcceptCookie = useCallback(() => {
    localStorage.setItem('@MR-Engenharia:cookie-consent', 'true');
    setAccepted(true);
  }, []);

  const verifyCookieConsent = useCallback(() => {
    const isCookieAccepted = localStorage.getItem(
      '@MR-Engenharia:cookie-consent',
    );

    setAccepted(isCookieAccepted === 'true');
  }, []);

  useEffect(() => {
    verifyCookieConsent();
  }, [verifyCookieConsent]);

  if (accepted) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:h-38 w-[90vw] px-7 py-5 bg-white text-black z-50 rounded-lg flex items-center gap-10">
      <div className="hidden sm:block">
        <LuCookie size={32} />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full">
        <div>
          <h4 className="font-bold">Aviso de cookies</h4>
          <p>
            Ao navegar em nosso site, você confirma que leu e está de acordo com
            nossa{' '}
            <span className="underline text-(--brand-color) font-bold">
              Política de Privacidade
            </span>{' '}
            e{' '}
            <span className="underline text-(--brand-color) font-bold">
              Termos de Uso
            </span>{' '}
            do site.
          </p>
        </div>

        <div className="flex items-center justify-between w-full sm:w-max">
          <button
            className="cursor-pointer bg-(--brand-color) text-white py-4 px-6 rounded-lg w-full sm:w-max"
            onClick={handleAcceptCookie}
          >
            Ok, entendi.
          </button>
        </div>
      </div>
    </div>
  );
}
