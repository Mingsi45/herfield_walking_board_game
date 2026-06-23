"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import DiceRollOverlay from "../components/DiceRollOverlay";
import EndingResultModal from "../components/EndingResultModal";
import EventModal from "../components/EventModal";
import ExitConfirmModal from "../components/ExitConfirmModal";
import GameOverModal from "../components/GameOverModal";
import NoticeModal from "../components/NoticeModal";
import BoardDecorations from "../components/BoardDecorations";
import PlayerCharacter from "../components/PlayerCharacter";
import RulesModal from "../components/RulesModal";
import StartScreen from "../components/StartScreen";
import TurnPanel from "../components/TurnPanel";
import { innerDecorations, outerDecorations } from "../data/decorations";
import {
  boardPath,
  BOARD_SIZE,
  buildBoardGrid,
  tileLegend,
  tileStyle,
} from "../data/board";
import type { Ending } from "../data/endings";
import {
  events,
  resources,
  specialTiles,
  type Choice,
  type Effects,
  type GameEvent,
} from "../data/events";
import {
  getSpeechLines,
  getStatLabels,
  getTileLabel,
  localizeEnding,
  localizeEvent,
  localizeResource,
  localizeSpecialTile,
} from "../lib/i18n";
import { useLanguage } from "../lib/i18n/LanguageProvider";
import { MAX_TURNS } from "../lib/constants";
import {
  clearGameState,
  createNewGameState,
  hasResumableGame,
  loadGameState,
  saveGameState,
} from "../lib/gameStorage";
import { resolveEnding } from "../lib/resolveEnding";
import {
  INITIAL_STATS,
  randomItem,
  STAT_KEYS,
  type PlayerStats,
} from "../lib/gameStats";
import { drawIndex, type TilePools } from "../lib/tilePool";
import { TileIcon } from "../components/cute/CuteArt";

type NoticePayload = {
  title: string;
  description: string;
  effects?: Effects;
  addSkipTurns?: number;
};

type Screen = "start" | "game";
type EndPhase = null | "over" | "identity";

const STEP_DELAY_MS = 350;
const LAND_PAUSE_MS = 1000;
const SPEECH_DURATION_MS = 4000;

function getSavedGameSnapshot() {
  return hasResumableGame();
}

function subscribeToSavedGame() {
  return () => {};
}

export default function Home() {
  const { locale, ui } = useLanguage();
  const statLabels = getStatLabels(locale);
  const boardGrid = useMemo(() => buildBoardGrid(), []);
  const [screen, setScreen] = useState<Screen>("start");
  const [showRules, setShowRules] = useState(false);
  const hasSavedGame = useSyncExternalStore(
    subscribeToSavedGame,
    getSavedGameSnapshot,
    () => false,
  );
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [endPhase, setEndPhase] = useState<EndPhase>(null);
  const [ending, setEnding] = useState<Ending | null>(null);

  const [stats, setStats] = useState<PlayerStats>(INITIAL_STATS);
  const [position, setPosition] = useState(0);
  const [displayPosition, setDisplayPosition] = useState(0);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [skipTurns, setSkipTurns] = useState(0);
  const [turnCount, setTurnCount] = useState(0);
  const [speechText, setSpeechText] = useState<string | null>(null);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [notice, setNotice] = useState<NoticePayload | null>(null);
  const [dicePhase, setDicePhase] = useState<"rolling" | "result" | null>(null);
  const [diceDisplay, setDiceDisplay] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [tilePools, setTilePools] = useState<TilePools>(() => {
    const fresh = createNewGameState();
    return {
      eventPool: fresh.eventPool,
      resourcePool: fresh.resourcePool,
      specialPool: fresh.specialPool,
    };
  });
  const speechTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tilePoolsRef = useRef(tilePools);

  useEffect(() => {
    tilePoolsRef.current = tilePools;
  }, [tilePools]);

  const isModalOpen = isEventModalOpen || notice !== null;
  const isDiceActive = dicePhase !== null;
  const isGameOver = endPhase !== null;
  const isBusy =
    isModalOpen || isDiceActive || isMoving || isGameOver || showExitConfirm;
  const currentTile = boardPath[position];
  const turnsRemaining = Math.max(0, MAX_TURNS - turnCount);

  function clearSpeechTimeout() {
    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = null;
    }
  }

  function showSpeechBubble() {
    clearSpeechTimeout();
    setSpeechText(randomItem(getSpeechLines(locale)));
    speechTimeoutRef.current = setTimeout(() => {
      setSpeechText(null);
      speechTimeoutRef.current = null;
    }, SPEECH_DURATION_MS);
  }

  function resetToNewGame() {
    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = null;
    }
    const fresh = createNewGameState();
    setStats(fresh.stats);
    setPosition(fresh.position);
    setDisplayPosition(fresh.displayPosition);
    setTurnCount(fresh.turnCount);
    setSkipTurns(fresh.skipTurns);
    setLastRoll(null);
    setSpeechText(null);
    setCurrentEvent(null);
    setIsEventModalOpen(false);
    setNotice(null);
    setDicePhase(null);
    setIsMoving(false);
    setEndPhase(null);
    setEnding(null);
    setTilePools({
      eventPool: fresh.eventPool,
      resourcePool: fresh.resourcePool,
      specialPool: fresh.specialPool,
    });
  }

  function advanceTurnCount() {
    setTurnCount((prev) => {
      const next = prev + 1;
      if (next % 3 === 0) showSpeechBubble();
      return next;
    });
  }

  function openNotice(payload: NoticePayload) {
    setNotice(payload);
  }

  function closeNotice() {
    setNotice(null);
  }

  function handleLandOnTile(pathIndex: number, pools: TilePools) {
    const tile = boardPath[pathIndex];

    switch (tile.type) {
      case "event": {
        const { index, pool } = drawIndex(pools.eventPool, events.length);
        setTilePools((prev) => ({ ...prev, eventPool: pool }));
        setCurrentEvent(localizeEvent(events[index], locale));
        setIsEventModalOpen(true);
        break;
      }
      case "resource": {
        const { index, pool } = drawIndex(pools.resourcePool, resources.length);
        setTilePools((prev) => ({ ...prev, resourcePool: pool }));
        const resource = localizeResource(resources[index], index, locale);
        openNotice({
          title: resource.title,
          description: resource.description,
          effects: resource.effects,
        });
        break;
      }
      case "special": {
        const { index, pool } = drawIndex(pools.specialPool, specialTiles.length);
        setTilePools((prev) => ({ ...prev, specialPool: pool }));
        const special = localizeSpecialTile(specialTiles[index], index, locale);
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

  function animatePlayerMove(from: number, steps: number) {
    setIsMoving(true);
    let current = from;
    let moved = 0;

    const moveStep = () => {
      if (moved < steps) {
        current = (current + 1) % BOARD_SIZE;
        setDisplayPosition(current);
        moved += 1;
        setTimeout(moveStep, STEP_DELAY_MS);
        return;
      }

      setPosition(current);
      setTimeout(() => {
        setIsMoving(false);
        handleLandOnTile(current, tilePoolsRef.current);
      }, LAND_PAUSE_MS);
    };

    moveStep();
  }

  function handleRollDice() {
    if (isBusy || turnCount >= MAX_TURNS) return;

    clearSpeechTimeout();
    setSpeechText(null);

    if (skipTurns > 0) {
      setSkipTurns((prev) => prev - 1);
      setLastRoll(null);
      advanceTurnCount();
      return;
    }

    const roll = Math.floor(Math.random() * 6) + 1;
    setDicePhase("rolling");
    setDiceDisplay(Math.floor(Math.random() * 6) + 1);
    advanceTurnCount();

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
        animatePlayerMove(position, roll);
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

  function handleStartGame() {
    clearGameState();
    resetToNewGame();
    setScreen("game");
  }

  function handleContinueGame() {
    const saved = loadGameState();
    if (!saved) return;
    setStats(saved.stats);
    setPosition(saved.position);
    setDisplayPosition(saved.displayPosition);
    setTurnCount(saved.turnCount);
    setSkipTurns(saved.skipTurns);
    setLastRoll(null);
    setSpeechText(null);
    setCurrentEvent(null);
    setIsEventModalOpen(false);
    setNotice(null);
    setDicePhase(null);
    setIsMoving(false);
    setEndPhase(null);
    setEnding(null);
    setTilePools({
      eventPool: saved.eventPool,
      resourcePool: saved.resourcePool,
      specialPool: saved.specialPool,
    });
    setScreen("game");
  }

  function handleExitGame() {
    clearGameState();
    resetToNewGame();
    setShowExitConfirm(false);
    setScreen("start");
  }

  function handleViewIdentity() {
    setEnding(localizeEnding(resolveEnding(stats), locale));
    setEndPhase("identity");
  }

  function handleBackToMenu() {
    clearGameState();
    resetToNewGame();
    setScreen("start");
  }

  useEffect(() => {
    if (screen !== "game" || isGameOver) return;
    saveGameState({
      stats,
      position,
      displayPosition,
      turnCount,
      skipTurns,
      eventPool: tilePools.eventPool,
      resourcePool: tilePools.resourcePool,
      specialPool: tilePools.specialPool,
    });
  }, [
    screen,
    stats,
    position,
    displayPosition,
    turnCount,
    skipTurns,
    tilePools,
    isGameOver,
  ]);

  useEffect(() => {
    if (
      screen !== "game" ||
      turnCount < MAX_TURNS ||
      isBusy ||
      endPhase !== null
    ) {
      return;
    }
    setEndPhase("over");
  }, [screen, turnCount, isBusy, endPhase]);

  const statKeys = STAT_KEYS;

  const rollDiceLabel =
    turnCount >= MAX_TURNS
      ? ui.game.gameOver
      : skipTurns > 0 && !isModalOpen && !isDiceActive && !isMoving
        ? ui.game.skipTurn
        : isDiceActive
          ? ui.game.rolling
          : isMoving
            ? ui.game.moving
            : ui.game.rollDice;

  if (screen === "start") {
    return (
      <>
        <StartScreen
          onStart={handleStartGame}
          onContinue={handleContinueGame}
          hasSavedGame={hasSavedGame}
          onRules={() => setShowRules(true)}
        />
        <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
      </>
    );
  }

  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-[#f4efe6] font-sans text-stone-800">
      <div className="mx-auto flex h-full w-full max-w-5xl min-h-0 gap-2 px-2 py-2 sm:gap-3 sm:px-4">
        <TurnPanel turnCount={turnCount} />

        <main className="flex min-h-0 min-w-0 flex-1 flex-col">
          <header className="relative shrink-0 pb-1 text-center">
            <button
              type="button"
              onClick={() => setShowRules(true)}
              className="absolute left-0 top-0 rounded-lg border border-stone-300/60 bg-[#efe9df] px-2 py-1 text-[10px] font-medium text-stone-700 hover:bg-[#e8e0d4] sm:px-3 sm:text-xs"
            >
              {ui.game.rules}
            </button>
            <button
              type="button"
              onClick={() => setShowExitConfirm(true)}
              className="absolute right-0 top-0 rounded-lg border border-stone-300/60 bg-[#efe9df] px-2 py-1 text-[10px] font-medium text-stone-700 hover:bg-[#e8e0d4] sm:px-3 sm:text-xs"
            >
              {ui.game.exit}
            </button>
            <h1 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              Her Field
            </h1>
            <p className="mt-0.5 text-[10px] tabular-nums text-stone-500 sm:hidden">
              {ui.game.turnMobile(turnCount, MAX_TURNS, turnsRemaining)}
            </p>
          </header>

          <section className="shrink-0 grid grid-cols-4 gap-1.5 pb-2 sm:gap-2">
            {statKeys.map((key) => (
              <div
                key={key}
                className="rounded-lg border border-stone-300/60 bg-[#f7f3ed] px-1.5 py-1 text-center shadow-sm sm:px-2 sm:py-1.5"
              >
                <p className="truncate text-[9px] uppercase tracking-wide text-stone-500 sm:text-[10px]">
                  {statLabels[key]}
                </p>
                <p className="text-base font-semibold leading-tight tabular-nums sm:text-lg">
                  {stats[key]}
                </p>
              </div>
            ))}
          </section>

          <section className="relative flex min-h-0 flex-1 flex-col overflow-visible rounded-xl border border-stone-300/50 bg-[#f7f3ed] p-2 shadow-[0_4px_20px_rgba(68,64,60,0.08)] sm:p-3">
            <BoardDecorations items={outerDecorations} />
            <div className="shrink-0 flex flex-wrap items-center justify-center gap-1.5 pb-1 text-[10px] text-stone-600 sm:gap-2 sm:text-xs">
              {tileLegend.map(({ type, colorClass }) => (
                <span
                  key={type}
                  className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 sm:px-2 ${colorClass}`}
                >
                  <TileIcon type={type} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="font-medium">{getTileLabel(locale, type)}</span>
                </span>
              ))}
            </div>

            <div className="shrink-0 flex flex-wrap items-center justify-between gap-1 pb-1 text-[10px] text-stone-600 sm:text-xs">
              <span>
                {ui.game.tileInfo(position + 1, getTileLabel(locale, currentTile.type))}
              </span>
              <span className="flex gap-2 tabular-nums">
                {lastRoll !== null && !isDiceActive && !isMoving && (
                  <span>{ui.game.rolled(lastRoll)}</span>
                )}
                {skipTurns > 0 && (
                  <span className="text-red-700">
                    {ui.game.skipTurns(skipTurns)}
                  </span>
                )}
              </span>
            </div>

            <div className="relative flex min-h-0 flex-1 gap-2 overflow-visible sm:gap-3">
              <div className="relative min-h-0 min-w-0 flex-1 overflow-visible">
                <BoardDecorations items={innerDecorations} />
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
                      const isCurrent = pathIndex === displayPosition;

                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`relative flex min-h-0 min-w-0 items-center justify-center rounded border text-center transition-all ${tileStyle(tile.type, isCurrent)}`}
                          title={`${pathIndex + 1}. ${tile.type}`}
                        >
                          <TileIcon
                            type={tile.type}
                            className="h-[45%] w-[45%] max-h-6 max-w-6 sm:max-h-7 sm:max-w-7"
                          />
                        </div>
                      );
                    }),
                  )}
                </div>

                <PlayerCharacter
                  pathIndex={displayPosition}
                  speechText={speechText}
                />

                {dicePhase && (
                  <DiceRollOverlay phase={dicePhase} displayValue={diceDisplay} />
                )}
              </div>

              <aside className="flex w-[4.5rem] shrink-0 flex-col justify-center sm:w-24 md:w-28">
                <button
                  type="button"
                  onClick={handleRollDice}
                  disabled={isBusy || turnCount >= MAX_TURNS}
                  className="flex min-h-[7rem] flex-1 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-blue-400 bg-blue-100 px-2 py-4 text-center font-bold leading-tight text-blue-950 shadow-[0_6px_20px_rgba(96,140,200,0.25)] ring-4 ring-blue-200/60 transition-all hover:border-blue-500 hover:bg-blue-200 hover:shadow-[0_8px_24px_rgba(96,140,200,0.32)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-[9rem] sm:rounded-2xl sm:px-3 sm:py-5 md:min-h-[10rem]"
                >
                  <span
                    className="text-3xl leading-none sm:text-4xl"
                    aria-hidden
                  >
                    🎲
                  </span>
                  <span className="text-[11px] uppercase tracking-wide sm:text-sm">
                    {rollDiceLabel}
                  </span>
                </button>
              </aside>
            </div>
          </section>
        </main>
      </div>

      {currentEvent && (
        <EventModal
          event={currentEvent}
          stats={stats}
          isOpen={isEventModalOpen}
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
          onConfirm={handleNoticeConfirm}
        />
      )}

      <ExitConfirmModal
        isOpen={showExitConfirm}
        onBack={() => setShowExitConfirm(false)}
        onExit={handleExitGame}
      />

      <GameOverModal
        isOpen={endPhase === "over"}
        onViewIdentity={handleViewIdentity}
      />

      {ending && (
        <EndingResultModal
          ending={ending}
          isOpen={endPhase === "identity"}
          onClose={handleBackToMenu}
        />
      )}

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
}
