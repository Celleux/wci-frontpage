"use client";
import { useState } from "react";

type Outcome = "home" | "draw" | "away";

const POOL: Record<Outcome, number> = { home: 256000, draw: 58000, away: 98870 };
const TOTAL = POOL.home + POOL.draw + POOL.away;
const NAMES: Record<Outcome, string> = { home: "USA", draw: "Draw", away: "TUR" };
const LABELS: Record<Outcome, string> = { home: "Home", draw: "Draw", away: "Away" };
const OUTCOMES: Outcome[] = ["home", "draw", "away"];

const VIS_TABS = [
  { id: "bar", label: "Bar" },
  { id: "jars", label: "Jars" },
  { id: "scales", label: "Scales" },
] as const;
type VisTab = (typeof VIS_TABS)[number]["id"];

export default function PariMutuel() {
  const [pick, setPick] = useState<Outcome>("home");
  const [stake, setStake] = useState(250);
  const [vis, setVis] = useState<VisTab>("bar");

  const pct: Record<Outcome, number> = {
    home: (POOL.home / TOTAL) * 100,
    draw: (POOL.draw / TOTAL) * 100,
    away: (POOL.away / TOTAL) * 100,
  };
  const newPool = { ...POOL, [pick]: POOL[pick] + stake };
  const newTotal = newPool.home + newPool.draw + newPool.away;
  const payout = stake > 0 ? (newTotal / newPool[pick]) * stake : 0;
  const profit = payout - stake;

  return (
    <section id="pool" className="section parimutuel" data-screen-label="05 Pari-Mutuel">
      <div className="pm-header">
        <span className="eyebrow">How the pool works</span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          Every bet goes in one pot.
          <br />
          Winners split it. The house takes{" "}
          <span style={{ color: "var(--lime)" }}>0%</span>.
        </h2>
      </div>

      <div className="pm-inner">
        {/* Left: illustration */}
        <div className="pm-illo">
          <div className="paul-halo" />
          <div className="pm-jar-left" />
          <div className="pm-jar-right" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/chibi_pauls_pick_two_jars.png"
            alt="Paul with two jars of footballs"
            style={{ position: "relative", width: "100%", height: "100%", objectFit: "contain", zIndex: 2 }}
          />
        </div>

        {/* Right: interactive demo */}
        <div className="pm-demo">
          <div className="card" style={{ padding: 28, display: "grid", gap: 20 }}>
            {/* Pool header + vis tabs */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="pm-pool-size">
                <span>Pool · live</span>&nbsp;&nbsp;
                <b className="mono">
                  {TOTAL.toLocaleString()}{" "}
                  <span style={{ fontSize: 12, color: "var(--t3)" }}>$WCI26</span>
                </b>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {VIS_TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setVis(t.id)}
                    style={{
                      padding: "4px 12px",
                      borderRadius: 8,
                      border: `1px solid ${vis === t.id ? "rgba(245,208,32,0.6)" : "rgba(255,255,255,0.1)"}`,
                      background: vis === t.id ? "rgba(245,208,32,0.1)" : "transparent",
                      color: vis === t.id ? "var(--gold)" : "var(--t3)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 180ms",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bar */}
            {vis === "bar" && (
              <div className="pm-bar">
                {OUTCOMES.map((o) => (
                  <div
                    key={o}
                    className={`pm-seg ${o}`}
                    style={{ flex: pct[o] }}
                  >
                    {pct[o].toFixed(0)}%
                  </div>
                ))}
              </div>
            )}

            {/* Jars */}
            {vis === "jars" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, height: 220 }}>
                {OUTCOMES.map((o) => (
                  <div className="pm-jar" key={o} data-team={o}>
                    <div className="pm-jar-fill" style={{ height: `${pct[o]}%` }} />
                    <div className="pm-jar-label">
                      {NAMES[o].toUpperCase()} · {pct[o].toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Scales */}
            {vis === "scales" && (
              <div className="pm-scales" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: "20px 0" }}>
                {OUTCOMES.map((o) => (
                  <div className="pm-scale" key={o} data-team={o}>
                    <div className="pm-scale-bar">
                      <div className="pm-scale-fill" style={{ height: `${pct[o]}%` }} />
                    </div>
                    <div className="pm-scale-base" />
                    <div className="pm-scale-pct mono">{pct[o].toFixed(0)}%</div>
                    <div className="pm-scale-team">{NAMES[o]}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Outcome buttons */}
            <div className="pm-outcomes">
              {OUTCOMES.map((o) => (
                <button
                  key={o}
                  className={`btn-outcome${pick === o ? " active" : ""}`}
                  data-pick={o}
                  onClick={() => setPick(o)}
                >
                  <span className="ot-label mono">{LABELS[o]}</span>
                  <span className="ot-name">{NAMES[o]}</span>
                  <span className="ot-odds mono">
                    &times;{(newTotal / newPool[o]).toFixed(2)}
                  </span>
                </button>
              ))}
            </div>

            {/* Stake row */}
            <div className="pm-stake-row">
              <div>
                <div className="pm-stake-label">Your stake</div>
                <div className="pm-stake-val mono">
                  {stake.toLocaleString()}{" "}
                  <span style={{ fontSize: 14, color: "var(--t3)" }}>$WCI26</span>
                </div>
                <input
                  type="range"
                  className="pm-slider"
                  min={10}
                  max={10000}
                  step={10}
                  value={stake}
                  onChange={(e) => setStake(+e.target.value)}
                />
              </div>
              <div className="pm-payout">
                <div className="pm-payout-label">If Paul&apos;s right</div>
                <div className="pm-payout-val mono">{payout.toFixed(0)}</div>
                <div className="pm-payout-sub mono">
                  +{profit.toFixed(0)} profit · {((profit / stake) * 100).toFixed(0)}% ROI
                </div>
              </div>
            </div>

            {/* Trust chips */}
            <div className="pm-trust">
              <span className="chip chip-lime">0% House Edge</span>
              <span className="chip">Settled on-chain</span>
              <span className="chip">Chainlink &middot; pari-mutuel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
