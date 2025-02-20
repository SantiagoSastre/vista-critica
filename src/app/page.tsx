'use client';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Inicio() {
  const slides = [
    {
      title: "Vista Crítica: Por un mundo mejor",
      text: "Todos juntos, colaborando. visita nuestras Guías!",
      image: "/young.jpg"
    },
    {
      
      title: "Redes sociales oficiales",
      text: "Vienen en camino",
      image: "/apps.jpg"
    },
    {
      
      title: "Sitio en construcción",
      text: "Más contenido proximamente!!!",
      image: "/constr.jpg"
    },


  ];

  return (
    <div className="flex justify-center w-full">
      <div className="lg:bg-white lg:w-2/3 lg:mt-10 lg:p-6 lg:rounded-lg relative w-full">
        <Carousel showThumbs={false} className="">
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="h-[300px] sm:h-[600px] relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  objectFit="cover"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <div>
        </div>
      </div>
    </div>
  );
}