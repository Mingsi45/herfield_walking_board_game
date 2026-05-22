"use client";

import { useMemo, useState } from "react";
import DiceRollOverlay from "../components/DiceRollOverlay";
import EventModal from "../components/EventModal";
import NoticeModal from "../components/NoticeModal";
import {
  boardPath,
  BOARD_SIZE,
  buildBoardGrid,
  tileLegend,
  tileStyle,
  tileTypeLabels,
} from "../data/board";
import {
  events,
  resources,
  specialTiles,
  type Choice,
  type Effects,
  type GameEvent,
} from "../data/events";
import {
  INITIAL_STATS,
  randomItem,
  STAT_LABELS,
  type PlayerStats,
} from "../lib/gameStats";

type NoticePayload = {
  title: string;
  description: string;
  effects?: Effects;
  addSkipTurns?: number;
};

export default function Home() {
  const boardGrid = useMemo(() => buildBoardGrid(), []);
  const [stats, setStats] = useState<PlayerStats>(INITIAL_STATS);
  const [position, setPosition] = useState(0);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [skipTurns, setSkipTurns] = useState(0);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [notice, setNotice] = useState<NoticePayload | null>(null);
  const [dicePhase, setDicePhase] = useState<"rolling" | "result" | null>(null);
  const [diceDisplay, setDiceDisplay] = useState(1);

  const isModalOpen = isEventModalOpen || notice !== null;
  const isDiceActive = dicePhase !== null;
  const currentTile = boardPath[position];

  function openNotice(payload: NoticePayload) {
    setNotice(payload);
  }

  function closeNotice() {
    setNotice(null);
  }

  function handleLandOnTile(pathIndex: number) {
    const tile = boardPath[pathIndex];

    switch (tile.type) {
      case "event": {
        setCurrentEvent(randomItem(events));
        setIsEventModalOpen(true);
        break;
      }
      case "resource": {
        const resource = randomItem(resources);
        openNotice({
          title: resource.title,
          description: resource.description,
          effects: resource.effects,
        });
        break;
      }
      case "special": {
        const special = randomItem(specialTiles);
        openNotice({
          title: special.title,
          description: special.description,
          addSkipTurns:
            special.effect === "skip_turns" ? special.turns : undefined,
        });
        break;
      }
      default:
        break;
    }
  }

  function handleRollDice() {
    if (isModalOpen || isDiceActive) return;

    if (skipTurns > 0) {
      setSkipTurns((prev) => prev - 1);
      setLastRoll(null);
      return;
    }

    const roll = Math.floor(Math.random() * 6) + 1;
    setDicePhase("rolling");
    setDiceDisplay(Math.floor(Math.random() * 6) + 1);

    const flicker = setInterval(() => {
      setDiceDisplay(Math.floor(Math.random() * 6) + 1);
    }, 80);

    setTimeout(() => {
      clearInterval(flicker);
      setDiceDisplay(roll);
      setDicePhase("result");
      setLastRoll(roll);

      setTimeout(() => {
        setDicePhase(null);
        const nextPosition = (position + roll) % BOARD_SIZE;
        setPosition(nextPosition);
        handleLandOnTile(nextPosition);
      }, 800);
    }, 2000);
  }

  function handleEventComplete(choice: Choice, newStats: PlayerStats) {
    setStats(newStats);
    setIsEventModalOpen(false);
  }

  function handleNoticeConfirm(newStats: PlayerStats) {
    if (notice?.addSkipTurns) {
      setSkipTurns((prev) => prev + notice.addSkipTurns!);
    }
    setStats(newStats);
    closeNotice();
  }

  function handleCloseEventModal() {
    setIsEventModalOpen(false);
  }

  const statKeys = Object.keys(STAT_LABELS) as (keyof PlayerStats)[];

  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-[#f4efe6] font-sans text-stone-800">
      <main className="mx-auto flex h-full w-full max-w-4xl min-h-0 flex-col px-3 py-2 sm:px-4">
        <header className="shrink-0 pb-1 text-center">
          <h1 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
            Her Field
          </h1>
        </header>

        <section className="shrink-0 grid grid-cols-4 gap-1.5 pb-2 sm:gap-2">
          {statKeys.map((key) => (
            <div
              key={key}
              className="rounded-lg border border-stone-300/60 bg-[#f7f3ed] px-1.5 py-1 text-center shadow-sm sm:px-2 sm:py-1.5"
            >
              <p className="truncate text-[9px] uppercase tracking-wide text-stone-500 sm:text-[10px]">
                {STAT_LABELS[key]}
              </p>
              <p className="text-base font-semibold leading-tight tabular-nums sm:text-lg">
                {stats[key]}
              </p>
            </div>
          ))}
        </section>

        <section className="flex min-h-0 flex-1 flex-col rounded-xl border border-stone-300/50 bg-[#f7f3ed] p-2 shadow-[0_4px_20px_rgba(68,64,60,0.08)] sm:p-3">
          <div className="shrink-0 flex flex-wrap items-center justify-center gap-1.5 pb-1 text-[10px] text-stone-600 sm:gap-2 sm:text-xs">
            {tileLegend.map(({ type, name, colorClass }) => (
              <span
                key={type}
                className={`inline-flex rounded-full border px-1.5 py-0.5 sm:px-2 ${colorClass}`}
              >
                <span className="font-medium">{name}</span>
              </span>
            ))}
          </div>

          <div className="shrink-0 flex flex-wrap items-center justify-between gap-1 pb-1 text-[10px] text-stone-600 sm:text-xs">
            <span>
              Tile {position + 1} · {tileTypeLabels[currentTile.type]}
            </span>
            <span className="flex gap-2 tabular-nums">
              {lastRoll !== null && !isDiceActive && <span>Rolled {lastRoll}</span>}
              {skipTurns > 0 && (
                <span className="text-red-700">
                  Skip {skipTurns} turn{skipTurns === 1 ? "" : "s"}
                </span>
              )}
            </span>
          </div>

          <div className="relative min-h-0 flex-1">
            <div
              className="grid h-full w-full gap-0.5 sm:gap-1"
              style={{
                gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                gridTemplateRows: "repeat(6, minmax(0, 1fr))",
              }}
            >
              {boardGrid.map((row, rowIndex) =>
                row.map((pathIndex, colIndex) => {
                  if (pathIndex === null) {
                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className="min-h-0 min-w-0 rounded bg-[#ede8df]/50"
                        aria-hidden
                      />
                    );
                  }

                  const tile = boardPath[pathIndex];
                  const isCurrent = pathIndex === position;

                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`relative flex min-h-0 min-w-0 items-center justify-center rounded border text-center transition-all ${tileStyle(tile.type, isCurrent)}`}
                      title={`${pathIndex + 1}. ${tile.type}`}
                    >
                      <span className="text-xs font-medium leading-none sm:text-sm">
                        {tile.label || "·"}
                      </span>
                      {isCurrent && (
                        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-stone-800 text-[8px] text-[#f7f3ed] sm:h-3.5 sm:w-3.5">
                          ●
                        </span>
                      )}
                    </div>
                  );
                }),
              )}
            </div>

            {dicePhase && (
              <DiceRollOverlay phase={dicePhase} displayValue={diceDisplay} />
            )}
          </div>
        </section>

        <div className="shrink-0 pt-2 text-center">
          <button
            type="button"
            onClick={handleRollDice}
            disabled={isModalOpen || isDiceActive}
            className="rounded-full border border-stone-400/70 bg-[#efe9df] px-6 py-2 text-xs font-medium text-stone-800 transition-colors hover:bg-[#e8e0d4] disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-2.5 sm:text-sm"
          >
            {skipTurns > 0 && !isModalOpen && !isDiceActive
              ? "Skip Turn"
              : isDiceActive
                ? "Rolling…"
                : "Roll Dice"}
          </button>
        </div>
      </main>

      {currentEvent && (
        <EventModal
          event={currentEvent}
          stats={stats}
          isOpen={isEventModalOpen}
          onClose={handleCloseEventModal}
          onComplete={handleEventComplete}
        />
      )}

      {notice && (
        <NoticeModal
          title={notice.title}
          description={notice.description}
          effects={notice.effects}
          stats={stats}
          isOpen
          onClose={closeNotice}
          onConfirm={handleNoticeConfirm}
        />
      )}
    </div>
  );
}
