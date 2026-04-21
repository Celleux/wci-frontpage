"use client";

export default function FinalCTA() {
  return (
    <section className="final-cta" data-screen-label="Final CTA">
      <div className="eyebrow" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 8 }}>
        <span className="dot" /> Jun 11 &middot; Mexico City
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(56px, 8vw, 128px)",
          letterSpacing: "-0.035em",
          margin: "0 0 16px",
          lineHeight: 0.9,
          color: "var(--t1)",
        }}
      >
        SEE YOU IN
        <br />
        <span
          style={{
            position: "relative",
            display: "inline-block",
          }}
          className="rainbow-under"
        >
          MEXICO CITY.
        </span>
      </h2>

      <p className="lead">
        The first pick. The first confession. The first Cope Card.
      </p>

      <div className="final-cta-row">
        <a
          href="https://bet.wci26.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d"
        >
          &#129432; Buy $WCI26
        </a>
        <a
          href="https://bet.wci26.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d"
          style={{
            background: "none",
            backgroundImage: `linear-gradient(180deg, var(--gold-hi) 0%, var(--gold) 50%, var(--gold-lo) 100%)`,
            minWidth: 240,
          }}
        >
          &#8594; Go to Dashboard
        </a>
      </div>

      {/* Sub-trust row */}
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 28,
        }}
      >
        <span className="chip chip-lime">0% House Edge</span>
        <span className="chip">Chainlink Settled</span>
        <span className="chip chip-gold">$WCI26</span>
        <span className="chip">104 Matches</span>
      </div>
    </section>
  );
}
