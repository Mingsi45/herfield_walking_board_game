"use client";

import { pathIndexToCell } from "../data/board";
import { CuteTennisPlayer } from "./cute/CuteArt";

type PlayerCharacterProps = {
  pathIndex: number;
  speechText: string | null;
};

export function getCellPositionPercent(pathIndex: number) {
  const { row, col } = pathIndexToCell(pathIndex);
  return {
    left: `${((col + 0.5) / 7) * 100}%`,
    top: `${((row + 0.5) / 6) * 100}%`,
  };
}

export default function PlayerCharacter({
  pathIndex,
  speechText,
}: PlayerCharacterProps) {
  const pos = getCellPositionPercent(pathIndex);

  return (
    <div
      className="pointer-events-none absolute z-30 transition-all duration-300 ease-in-out"
      style={{
        left: pos.left,
        top: pos.top,
        transform: "translate(-50%, -72%)",
      }}
    >
      {speechText && (
        <div className="absolute bottom-full left-1/2 z-40 mb-1 w-max max-w-[140px] -translate-x-1/2 animate-bubble-pop sm:max-w-[180px]">
          <div className="relative rounded-xl border-2 border-pink-200 bg-white px-2.5 py-1.5 shadow-md">
            <p className="text-[8px] leading-snug text-stone-600 sm:text-[9px]">
              {speechText}
            </p>
            <div className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-pink-200 bg-white" />
          </div>
        </div>
      )}
      <CuteTennisPlayer className="h-11 w-8 sm:h-14 sm:w-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)]" />
    </div>
  );
}
