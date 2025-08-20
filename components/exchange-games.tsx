import GamePosterGrids from "./games-posters-grid";

export default function ExchangeGames() {
  return (
    <GamePosterGrids
      heading="Exchange Games"
      posters={[
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-ART01.webp"},
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-DT01.webp", },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-BAC01.webp", },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-3CJ01.webp", },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-WM01.webp",  },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-TP01.webp",  },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-CW01.webp",  },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-AAA01.webp",  },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-CAW01.webp", },
        { imageURL: "https://d3lqxvczzwhhy7.cloudfront.net/lotus/RG-BOC01.webp", },
      ]}
    />
  );
}
