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
    <div className="fixed top-28 right-6 z-50 bg-black/50 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300">
      <button
        onClick={toggleLocale}
        className="text-xs font-medium tracking-widest flex gap-2"
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
