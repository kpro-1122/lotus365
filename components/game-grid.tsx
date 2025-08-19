import GameCard from "@/components/game-card"

export default function GameGrid() {
  const games = [
    { name: "Pool Zone", color: "bg-teal-600" },
    { name: "Cricket", color: "bg-orange-500" },
    { name: "Football", color: "bg-green-600" },
    { name: "Tennis", color: "bg-red-500" },
    { name: "Cricket", color: "bg-green-500" },
    { name: "FIFA CUP", color: "bg-yellow-600" },
    { name: "Winner", color: "bg-orange-400" },
    { name: "ELECTION", color: "bg-cyan-500" },
    { name: "Kabaddi", color: "bg-blue-600" },
  ]

  return (
    <div >
      <div className="grid grid-cols-9 gap-3">
        {games.map((game, index) => (
          <GameCard key={index} name={game.name} color={game.color} />
        ))}
      </div>
    </div>
  )
}
