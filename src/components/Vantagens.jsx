import { VANTAGENS } from '../dados'
import Reveal from './Reveal'
import Titulo from './Titulo'
import Folha from './Folha'
import FolhasHover from './FolhasHover'
import FundoDoodles, { DOODLES_CLARO } from './FundoDoodles'

export default function Vantagens() {
  return (
    <section id="vantagens" className="relative overflow-hidden px-4 py-24">
      <FundoDoodles itens={DOODLES_CLARO} />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center">
          <Titulo etiqueta="Por que comprar aqui">Direto da fábrica para o seu espaço</Titulo>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VANTAGENS.map((v, i) => (
            <li key={v.titulo}>
              <Reveal delay={i * 80} className="h-full">
                {/* o efeito fica no div interno, para não conflitar com a transição de entrada do Reveal */}
                <div className="group relative h-full cursor-default overflow-hidden rounded-3xl bg-musgo p-6 text-mata shadow-md transition-all duration-700 ease-in-out hover:-translate-y-1 hover:bg-folha hover:text-white hover:shadow-lg">
                  <FolhasHover />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-folha text-white transition-colors duration-700 ease-in-out group-hover:bg-mata">
                    <Folha className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-4 font-serif text-xl font-bold">{v.titulo}</h3>
                  <p className="relative mt-2 text-cimento transition-colors duration-700 ease-in-out group-hover:text-white">{v.texto}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
