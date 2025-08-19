import PromoBanners from "@/components/promo-banners"
import GameGrid from "@/components/game-grid"
import GameCategories from "@/components/game-categories"
import InPlaySection from "./in-play-section"
import MGameCard from "./game-card-grid"
import CricketTable from "./cricket-table"
import FootballTable from "./football-table"
import TennisTable from "./tennis-table"



export default function MainContent() {
  return (
    <main className="flex-1 p-6 flex flex-col gap-4 lg:col-span-7 col-span-12">
      <PromoBanners />
      <GameGrid />
      <GameCategories />
      <MGameCard/>
      <InPlaySection />
      <CricketTable/>
      <FootballTable/>
      <TennisTable/>
    </main>
  )
}
