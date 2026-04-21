import { Countdown } from "./Countdown";
import { BetTicket3D } from "@/components/svg/BetTicket3D";
import { Coin3D } from "@/components/svg/Coin3D";
import { Whistle3D } from "@/components/svg/Whistle3D";
import { Soccer3D } from "@/components/svg/Soccer3D";

interface HeroProps {
  countdownTarget: string;
  state: string;
  oracleCopy: string;
}

export default function Hero({ countdownTarget, state, oracleCopy }: HeroProps) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-split">
        {/* Left: copy */}
        <div className="hero-type">
          <div className="hero-eyebrow eyebrow">
            <span className="dot" />
            The Oracle · Live {oracleCopy === "aspirational" ? "*" : ""}
          </div>

          <h1 className="hero-h1">
            <span className="rainbow-under">PAUL PICKS.</span>
            <br />
            YOU PROFIT.
          </h1>

          <p className="lead">
            The only meme coin with a{" "}
            {oracleCopy === "aspirational" ? (
              <em>Chainlink-verified*</em>
            ) : (
              <em>Chainlink-verified</em>
            )}{" "}
            oracle. 3/3 tax. 0% house edge.
            <b style={{ color: "var(--t1)" }}> 104 matches. 39 days. 1 octopus.</b>
          </p>

          <div className="hero-cta-row">
            <a
              href="https://bet.wci26.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d"
            >
              🐙 Follow Paul&apos;s Pick
            </a>
            <a
              href="https://bet.wci26.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d btn-ghost"
            >
              Buy $WCI26 on Uniswap ↗
            </a>
          </div>

          <div className="trust-strip">
            <span className="tr-label">Locked by</span>
            <span className="trust-lockup">
              <span className="lk-ico">🔗</span> Chainlink
              {oracleCopy === "aspirational" && (
                <span
                  className="chip chip-warn"
                  style={{ marginLeft: 8, height: 22, padding: "0 8px", fontSize: 10 }}
                >
                  Gate B pending
                </span>
              )}
            </span>
            <span className="trust-lockup">
              <span className="lk-ico">🔒</span> UNCX 180d
            </span>
            <span className="trust-lockup">
              <span className="lk-ico">✓</span> Uniswap v2
            </span>
            <span className="trust-lockup">
              <span className="lk-ico">🛡</span> Etherscan
            </span>
          </div>
        </div>

        {/* Right: Paul illustration */}
        <div className="hero-paul">
          <div className="paul-halo" />
          <div className="paul-halo-2" />
          <div className="hero-deco ticket">
            <BetTicket3D size={240} />
          </div>
          <div className="hero-deco coin">
            <Coin3D size={120} />
          </div>
          <div className="hero-deco whistle">
            <Whistle3D size={90} />
          </div>
          <div className="hero-deco ball-1">
            <Soccer3D size={110} tilt={-8} />
          </div>
          <div className="hero-deco ball-2">
            <Soccer3D size={70} tilt={22} />
          </div>
          <span className="juggle-ball jb-1" />
          <span className="juggle-ball jb-2" />
          <span className="juggle-ball jb-3" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="paul-img"
            src="/assets/chibi_jumping_header.png"
            alt="Paul the shiba, leaping with octopus hat and footballs"
          />
          <div className="paul-chip-conf">
            <span className="chip chip-gold">
              <span className="dot" style={{ background: "#1a0e00", boxShadow: "none" }} />
              78% Confidence
            </span>
          </div>
          <div className="paul-chip-match">
            <span className="stripe" />
            🇺🇸 USA{" "}
            <span style={{ color: "var(--t3)", fontSize: 11, letterSpacing: ".14em" }}>VS</span>{" "}
            TUR 🇹🇷
          </div>
        </div>
      </div>

      <Countdown target={countdownTarget} state={state} />
    </section>
  );
}
