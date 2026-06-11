"use client";

import { CuteTennisPlayer } from "./cute/CuteArt";
import { DecorationArt } from "./cute/CuteArt";

type StartScreenProps = {
  onStart: () => void;
  onRules: () => void;
};

export default function StartScreen({ onStart, onRules }: StartScreenProps) {
  return (
    <div className="relative flex h-dvh flex-col items-center justify-center overflow-hidden bg-[#f4efe6] px-4">
      <DecorationArt
        type="volleyball-player"
        className="pointer-events-none absolute left-[4%] top-[18%] h-24 w-24 opacity-80 sm:h-32 sm:w-32"
      />
      <DecorationArt
        type="badminton-player"
        className="pointer-events-none absolute right-[5%] top-[22%] h-28 w-28 opacity-80 sm:h-36 sm:w-36"
      />
      <DecorationArt
        type="basketball-player"
        className="pointer-events-none absolute bottom-[16%] left-[8%] h-20 w-20 opacity-75 sm:h-28 sm:w-28"
      />
      <DecorationArt
        type="soccer-player"
        className="pointer-events-none absolute bottom-[14%] right-[6%] h-24 w-24 opacity-75 sm:h-32 sm:w-32"
      />
      <CuteTennisPlayer className="pointer-events-none absolute left-[12%] top-[42%] h-28 w-20 opacity-90 sm:h-40 sm:w-28" />
      <CuteTennisPlayer className="pointer-events-none absolute right-[10%] top-[40%] h-32 w-24 -scale-x-100 opacity-90 sm:h-44 sm:w-32" />

      <div className="relative z-10 w-full max-w-md text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl">
          Her Field
        </h1>
        <p className="mt-2 text-sm text-stone-600 sm:text-base">
          A board game about women in sports
        </p>

        <button
          type="button"
          onClick={onStart}
          className="mt-10 w-full rounded-2xl border border-stone-400/70 bg-stone-700 px-8 py-4 text-lg font-semibold text-[#f7f3ed] shadow-md transition-colors hover:bg-stone-800"
        >
          Start Game
        </button>
        <button
          type="button"
          onClick={onRules}
          className="mt-4 w-full rounded-2xl border border-stone-300/60 bg-[#efe9df] px-8 py-3 text-base font-medium text-stone-800 transition-colors hover:bg-[#e8e0d4]"
        >
          Rules
        </button>
      </div>
    </div>
  );
}
