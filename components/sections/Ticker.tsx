"use client";

const TICKER_ITEMS = [
  {
    ico: "🐋",
    text: (
      <>
        0x1A…e4F bet <b>42 WCI26</b> on TUR · <span className="acc-gold">3m ago</span>
      </>
    ),
  },
  {
    ico: "🔥",
    text: (
      <>
        Paul hit <b>7 in a row</b> — <span className="acc-lime">82% ROI</span>
      </>
    ),
  },
  {
    ico: "💰",
    text: (
      <>
        0xA3F…0912 claimed <span className="acc-gold">$1,240</span>
      </>
    ),
  },
  {
    ico: "🐙",
    text: (
      <>
        New Cope Card minted: <b>&ldquo;I had them at 2–0&rdquo;</b>
      </>
    ),
  },
  {
    ico: "📈",
    text: (
      <>
        Total handle this weekend: <span className="acc-gold">$412,870</span>
      </>
    ),
  },
  {
    ico: "🇲🇽",
    text: (
      <>
        MEX fans up <span className="acc-lime">34%</span> vs last matchday
      </>
    ),
  },
  {
    ico: "⚡",
    text: (
      <>
        Whale <b>0x88…eA12</b> staked <span className="acc-gold">20K $WCI26</span> on DRAW
      </>
    ),
  },
  {
    ico: "🎯",
    text: (
      <>
        Paul&apos;s confidence ticked <span className="acc-coral">-4%</span> · USA vs TUR
      </>
    ),
  },
];

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker" data-screen-label="02 Ticker" aria-label="Live activity feed">
      <div className="ticker-track" aria-live="off">
        {items.map((it, i) => (
          <span key={i} className="ticker-item">
            <span className="tick-ico" aria-hidden="true">
              {it.ico}
            </span>{" "}
            {it.text}
            <span className="tick-sep" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
