import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function InPlaySection() {
  return (
    <div className="bg-white border-t border-gray-200 ">
      <div className="bg-[#1E8067] text-white p-3 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4" />
          <span className="font-medium">In Play</span>
        </div>
        <Button variant="ghost" size="sm" className="text-white hover:bg-[#1E8067]">
          Open Bets
        </Button>
      </div>
      <div className="bg-white border border-t-0 border-gray-200 rounded-b-lg p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Cricket</span>
          </div>
          <div className="flex gap-8 text-sm">
            <span>1</span>
            <span>X</span>
            <span>2</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-2">Rajasthan Royals SRL Vs. Sunrisers Hyderabad SRL</div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-100 p-2 rounded text-center text-sm">-</div>
          <div className="bg-pink-100 p-2 rounded text-center text-sm">-</div>
          <div className="bg-blue-100 p-2 rounded text-center text-sm">-</div>
        </div>
      </div>
    </div>
  )
}
