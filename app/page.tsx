import HeroJourney from "@/components/custom/HeroJourney";
import HeroScreen from "@/components/custom/HeroScreen";
import OverviewCulinary from "@/components/custom/OverviewCulinary";
import OverviewCulture from "@/components/custom/OverviewCulture";
import OverviewWisata from "@/components/custom/OverviewWisata";
import RouteMaps from "@/components/custom/RouteMaps";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <HeroScreen />

      {/* Wisata */}
      <OverviewWisata />

      {/* Wisata Kuliner */}
      <OverviewCulinary />

      {/* Wisata Daerah */}
      <OverviewCulture />

      <HeroJourney />

      {/* Mulai Perjalan */}
      <RouteMaps />
    </main>
  );
}
