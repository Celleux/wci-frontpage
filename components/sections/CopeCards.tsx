"use client";
import { useState, useEffect } from "react";

const CARDS = [
  {
    pick: "USA 2–1 TUR",
    result: "USA 1–2 TUR",
    roast: '"You really thought the octopus was wrong this time."',
    stake: "420 WCI26",
    multiplier: "×0.00",
    emotion: "&#128517;",
    color: "var(--coral)",
    id: "#WCI-000042",
  },
  {
    pick: "BRA 3–0 GER",
    result: "GER 1–0 BRA",
    roast: '"History literally told you. 7-1, remember?"',
    stake: "1,000 WCI26",
    multiplier: "×0.00",
    emotion: "&#128557;",
    color: "var(--fifa-yellow)",
    id: "#WCI-000071",
  },
  {
    pick: "ARG 2–1 FRA",
    result: "ARG 2–1 FRA",
    roast: '"Paul called it. You doubted him. Who copes now?"',
    stake: "200 WCI26",
    multiplier: "×3.14",
    emotion: "&#129395;",
    color: "var(--lime)",
    id: "#WCI-000098",
  },
  {
    pick: "MEX 1–0 CAN",
    result: "CAN 2–1 MEX",
    roast: '"The moose upset nobody saw coming. Except Paul."',
    stake: "750 WCI26",
    multiplier: "×0.00",
    emotion: "&#129300;",
    color: "var(--fifa-orange)",
    id: "#WCI-000115",
  },
  {
    pick: "ESP 2–2 POR",
    result: "ESP 2–2 POR",
    roast: '"Iberian draw energy. Paul knew. You almost faded him."',
    stake: "500 WCI26",
    multiplier: "×4.21",
    emotion: "&#128526;",
    color: "var(--fifa-blue)",
    id: "#WCI-000133",
  },
] as const;

export default function CopeCards() {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Auto-advance every 4s
  useEffect(() => {
    const id = setInterval(() => {
      setFlipped(false);
      setTimeout(() => setActive((prev) => (prev + 1) % CARDS.length), 200);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const card = CARDS[active];
  const isWin = card.multiplier !== "×0.00";

  return (
    <section id="cope" className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="section-header" style={{ textAlign: "center", margin: "0 auto 56px" }}>
        <span className="eyebrow">
          <span className="dot" />
          Cope Cards NFT
        </span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          Every pick. Immortalised on-chain.
        </h2>
        <p className="lead" style={{ margin: "18px auto 0" }}>
          Win or lose, Paul mints your result as an NFT. Collect the set.
          Stake for boosts. The roast is permanent.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        {/* 3D card flip */}
        <div
          style={{
            perspective: 1000,
            width: 340,
            height: 440,
            cursor: "pointer",
          }}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          aria-label="Flip cope card"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 600ms cubic-bezier(.22,.61,.36,1)",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front face */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                borderRadius: 24,
                background: `linear-gradient(180deg, var(--bg-elevated), var(--bg-card))`,
                border: `1px solid ${card.color}44`,
                boxShadow: `0 0 0 1px ${card.color}22, 0 24px 60px -20px rgba(0,0,0,0.7), 0 0 40px -16px ${card.color}55`,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Card header stripe */}
              <div
                style={{
                  height: 4,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${card.color}, transparent)`,
                  marginBottom: 4,
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "var(--t3)",
                    textTransform: "uppercase",
                  }}
                >
                  Cope Card
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--t3)",
                  }}
                >
                  {card.id}
                </span>
              </div>

              {/* Emotion */}
              <div style={{ textAlign: "center", fontSize: 72, lineHeight: 1 }}
                dangerouslySetInnerHTML={{ __html: card.emotion }} />

              {/* Pick vs Result */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 14,
                  padding: 16,
                  display: "grid",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.14em" }}>Your Pick</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--t1)", fontWeight: 700 }}>{card.pick}</span>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.14em" }}>Result</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: isWin ? "var(--lime)" : "var(--coral)", fontWeight: 700 }}>{card.result}</span>
                </div>
              </div>

              {/* Stake / multiplier */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", letterSpacing: "0.14em", marginBottom: 4 }}>STAKE</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 16, color: "var(--t1)", fontWeight: 700 }}>{card.stake}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", letterSpacing: "0.14em", marginBottom: 4 }}>MULTIPLIER</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, color: isWin ? "var(--lime)" : "var(--coral)", fontWeight: 900 }}>{card.multiplier}</div>
                </div>
              </div>

              <div style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", letterSpacing: "0.1em" }}>
                Tap to flip &mdash; Paul&apos;s roast on back
              </div>
            </div>

            {/* Back face */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderRadius: 24,
                background: `linear-gradient(135deg, var(--bg-deep), var(--bg-elevated))`,
                border: `1px solid ${card.color}66`,
                boxShadow: `0 0 40px -16px ${card.color}66`,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 24,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 40 }}>&#129432;</div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "var(--t1)",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {card.roast}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--t3)", margin: 0 }}>
                — Paul, #{active + 1} of 104
              </p>
              <a
                href="https://bet.wci26.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-ghost"
                style={{ fontSize: 13, "--h": "44px" } as React.CSSProperties}
                onClick={(e) => e.stopPropagation()}
              >
                Mint Your Cope Card &#8594;
              </a>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setFlipped(false); }}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 999,
                background: i === active ? "var(--gold)" : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 300ms",
                padding: 0,
              }}
              aria-label={`Cope card ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="https://bet.wci26.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d btn-ghost"
          style={{ fontSize: 14 }}
        >
          View all Cope Cards &#8594;
        </a>
      </div>
    </section>
  );
}
