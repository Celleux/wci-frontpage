export function Soccer3D({ size = 100, tilt = 0 }: { size?: number; tilt?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ overflow: "visible", transform: `rotate(${tilt}deg)` }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ball-g" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#d9d9d9" />
          <stop offset="100%" stopColor="#5a5a5a" />
        </radialGradient>
        <radialGradient id="ball-shine" cx="30%" cy="22%" r="30%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="ball-shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter="url(#ball-shadow)">
        <circle cx="60" cy="60" r="48" fill="url(#ball-g)" stroke="#222" strokeWidth="1.5" />
        <polygon points="60,30 74,40 68,56 52,56 46,40" fill="#0f0f12" />
        <polygon points="32,56 44,62 42,78 28,78 22,66" fill="#0f0f12" />
        <polygon points="88,56 96,68 88,80 76,78 76,62" fill="#0f0f12" />
        <polygon points="50,82 60,78 70,82 68,98 52,98" fill="#0f0f12" />
        <g stroke="#0f0f12" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M60 30 L60 20" />
          <path d="M74 40 L84 36" />
          <path d="M46 40 L36 36" />
          <path d="M68 56 L76 62" />
          <path d="M52 56 L44 62" />
          <path d="M28 78 L18 82" />
          <path d="M88 80 L98 84" />
          <path d="M52 98 L50 108" />
          <path d="M68 98 L70 108" />
        </g>
        <circle cx="60" cy="60" r="48" fill="url(#ball-shine)" />
      </g>
    </svg>
  );
}

export default Soccer3D;
