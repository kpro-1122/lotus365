/* eslint-disable @next/next/no-img-element */
interface GamePoster {
  imageURL: string;
}

interface GamePosterGridsProps {
  heading: string;
  posters: GamePoster[];
}

export default function GamePosterGrids({ heading, posters }: GamePosterGridsProps) {
  // Split posters into two halves
  const mid = Math.ceil(posters.length / 2);
  const firstRow = posters.slice(0, mid);
  const secondRow = posters.slice(mid);

  return (
    <div>
      <header className="px-2 py-2 bg-orange-600 text-white font-bold">
        {heading}
      </header>

      <div className="">
        {/* First row */}
        <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto p-2 scrollbar-hide">
          {firstRow.map((poster, index) => (
            <div key={index} className="w-40 flex-shrink-0">
              <img
                src={poster.imageURL}
                alt=""
                className="w-full h-28 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto p-2 scrollbar-hide">
          {secondRow.map((poster, index) => (
            <div key={index} className="w-40 flex-shrink-0">
              <img
                src={poster.imageURL}
                alt=""
                className="w-full h-28 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
