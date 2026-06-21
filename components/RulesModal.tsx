"use client";

import { useEffect, useMemo, useState } from "react";
import { RULE_STEP_COUNT, RULE_STEPS, type RuleStep } from "../data/ruleSteps";
import { localizeRuleStep } from "../lib/i18n";
import { useLanguage } from "../lib/i18n/LanguageProvider";
import ImageCarousel from "./ImageCarousel";

type RulesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RulesModal({ isOpen, onClose }: RulesModalProps) {
  const { locale, ui } = useLanguage();
  const [stepIndex, setStepIndex] = useState(0);

  const localizedSteps = useMemo(
    (): RuleStep[] => RULE_STEPS.map((step) => localizeRuleStep(step, locale)),
    [locale],
  );

  useEffect(() => {
    if (isOpen) setStepIndex(0);
  }, [isOpen]);

  if (!isOpen) return null;

  const step = localizedSteps[stepIndex];
  const isLastStep = stepIndex === RULE_STEP_COUNT - 1;

  function handleNext() {
    if (isLastStep) return;
    setStepIndex((prev) => prev + 1);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-stone-800/35 backdrop-blur-[2px]"
        aria-label={ui.rulesModal.close}
        onClick={onClose}
      />

      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-stone-300/50 bg-[#f7f3ed] shadow-[0_12px_40px_rgba(68,64,60,0.18)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-stone-500 hover:text-stone-800"
          aria-label={ui.rulesModal.close}
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="overflow-y-auto px-5 pb-4 pt-8 sm:px-10 sm:pb-6 sm:pt-10">
          <h2 className="pr-10 font-sans text-2xl font-bold text-stone-900 sm:text-3xl">
            {ui.rulesModal.stepHeading(step.id, step.title)}
          </h2>

          <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-stone-600 sm:text-base">
            {step.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {step.bullets && (
              <ul className="list-disc space-y-2 pl-5">
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>

          <ImageCarousel key={step.id} images={step.images} />
        </div>

        <div className="shrink-0 space-y-3 border-t border-stone-300/50 bg-[#f7f3ed] px-5 py-4 sm:px-10">
          <div className="flex flex-wrap justify-center gap-2">
            {localizedSteps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStepIndex(i)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                  i === stepIndex
                    ? "border-stone-600 bg-stone-700 text-[#f7f3ed]"
                    : "border-stone-300/60 bg-[#efe9df] text-stone-700 hover:bg-[#e8e0d4]"
                }`}
              >
                {ui.rulesModal.stepBtn(s.id)}
              </button>
            ))}
          </div>

          {isLastStep ? (
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3.5 text-sm font-medium text-stone-800 transition-colors hover:bg-[#e8e0d4]"
            >
              {ui.rulesModal.back}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="w-full rounded-xl border border-stone-400/70 bg-stone-700 px-4 py-3.5 text-sm font-medium text-[#f7f3ed] transition-colors hover:bg-stone-800"
            >
              {ui.rulesModal.next}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
