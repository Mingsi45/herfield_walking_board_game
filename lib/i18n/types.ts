export type Locale = "en" | "zh";

export const LOCALE_STORAGE_KEY = "herfield-locale-v1";

export const LOCALES: { id: Locale; label: string }[] = [
  { id: "en", label: "English" },
  { id: "zh", label: "简体中文" },
];
