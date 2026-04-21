interface OracleProps {
  oracleCopy: string;
}

export default function Oracle({ oracleCopy }: OracleProps) {
  return (
    <section id="oracle" className="section" data-screen-label="03 Oracle">
      <div className="oracle">
        {/* Left: illustration */}
        <div className="oracle-left">
          <div className="paul-halo" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="paul-img"
            src="/assets/chibi_crystal_ball_oracle.png"
            alt="Paul meditating with crystal ball showing 2-1"
          />
          <div className="oracle-caption">Paul. The original oracle. Since 2010.</div>
        </div>

        {/* Right: copy */}
        <div className="oracle-right">
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            Meet the Oracle
          </div>
          <h2 className="h2">
            We didn&apos;t invent Paul.
            <br />
            We brought him back.
          </h2>

          <div style={{ marginTop: 32 }}>
            <p>
              In 2010, a real octopus picked <b>8 of 8</b> World Cup matches. Then he died. Then
              mascot tokens got boring. We fixed that.
            </p>
            <p>
              Paul is the on-chain reincarnation —{" "}
              {oracleCopy === "aspirational" ? (
                <>a Chainlink-verified* oracle</>
              ) : (
                <>a Chainlink-verified oracle</>
              )}{" "}
              that publishes a <b>public pick</b>, a <b>public confidence score</b>, and a{" "}
              <b>public confession</b> when he&apos;s wrong. Every 36 hours. For 39 days.
            </p>
            <p>
              Follow him. Fade him. Roast him. Just don&apos;t fade the streak. It&apos;s{" "}
              <b style={{ color: "var(--gold)" }}>7</b>.
            </p>
          </div>

          <div className="card next-match-card">
            <div className="nmc-row">
              <div className="nmc-flags">
                🇺🇸 USA <span className="vs">VS</span> TUR 🇹🇷
              </div>
              <span className="chip chip-live">
                <span className="dot" /> T-51d 23h
              </span>
            </div>
            <div className="nmc-row">
              <span className="chip mono" style={{ color: "var(--t2)" }}>
                Group · D
              </span>
              <span className="nmc-kickoff">Jun 11 · 18:00 UTC-6</span>
            </div>
            <div className="nmc-conf-row">
              <div className="nmc-conf-bar">
                <div className="nmc-conf-fill" />
              </div>
              <div className="nmc-conf-pct">78%</div>
            </div>
            <div className="nmc-pick">
              🐙 Paul&apos;s Pick: <b>USA 2 – TUR 1</b>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <a
                href="https://bet.wci26.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d"
                style={{ "--h": "48px", fontSize: 12, flex: 1 } as React.CSSProperties}
              >
                🐙 Follow Pick
              </a>
              <a
                href="https://bet.wci26.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-ghost"
                style={{ "--h": "48px", fontSize: 12 } as React.CSSProperties}
              >
                Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
