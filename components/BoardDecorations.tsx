"use client";

import type { ScatteredDecoration } from "../data/decorations";
import { DecorationArt } from "./cute/CuteArt";

type BoardDecorationsProps = {
  items: ScatteredDecoration[];
};

export default function BoardDecorations({ items }: BoardDecorationsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
            opacity: item.opacity ?? 1,
          }}
        >
          <DecorationArt
            type={item.type}
            className="h-full w-full drop-shadow-sm"
          />
        </div>
      ))}
    </div>
  );
}
