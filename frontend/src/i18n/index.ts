import es from './es.json';
import en from './en.json';

export const languages = { es, en } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Devuelve el texto (puede contener HTML) para una clave con puntos, p. ej. "hero.title". */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const value = key.split('.').reduce<unknown>(
      (acc, part) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[part] : undefined),
      languages[lang],
    );
    if (typeof value !== 'string') throw new Error(`[i18n] Falta la clave "${key}" para "${lang}"`);
    return value;
  };
}

/** Rutas de cada página en los dos idiomas (se mantienen las URLs históricas en español). */
export const routes = {
  home: { es: '/', en: '/en/' },
  legal: { es: '/aviso-legal.html', en: '/en/aviso-legal.html' },
  privacy: { es: '/politica-privacidad.html', en: '/en/politica-privacidad.html' },
} as const;
export type PageId = keyof typeof routes;
