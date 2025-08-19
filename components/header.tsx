"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const [dateTime, setDateTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      // Format like: 18 Aug 2025 14:24:31 (+05:30)
      const day = now.getDate().toString().padStart(2, "0")
      const month = now.toLocaleString("en-GB", { month: "short" })
      const year = now.getFullYear()
      const time = now
        .toLocaleTimeString("en-GB", { hour12: false })
        .padStart(8, "0")

      // Get timezone offset in +HH:MM format
      const offsetMin = now.getTimezoneOffset()
      const sign = offsetMin <= 0 ? "+" : "-"
      const absOffset = Math.abs(offsetMin)
      const hours = String(Math.floor(absOffset / 60)).padStart(2, "0")
      const minutes = String(absOffset % 60).padStart(2, "0")
      const offset = `(${sign}${hours}:${minutes})`

      setDateTime(`${day} ${month} ${year} ${time} ${offset}`)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="bg-[#1E8067] text-white px-6 py-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Image src={"/logo.jpg"} width={100} height={100} alt="logo" />
          <div className="text-sm opacity-90">{dateTime}</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-white hover:bg-[#1E8067]">
            Login
          </Button>
          <Button variant="ghost" className="text-white hover:bg-[#1E8067]">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}
