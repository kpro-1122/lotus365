import type React from "react"
import { PiTelevision } from "react-icons/pi";

interface BettingOdds {
  team1Odds1?: string
  team1Amount1?: string
  drawOdds1?: string
  drawAmount1?: string
  team2Odds1?: string
  team2Amount1?: string
  team1Odds2?: string
  team1Amount2?: string
  drawOdds2?: string
  drawAmount2?: string
  team2Odds2?: string
  team2Amount2?: string
  suspended?: boolean
}

interface Match {
  name: string
  odds: BettingOdds
  hasLiveIcon?: boolean
}

interface SportsBettingTableProps {
  name: string
  icon: React.ReactNode
  data: Match[]
}

export default function SportsBettingTable({ name, icon, data }: SportsBettingTableProps) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden w-full">
      {/* Header */}
      <div className="bg-white border-b grid grid-cols-3 px-4 py-2">
        <div className="flex items-center gap-2 col-span-1">
          {icon}
          <span className="font-semibold text-gray-900">{name}</span>
        </div>
        {/* Desktop Header (6 cols) */}
        <div className="hidden sm:flex justify-between col-span-2">
          <div className="text-center font-semibold text-gray-700 w-12  sm:w-16">1</div>
          <div className="text-center font-semibold text-gray-700 w-12 sm:w-16">X</div>
          <div className="text-center font-semibold text-gray-700 w-12 sm:w-16">2</div>
        </div>
        {/* Mobile Header (3 cols) */}
        <div className="flex sm:hidden justify-between col-span-2">
          <div className="text-center font-semibold text-gray-700 w-12 sm:w-16">1</div>
          <div className="text-center font-semibold text-gray-700 w-12 sm:w-16">X</div>
          <div className="text-center font-semibold text-gray-700 w-12 sm:w-16">2</div>
        </div>
      </div>

      {/* Matches */}
      <div className="divide-y divide-gray-200 overflow-x-auto">
        {data.map((match, index) => (
          <div
  key={index}
  className="bg-white px-2 sm:px-4 py-1 grid grid-cols-3  gap-2 items-center hover:bg-gray-50"
>
  {/* Match Info */}
  <div className="flex items-center justify-between gap-2 col-span-1min-w-0">
    <span className="text-gray-900 font-medium text-xs truncate">{match.name}</span>
    {match.hasLiveIcon && <PiTelevision className="text-green-600 flex-shrink-0" />}
  </div>

  {/* Odds Grid */}
  <div className="col-span-2 grid grid-cols-3 sm:grid-cols-6 gap-1">
    {/* --- First Set (always visible) --- */}
    <div className="bg-blue-200 px-2 py-2 text-center">
      {match.odds.suspended ? (
        <div className="text-gray-600 text-xs">-</div>
      ) : (
        <>
          <div className="font-bold text-blue-900 text-xs">{match.odds.team1Odds1 || "-"}</div>
          <div className="text-xs text-blue-700">{match.odds.team1Amount1 || "-"}</div>
        </>
      )}
    </div>

    <div className="bg-gray-200 px-2 py-2 text-center">
      {match.odds.suspended ? (
        <div className="text-gray-600 text-xs">-</div>
      ) : (
        <>
          <div className="font-bold text-gray-900 text-xs">{match.odds.drawOdds1 || "-"}</div>
          <div className="text-xs text-gray-700">{match.odds.drawAmount1 || "-"}</div>
        </>
      )}
    </div>

    <div className="bg-pink-200 px-2 py-2 text-center">
      {match.odds.suspended ? (
        <div className="text-gray-600 text-xs">-</div>
      ) : (
        <>
          <div className="font-bold text-pink-900 text-xs">{match.odds.team2Odds1 || "-"}</div>
          <div className="text-xs text-pink-700">{match.odds.team2Amount1 || "-"}</div>
        </>
      )}
    </div>

    {/* --- Second Set (only visible on sm+) --- */}
    <div className="hidden sm:block bg-blue-200 px-2 py-2 text-center">
      {match.odds.suspended ? (
        <div className="text-gray-600 text-xs">-</div>
      ) : (
        <>
          <div className="font-bold text-blue-900 text-xs">{match.odds.team1Odds2 || "-"}</div>
          <div className="text-xs text-blue-700">{match.odds.team1Amount2 || "-"}</div>
        </>
      )}
    </div>

    <div className="hidden sm:block bg-gray-200 px-2 py-2 text-center">
      {match.odds.suspended ? (
        <div className="text-gray-600 text-xs">-</div>
      ) : (
        <>
          <div className="font-bold text-gray-900 text-xs">{match.odds.drawOdds2 || "-"}</div>
          <div className="text-xs text-gray-700">{match.odds.drawAmount2 || "-"}</div>
        </>
      )}
    </div>

    <div className="hidden sm:block bg-pink-200 px-2 py-2 text-center">
      {match.odds.suspended ? (
        <div className="text-gray-600 text-xs">-</div>
      ) : (
        <>
          <div className="font-bold text-pink-900 text-xs">{match.odds.team2Odds2 || "-"}</div>
          <div className="text-xs text-pink-700">{match.odds.team2Amount2 || "-"}</div>
        </>
      )}
    </div>
  </div>
</div>

        ))}
      </div>
    </div>
  )
}
