"use client";

import { GAME_RULES } from "../data/rules";

type RulesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RulesModal({ isOpen, onClose }: RulesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-stone-800/30 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-stone-300/50 bg-[#f7f3ed] p-6 shadow-[0_8px_30px_rgba(68,64,60,0.15)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-stone-500 hover:text-stone-800"
          aria-label="Close"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>
        <h2 className="pr-8 font-serif text-2xl font-semibold text-stone-800">
          Rules
        </h2>
        <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-stone-600">
          {GAME_RULES}
        </pre>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-sm font-medium text-stone-800 hover:bg-[#e8e0d4]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
