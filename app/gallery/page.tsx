import { UserButton } from "@clerk/nextjs";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Image from 'next/image'
import * as React from "react"
 import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";

  export default async function Gallery() {
    const imgs = await fetchQuery(api.tools.fetchAllImages);
    console.log(imgs)
  
    return (
      <div>
        <Carousel>
          <CarouselContent>
            {imgs.images.map((img) => (
              <CarouselItem className='md:basis-1/2 lg:basis-1/3'key={img.imageURL}><Image src={img.imageURL} width={500} height={500}>
                </Image></CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Button>
        <Link href="dashboard">GO BACK</Link>
        </Button>
      </div>
    );
  }
  