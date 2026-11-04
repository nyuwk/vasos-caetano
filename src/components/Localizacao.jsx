import { ENDERECO, HORARIO_DESTAQUE, HORARIO_DETALHE, MAPS_LINK, MAPS_EMBED, NOME } from '../dados'
import Reveal from './Reveal'
import Titulo from './Titulo'
import FolhasHover from './FolhasHover'
import FundoDoodles, { DOODLES_LOCALIZACAO } from './FundoDoodles'

export default function Localizacao() {
  return (
    <section id="onde-estamos" className="relative overflow-hidden px-4 py-24">
      <FundoDoodles itens={DOODLES_LOCALIZACAO} />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <Reveal>
          <Titulo etiqueta="Onde estamos">Venha conhecer a fábrica</Titulo>
          <dl className="group relative mt-6 cursor-default space-y-4 overflow-hidden rounded-3xl bg-musgo p-6 text-mata shadow-md transition-all duration-700 ease-in-out hover:-translate-y-1 hover:bg-folha hover:text-white hover:shadow-lg">
            <FolhasHover />
            {[
              ['Endereço', ENDERECO],
              ['Horário', `${HORARIO_DESTAQUE}. ${HORARIO_DETALHE}`],
              ['Entrega', 'Fazemos entrega.'],
            ].map(([rotulo, valor]) => (
              <div key={rotulo} className="relative">
                <dt className="font-bold">{rotulo}</dt>
                <dd className="text-cimento transition-colors duration-700 ease-in-out group-hover:text-white">{valor}</dd>
              </div>
            ))}
          </dl>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-folha px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-mata-2"
          >
            Como chegar
          </a>
        </Reveal>
        <Reveal delay={120}>
          <iframe
            title={`Mapa: ${NOME}`}
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-3xl border-4 border-white shadow-lg lg:h-full lg:min-h-96"
          />
        </Reveal>
      </div>
    </section>
  )
}
