"use client";

import { useState } from "react";
import { useLanguage } from "../lib/i18n/LanguageProvider";
import { LOCALES } from "../lib/i18n/types";

export default function LanguageSwitcher() {
  const { locale, setLocale, ui } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 rounded-full border border-stone-400/60 bg-[#f7f3ed]/95 px-4 py-2 text-xs font-medium text-stone-700 shadow-md backdrop-blur-sm transition-colors hover:bg-[#efe9df] sm:text-sm"
      >
        {ui.languageButton}
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-end p-4 sm:items-center sm:justify-center">
          <button
            type="button"
            className="absolute inset-0 bg-stone-800/30 backdrop-blur-[1px]"
            aria-label={ui.exit.close}
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-xs rounded-2xl border border-stone-300/50 bg-[#f7f3ed] p-5 shadow-xl sm:max-w-sm">
            <h2 className="font-serif text-lg font-semibold text-stone-800">
              {ui.languageTitle}
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              {LOCALES.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setLocale(id);
                    setOpen(false);
                  }}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                    locale === id
                      ? "border-stone-600 bg-stone-700 text-[#f7f3ed]"
                      : "border-stone-300/60 bg-[#efe9df] text-stone-800 hover:bg-[#e8e0d4]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
