import SportsBettingTable from "./sports-betting-table";


const CricketIcon = () => (
  <svg
    className="w-5 h-5 text-green-600"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M15.5 13.5L12 10l-3.5 3.5L12 17l3.5-3.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

const sampleData = [
  {
    name: "Middlesex V Kent",
    hasLiveIcon: true,
    odds: {
      team1Odds1: "1.78",
      team1Amount1: "12946.00",
      drawOdds1: "2.06", 
      drawAmount1: "8574.00",
      team2Odds1: "1.94",
      team2Amount1: "9104.00",
      team1Odds2: "2.30",
      team1Amount2: "10019.00"
    }
  },
  {
    name: "East Delhi Riders V Purani Delhi 6",
    hasLiveIcon: true,
    odds: {
      team1Odds1: "1.77",
      team1Amount1: "11875.00",
      drawOdds1: "2.28",
      drawAmount1: "1569.00",
      team2Odds1: "1.78",
      team2Amount1: "2010.00",
      team1Odds2: "2.30",
      team1Amount2: "9139.00"
    }
  },
  {
    name: "Amaravati Royals V Vijayawada Sunshiners",
    hasLiveIcon: true,
    odds: {
      team1Odds1: "21.00",
      team1Amount1: "76038.00",
      drawOdds1: "1.04",
      drawAmount1: "2845.00",
      team2Odds1: "26.00",
      team2Amount1: "114.00",
      team1Odds2: "1.05",
      team1Amount2: "1520765.00"
    }
  },
  {
    name: "Delhi Capitals SRL Vs. Gujarat Titans Srl",
    odds: {
      suspended: true
    }
  },
  {
    name: "Meerut Mavericks V Lucknow Falcons",
    odds: {
      suspended: true
    }
  }
];

export default function FootballTable() {
  return (
   <div className=" max-w-4xl mx-auto">
      <SportsBettingTable 
        name="Football"
        icon={<span className="text-green-600">🏏</span>}
        data={sampleData}
      />
    </div>
  );
}
