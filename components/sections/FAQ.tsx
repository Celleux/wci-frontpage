"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "What is $WCI26?",
    a: "$WCI26 is the World Cup Inu token — a meme coin built around Paul-the-Octopus oracle and pari-mutuel betting on the 2026 World Cup matches. 3/3 tax, 0% house edge. No VC. No team allocation.",
  },
  {
    q: "Who is Paul?",
    a: "Paul the Octopus predicted 8 of 8 World Cup results in 2010. WCI26 brings him back as a Chainlink-verified on-chain oracle that publishes picks, confidence scores, and confessions for every match.",
  },
  {
    q: "How does pari-mutuel betting work?",
    a: "All bets on the same outcome go into one pool. When the match settles, winners split the losing pool proportionally to their stake. The house takes 0% — no edge, no spread.",
  },
  {
    q: "Is there a house edge?",
    a: "No. The protocol takes 0% from winning pools. The 3/3 tax applies only to token transfers (buy/sell on Uniswap) — not to bet entries or payouts.",
  },
  {
    q: "What is a Cope Card?",
    a: "After every settled match, the protocol mints a Cope Card NFT for each participant — showing their pick, position size, result, and Paul's personalised roast. Win or lose, you get a card.",
  },
  {
    q: "What is Chainlink's role?",
    a: "Chainlink Any API feeds verified match scores to the smart contract, which auto-settles pools and triggers Cope Card mints without any manual intervention.",
  },
  {
    q: "Do I need to hold $WCI26 to bet?",
    a: "$WCI26 is the betting unit. To enter a pool, you stake $WCI26 tokens. You can buy them on Uniswap before placing a bet.",
  },
  {
    q: "How long is the tournament?",
    a: "The 2026 World Cup runs Jun 11 – Jul 19, 2026. That's 39 days, 104 matches, 16 host cities across USA, Mexico, and Canada.",
  },
  {
    q: "What is liquidity locked on UNCX?",
    a: "The Uniswap liquidity position is time-locked for 180 days via UNCX Network, a decentralised liquidity locker. This prevents rug-pulls by making it impossible to remove liquidity during the lock period.",
  },
  {
    q: "Is there a team or VC allocation?",
    a: "No. 100% of $WCI26 supply was distributed publicly. There are no team tokens, no VC allocation, and no presale.",
  },
  {
    q: "When does Paul publish his picks?",
    a: "Paul publishes a pick + confidence score approximately 60 minutes before each kickoff. Pools close at pick publication. After the final whistle, the oracle settles the pool and mints Cope Cards.",
  },
  {
    q: "Where do I bet?",
    a: "The dashboard is live at bet.wci26.com. Connect your wallet, pick an outcome, stake $WCI26, and follow Paul. That's it.",
  },
] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  const Item = ({ faq, i }: { faq: (typeof FAQS)[number]; i: number }) => (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <button
        onClick={() => toggle(i)}
        style={{
          width: "100%",
          padding: "18px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: open === i ? "var(--gold)" : "var(--t1)",
          textAlign: "left",
          transition: "color 180ms",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {faq.q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            borderRadius: 8,
            border: `1px solid ${open === i ? "rgba(245,208,32,0.4)" : "rgba(255,255,255,0.1)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 16,
            color: open === i ? "var(--gold)" : "var(--t3)",
            transition: "all 220ms",
            transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open === i ? 300 : 0,
          transition: "max-height 300ms cubic-bezier(.22,.61,.36,1)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--t2)",
            paddingBottom: 18,
            margin: 0,
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );

  return (
    <section id="faq" className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="section-header" style={{ textAlign: "center", margin: "0 auto 56px" }}>
        <span className="eyebrow">
          <span className="dot" />
          FAQ
        </span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          Questions Paul is tired of.
        </h2>
        <p className="lead" style={{ margin: "18px auto 0" }}>
          He&apos;s an oracle, not a customer support agent.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 56px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div>
          {left.map((faq, i) => (
            <Item key={i} faq={faq} i={i} />
          ))}
        </div>
        <div>
          {right.map((faq, i) => (
            <Item key={i + half} faq={faq} i={i + half} />
          ))}
        </div>
      </div>
    </section>
  );
}
