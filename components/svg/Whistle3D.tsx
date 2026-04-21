export function Whistle3D({ size = 90 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ overflow: "visible" }} aria-hidden="true">
      <defs>
        <radialGradient id="w-g" cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ddd" />
          <stop offset="60%" stopColor="#888" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </radialGradient>
        <filter id="w-shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#w-shadow)">
        <path
          d="M 20 60 Q 20 36 50 36 L 90 36 Q 100 36 100 48 L 100 72 Q 100 84 90 84 L 60 84 Q 40 84 20 72 Z"
          fill="url(#w-g)"
          stroke="#1a1a1a"
          strokeWidth="1.5"
        />
        <circle cx="46" cy="60" r="6" fill="#0a0a0a" />
        <path
          d="M 86 36 Q 90 20 100 22 Q 98 30 92 36"
          fill="none"
          stroke="#F5D020"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Whistle3D;
