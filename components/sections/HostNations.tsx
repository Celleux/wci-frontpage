"use client";

const NATIONS = [
  { id: "usa",    flag: "&#127482;&#127480;", name: "USA",         pool: "128K", picks: "14", odds: "×2.4" },
  { id: "mex",    flag: "&#127474;&#127485;", name: "Mexico",      pool: "96K",  picks: "11", odds: "×3.1" },
  { id: "can",    flag: "&#127464;&#127462;", name: "Canada",      pool: "42K",  picks: "6",  odds: "×5.8" },
  { id: "global", flag: "&#127758;",          name: "Global Pool", pool: "412K", picks: "104",odds: "ALL"  },
] as const;

export default function HostNations() {
  return (
    <section id="squad" className="squad" data-screen-label="HostNations">
      <div className="squad-inner">
        {/* Left art */}
        <div className="squad-art">
          <div className="pitch-rings" />
          <div className="pitch-rings inner" />
          <div className="spotlight" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="squad-img"
            src="/assets/chibi_squad_cheerful.png"
            alt="Paul with moose, eagle, and jaguar mascots"
          />
          <div className="squad-flag-chip squad-chip-usa">
            <span className="stripe" />
            <span dangerouslySetInnerHTML={{ __html: "&#127482;&#127480;" }} /> USA
            &nbsp;&middot;&nbsp;
            <span style={{ color: "var(--lime)" }}>+34%</span>
          </div>
          <div className="squad-flag-chip squad-chip-mex">
            <span className="stripe" />
            <span dangerouslySetInnerHTML={{ __html: "&#127474;&#127485;" }} /> MEX
            &nbsp;&middot;&nbsp;
            <span style={{ color: "var(--lime)" }}>LIVE</span>
            <span className="dot-pulse" />
          </div>
          <div className="squad-flag-chip squad-chip-can">
            <span className="stripe" />
            <span dangerouslySetInnerHTML={{ __html: "&#127464;&#127462;" }} /> CAN
            &nbsp;&middot;&nbsp;
            <span style={{ color: "var(--gold)" }}>T-51d</span>
          </div>
        </div>

        {/* Right copy */}
        <div className="squad-right">
          <span className="eyebrow">
            <span dangerouslySetInnerHTML={{ __html: "&#127482;&#127480; &#127474;&#127485; &#127464;&#127462;" }} />
            &nbsp; Host Nations
          </span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            16 cities. 3 countries.
            <br />
            One oracle.
          </h2>
          <p className="lead">
            Paul has a dog in every fight. City-specific channels, regional
            Cope Card drops, and a bracket prediction league for each host
            country. Hat for the home team, hat for the away team.
          </p>

          <div className="nation-cards">
            {NATIONS.map((n) => (
              <button
                className="nation-card"
                key={n.id}
                data-n={n.id}
                onClick={() => window.open("https://bet.wci26.com", "_blank")}
              >
                <span
                  className="nation-flag"
                  dangerouslySetInnerHTML={{ __html: n.flag }}
                />
                <div className="nc-name">
                  {n.name}
                  <span className="nc-pool">POOL &middot; {n.pool}</span>
                </div>
                <div className="nc-meta">
                  <span>
                    <span className="m-val">{n.picks}</span> picks
                  </span>
                  <span>
                    odds <span className="m-val">{n.odds}</span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="squad-cta-row">
            <a
              href="https://bet.wci26.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d"
            >
              <span dangerouslySetInnerHTML={{ __html: "&#127482;&#127480;" }} /> Enter USA Pool
            </a>
            <a
              href="https://bet.wci26.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d btn-ghost"
            >
              Join Tentacle Army &#8599;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
