"use client";
import { useEffect, useRef, useState } from "react";

export default function PeekTentacle() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      if (window.scrollY > 200) scrolledRef.current = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const t = setTimeout(() => {
      if (!scrolledRef.current && !dismissed) setShow(true);
    }, 30000);

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`peek-tentacle${show ? " show" : ""}`}
      role="complementary"
      aria-label="Paul's pick nudge"
    >
      <div className="tent-body">
        <p>You gonna fade the streak?</p>
        <div className="tent-actions">
          <a
            href="https://bet.wci26.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d"
            style={{ "--h": "36px", fontSize: "11px", borderRadius: "10px", padding: "0 14px" } as React.CSSProperties}
          >
            Place Pick &#8594;
          </a>
          <button
            className="tent-dismiss"
            onClick={() => {
              setShow(false);
              setDismissed(true);
            }}
          >
            dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
