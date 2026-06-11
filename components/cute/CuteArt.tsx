import type { TileType } from "../../data/board";
import type { DecorationType } from "../../data/decorations";

type ArtProps = { className?: string };

function Svg({ className, children, viewBox = "0 0 64 64" }: ArtProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden>
      {children}
    </svg>
  );
}

export function CuteTennisPlayer({ className }: ArtProps) {
  return (
    <Svg className={className} viewBox="0 0 48 64">
      <ellipse cx="24" cy="58" rx="14" ry="3" fill="#000" opacity="0.12" />
      {/* ponytail — behind head & body */}
      <path
        d="M29 15 C38 14, 40 24, 38 34 C36 42, 32 46, 30 40 C33 32, 33 22, 29 17 Z"
        fill="#78350f"
      />
      <ellipse cx="30" cy="15" rx="2.5" ry="1.8" fill="#f472b6" />
      <path d="M16 52 L20 38 L28 38 L32 52 Z" fill="#fda4af" stroke="#e879a9" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="18" y="38" width="12" height="6" rx="2" fill="#fff" opacity="0.9" />
      <circle cx="24" cy="24" r="11" fill="#fecdd3" stroke="#f9a8d4" strokeWidth="1.5" />
      {/* bangs */}
      <path d="M14 20 C14 11, 34 11, 34 20 C31 16, 27 14, 24 14 C21 14, 17 16, 14 20 Z" fill="#78350f" />
      <circle cx="20" cy="22" r="1.8" fill="#57534e" />
      <circle cx="28" cy="22" r="1.8" fill="#57534e" />
      <circle cx="21" cy="21" r="0.6" fill="#fff" />
      <circle cx="29" cy="21" r="0.6" fill="#fff" />
      <path d="M20 27 Q24 30 28 27" fill="none" stroke="#be123c" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M30 18 Q34 22 32 28" fill="none" stroke="#fecdd3" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="28" x2="40" y2="16" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="42" cy="14" rx="7" ry="9" fill="#bbf7d0" stroke="#86efac" strokeWidth="1.5" />
      <line x1="38" y1="10" x2="46" y2="10" stroke="#86efac" strokeWidth="1" opacity="0.6" />
      <line x1="39" y1="14" x2="45" y2="14" stroke="#86efac" strokeWidth="1" opacity="0.6" />
      <line x1="39" y1="18" x2="45" y2="18" stroke="#86efac" strokeWidth="1" opacity="0.6" />
      <ellipse cx="17" cy="54" rx="5" ry="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
      <ellipse cx="31" cy="54" rx="5" ry="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
    </Svg>
  );
}

export function TileIcon({ type, className }: ArtProps & { type: TileType }) {
  switch (type) {
    case "start":
      return (
        <Svg className={className}>
          <rect x="8" y="28" width="32" height="20" rx="4" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
          <path d="M8 32 H40" stroke="#fff" strokeWidth="3" strokeDasharray="6 4" />
          <line x1="44" y1="20" x2="44" y2="52" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
          <circle cx="44" cy="18" r="5" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        </Svg>
      );
    case "event":
      return (
        <Svg className={className}>
          <path d="M32 8 L36 24 L52 24 L40 34 L44 50 L32 40 L20 50 L24 34 L12 24 L28 24 Z" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
          <text x="32" y="36" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#92400e">!</text>
        </Svg>
      );
    case "resource":
      return (
        <Svg className={className}>
          <circle cx="32" cy="34" r="18" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="32" cy="34" r="13" fill="#fde68a" />
          <text x="32" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#b45309">$</text>
        </Svg>
      );
    case "special":
      return (
        <Svg className={className}>
          <path d="M32 10 L36 26 L52 26 L40 36 L44 52 L32 42 L20 52 L24 36 L12 26 L28 26 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" />
        </Svg>
      );
    default:
      return null;
  }
}

function Ponytail({ cx = 29, cy = 15 }: { cx?: number; cy?: number }) {
  return (
    <>
      <path
        d={`M${cx} ${cy - 1} C${cx + 9} ${cy - 2}, ${cx + 11} ${cy + 8}, ${cx + 9} ${cy + 18} C${cx + 7} ${cy + 26}, ${cx + 3} ${cy + 30}, ${cx + 1} ${cy + 24} C${cx + 4} ${cy + 16}, ${cx + 4} ${cy + 6}, ${cx} ${cy + 1} Z`}
        fill="#78350f"
      />
      <ellipse cx={cx + 1} cy={cy - 1} rx="2.5" ry="1.8" fill="#f472b6" />
    </>
  );
}

function FemaleHead({ hairColor = "#78350f" }: { hairColor?: string }) {
  return (
    <>
      <circle cx="24" cy="18" r="10" fill="#fecdd3" stroke="#fda4af" strokeWidth="1.5" />
      <path d="M14 20 C14 11, 34 11, 34 20 C31 16, 27 14, 24 14 C21 14, 17 16, 14 20 Z" fill={hairColor} />
      <circle cx="20" cy="17" r="1.5" fill="#57534e" />
      <circle cx="28" cy="17" r="1.5" fill="#57534e" />
      <path d="M20 22 Q24 25 28 22" fill="none" stroke="#be123c" strokeWidth="1" strokeLinecap="round" />
    </>
  );
}

function Volleyball({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <circle cx="32" cy="32" r="22" fill="#fff" stroke="#fcd34d" strokeWidth="2" />
      <path d="M32 10 L32 54" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
      <path d="M14 22 Q32 32 14 42" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M50 22 Q32 32 50 42" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.6" />
    </Svg>
  );
}

function WaterBottle({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <rect x="22" y="18" width="20" height="36" rx="8" fill="#7dd3fc" stroke="#38bdf8" strokeWidth="2" />
      <rect x="26" y="10" width="12" height="10" rx="3" fill="#bae6fd" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="24" y="6" width="16" height="6" rx="2" fill="#64748b" />
      <ellipse cx="28" cy="30" rx="4" ry="6" fill="#fff" opacity="0.4" />
    </Svg>
  );
}

function Sneaker({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <path d="M10 36 Q14 28 28 26 L44 28 Q50 32 52 40 L52 46 Q48 50 20 48 L8 44 Q6 40 10 36 Z" fill="#f472b6" stroke="#ec4899" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 36 Q14 28 28 26 L44 28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <ellipse cx="18" cy="42" rx="6" ry="3" fill="#fff" opacity="0.35" />
    </Svg>
  );
}

function Trophy({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <path d="M18 14 H46 V28 Q46 38 32 40 Q18 38 18 28 Z" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 20 H10 Q6 20 6 26 Q6 32 14 32 H18" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <path d="M46 20 H54 Q58 20 58 26 Q58 32 50 32 H46" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <rect x="28" y="40" width="8" height="8" fill="#d97706" />
      <rect x="22" y="48" width="20" height="6" rx="2" fill="#b45309" />
      <text x="32" y="32" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">1</text>
    </Svg>
  );
}

function SoccerBall({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <circle cx="32" cy="32" r="22" fill="#fff" stroke="#d6d3d1" strokeWidth="2" />
      <path d="M32 14 L26 24 L32 32 L38 24 Z" fill="#57534e" />
      <path d="M20 36 L28 32 L32 40 L24 44 Z" fill="#57534e" opacity="0.7" />
      <path d="M44 36 L36 32 L32 40 L40 44 Z" fill="#57534e" opacity="0.7" />
    </Svg>
  );
}

function Basketball({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <circle cx="32" cy="32" r="22" fill="#fb923c" stroke="#ea580c" strokeWidth="2" />
      <path d="M32 10 V54" stroke="#c2410c" strokeWidth="2" fill="none" />
      <path d="M10 32 H54" stroke="#c2410c" strokeWidth="2" fill="none" />
      <path d="M14 18 Q32 32 14 46" stroke="#c2410c" strokeWidth="1.5" fill="none" />
      <path d="M50 18 Q32 32 50 46" stroke="#c2410c" strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function TennisBall({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <circle cx="32" cy="32" r="22" fill="#bef264" stroke="#84cc16" strokeWidth="2" />
      <path d="M18 16 Q32 32 18 48" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M46 16 Q32 32 46 48" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function PingPongBall({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <circle cx="32" cy="32" r="16" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
      <ellipse cx="28" cy="28" rx="4" ry="3" fill="#f3f4f6" opacity="0.8" />
    </Svg>
  );
}

function TennisRacket({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <line x1="32" y1="54" x2="32" y2="22" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="32" cy="16" rx="14" ry="16" fill="#bbf7d0" stroke="#86efac" strokeWidth="2" />
      <line x1="20" y1="16" x2="44" y2="16" stroke="#86efac" strokeWidth="1" opacity="0.5" />
      <line x1="32" y1="2" x2="32" y2="30" stroke="#86efac" strokeWidth="1" opacity="0.5" />
    </Svg>
  );
}

function PingPongPaddle({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <line x1="32" y1="58" x2="32" y2="28" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="32" cy="18" rx="16" ry="14" fill="#f87171" stroke="#ef4444" strokeWidth="2" />
      <ellipse cx="28" cy="14" rx="5" ry="4" fill="#fca5a5" opacity="0.5" />
    </Svg>
  );
}

function BadmintonRacket({ className }: ArtProps) {
  return (
    <Svg className={className}>
      <line x1="32" y1="58" x2="32" y2="24" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="32" cy="16" rx="15" ry="16" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
      <line x1="20" y1="16" x2="44" y2="16" stroke="#d1d5db" strokeWidth="1" />
      <line x1="32" y1="2" x2="32" y2="30" stroke="#d1d5db" strokeWidth="1" />
    </Svg>
  );
}

function SoccerPlayer({ className }: ArtProps) {
  return (
    <Svg className={className} viewBox="0 0 48 64">
      <ellipse cx="24" cy="58" rx="12" ry="3" fill="#000" opacity="0.1" />
      <Ponytail cx={28} cy={14} />
      <FemaleHead />
      <rect x="16" y="28" width="16" height="18" rx="6" fill="#4ade80" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="14" y="30" width="6" height="14" rx="3" fill="#fecdd3" />
      <rect x="28" y="30" width="6" height="14" rx="3" fill="#fecdd3" />
      <circle cx="38" cy="36" r="8" fill="#fff" stroke="#d6d3d1" strokeWidth="1.5" />
      <rect x="17" y="46" width="6" height="12" rx="3" fill="#57534e" />
      <rect x="25" y="46" width="6" height="12" rx="3" fill="#57534e" />
    </Svg>
  );
}

function BasketballPlayer({ className }: ArtProps) {
  return (
    <Svg className={className} viewBox="0 0 48 64">
      <ellipse cx="24" cy="58" rx="12" ry="3" fill="#000" opacity="0.1" />
      <Ponytail cx={28} cy={14} />
      <circle cx="24" cy="18" r="10" fill="#fde68a" stroke="#fcd34d" strokeWidth="1.5" />
      <path d="M14 20 C14 11, 34 11, 34 20 C31 16, 27 14, 24 14 C21 14, 17 16, 14 20 Z" fill="#1e3a5f" />
      <circle cx="20" cy="17" r="1.5" fill="#57534e" />
      <circle cx="28" cy="17" r="1.5" fill="#57534e" />
      <path d="M20 22 Q24 25 28 22" fill="none" stroke="#be123c" strokeWidth="1" strokeLinecap="round" />
      <rect x="16" y="28" width="16" height="18" rx="6" fill="#fb923c" stroke="#f97316" strokeWidth="1.5" />
      <rect x="10" y="32" width="8" height="6" rx="3" fill="#fde68a" />
      <circle cx="8" cy="28" r="7" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
      <rect x="17" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
      <rect x="25" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
    </Svg>
  );
}

function TennisPlayerDeco({ className }: ArtProps) {
  return (
    <Svg className={className} viewBox="0 0 48 64">
      <ellipse cx="24" cy="58" rx="12" ry="3" fill="#000" opacity="0.1" />
      <Ponytail cx={28} cy={14} />
      <FemaleHead />
      <path d="M16 52 L20 38 L28 38 L32 52 Z" fill="#fda4af" stroke="#e879a9" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="18" y="38" width="12" height="6" rx="2" fill="#fff" opacity="0.9" />
      <path d="M30 18 Q34 22 32 28" fill="none" stroke="#fecdd3" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="28" x2="40" y2="16" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="42" cy="14" rx="7" ry="9" fill="#bbf7d0" stroke="#86efac" strokeWidth="1.5" />
      <ellipse cx="17" cy="54" rx="5" ry="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
      <ellipse cx="31" cy="54" rx="5" ry="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
    </Svg>
  );
}

function VolleyballPlayer({ className }: ArtProps) {
  return (
    <Svg className={className} viewBox="0 0 48 64">
      <ellipse cx="24" cy="58" rx="12" ry="3" fill="#000" opacity="0.1" />
      <Ponytail cx={28} cy={14} />
      <FemaleHead />
      <rect x="16" y="28" width="16" height="18" rx="6" fill="#818cf8" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="12" y="22" width="6" height="16" rx="3" fill="#fecdd3" />
      <rect x="30" y="22" width="6" height="16" rx="3" fill="#fecdd3" />
      <circle cx="24" cy="10" r="7" fill="#fff" stroke="#fcd34d" strokeWidth="1.5" />
      <rect x="17" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
      <rect x="25" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
    </Svg>
  );
}

function BadmintonPlayer({ className }: ArtProps) {
  return (
    <Svg className={className} viewBox="0 0 48 64">
      <ellipse cx="24" cy="58" rx="12" ry="3" fill="#000" opacity="0.1" />
      <Ponytail cx={28} cy={14} />
      <FemaleHead />
      <rect x="16" y="28" width="16" height="18" rx="6" fill="#a7f3d0" stroke="#34d399" strokeWidth="1.5" />
      <rect x="10" y="20" width="6" height="14" rx="3" fill="#fecdd3" />
      <line x1="14" y1="20" x2="14" y2="8" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="14" cy="6" rx="8" ry="7" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1.5" />
      <rect x="17" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
      <rect x="25" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
    </Svg>
  );
}

function PingPongPlayer({ className }: ArtProps) {
  return (
    <Svg className={className} viewBox="0 0 48 64">
      <ellipse cx="24" cy="58" rx="12" ry="3" fill="#000" opacity="0.1" />
      <Ponytail cx={28} cy={14} />
      <FemaleHead />
      <rect x="16" y="28" width="16" height="18" rx="6" fill="#fca5a5" stroke="#f87171" strokeWidth="1.5" />
      <rect x="30" y="24" width="6" height="12" rx="3" fill="#fecdd3" />
      <line x1="34" y1="24" x2="34" y2="12" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="34" cy="8" rx="7" ry="6" fill="#f87171" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="10" cy="30" r="5" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="17" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
      <rect x="25" y="46" width="6" height="12" rx="3" fill="#fff" stroke="#d6d3d1" strokeWidth="1" />
    </Svg>
  );
}

export function DecorationArt({ type, className }: ArtProps & { type: DecorationType }) {
  switch (type) {
    case "soccer-ball": return <SoccerBall className={className} />;
    case "basketball": return <Basketball className={className} />;
    case "tennis-ball": return <TennisBall className={className} />;
    case "ping-pong-ball": return <PingPongBall className={className} />;
    case "volleyball": return <Volleyball className={className} />;
    case "tennis-racket": return <TennisRacket className={className} />;
    case "ping-pong-paddle": return <PingPongPaddle className={className} />;
    case "badminton-racket": return <BadmintonRacket className={className} />;
    case "water-bottle": return <WaterBottle className={className} />;
    case "sneaker": return <Sneaker className={className} />;
    case "trophy": return <Trophy className={className} />;
    case "soccer-player": return <SoccerPlayer className={className} />;
    case "basketball-player": return <BasketballPlayer className={className} />;
    case "tennis-player": return <TennisPlayerDeco className={className} />;
    case "volleyball-player": return <VolleyballPlayer className={className} />;
    case "badminton-player": return <BadmintonPlayer className={className} />;
    case "ping-pong-player": return <PingPongPlayer className={className} />;
    default: return null;
  }
}
