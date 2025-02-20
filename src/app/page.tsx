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
  <h1 className="text-3xl font-bold mt-4 mb-4">¿Qué son las Fake News?</h1>

  <p className="mb-4">
    Las noticias falsas, también conocidas como "fake news", son información errónea o sesgada que se presenta como noticias reales. A menudo, se difunden a través de redes sociales y otros medios con la intención de engañar, manipular o influir en la opinión pública.
  </p>
  <p className="mb-4">
    Es importante destacar que las noticias falsas no son simplemente errores o información inexacta. Se crean y difunden deliberadamente con un propósito específico, ya sea político, económico o de otro tipo.
  </p>

  <h2 className="text-2xl font-semibold mb-2">Ejemplo</h2>
  <p>
    Imagina una noticia que afirma que un determinado alimento causa una enfermedad grave sin ninguna evidencia científica que lo respalde. Esta noticia podría ser considerada desinformación si su intención es generar pánico o dañar la reputación de una empresa alimentaria.
  </p>

  <p className="mt-8 text-lg font-medium">
    <strong>Recuerda:</strong> Es fundamental verificar la información que encuentras en línea y consultar fuentes confiables antes de compartir o creer cualquier noticia.
  </p>
</div>
<hr className="my-8 border-gray-300" /> {/* Línea divisoria */}

  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">Consecuencias de las Fake News</h2>

    <p className="mb-4">
      Las noticias falsas no son inofensivas. Sus consecuencias pueden ser graves y afectar a diferentes niveles de la sociedad. Algunas de las principales consecuencias incluyen:
    </p>

    <ul className="list-disc pl-6 mb-4">
      <li>
        <strong>Erosión de la democracia:</strong> La desinformación puede influir en las elecciones y en la opinión pública, debilitando las instituciones democráticas y la participación ciudadana.
      </li>
      <li>
        <strong>Pérdida de confianza:</strong> La difusión de noticias falsas puede erosionar la confianza en los medios de comunicación, en las instituciones y en otras personas, generando un clima de escepticismo y polarización.
      </li>
      <li>
        <strong>Radicalización y polarización:</strong> Las fake news a menudo se utilizan para difundir mensajes extremistas y polarizar a la sociedad, exacerbando divisiones y conflictos.
      </li>
      <li>
        <strong>Daño a la reputación:</strong> Las noticias falsas pueden dañar la reputación de personas, empresas u organizaciones, causando pérdidas económicas y emocionales.
      </li>
      <li>
        <strong>Problemas de salud:</strong> En temas de salud, la desinformación puede llevar a decisiones equivocadas y poner en riesgo la salud de las personas.
      </li>
      <li>
        <strong>Violencia y discriminación:</strong> En casos extremos, las noticias falsas pueden incitar a la violencia y la discriminación contra grupos minoritarios o personas con opiniones diferentes.
      </li>
    </ul>

    <p className="mb-4">
      Es fundamental ser consciente de estas consecuencias y tomar medidas para combatir la desinformación.
    </p>
  </div>
        <div>
        </div>
      </div>
    </div>
  );
}