import en from "../i18n/en.js";
import es from "../i18n/es.js";

const translations: Record<string, any> = { en, es };
export const SUPPORTED_LANGUAGES:String[] = ["en", "es"];
let translationLoaded: Record<string, any> = {};

export function loadTranslation(lang: string) {
  try {
    translationLoaded = translations[lang] ?? en;
  } catch (error) {
    console.error(`translations for ${lang} not found.`);
    translationLoaded = {};
  }
}

export function t(key: string) {
  const keys = key.split(".");
  let result = translationLoaded;
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]];
    if (result === undefined) {
      return key;
    }
  }
  return result;
}
