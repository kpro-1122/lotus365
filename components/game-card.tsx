/* eslint-disable @next/next/no-img-element */

type GameCategoryCardProps = {
  bgImage: string
  icon: string
  title: string
}

export default function GameCategoryCard({ bgImage, title }: GameCategoryCardProps) {
  return (
    <div className="game-cat-card relative shadow overflow-hidden ">
      {/* Background image */}
      <img
        className="game-cat-icn w-full h-8 object-cover"
        src={bgImage}
        alt={title}
      />

      {/* Overlay with icon + title */}
      <div className="text-xs absolute bottom-2 left-1 flex items-center gap-2">
        <span className="text-white font-semibold text-xs">{title}</span>
      </div>
    </div>
  )
}
