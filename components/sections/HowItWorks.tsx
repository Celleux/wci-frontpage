"use client";

const CARDS = [
  {
    num: "01",
    img: "/assets/chibi_galaxy_brain.png",
    alt: "Paul with galaxy brain glow",
    title: (
      <>
        Buy <span className="tick">$WCI26</span>
      </>
    ),
    body: "Grab $WCI26 on Uniswap. Every trade routes 3% to holders and 3% to the ecosystem treasury. No VC allocation. No team allocation. Liquidity locked 180 days on UNCX.",
    cta: "Buy on Uniswap ↗",
    href: "https://bet.wci26.com",
  },
  {
    num: "02",
    img: "/assets/chibi_crystal_ball_oracle.png",
    alt: "Paul meditating with crystal ball",
    title: <>Follow Paul</>,
    body: "Paul publishes a pick 60 minutes before kickoff. Place your bet into the pari-mutuel pool — 0% house edge, winners split the pool proportionally. Same pool for everyone.",
    cta: "See the next match →",
    href: "https://bet.wci26.com",
  },
  {
    num: "03",
    img: "/assets/chibi_tarot_flip.png",
    alt: "Paul flipping a tarot card",
    title: <>Collect Cope</>,
    body: "Win, lose, or cry — every result mints a Cope Card NFT with your pick, position size, and Paul's roast. Collect the set, stake for boosts, trade on OpenSea.",
    cta: "View the gallery →",
    href: "https://bet.wci26.com",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="how" className="section" data-screen-label="04 How It Works">
      <div className="section-header" style={{ textAlign: "center", margin: "0 auto 64px" }}>
        <span className="eyebrow">How it works · 30 seconds</span>
        <h2 className="h2" style={{ marginTop: 18 }}>
          Three steps. One octopus.
        </h2>
        <p className="lead" style={{ margin: "22px auto 0" }}>
          Buy the token. Follow the oracle. Collect the aftermath.
        </p>
      </div>

      <div className="hiw-grid">
        {CARDS.map((c) => (
          <div className="card hiw-card" key={c.num}>
            <div className="hiw-illo-wrap">
              <div className="halo" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.alt} />
            </div>
            <span className="hiw-num mono">{c.num}</span>
            <h3 className="hiw-title">{c.title}</h3>
            <p className="hiw-body">{c.body}</p>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d btn-ghost hiw-btn"
            >
              {c.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
