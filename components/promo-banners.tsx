"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function PromoBanners() {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000, // 3 seconds
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem
              key={num}
              className="basis-1/3" // 3 items per view
            >
              <img
                src={`/carousel/${num}.jpg`}
                alt={`Banner ${num}`}
                className="rounded-md object-contain w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
