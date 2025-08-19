import CategoryCard from "@/components/category-card"

export default function GameCategories() {
  const categories: { name: string; color: string; size: "small" | "medium" | "large" }[] = [
    { name: "https://click11front.hurry2.com/templates/lotusexch/img/aviator.c945eef2.gif", color: "bg-gradient-to-r from-purple-500 to-pink-500", size: "small" },
    { name: "https://click11front.hurry2.com/templates/lotusexch/img/mines.51d0b312.gif", color: "bg-gradient-to-r from-blue-500 to-cyan-500", size: "small" },
    { name: "https://click11front.hurry2.com/templates/lotusexch/img/fungames.2c3754ec.gif", color: "bg-gradient-to-r from-indigo-600 to-blue-600", size: "small" },
    { name: "https://click11front.hurry2.com/templates/lotusexch/img/color-pridiction.79d759ce.gif", color: "bg-gradient-to-r from-green-500 to-blue-500", size: "small" },
    // { name: "Sportsbook", color: "bg-gradient-to-r from-teal-600 to-cyan-600", size: "medium" },
    // { name: "Evolution", color: "bg-gradient-to-r from-green-600 to-teal-600", size: "medium" },
    // { name: "e-Cricket", color: "bg-gradient-to-r from-blue-700 to-indigo-700", size: "medium" },
    // { name: "Casino", color: "bg-gradient-to-r from-red-500 to-orange-500", size: "medium" },
    // { name: "Royal Gaming", color: "bg-gradient-to-r from-purple-600 to-pink-600", size: "medium" },
    // { name: "Card Games", color: "bg-gradient-to-r from-purple-700 to-indigo-700", size: "medium" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((category, index) => (
        <CategoryCard key={index} name={category.name} color={category.color} size={category.size} />
      ))}
    </div>
  )
}
