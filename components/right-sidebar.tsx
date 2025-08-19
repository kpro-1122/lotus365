import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { ChevronUp } from "lucide-react"

export default function RightSidebar() {
  return (
    <aside className="lg:col-span-3 hidden lg:block">
      <div className="mb-6">
        {/* Header */}
        <div className="bg-[#026B4F] text-white p-2 flex items-center justify-between">
          <span className="font-normal">Available Credit:</span>
          <ChevronUp className="w-4 h-4" />
        </div>

        {/* Content */}
        <div className="py-4 rounded-b-lg">
          <div className="text-lg font-medium mb-4">Betslip</div>

          {/* Button Group */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
            {/* Left buttons */}
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent rounded-none px-3 py-2"
              >
                Betslip
              </Button>
              <Separator orientation="vertical" className="mx-1" />
              <Button
                variant="outline"
                size="sm"
                className="bg-[#dedbd7] rounded-none px-3 py-2"
              >
                Open Bets
              </Button>
            </div>

            {/* Right button */}
            <Button
              size="sm"
              className="bg-[#1e8067] rounded-[5px] shadow-[1.5px_1.5px_0_0_#026b4f] font-medium shrink-0"
            >
              Edit Stakes
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}
