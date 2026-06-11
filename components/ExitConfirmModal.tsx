"use client";

type ExitConfirmModalProps = {
  isOpen: boolean;
  onBack: () => void;
  onExit: () => void;
};

export default function ExitConfirmModal({
  isOpen,
  onBack,
  onExit,
}: ExitConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-stone-800/35 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={onBack}
      />
      <div className="relative w-full max-w-sm rounded-2xl border border-stone-300/50 bg-[#f7f3ed] p-6 shadow-lg">
        <h2 className="font-serif text-lg font-semibold text-stone-800">
          Exit game?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          If you leave now, your progress will not be saved. Are you sure you
          want to exit?
        </p>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-sm font-medium text-stone-800 hover:bg-[#e8e0d4]"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onExit}
            className="flex-1 rounded-xl border border-red-400/60 bg-red-50 px-4 py-3 text-sm font-medium text-red-900 hover:bg-red-100"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
