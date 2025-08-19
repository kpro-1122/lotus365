interface GameCardProps {
  name: string
  color: string
}

export default function GameCard({ name, color }: GameCardProps) {
  return (
    <div
      className={`${color} rounded-lg p-4 text-white text-center cursor-pointer hover:opacity-90 transition-opacity`}
    >
      <div className="text-sm font-medium">{name}</div>
    </div>
  )
}
