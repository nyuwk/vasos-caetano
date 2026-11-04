import fotos from 'virtual:fotos'
import { LEGENDAS, MATERIA_LINK } from '../dados'
import Reveal from './Reveal'
import Titulo from './Titulo'
import { Planta, Flor, Vaso, Folhas } from './Decoracao'

// Moldura: borda branca + sombra verde deslocada; no hover a foto ganha zoom e a moldura "levanta"
function Moldura({ src, alt, className = '', proporcao }) {
  return (
    <div
      className={`group rounded-3xl border-4 border-white bg-white shadow-[6px_6px_0_0_#b9cf9a] outline outline-1 outline-folha/20 transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-[10px_10px_0_0_#8fb067] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.25rem]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`${proporcao} w-full object-cover transition-transform duration-500 group-hover:scale-110`}
        />
      </div>
    </div>
  )
}

export default function Sobre() {
  const caetano = fotos.filter((f) => f.includes('/caetano'))
  const [principal, ...outras] = caetano
  const alt = (f) => LEGENDAS[f.split('/').pop()] || 'Caetano, dono da fábrica de vasos'
  return (
    <section id="sobre" className="relative overflow-hidden px-4 pb-20 pt-52">
      {/* decoração de fundo */}
      <Planta className="pointer-events-none absolute left-2 top-44 h-32 w-28 -rotate-6 text-folha/20 md:left-10 md:h-44 md:w-40" />
      <Flor className="pointer-events-none absolute right-3 top-40 h-28 w-24 rotate-6 text-terracota/20 md:right-12 md:h-40 md:w-36" />
      <Vaso className="pointer-events-none absolute bottom-10 left-6 h-24 w-24 rotate-6 text-folha/20 md:left-24 md:h-32 md:w-32" />
      <Folhas className="pointer-events-none absolute bottom-6 right-4 h-28 w-28 text-folha/20 md:right-20 md:h-40 md:w-40" />
      <Flor className="pointer-events-none absolute bottom-40 left-1/2 hidden h-28 w-24 -rotate-12 text-terracota/15 lg:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Titulo etiqueta="O Caetano">Do balcão de calçados à fábrica de vasos</Titulo>
          <div className="mt-6 space-y-4 text-lg">
            <p>
              O Caetano era vendedor de calçados no centro de Campo Grande. Cansado da rotina de balcão,
              queria um trabalho manual, algo diferente.
            </p>
            <p>
              Aprendeu o ofício olhando um funcionário fazer vasos na floricultura do irmão e nunca mais parou.
              Hoje ele fabrica vasos de cimento artesanais e produz centenas de peças por mês.
            </p>
            <p>Por isso cada vaso aqui tem mão de gente, e o atendimento é de quem gosta de conversar com o cliente.</p>
          </div>
          <p className="mt-5 text-sm">
            História contada pelo{' '}
            <a href={MATERIA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold text-folha underline">
              Campo Grande News
            </a>.
          </p>
        </Reveal>
        <Reveal delay={150} className="grid grid-cols-2 gap-5 pb-2 pr-2">
          {principal && <Moldura src={principal} alt={alt(principal)} proporcao="aspect-[16/10]" className="col-span-2" />}
          {outras.map((f) => (
            <Moldura key={f} src={f} alt={alt(f)} proporcao="aspect-[4/3]" />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
