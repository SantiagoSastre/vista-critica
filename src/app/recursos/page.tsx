

export default function Recursos() {
  return (
<div className="flex justify-center">
      <div className="lg:bg-white lg:w-1/2 md:w-2/3 md:bg-white md:p-6 mt-10 lg:p-6 lg:rounded-lg md:rounded-lg relative w-full">

        <section className="mb-12">
          <h2 className="text-3xl font-bold mt-8 mb-4">Recursos útiles externos a Vista Crítica</h2>
          <ul className="list-disc pl-6">
          <h3 className="text-2xl mb-5">Bases de datos de verificación de noticias</h3>
            <li>
            <a  className="hover:underline" href="https://factual.afp.com/">
            factual.afp.com  De: Agence France-Presse, en varios idiomas, incluyendo el español.
            </a>
            </li>
            <li>
            <a  className="hover:underline" href="https://verificado.com.mx">
                verificado.com.mx De: Veridicado, en español.
            </a>
            </li>
            <li>
            <a  className="hover:underline" href="https://www.reuters.com/fact-check/">
            reuters.com/fact-check/ De: Reuters, en inglés.
            </a>
            </li>
            
            <h3 className="text-2xl mb-5 mt-5">Manuales y recomendaciones</h3>
            <li>
            <a  className="hover:underline" href="https://unesdoc.unesco.org/ark:/48223/pf0000373349">
            Periodismo, “noticias falsas” & desinformación: manual de educación y capacitación en periodismo De: Unesco, en Español y otros idiomas.
            </a>
            </li>
            <li>
            <a  className="hover:underline" href="https://conecta.tec.mx/es/noticias/nacional/educacion/como-distinguir-noticias-falsas-de-verdaderas-en-4-pasos">
            ¿Cómo distinguir noticias falsas de verdaderas en 4 pasos? De: Tecnológico de Monterrey, en Español
            </a>
            </li>
          </ul>
            
        </section>

        
      </div>
    </div>
  );
}
