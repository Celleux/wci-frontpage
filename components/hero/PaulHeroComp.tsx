"use client";

import Soccer3D from "@/components/svg/Soccer3D";
import BetTicket3D from "@/components/svg/BetTicket3D";
import Coin3D from "@/components/svg/Coin3D";
import Whistle3D from "@/components/svg/Whistle3D";

export default function PaulHeroComp() {
  return (
    <div className="hero-paul">
      {/* Layer 1 — rotating rainbow halo */}
      <div className="paul-halo" />
      {/* Layer 2 — dashed gold orbit ring */}
      <div className="paul-halo-2" />

      {/* 3D betting decorations */}
      <div className="hero-deco ticket"><BetTicket3D size={240} /></div>
      <div className="hero-deco coin"><Coin3D size={120} /></div>
      <div className="hero-deco whistle"><Whistle3D size={90} /></div>
      <div className="hero-deco ball-1"><Soccer3D size={110} tilt={-8} /></div>
      <div className="hero-deco ball-2"><Soccer3D size={70} tilt={22} /></div>

      {/* Layer 3 — 3 animating CSS juggling balls */}
      <span className="juggle-ball jb-1" />
      <span className="juggle-ball jb-2" />
      <span className="juggle-ball jb-3" />

      {/* Layer 4 — chibi Paul jumping */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="paul-img"
        src="/assets/chibi_jumping_header.png"
        alt="Paul the shiba, leaping with octopus hat and footballs"
      />

      {/* Layer 5 — confidence chip + matchup chip */}
      <div className="paul-chip-conf">
        <span className="chip chip-gold">
          <span className="dot" style={{ background: "#1a0e00", boxShadow: "none" }} />
          78% Confidence
        </span>
      </div>
      <div className="paul-chip-match">
        <span className="stripe" />
        <span>&#127482;&#127480; USA</span>
        <span style={{ color: "var(--t3)", fontSize: 11, letterSpacing: ".14em" }}>VS</span>
        <span>TUR &#127481;&#127479;</span>
      </div>
    </div>
  );
}
