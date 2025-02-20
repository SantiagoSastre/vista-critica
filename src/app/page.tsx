'use client';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";




export default function Inicio() {
  return (
    <div className="flex justify-center">
    <div className="bg-white w-2/3 mt-10 p-6 rounded-lg">
      <Carousel className="">
              <Image
              src="/social-media.jpg"
              width={1000}
              height={600}
              alt="Redes sociales"
            />
                  <Image
                  src="/social-media.jpg"
                  width={1000}
                  height={600}
                  alt="Redes sociales"
                />
      </Carousel>
      <div>
        hello alo
      </div>
    </div>
    </div>
  );
}