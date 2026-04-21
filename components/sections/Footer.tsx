"use client";

const NAV_COLS = [
  {
    label: "Product",
    links: [
      { text: "Dashboard", href: "https://bet.wci26.com" },
      { text: "Leaderboard", href: "https://bet.wci26.com/scoreboard" },
      { text: "Cope Cards", href: "https://bet.wci26.com" },
      { text: "Tokenomics", href: "#tokenomics" },
      { text: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    label: "Token",
    links: [
      { text: "Buy on Uniswap ↗", href: "https://bet.wci26.com" },
      { text: "Etherscan ↗", href: "https://bet.wci26.com" },
      { text: "UNCX Lock ↗", href: "https://bet.wci26.com" },
      { text: "Chainlink Oracle ↗", href: "https://bet.wci26.com" },
    ],
  },
  {
    label: "Community",
    links: [
      { text: "Twitter / X", href: "https://bet.wci26.com" },
      { text: "Telegram", href: "https://bet.wci26.com" },
      { text: "Discord", href: "https://bet.wci26.com" },
      { text: "OpenSea Gallery", href: "https://bet.wci26.com" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer>
      {/* Rainbow seam */}
      <div className="footer-rainbow" />

      <div className="site-footer">
        {/* Brand col */}
        <div className="footer-brand">
          <div className="wordmark">
            WCI<span className="accent">&middot;</span>
          </div>
          <p>
            World Cup Inu &mdash; $WCI26.
            <br />
            Paul-the-Octopus oracle for FIFA WC26.
            <br />
            Pari-mutuel &middot; 0% edge &middot; USDC.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span className="chip chip-lime" style={{ fontSize: 10 }}>0% House Edge</span>
            <span className="chip" style={{ fontSize: 10 }}>3/3 Tax</span>
            <span className="chip chip-gold" style={{ fontSize: 10 }}>$WCI26</span>
          </div>
        </div>

        {/* Nav cols */}
        {NAV_COLS.map((col) => (
          <div key={col.label}>
            <div className="footer-col-label">{col.label}</div>
            <nav className="footer-links">
              {col.links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>
          &copy; 2026 World Cup Inu &middot; wci26.com &middot; Not financial
          advice.
        </span>
        <span>
          Jun 11 &ndash; Jul 19, 2026 &middot; 39 days &middot; 104 matches
        </span>
      </div>
    </footer>
  );
}
