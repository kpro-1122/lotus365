import GameCard from "@/components/game-card"

export default function GameGrid() {
const games = [
  {
    id: 1,
    title: "Pool Zone",
    icon: "🎱",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/pool-zone-bg.aab623d9.png",
  },
  {
    id: 2,
    title: "Cricket",
    icon: "🏏",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/cricket-bg.3f90a749.webp",
  },
  {
    id: 3,
    title: "Football",
    icon: "⚽",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/soccer-bg.0aa30909.webp",
  },
  {
    id: 4,
    title: "Tennis",
    icon: "🎾",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/tennis-bg.50a4d8b6.webp",
  },
   {
    id: 9,
    title: "Cricket..",
    icon: "🏆",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/virtual-sports-bg.fa88cdc3.webp",
  },
  {
    id: 5,
    title: "FIFA CUP",
    icon: "🏆",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/fifa-cup-winner-bg.c7e07223.webp",
  },
  
  {
    id: 6,
    title: "Winner",
    icon: "🥇",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/winner-cup-bg.bbbe5ea5.webp",
  },
  {
    id: 7,
    title: "Election",
    icon: "🗳️",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/cricket-bg.3f90a749.webp",
  },
  {
    id: 8,
    title: "Kabaddi",
    icon: "🤼",
    bgImage: "https://click11front.hurry2.com/templates/lotusexch/img/pool-zone-bg.aab623d9.png",
  },
]


  return (
    <div >
      <div className="grid grid-cols-9 gap-3">
        {games.map((game, index) => (
          <GameCard key={index} title={game.title} icon={game.icon} bgImage={game.bgImage} />
        ))}
      </div>
    </div>
  )
}
