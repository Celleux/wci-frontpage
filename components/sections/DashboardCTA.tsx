"use client";
import { useState } from "react";

type Outcome = "home" | "draw" | "away";

export default function DashboardCTA() {
  const [pick, setPick] = useState<Outcome>("home");

  return (
    <section
      className="dashboard-cta"
      id="dashboard"
      data-screen-label="Dashboard CTA"
    >
      <div className="dashboard-cta-inner">
        <span className="eyebrow">
          <span className="dot" />
          bet.wci26.com
        </span>
        <h2 className="h2" style={{ marginTop: 18, marginBottom: 20 }}>
          The dashboard is live.
          <br />
          Paul is waiting.
        </h2>
        <p className="lead" style={{ margin: "0 auto 40px" }}>
          Real-time pools. Chainlink-settled picks. Cope Card mints. All in one
          place — live from Jun 11, 2026.
        </p>

        {/* Browser mock */}
        <div className="browser-mock">
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-url">
              <span className="browser-url-lock">&#128274;</span>
              bet.wci26.com/matches
            </div>
          </div>
          <div className="browser-content">
            {/* Mock nav */}
            <div
              className="browser-mock-nav"
              style={{
                width: "100%",
                justifyContent: "space-between",
                marginBottom: 24,
              }}
            >
              <div className="browser-mock-logo">
                WCI<span>&#183;</span>
              </div>
              <div style={{ display: "flex", gap: 28 }}>
                {["Matches", "Leaderboard", "Portfolio", "Cope Cards"].map(
                  (l) => (
                    <span key={l}>{l}</span>
                  )
                )}
              </div>
              <span
                className="chip chip-gold"
                style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}
              >
                Live
              </span>
            </div>

            {/* Mock match row */}
            <div
              style={{
                width: "100%",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 20,
              }}
            >
              {/* Teams */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flex: "1 1 200px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 22,
                    color: "var(--t1)",
                  }}
                >
                  &#127482;&#127480; USA
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--t3)",
                    letterSpacing: "0.18em",
                  }}
                >
                  VS
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 22,
                    color: "var(--t1)",
                  }}
                >
                  TUR &#127481;&#127479;
                </span>
              </div>

              {/* Paul confidence */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flex: "1 1 180px",
                }}
              >
                <span style={{ fontSize: 18 }}>&#129432;</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--t3)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Paul&apos;s Pick
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: 18,
                      color: "var(--gold)",
                    }}
                  >
                    USA wins · 78%
                  </div>
                </div>
              </div>

              {/* Outcome buttons */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flex: "1 1 220px",
                }}
              >
                {(["home", "draw", "away"] as Outcome[]).map((o) => (
                  <button
                    key={o}
                    onClick={() => setPick(o)}
                    style={{
                      flex: 1,
                      padding: "10px 6px",
                      borderRadius: 10,
                      border: `1px solid ${
                        pick === o
                          ? o === "home"
                            ? "var(--lime)"
                            : o === "draw"
                            ? "var(--gold)"
                            : "var(--coral)"
                          : "rgba(255,255,255,0.08)"
                      }`,
                      background:
                        pick === o
                          ? o === "home"
                            ? "rgba(159,214,52,0.1)"
                            : o === "draw"
                            ? "rgba(245,208,32,0.1)"
                            : "rgba(232,57,44,0.1)"
                          : "rgba(255,255,255,0.04)",
                      color:
                        pick === o
                          ? o === "home"
                            ? "var(--lime)"
                            : o === "draw"
                            ? "var(--gold)"
                            : "var(--coral)"
                          : "var(--t2)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 160ms",
                    }}
                  >
                    {o === "home" ? "USA" : o === "draw" ? "Draw" : "TUR"}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="browser-mock-stats" style={{ marginTop: 24 }}>
              {[
                { val: "$412K", label: "Pool size" },
                { val: "×2.87", label: "USA odds" },
                { val: "7", label: "Paul streak" },
                { val: "104", label: "Matches" },
              ].map((s, i) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  {i > 0 && <div className="browser-stat-divider" />}
                  <div className="browser-stat">
                    <div className="browser-stat-val">{s.val}</div>
                    <div className="browser-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="dashboard-cta-btn-wrap">
          <a
            href="https://bet.wci26.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d dashboard-enter-btn"
            style={{
              width: 320,
              height: 80,
              fontSize: 18,
              borderRadius: 20,
              letterSpacing: "0.08em",
            }}
          >
            &#129042; Enter the Dashboard
          </a>

          {/* Trust chips */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <span className="chip chip-lime">0% House Edge</span>
            <span className="chip">Chainlink Settled</span>
            <span className="chip">104 Matches</span>
          </div>

          <p className="dashboard-cta-sub">
            No sign-up required &middot; Connect wallet on arrival
          </p>
        </div>
      </div>
    </section>
  );
}
