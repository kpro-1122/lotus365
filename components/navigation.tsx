export default function Navigation() {
  const navItems = [
    "SPORTSBOOK",
    "ESPORTS",
    "MIXED MARTIAL ARTS",
    "GAELIC GAMES",
    "VOLLEYBALL",
    "HANDBALL",
    "AUSTRALIAN RULES",
    "ICE HOCKEY",
    "BASKETBALL",
    "BASEBALL",
    "AMERICAN FOOTBALL",
    "SNOOKER",
    "TABLE TENNIS",
  ]

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-1">
      <div className="flex items-center gap-2 overflow-x-auto justify-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="relative flex items-center text-xs font-bold text-[#620F54] hover:text-emerald-600 whitespace-nowrap py-2 
                       before:content-['•'] before:mr-2 before:text-[#620F54] before:text-sm"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  )
}
