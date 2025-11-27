/**
 * Generates locale-specific URLs
 * @param baseUrl - The base URL of the website
 * @param locale - The current locale (ka, en, ru)
 * @param path - Optional path to append to the URL
 * @returns The complete URL with proper locale handling
 */
export const getLocaleUrl = (baseUrl: string, locale: string, path: string = ''): string => {
  if (locale === 'ka') {
    return `${baseUrl}${path}`;
  }
  return `${baseUrl}/${locale}${path}`;
}; 