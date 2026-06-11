"use client";

import Image from "next/image";
import type { Ending } from "../data/endings";

type EndingResultModalProps = {
  ending: Ending;
  isOpen: boolean;
  onClose: () => void;
};

export default function EndingResultModal({
  ending,
  isOpen,
  onClose,
}: EndingResultModalProps) {
  if (!isOpen) return null;

  async function handleSaveImage() {
    try {
      const res = await fetch(ending.image);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const ext = ending.image.split(".").pop() ?? "png";
      link.href = url;
      link.download = `her-field-${ending.title.toLowerCase().replace(/\s+/g, "-")}.${ext}`;
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(ending.image, "_blank");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-stone-800/35 backdrop-blur-[2px]" />
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-stone-300/50 bg-[#f7f3ed] p-5 shadow-xl sm:p-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-500">
          Your Results
        </p>
        <h2 className="mt-2 text-center font-serif text-2xl font-bold text-stone-800 sm:text-3xl">
          {ending.title}
        </h2>
        <p className="mt-2 text-center font-serif text-base italic text-stone-600 sm:text-lg">
          {ending.tagline}
        </p>
        <p className="mt-2 text-center text-xs text-stone-500">
          {ending.conditionLabel}
        </p>

        <div className="relative mx-auto mt-4 w-full max-w-md p-3">
          <div
            className="absolute inset-0 rounded-xl border-[5px] border-stone-600 bg-[#e8e0d4]"
            aria-hidden
          />
          <div
            className="absolute -top-1.5 left-1/2 h-4 w-20 -translate-x-1/2 rounded-sm bg-stone-600"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-lg border-2 border-stone-500/80 bg-white">
            <Image
              src={ending.image}
              alt={ending.title}
              width={480}
              height={480}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
          <p>
            <span className="font-semibold text-stone-800">Athlete example: </span>
            {ending.athleteExample}
          </p>
          <p>
            <span className="font-semibold text-stone-800">Why: </span>
            {ending.athleteWhy}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={handleSaveImage}
            className="flex-1 rounded-xl border border-stone-400/70 bg-stone-700 px-4 py-3 text-sm font-medium text-[#f7f3ed] hover:bg-stone-800"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-sm font-medium text-stone-800 hover:bg-[#e8e0d4]"
          >
            Back to menu
          </button>
        </div>
      </div>
    </div>
  );
}
