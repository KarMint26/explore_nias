import HeroJourney from "@/components/custom/HeroJourney";
import HeroScreen from "@/components/custom/HeroScreen";
import OverviewArticle from "@/components/custom/OverviewArticle";
import OverviewCulinary from "@/components/custom/OverviewCulinary";
import OverviewCulture from "@/components/custom/OverviewCulture";
import OverviewGallery from "@/components/custom/OverviewGallery";
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

      {/* Banner Journey */}
      <HeroJourney />

      {/* Mulai Perjalan */}
      <RouteMaps />

      {/* Article */}
      <OverviewArticle />

      {/* Gallery */}
      <OverviewGallery />
    </main>
  );
}
