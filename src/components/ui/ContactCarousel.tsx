import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const contactNames = ["Github", "LinkedIn", "Email"]
const links = ["https://github.com/katamyra", "https://example.org", "https://example.net"];
const linkNames = ["Github Link", "Linkedin Link", "My Email"]
export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {links.map((link, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-semibold">{contactNames[index]}</span>
                    <a href={link} className="text-1xl">{linkNames[index]}</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
