export function Coin3D({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ overflow: "visible" }} aria-hidden="true">
      <defs>
        <radialGradient id="c-g" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FFF6C4" />
          <stop offset="50%" stopColor="#F5D020" />
          <stop offset="100%" stopColor="#8a6400" />
        </radialGradient>
        <filter id="c-shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#c-shadow)">
        <circle cx="60" cy="60" r="52" fill="url(#c-g)" stroke="#7a5a00" strokeWidth="2" />
        <circle cx="60" cy="60" r="44" fill="none" stroke="#7a5a00" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        <text
          x="60" y="70"
          textAnchor="middle"
          fontFamily="'Bricolage Grotesque', sans-serif"
          fontWeight="900"
          fontSize="34"
          fill="#3a2200"
        >
          W
        </text>
        <ellipse cx="46" cy="40" rx="12" ry="6" fill="rgba(255,255,255,0.5)" />
      </g>
    </svg>
  );
}

export default Coin3D;
