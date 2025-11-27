import { defineRouting } from "next-intl/routing";

export const LANGUAGES: {
  [key: string]: {
    name: string;
    code: string;
    shortCode: string;
    mobileName?: string;
  };
} = {
  en: {
    name: "English",
    code: "ENG",
    shortCode: "en",
    mobileName: "MEng",
  },
  ka: {
    name: "ქართული",
    code: "GEO",
    shortCode: "ka",
    mobileName: "MGeo",
  },
  ru: {
    name: "Русский",
    mobileName: "MRus",
    code: "RUS",
    shortCode: "ru",
  },
};

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ka", "ru"],
  localePrefix: "as-needed",
  defaultLocale: "ka",
  localeDetection: false,
});
