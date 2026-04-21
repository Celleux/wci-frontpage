export function LogoOrb() {
  return (
    <div className="orb-wrap" aria-label="World Cup Inu · Home">
      <div className="orb-halo" />
      <div className="orb-ring" />
      <div className="orb-hub">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/badge_world_cup_inu_circle.png"
          alt=""
          style={{ width: "78%", height: "78%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default LogoOrb;
