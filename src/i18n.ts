import { getRequestConfig } from 'next-intl/server';
import { routing } from './navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Si el locale es inválido o no existe, usamos el default ('en')
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as string, // <--- El "as string" soluciona el error de TypeScript
    messages: (await import(`../messages/${locale}.json`)).default
  };
});