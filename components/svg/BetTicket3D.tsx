export function BetTicket3D({ size = 240 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 260 156"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tk-g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFE668" />
          <stop offset="50%" stopColor="#F5D020" />
          <stop offset="100%" stopColor="#C99B00" />
        </linearGradient>
        <filter id="tk-shadow">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#tk-shadow)">
        <path
          d="M8 22 Q 8 10 20 10 L 240 10 Q 252 10 252 22 L 252 62
             A 14 14 0 0 0 252 90 L 252 134 Q 252 146 240 146 L 20 146 Q 8 146 8 134 L 8 90
             A 14 14 0 0 0 8 62 Z"
          fill="url(#tk-g)"
          stroke="#7a5a00"
          strokeWidth="1.5"
        />
        <line x1="130" y1="14" x2="130" y2="142" stroke="#7a5a00" strokeDasharray="4 4" strokeWidth="1.2" />
        <text x="24" y="40" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#3a2200" fontWeight="700" letterSpacing="2">
          PAULS PICK
        </text>
        <text x="24" y="72" fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="900" fontSize="28" fill="#1a0e00">
          USA 2–1
        </text>
        <text x="24" y="94" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#3a2200" fontWeight="600">
          vs TUR · 78%
        </text>
        <text x="24" y="124" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#3a2200" fontWeight="600" letterSpacing="1.5">
          ×2.87 ODDS
        </text>
        <g transform="translate(168 42)">
          <rect x="0" y="0" width="62" height="62" rx="8" fill="#1a0e00" />
          <text x="31" y="40" textAnchor="middle" fontSize="30">🐙</text>
        </g>
        <text x="198" y="124" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#3a2200" fontWeight="700" letterSpacing="1.5">
          #WCI26-000042
        </text>
      </g>
    </svg>
  );
}

export default BetTicket3D;
