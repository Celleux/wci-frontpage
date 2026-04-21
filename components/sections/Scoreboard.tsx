"use client";

const LEDGER = [
  { rank: 1, address: "0x88…eA12", picks: 12, wins: 11, roi: "+182%", streak: 7 },
  { rank: 2, address: "0x1A…e4F",  picks: 10, wins: 9,  roi: "+134%", streak: 5 },
  { rank: 3, address: "0xFE…0012", picks: 9,  wins: 8,  roi: "+98%",  streak: 4 },
  { rank: 4, address: "0x5C…A301", picks: 14, wins: 11, roi: "+87%",  streak: 3 },
  { rank: 5, address: "0xAB…22FF", picks: 8,  wins: 6,  roi: "+55%",  streak: 2 },
  { rank: 6, address: "0x2D…110B", picks: 11, wins: 8,  roi: "+44%",  streak: 1 },
];

const PODIUM = [
  { rank: 2, address: "0x1A…e4F",  roi: "+134%", height: 80 },
  { rank: 1, address: "0x88…eA12", roi: "+182%", height: 112 },
  { rank: 3, address: "0xFE…0012", roi: "+98%",  height: 56 },
];

const MEDAL = ["", "&#127947;", "&#129352;", "&#129353;"];

export default function Scoreboard() {
  return (
    <section id="leaderboard" className="section" style={{ paddingTop: 80 }}>
      <div className="section-header">
        <span className="eyebrow">
          <span className="dot" />
          Paul&apos;s Ledger
        </span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          Who&apos;s riding the streak.
        </h2>
        <p className="lead" style={{ marginTop: 18 }}>
          Top predictors across 104 matches. Follow Paul, collect winnings,
          own the Cope Cards.
        </p>
      </div>

      {/* Browser mock */}
      <div className="browser-mock" style={{ maxWidth: 860, margin: "0 auto 48px" }}>
        <div className="browser-bar">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-url">
            <span className="browser-url-lock">&#128274;</span>
            bet.wci26.com/scoreboard
          </div>
        </div>
        <div className="browser-content" style={{ padding: "32px 32px 24px" }}>
          {/* Podium */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 16,
              marginBottom: 36,
            }}
          >
            {PODIUM.map((p) => (
              <div
                key={p.rank}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 20,
                  }}
                  dangerouslySetInnerHTML={{ __html: MEDAL[p.rank] }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--t2)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.address}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 900,
                    fontSize: 16,
                    color: "var(--gold)",
                  }}
                >
                  {p.roi}
                </div>
                <div
                  style={{
                    width: 80,
                    height: p.height,
                    borderRadius: "8px 8px 0 0",
                    background:
                      p.rank === 1
                        ? "linear-gradient(180deg, var(--gold-hi), var(--gold-lo))"
                        : p.rank === 2
                        ? "linear-gradient(180deg, #b0b8c4, #8a929e)"
                        : "linear-gradient(180deg, #c8884a, #8a5a2a)",
                    boxShadow:
                      p.rank === 1
                        ? "0 0 24px -8px rgba(245,208,32,0.5)"
                        : "none",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 8,
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 22,
                    color: "#1a0e00",
                  }}
                >
                  {p.rank}
                </div>
              </div>
            ))}
          </div>

          {/* Ledger rows */}
          <div style={{ display: "grid", gap: 8, width: "100%" }}>
            {LEDGER.map((row) => (
              <div
                key={row.rank}
                style={{
                  display: "grid",
                  gridTemplateColumns: "32px 1fr auto auto auto",
                  gap: 12,
                  alignItems: "center",
                  padding: "10px 14px",
                  borderRadius: 10,
                  background:
                    row.rank <= 3
                      ? "rgba(245,208,32,0.04)"
                      : "rgba(255,255,255,0.02)",
                  border: `1px solid ${row.rank <= 3 ? "rgba(245,208,32,0.12)" : "rgba(255,255,255,0.05)"}`,
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
                  #{row.rank}
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
                    fontSize: 11,
                    color: "var(--t3)",
                  }}
                >
                  {row.wins}/{row.picks} picks
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--lime)",
                  }}
                >
                  {row.roi}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--t3)",
                  }}
                >
                  &#128293; ×{row.streak}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" }}>
        <a
          href="https://bet.wci26.com/scoreboard"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d btn-ghost"
          style={{ fontSize: 14 }}
        >
          View Full Scoreboard &#8594;
        </a>
      </div>
    </section>
  );
}
