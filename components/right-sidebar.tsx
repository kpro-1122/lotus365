import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { ChevronUp } from "lucide-react"

export default function RightSidebar() {
  return (
    <aside className="w-80 ">
      <div className="mb-6">
        <div className="bg-[#026B4F] text-white p-2 flex items-center justify-between">
          <span className="font-normal">Available Credit:</span>
          <ChevronUp className="w-4 h-4" />
        </div>
        <div className=" py-4 rounded-b-lg">
          <div className="text-lg font-medium mb-4">Betslip</div>
          <div className="flex gap-2 mb-4  justify-between">
           <div className="flex ">
             <Button variant="outline" size="sm" className=" bg-transparent rounded-none p-4">
              Betslip
            </Button>
            <Separator />
            <Button variant="outline" size="sm" className=" bg-[#dedbd7] rounded-none p-4">
              Open Bets
            </Button>
           </div>
            <Button size="sm" className=" bg-[#1e8067] rounded-[5px] shadow-[1.5px_1.5px_0_0_#026b4f] font-medium
">
              Edit Stakes
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}
