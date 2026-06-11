"use client";

type GameOverModalProps = {
  isOpen: boolean;
  onViewIdentity: () => void;
};

export default function GameOverModal({
  isOpen,
  onViewIdentity,
}: GameOverModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-800/40 backdrop-blur-[3px]" />
      <div className="relative w-full max-w-md rounded-2xl border border-stone-300/50 bg-[#f7f3ed] p-8 text-center shadow-[0_12px_40px_rgba(68,64,60,0.2)]">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-800">
          Game Over
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-stone-600">
          You have completed 20 turns. Your journey on the board is over — now
          discover who you became.
        </p>
        <button
          type="button"
          onClick={onViewIdentity}
          className="mt-8 w-full rounded-xl border border-stone-400/70 bg-stone-700 px-4 py-3.5 text-sm font-medium text-[#f7f3ed] transition-colors hover:bg-stone-800"
        >
          View your identity
        </button>
      </div>
    </div>
  );
}
