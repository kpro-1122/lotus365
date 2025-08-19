import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function InPlaySection() {
  return (
    <div className="bg-white border border-gray-200 ">
      <div className="bg-[#1E8067] text-white p-3 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4" />
          <span className="font-medium">In Play</span>
        </div>
        <Button variant="ghost" size="sm" className="text-white hover:bg-[#1E8067]">
          Open Bets
        </Button>
      </div>
    </div>
  )
}
