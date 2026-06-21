"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { RuleStepImage } from "../data/ruleSteps";
import { useLanguage } from "../lib/i18n/LanguageProvider";

type ImageCarouselProps = {
  images: RuleStepImage[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const { ui } = useLanguage();
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(images.length - 1, next)));
    },
    [images.length],
  );

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? index + 1 : index - 1);
    }
    touchStartX.current = null;
  }

  if (images.length === 0) return null;

  const current = images[index];
  const hasMultiple = images.length > 1;

  return (
    <div className="mt-5">
      <div
        className="relative overflow-hidden rounded-xl border border-stone-300/60 bg-[#faf7f2]"
        onTouchStart={hasMultiple ? handleTouchStart : undefined}
        onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      >
        <div className="flex min-h-[220px] items-center justify-center p-3 sm:min-h-[280px] sm:p-4">
          <Image
            src={current.src}
            alt={current.alt}
            width={720}
            height={480}
            className="max-h-[240px] w-full object-contain sm:max-h-[320px]"
            draggable={false}
          />
        </div>

        {hasMultiple && (
          <>
            {index > 0 && (
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-stone-300/70 bg-white/90 px-2.5 py-1.5 text-lg text-stone-600 shadow-sm hover:bg-white"
                aria-label={ui.carousel.prev}
              >
                ‹
              </button>
            )}
            {index < images.length - 1 && (
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-stone-300/70 bg-white/90 px-2.5 py-1.5 text-lg text-stone-600 shadow-sm hover:bg-white"
                aria-label={ui.carousel.next}
              >
                ›
              </button>
            )}
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-5 bg-stone-700" : "w-2 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={ui.carousel.indicator(i + 1, images.length)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
