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
            Paul-the-Octopus oracle for the 2026 World Cup.
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

      {/* Legal disclaimer */}
      <div className="footer-disclaimer">
        <p>
          <strong>Disclaimer.</strong> World Cup Inu ($WCI26) is an independent
          fan-built meme coin and prediction project. <strong>It is not affiliated
          with, sponsored by, endorsed by, or in any way officially connected
          to FIFA, Concacaf, the Confederation of North, Central American and
          Caribbean Association Football, U.S. Soccer, the Mexican Football
          Federation, the Canadian Soccer Association, or any participating
          national federation, team, club, broadcaster, sponsor, or
          tournament organizer.</strong>
        </p>
        <p>
          &ldquo;FIFA&rdquo;, &ldquo;FIFA World Cup&rdquo;, &ldquo;World Cup
          2026&rdquo;, the official tournament emblem, mascots, trophy and any
          related names, logos, designs, slogans and trade dress are the
          exclusive property of their respective owners. All references on this
          site to the 2026 tournament are nominative descriptive references for
          the purpose of identifying the publicly-known calendar of football
          matches our oracle predicts. Any visual likenesses on this site
          (including the chibi illustrations) are original artworks created for
          this project; resemblance to any official mascot, emblem, or design is
          coincidental and unintended.
        </p>
        <p>
          $WCI26 is a digital collectible with no intrinsic value. Nothing on
          this page is investment, financial, tax, or legal advice. Crypto-asset
          values are highly volatile and you can lose all of your funds.
          Participation may be restricted in your jurisdiction; check local laws
          before buying or betting. Pari-mutuel pools settle on-chain via
          Chainlink data feeds &mdash; outcomes are non-reversible. Do your own
          research. Not for use by U.S. Persons where applicable laws restrict
          such participation.
        </p>
        <p style={{ marginTop: 12 }}>
          To request removal of any third-party reference you believe is
          infringing, contact{" "}
          <a href="mailto:legal@wci26.com">legal@wci26.com</a>.
        </p>
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
