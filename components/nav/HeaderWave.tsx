export function HeaderWave() {
  return (
    <svg className="headerwave" viewBox="0 0 260 14" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="rw-grad" x1="0" x2="1">
          <stop offset="0%"   stopColor="#E8392C" />
          <stop offset="14%"  stopColor="#FF7A1F" />
          <stop offset="28%"  stopColor="#F5D020" />
          <stop offset="42%"  stopColor="#9FD634" />
          <stop offset="56%"  stopColor="#00B9B2" />
          <stop offset="70%"  stopColor="#2E6FE6" />
          <stop offset="84%"  stopColor="#8B47D6" />
          <stop offset="100%" stopColor="#E637A8" />
        </linearGradient>
      </defs>
      <path
        d="M0 8 Q 20 -4 40 8 T 80 8 T 120 8 T 160 8 T 200 8 T 240 8 T 260 8"
        stroke="url(#rw-grad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default HeaderWave;
