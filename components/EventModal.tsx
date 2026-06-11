"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Choice, GameEvent } from "../data/events";
import { applyEffects, type PlayerStats } from "../lib/gameStats";
import StatChanges from "./StatChanges";

type EventModalProps = {
  event: Pick<GameEvent, "title" | "description" | "image" | "choices">;
  stats: PlayerStats;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (choice: Choice, newStats: PlayerStats) => void;
};

export default function EventModal({
  event,
  stats,
  isOpen,
  onClose,
  onComplete,
}: EventModalProps) {
  const [phase, setPhase] = useState<"choose" | "result" | "reality">("choose");
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  useEffect(() => {
    if (isOpen) {
      setPhase("choose");
      setSelectedChoice(null);
    }
  }, [isOpen, event.title]);

  if (!isOpen) return null;

  function handleSelectChoice(choice: Choice) {
    setSelectedChoice(choice);
    setPhase("result");
  }

  function handleViewReality() {
    setPhase("reality");
  }

  function handleConfirmResult() {
    if (!selectedChoice) return;
    onComplete(selectedChoice, applyEffects(stats, selectedChoice.effects));
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        phase === "reality" ? "p-2 sm:p-4" : "p-4"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-stone-800/25 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={phase === "choose" ? onClose : undefined}
        disabled={phase !== "choose"}
      />

      <div
        className={`relative w-full rounded-2xl border border-stone-300/50 bg-[#f7f3ed] shadow-[0_8px_30px_rgba(68,64,60,0.12)] ${
          phase === "reality"
            ? "max-h-[92vh] max-w-4xl overflow-y-auto p-4 sm:p-5"
            : "max-w-md p-6"
        }`}
      >
        {phase === "choose" && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 text-stone-500 transition-colors hover:text-stone-800"
            aria-label="Close"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>
        )}

        {phase !== "reality" && (
          <>
            <h2
              id="event-modal-title"
              className="pr-8 font-serif text-xl font-semibold tracking-tight text-stone-800"
            >
              {event.title}
            </h2>

            {phase === "choose" ? (
              <>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {event.description}
                </p>

                <div className="mt-6 flex flex-col gap-2.5">
                  {event.choices.map((choice) => (
                    <button
                      key={choice.text}
                      type="button"
                      onClick={() => handleSelectChoice(choice)}
                      className="rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-left text-sm text-stone-800 transition-colors hover:border-stone-400/70 hover:bg-[#e8e0d4] active:bg-[#e2d9cc]"
                    >
                      {choice.text}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              selectedChoice && (
                <>
                  <p className="mt-3 text-sm text-stone-600">
                    You chose:{" "}
                    <span className="font-medium">{selectedChoice.text}</span>
                  </p>

                  <div className="mt-5">
                    <StatChanges
                      effects={selectedChoice.effects}
                      before={stats}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleViewReality}
                    className="mt-6 w-full rounded-xl border border-stone-400/70 bg-stone-700 px-4 py-3 text-sm font-medium text-[#f7f3ed] transition-colors hover:bg-stone-800"
                  >
                    View Reality
                  </button>
                </>
              )
            )}
          </>
        )}

        {phase === "reality" && (
          <>
            <h2 className="text-center font-serif text-lg font-semibold tracking-tight text-stone-800 sm:text-xl">
              {event.title}
            </h2>
            <p className="mt-1 text-center text-xs text-stone-500 sm:text-sm">
              View Reality
            </p>

            <div className="relative mx-auto mt-3 w-full p-2 sm:mt-4 sm:p-4">
              <div
                className="absolute inset-0 rounded-xl border-[5px] border-stone-600 bg-[#e8e0d4] shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] sm:border-[6px]"
                aria-hidden
              />
              <div
                className="absolute -top-1.5 left-1/2 h-4 w-20 -translate-x-1/2 rounded-sm bg-stone-600 sm:h-5 sm:w-24"
                aria-hidden
              />
              <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden rounded-lg border-2 border-stone-500/80 bg-stone-100 sm:min-h-[58vh]">
                <Image
                  src={event.image}
                  alt={`Reality: ${event.title}`}
                  width={1200}
                  height={900}
                  className="max-h-[min(58vh,720px)] w-full object-contain"
                  priority
                  sizes="(max-width: 640px) 100vw, 896px"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleConfirmResult}
              className="mt-4 w-full rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-[#e8e0d4] sm:mt-5"
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
