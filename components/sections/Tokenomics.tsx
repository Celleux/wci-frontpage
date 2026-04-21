"use client";

const SLICES = [
  { label: "Public Launch",   pct: 60, color: "var(--gold)",         startDeg: 0   },
  { label: "Liquidity Pool",  pct: 20, color: "var(--fifa-blue)",     startDeg: 216 },
  { label: "Ecosystem Fund",  pct: 12, color: "var(--lime)",          startDeg: 288 },
  { label: "Partnerships",    pct:  8, color: "var(--fifa-magenta)",  startDeg: 331 },
] as const;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end   = polarToCartesian(cx, cy, r, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y} Z`;
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Left: donut SVG */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <svg
            viewBox="0 0 240 240"
            width={300}
            height={300}
            style={{ overflow: "visible" }}
          >
            <defs>
              <filter id="tok-glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Slices */}
            {SLICES.map((s) => {
              const end = s.startDeg + s.pct * 3.6;
              return (
                <path
                  key={s.label}
                  d={describeArc(120, 120, 100, s.startDeg, end)}
                  fill={s.color}
                  opacity={0.9}
                  filter="url(#tok-glow)"
                  stroke="var(--bg-deep)"
                  strokeWidth={3}
                />
              );
            })}
            {/* Inner hole */}
            <circle cx={120} cy={120} r={62} fill="var(--bg-deep)" />
            <circle cx={120} cy={120} r={64} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
            {/* Center text */}
            <text
              x={120}
              y={108}
              textAnchor="middle"
              fontFamily="'Bricolage Grotesque', sans-serif"
              fontWeight={900}
              fontSize={22}
              fill="var(--gold)"
              letterSpacing={-0.5}
            >
              $WCI26
            </text>
            <text
              x={120}
              y={132}
              textAnchor="middle"
              fontFamily="'JetBrains Mono', monospace"
              fontSize={11}
              fill="var(--t3)"
              letterSpacing={1.5}
            >
              3/3 TAX
            </text>
          </svg>
        </div>

        {/* Right: breakdown */}
        <div>
          <span className="eyebrow">
            <span className="dot" />
            Tokenomics
          </span>
          <h2 className="h2" style={{ marginTop: 18, marginBottom: 28 }}>
            Simple tax.
            <br />
            No hidden fees.
          </h2>

          {/* Slice legend */}
          <div style={{ display: "grid", gap: 14, marginBottom: 36 }}>
            {SLICES.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 4,
                      background: s.color,
                      boxShadow: `0 0 12px ${s.color}88`,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: "var(--t2)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 900,
                    fontSize: 16,
                    color: s.color,
                  }}
                >
                  {s.pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Trust chips */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            <span className="chip chip-lime">0% to team</span>
            <span className="chip">Liquidity locked 180d</span>
            <span className="chip chip-gold">3/3 tax</span>
          </div>

          {/* Contract pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 18px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--t2)",
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ color: "var(--t3)" }}>CONTRACT</span>
            <span>0xWCI26…TBD</span>
            <a
              href="https://bet.wci26.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold)", textDecoration: "none", fontWeight: 700 }}
            >
              Etherscan &#8599;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
