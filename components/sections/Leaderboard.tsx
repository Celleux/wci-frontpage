"use client";
import { useEffect, useRef, useState } from "react";

const ROWS = [
  { rank: 1, address: "0x88…eA12", roi: 182, wins: 11, picks: 12, streak: 7 },
  { rank: 2, address: "0x1A…e4F",  roi: 134, wins:  9, picks: 10, streak: 5 },
  { rank: 3, address: "0xFE…0012", roi:  98, wins:  8, picks:  9, streak: 4 },
  { rank: 4, address: "0x5C…A301", roi:  87, wins: 11, picks: 14, streak: 3 },
  { rank: 5, address: "0xAB…22FF", roi:  55, wins:  6, picks:  8, streak: 2 },
  { rank: 6, address: "0x2D…110B", roi:  44, wins:  8, picks: 11, streak: 1 },
  { rank: 7, address: "0x9F…CC40", roi:  21, wins:  5, picks:  9, streak: 0 },
] as const;

function CountUp({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return <>{val}%</>;
}

const PODIUM = [
  { ...ROWS[1], rank: 2, barH: 80 },
  { ...ROWS[0], rank: 1, barH: 120 },
  { ...ROWS[2], rank: 3, barH: 56 },
];
const BAR_COLORS: Record<number, string> = {
  1: "linear-gradient(180deg, var(--gold-hi), var(--gold-lo))",
  2: "linear-gradient(180deg, #c8d2df, #8a929e)",
  3: "linear-gradient(180deg, #e0a060, #8a5a2a)",
};

export default function Leaderboard() {
  return (
    <section id="top" className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="section-header" style={{ textAlign: "center", margin: "0 auto 56px" }}>
        <span className="eyebrow">
          <span className="dot" />
          Leaderboard
        </span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          Top predictors this season.
        </h2>
        <p className="lead" style={{ margin: "18px auto 0" }}>
          Following Paul pays. Live rankings update after every settled match.
        </p>
      </div>

      {/* Podium */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 16,
          marginBottom: 40,
        }}
      >
        {PODIUM.map((p) => (
          <div
            key={p.rank}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
          >
            <span style={{ fontSize: 24 }}>
              {p.rank === 1 ? "&#127947;" : p.rank === 2 ? "&#129352;" : "&#129353;"}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--t2)",
                letterSpacing: "0.06em",
              }}
            >
              {p.address}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 900,
                fontSize: 18,
                color: "var(--gold)",
              }}
            >
              +<CountUp target={p.roi} />
            </span>
            <div
              style={{
                width: 88,
                height: p.barH,
                borderRadius: "10px 10px 0 0",
                background: BAR_COLORS[p.rank],
                boxShadow:
                  p.rank === 1 ? "0 0 28px -8px rgba(245,208,32,0.5)" : "none",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: 10,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 24,
                color: "#1a0e00",
              }}
            >
              {p.rank}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gap: 8 }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "32px 1fr 80px 80px 80px 60px",
            gap: 12,
            padding: "6px 16px",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--t3)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <span>#</span>
          <span>Address</span>
          <span style={{ textAlign: "right" }}>ROI</span>
          <span style={{ textAlign: "right" }}>W/P</span>
          <span style={{ textAlign: "right" }}>Streak</span>
          <span />
        </div>

        {ROWS.map((row) => (
          <div
            key={row.rank}
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr 80px 80px 80px 60px",
              gap: 12,
              alignItems: "center",
              padding: "12px 16px",
              borderRadius: 12,
              background:
                row.rank <= 3
                  ? "rgba(245,208,32,0.04)"
                  : "rgba(255,255,255,0.02)",
              border: `1px solid ${
                row.rank <= 3
                  ? "rgba(245,208,32,0.12)"
                  : "rgba(255,255,255,0.05)"
              }`,
              transition: "transform 200ms, border-color 200ms",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                fontWeight: 700,
                color: row.rank <= 3 ? "var(--gold)" : "var(--t3)",
              }}
            >
              {row.rank}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--t1)",
                letterSpacing: "0.04em",
              }}
            >
              {row.address}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                fontWeight: 700,
                color: "var(--lime)",
                textAlign: "right",
              }}
            >
              +<CountUp target={row.roi} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--t2)",
                textAlign: "right",
              }}
            >
              {row.wins}/{row.picks}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: row.streak > 0 ? "var(--coral)" : "var(--t3)",
                textAlign: "right",
              }}
            >
              {row.streak > 0 ? <>&#128293; &times;{row.streak}</> : "—"}
            </span>
            <a
              href="https://bet.wci26.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d btn-ghost"
              style={{
                fontSize: 10,
                padding: "0 10px",
                height: 32,
                borderRadius: 8,
                letterSpacing: "0.08em",
              } as React.CSSProperties}
            >
              Follow
            </a>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 32 }}>
        <a
          href="https://bet.wci26.com/scoreboard"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d btn-ghost"
          style={{ fontSize: 14 }}
        >
          Full Leaderboard &#8594;
        </a>
      </div>
    </section>
  );
}
