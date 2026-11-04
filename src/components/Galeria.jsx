import fotos from 'virtual:fotos'
import { LEGENDAS, LEGENDA_PADRAO } from '../dados'
import Reveal from './Reveal'
import Titulo from './Titulo'

const legenda = (src) => LEGENDAS[src.split('/').pop()] || LEGENDA_PADRAO

export default function Galeria() {
  const vasos = fotos.filter((f) => !f.includes('/caetano') && !f.endsWith('/hero.jpg'))

  return (
    <section id="modelos" className="bg-musgo px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center">
          <Titulo etiqueta="Modelos">Conheça alguns vasos</Titulo>
        </Reveal>
        {vasos.length === 0 ? (
          <p className="text-center">Adicione imagens em public/fotos para montar a galeria.</p>
        ) : (
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {vasos.map((src) => (
              <li key={src}>
                <Reveal>
                  <figure className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="overflow-hidden">
                      <img
                        src={src}
                        alt={legenda(src)}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <figcaption className="px-3 py-2 text-sm font-medium text-mata">{legenda(src)}</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
