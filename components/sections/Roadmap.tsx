"use client";

const NODES = [
  {
    phase: "Phase 1",
    title: "Genesis Drop",
    date: "Apr 2026",
    status: "done",
    items: [
      "$WCI26 launch on Uniswap",
      "Liquidity locked 180d (UNCX)",
      "Paul oracle V1 deployed",
      "Cope Card contract live",
    ],
    color: "var(--lime)",
  },
  {
    phase: "Phase 2",
    title: "Oracle Live",
    date: "Jun 11, 2026",
    status: "active",
    items: [
      "Chainlink oracle integration",
      "Pari-mutuel pool opens",
      "First 104 matches tracked",
      "Dashboard at bet.wci26.com",
    ],
    color: "var(--gold)",
  },
  {
    phase: "Phase 3",
    title: "Group Stage",
    date: "Jun 11–30, 2026",
    status: "upcoming",
    items: [
      "48 group matches · 48 pools",
      "City-specific Cope Card drops",
      "Leaderboard streaks live",
      "Host nation boosts",
    ],
    color: "var(--fifa-cyan)",
  },
  {
    phase: "Phase 4",
    title: "Knockout Rush",
    date: "Jul 1–18, 2026",
    status: "upcoming",
    items: [
      "R16, QF, SF — mega pools",
      "Rare \"Perfect Pick\" NFTs",
      "Paul roast ceremony livestream",
      "Top wallet airdrop",
    ],
    color: "var(--fifa-orange)",
  },
  {
    phase: "Phase 5",
    title: "Final + Legacy",
    date: "Jul 19, 2026",
    status: "upcoming",
    items: [
      "World Cup Final pool",
      "Hall of Fame NFT collection",
      "WC2030 oracle announcement",
      "DAO vote on next season",
    ],
    color: "var(--fifa-magenta)",
  },
] as const;

export default function Roadmap() {
  return (
    <section id="roadmap" className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="section-header" style={{ textAlign: "center", margin: "0 auto 64px" }}>
        <span className="eyebrow">
          <span className="dot" />
          Roadmap
        </span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          39 days. 5 phases.
        </h2>
        <p className="lead" style={{ margin: "18px auto 0" }}>
          From genesis to the final whistle — then we start planning 2030.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* Rainbow connector line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 32,
            bottom: 32,
            width: 3,
            transform: "translateX(-50%)",
            background: `linear-gradient(180deg,
              var(--lime) 0%,
              var(--gold) 22%,
              var(--fifa-cyan) 44%,
              var(--fifa-orange) 67%,
              var(--fifa-magenta) 100%
            )`,
            borderRadius: 4,
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        {NODES.map((node, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={node.phase}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 64px 1fr",
                gap: 0,
                marginBottom: i < NODES.length - 1 ? 32 : 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Left side */}
              {isLeft ? (
                <div
                  style={{
                    padding: "28px 32px 28px 0",
                    textAlign: "right",
                  }}
                >
                  <NodeCard node={node} />
                </div>
              ) : (
                <div />
              )}

              {/* Center dot */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: node.status === "active" ? 24 : 18,
                    height: node.status === "active" ? 24 : 18,
                    borderRadius: "50%",
                    background: node.color,
                    boxShadow: `0 0 ${node.status === "active" ? 24 : 12}px ${node.color}`,
                    border: `3px solid var(--bg-deep)`,
                    zIndex: 2,
                    animation:
                      node.status === "active"
                        ? "dotPulse 1.4s infinite"
                        : "none",
                  }}
                />
              </div>

              {/* Right side */}
              {!isLeft ? (
                <div style={{ padding: "28px 0 28px 32px" }}>
                  <NodeCard node={node} />
                </div>
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function NodeCard({ node }: { node: (typeof NODES)[number] }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, var(--bg-elevated), var(--bg-card))",
        border: `1px solid ${node.color}33`,
        borderRadius: 20,
        padding: "22px 24px",
        boxShadow: `0 0 32px -16px ${node.color}44`,
        transition: "transform 220ms, box-shadow 220ms",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: node.color,
          }}
        >
          {node.phase}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--t3)",
            letterSpacing: "0.12em",
          }}
        >
          {node.date}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: 20,
          color: "var(--t1)",
          margin: "0 0 12px",
          letterSpacing: "-0.01em",
        }}
      >
        {node.title}
      </h3>

      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 6 }}>
        {node.items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--t2)",
              letterSpacing: "0.04em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: node.status === "done" ? "var(--lime)" : node.color,
                opacity: node.status === "done" ? 1 : 0.6,
                flexShrink: 0,
              }}
            />
            {item}
          </li>
        ))}
      </ul>

      {node.status === "done" && (
        <div
          style={{
            marginTop: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--lime)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          &#10003; Complete
        </div>
      )}
      {node.status === "active" && (
        <div
          style={{
            marginTop: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--gold)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 8px var(--gold)", display: "inline-block" }} />
          In Progress
        </div>
      )}
    </div>
  );
}
