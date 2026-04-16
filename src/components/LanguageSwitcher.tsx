"use client";

import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    // Regresamos a 'absolute' para que se quede arriba, pero con z-[999] para que nada lo tape
    <div className="absolute top-28 right-6 md:right-32 z-[999] bg-black/50 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300">
      <button
        onClick={toggleLocale}
        className="text-xs font-medium tracking-widest flex gap-2 cursor-pointer"
        aria-label="Toggle language"
      >
        <span className={`transition-colors ${locale === 'en' ? 'text-white' : 'text-zinc-500'}`}>
          EN
        </span>
        <span className="text-zinc-600">/</span>
        <span className={`transition-colors ${locale === 'es' ? 'text-white' : 'text-zinc-500'}`}>
          ES
        </span>
      </button>
    </div>
  );
}