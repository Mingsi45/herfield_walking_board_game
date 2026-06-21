"use client";

import LanguageSwitcher from "../components/LanguageSwitcher";
import { LanguageProvider } from "../lib/i18n/LanguageProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <LanguageSwitcher />
    </LanguageProvider>
  );
}
