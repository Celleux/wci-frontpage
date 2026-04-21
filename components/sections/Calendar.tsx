"use client";
import { useRef } from "react";

// FIFA WC26: Jun 11 – Jul 19 2026 = 39 days
const WC_START = new Date("2026-06-11T00:00:00-06:00");
const TODAY = new Date("2026-04-21");

const MATCH_DAYS = Array.from({ length: 39 }, (_, i) => {
  const d = new Date(WC_START);
  d.setDate(d.getDate() + i);
  return d;
});

const SAMPLE_MATCHES: Record<number, string[]> = {
  0: ["MEX vs CAL", "USA vs TUR"],
  1: ["ARG vs POL"],
  2: ["BRA vs GER", "FRA vs ENG"],
  4: ["ESP vs POR"],
  6: ["JAP vs KOR"],
  8: ["MEX vs ARG"],
  9: ["USA vs BRA"],
  11: ["R16"],
  12: ["R16"],
  14: ["QF"],
  16: ["QF"],
  18: ["SF"],
  20: ["SF"],
  22: ["3rd Place"],
  24: ["FINAL"],
};

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Calendar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ dragging: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    dragRef.current = { dragging: true, startX: e.pageX, scrollLeft: trackRef.current?.scrollLeft ?? 0 };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.dragging || !trackRef.current) return;
    trackRef.current.scrollLeft = dragRef.current.scrollLeft - (e.pageX - dragRef.current.startX);
  };
  const onMouseUp = () => { dragRef.current.dragging = false; };

  const todayDelta = Math.floor((TODAY.getTime() - WC_START.getTime()) / 86400000);

  return (
    <section id="calendar" className="section" style={{ paddingBottom: 80 }}>
      <div className="section-header">
        <span className="eyebrow">
          <span className="dot" />
          Match Calendar
        </span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          39 days. 104 matches.
        </h2>
        <p className="lead" style={{ marginTop: 18 }}>
          Jun 11 – Jul 19, 2026. Paul picks every matchday. Drag to scroll.
        </p>
      </div>

      {/* Drag-scroll ribbon */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          paddingBottom: 16,
          cursor: "grab",
          userSelect: "none",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {MATCH_DAYS.map((day, i) => {
          const isToday = i === todayDelta;
          const isPast = i < todayDelta;
          const hasMatches = !!SAMPLE_MATCHES[i];
          const label = `${MONTH_NAMES[day.getMonth()]} ${pad(day.getDate())}`;
          const dayNum = i + 1;

          return (
            <a
              key={i}
              href="https://bet.wci26.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: "0 0 auto",
                width: hasMatches ? 110 : 80,
                padding: "14px 10px",
                borderRadius: 16,
                background: isToday
                  ? "linear-gradient(180deg, rgba(245,208,32,0.18), rgba(245,208,32,0.06))"
                  : isPast
                  ? "rgba(255,255,255,0.02)"
                  : "linear-gradient(180deg, var(--bg-elevated), var(--bg-card))",
                border: `1px solid ${
                  isToday
                    ? "rgba(245,208,32,0.55)"
                    : hasMatches
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.04)"
                }`,
                boxShadow: isToday ? "0 0 24px -8px rgba(245,208,32,0.4)" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                textDecoration: "none",
                transition: "transform 200ms, border-color 200ms",
                opacity: isPast ? 0.45 : 1,
                position: "relative",
              }}
            >
              {isToday && (
                <span style={{
                  position: "absolute",
                  top: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--gold)",
                  color: "#1a0e00",
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "2px 8px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                }}>
                  TODAY
                </span>
              )}
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--t3)",
              }}>
                MD {pad(dayNum)}
              </span>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 15,
                color: isToday ? "var(--gold)" : "var(--t1)",
              }}>
                {label}
              </span>
              {hasMatches && (
                <div style={{ display: "flex", flexDirection: "column", gap: 3, width: "100%", marginTop: 4 }}>
                  {SAMPLE_MATCHES[i].map((m, mi) => (
                    <span
                      key={mi}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        color: isToday ? "var(--gold)" : "var(--t2)",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 6,
                        padding: "2px 6px",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
              {!hasMatches && (
                <span style={{
                  width: 20,
                  height: 2,
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  marginTop: 4,
                }} />
              )}
            </a>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{
        display: "flex",
        gap: 20,
        marginTop: 16,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--t3)",
        letterSpacing: "0.1em",
        flexWrap: "wrap",
      }}>
        {[
          { color: "rgba(245,208,32,0.55)", label: "Active day" },
          { color: "rgba(255,255,255,0.1)", label: "Match day" },
          { color: "rgba(255,255,255,0.04)", label: "Rest day" },
        ].map((l) => (
          <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 12, height: 12, borderRadius: 4, border: `1px solid ${l.color}`, display: "inline-block" }} />
            {l.label}
          </span>
        ))}
      </div>
    </section>
  );
}
