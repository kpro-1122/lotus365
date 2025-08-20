/* eslint-disable @next/next/no-img-element */
import { FaTrophy } from "react-icons/fa";
const gameCategories = [
  {
    id: 1,
    title: "Sportsbook",
    icon: <FaTrophy />,
    bgImage:
      "https://click11front.hurry2.com/templates/lotusexch/img/sportsbook-bg.5772b654.webp",
  },
  {
    id: 2,
    title: "Evolution",
    icon: "🎰",

    bgImage:
      "/image.webp",
  },
  {
    id: 3,
    title: "e-Cricket",
    icon: "🏏",
    bgImage:
      "https://click11front.hurry2.com/templates/lotusexch/img/live-casinos-bg.7bea6587.webp",
  },
  {
    id: 4,
    title: "Casino",
    icon: "🎲",
    bgImage:
      "https://click11front.hurry2.com/templates/lotusexch/img/card-games-bg.f4b1322f.webp",
  },
  // {
  //   id: 5,
  //   title: "Royal Gaming",
  //   icon: "👑",

  //   bgImage:
  //     "https://click11front.hurry2.com/templates/lotusexch/img/sportsbook-bg.5772b654.webp",
  // },
  // {
  //   id: 6,
  //   title: "Card Games",
  //   icon: "🃏",

  //   bgImage:
  //     "https://click11front.hurry2.com/templates/lotusexch/img/sportsbook-bg.5772b654.webp",
  // },
  // {
  //   id: 7,
  //   title: "Live Dealer",
  //   icon: "🎯",

  //   bgImage:
  //     "https://click11front.hurry2.com/templates/lotusexch/img/sportsbook-bg.5772b654.webp",
  // },
  // {
  //   id: 8,
  //   title: "Slots",
  //   icon: "🎰",

  //   bgImage:
  //     "https://click11front.hurry2.com/templates/lotusexch/img/sportsbook-bg.5772b654.webp",
  // },
  // {
  //   id: 9,
  //   title: "Poker",
  //   icon: "♠️",
  //   bgImage:
  //     "https://click11front.hurry2.com/templates/lotusexch/img/sportsbook-bg.5772b654.webp",
  // },
];

export default function MGameCard() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
      {gameCategories.map((category) => (
        <div
          key={category.id}
          className="game-card relative shadow overflow-hidden"
        >
          <img
            src={category.bgImage}
            alt={category.title}
            className="w-full object-cover rounded-sm "
          />

          {/* Overlay */}
          <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-lg">
            <span className="text-white text-lg">{category.icon}</span>
            <span className="font-semibold text-white">{category.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
