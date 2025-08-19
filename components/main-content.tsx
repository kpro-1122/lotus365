import PromoBanners from "@/components/promo-banners"
import GameGrid from "@/components/game-grid"
import GameCategories from "@/components/game-categories"
import InPlaySection from "./in-play-section"

export default function MainContent() {
  return (
    <main className="flex-1 p-6 flex flex-col gap-4">
      <PromoBanners />
      <GameGrid />
      <GameCategories />
      <InPlaySection />
    </main>
  )
}
