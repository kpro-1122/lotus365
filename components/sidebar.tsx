import { Separator } from "@radix-ui/react-separator"
import {
  Trophy,
  Users,
  Target,
  Gamepad2,
  Spade,
  Dice1,
  Medal,
  Crown,
  Vote,
  Shield,
  Zap,
  VibrateIcon as Volleyball,
} from "lucide-react"

export default function Sidebar() {
  const sidebarItems = [
    { icon: Target, label: "cricket", active: true },
    { icon: Trophy, label: "Football" },
    { icon: Target, label: "tennis" },
    { icon: Gamepad2, label: "Virtual Sports" },
    { icon: Spade, label: "Indian Card Games" },
    { icon: Trophy, label: "Sports Book" },
    { icon: Dice1, label: "Casino" },
    { icon: Dice1, label: "Slot Games" },
    { icon: Target, label: "Matka" },
    { icon: Medal, label: "FIFA CUP WINNER" },
    { icon: Crown, label: "WINNER CUP" },
    { icon: Vote, label: "ELECTION" },
    { icon: Shield, label: "Kabaddi" },
    { icon: Zap, label: "Esports" },
    { icon: Users, label: "Mixed Martial Arts" },
    { icon: Target, label: "Gaelic Games" },
    { icon: Volleyball, label: "Volleyball" },
  ]

  return (
    <aside className="w-56 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index}>
              <button
              
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-gray-100 ${
                item.active ? "bg-emerald-50 text-[#1E8067]" : "text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
              
            </button>
            <hr />
            </div>
            
          )
        })}
      </div>
    </aside>
  )
}
