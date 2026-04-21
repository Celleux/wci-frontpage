"use client";

import { useCountdown } from "@/lib/countdown";

interface CountdownProps {
  target: string;
  state: string;
}

export function Countdown({ target, state }: CountdownProps) {
  const { d, h, m, s } = useCountdown(target);

  const liveLabel =
    state === "live" ? (
      <>
        <span style={{ color: "var(--coral)" }}>● LIVE</span> · USA 1 · TUR 0 · 67&apos;
      </>
    ) : state === "prelaunch" ? (
      <>First match · Mexico City · Match 1</>
    ) : (
      <>Kickoff · Mexico City · Match 1</>
    );

  return (
    <div className="countdown">
      <div className="countdown-left mono">{liveLabel}</div>
      <div className="countdown-digits">
        <span>
          {d}
          <span className="unit">D</span>
        </span>
        <span className="colon">:</span>
        <span>
          {h}
          <span className="unit">H</span>
        </span>
        <span className="colon">:</span>
        <span>
          {m}
          <span className="unit">M</span>
        </span>
        <span className="colon">:</span>
        <span>
          {s}
          <span className="unit">S</span>
        </span>
      </div>
      <a href="#oracle" className="countdown-right">
        See the bracket →
      </a>
    </div>
  );
}

export default Countdown;
