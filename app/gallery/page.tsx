import { UserButton } from "@clerk/nextjs";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Image from 'next/image'
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  export default async function Gallery() {
    const imgs = await fetchQuery(api.tools.fetchAllImages);
    console.log(imgs)
  
    return (
      <div>
        <Carousel>
          <CarouselContent>
            {imgs.images.map((img) => (
              <CarouselItem key={img.imageURL}><Image src={img.imageURL} width={500} height={500}>
                </Image></CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
  