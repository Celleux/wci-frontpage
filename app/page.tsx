import { TopNav } from "@/components/nav/TopNav";
import Hero from "@/components/hero/Hero";
import Ticker from "@/components/sections/Ticker";
import Oracle from "@/components/sections/Oracle";
import HowItWorks from "@/components/sections/HowItWorks";
import PariMutuel from "@/components/sections/PariMutuel";
import Calendar from "@/components/sections/Calendar";
import DashboardCTA from "@/components/sections/DashboardCTA";
import Scoreboard from "@/components/sections/Scoreboard";
import CopeCards from "@/components/sections/CopeCards";
import Tokenomics from "@/components/sections/Tokenomics";
import HostNations from "@/components/sections/HostNations";
import Leaderboard from "@/components/sections/Leaderboard";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import PeekTentacle from "@/components/effects/PeekTentacle";

// FIFA WC26 kickoff: Jun 11 2026 18:00 UTC-6 (Mexico City)
const COUNTDOWN_TARGET = "2026-06-11T18:00:00-06:00";

export default function Page() {
  return (
    <>
      {/* Fixed page background layers */}
      <div className="page-bg" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* Sticky nav — outside <main> so it overlays all sections */}
      <TopNav />

      <main className="page">
        <Hero
          countdownTarget={COUNTDOWN_TARGET}
          state="prelaunch"
          oracleCopy="aspirational"
        />

        <Ticker />

        <Oracle oracleCopy="aspirational" />

        <HowItWorks />

        <PariMutuel />

        <Calendar />

        <DashboardCTA />

        <Scoreboard />

        <CopeCards />

        <Tokenomics />

        <HostNations />

        <Leaderboard />

        <Roadmap />

        <FAQ />

        <FinalCTA />

        <Footer />
      </main>

      {/* Floating peek tentacle — fires after 30s idle */}
      <PeekTentacle />
    </>
  );
}
