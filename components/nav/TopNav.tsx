"use client";

import { useEffect } from "react";
import { LogoOrb } from "./LogoOrb";

export function TopNav() {
  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 200) document.body.classList.add("nav-hidden");
      else document.body.classList.remove("nav-hidden");
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <div className="nav-left">
          <span className="wordmark">
            WCI<span className="accent">·</span>
          </span>
          <span className="nav-tagline">THE ORACLE · V2</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#oracle">Oracle</a>
          <a href="#how">How</a>
          <a href="#pool">Pool</a>
          <span className="notch-gap" aria-hidden="true" />
          <a href="#squad">Squad</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-right">
          <a
            href="https://bet.wci26.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-connect"
          >
            Go to App
          </a>
          <a
            href="https://bet.wci26.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d btn-buy"
          >
            Buy $WCI26
          </a>
        </div>

        <span className="topnav-seam" aria-hidden="true" />
        <span className="orb-tick left" aria-hidden="true" />
        <span className="orb-tick right" aria-hidden="true" />
      </div>
      <LogoOrb />
    </header>
  );
}

export default TopNav;
