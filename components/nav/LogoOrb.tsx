import Image from "next/image";

export function LogoOrb() {
  return (
    <div className="orb-wrap" aria-label="World Cup Inu · Home">
      <div className="orb-halo" />
      <div className="orb-ring" />
      <div className="orb-hub">
        <Image
          src="/assets/badge_world_cup_inu_circle.png"
          alt=""
          width={128}
          height={128}
          priority
          style={{ width: "82%", height: "82%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default LogoOrb;
