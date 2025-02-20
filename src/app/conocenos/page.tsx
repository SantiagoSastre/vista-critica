import Image from 'next/image'


export default function Conocenos() {
    return (
<div className="flex justify-center">
      <div className="w-1/2 bg-white mt-10 p-6 rounded-lg">
      <div className='flex justify-center mt-8'>
      <Image
      src="/social-media.jpg"
      width={1000}
      height={600}
      alt="Redes sociales"
    />
    </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Nuestra historia</h2>
          <p className="text-gray-800 leading-relaxed">
            En la actualidad, las redes sociales juegan un papel importante en la vida de las personas y es donde se comparte la vida diaria, se interactúa con otros, se aprende, entre muchas otras cosas. A lo largo del tiempo se han vuelto una fuente de información para muchos de nosotros y es innegable que tienen influencias positivas en la sociedad, sin embargo, las redes sociales se han vuelto una herramienta de la desinformación donde se comparten noticias falsas para afectar la manera de pensar de todos y tienen como objetivo provocar que tomemos malas decisiones, radicalizar, asustar, etc.
            Yo he visto esto de primera mano, con personas que conozco diciendo cosas que vieron en redes sociales que son totalmente falsas, por otro lado, al navegar el internet es evidente que hay muchos que se creen estas historias y tiene como resultado el incremento de racismo, odio, antipatía y erosión de instituciones democráticas.
            Para ayudar a mitigar el efecto de las noticias falsas, se creó el proyecto Vista Crítica para enfrentar tanto las causas como las consecuencias de la desinformación.

          </p>
        </section>

        <section className="text-center mb-12"> 
          <h2 className="text-2xl font-bold mb-4">Quieres contribuir?</h2>
          <p className="text-gray-800 leading-relaxed">
            Buscanos en redes sociales.
          </p>
        </section>
      </div>
    </div>
    );
  }
  