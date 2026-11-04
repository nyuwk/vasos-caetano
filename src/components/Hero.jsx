import fotos from 'virtual:fotos'
import { NOTA_GOOGLE, AVALIACOES, PRECO_INICIAL } from '../dados'
import BotaoWhats from './BotaoWhats'
import Reveal from './Reveal'
import Folha from './Folha'

export default function Hero() {
  // Foto de destaque: public/fotos/hero.jpg (se não existir, usa a primeira foto de vasos)
  const destaque =
    fotos.find((f) => f.endsWith('/hero.jpg')) || fotos.find((f) => !f.includes('/caetano'))
  const itens = [
    { forte: `${NOTA_GOOGLE} ★`, texto: `no Google · ${AVALIACOES} avaliações` },
    { forte: 'Entrega', texto: 'na sua casa' },
    { forte: `A partir de ${PRECO_INICIAL.replace(',00', '')}`, texto: 'preço de fábrica' },
  ]
  return (
    <section id="topo" className="relative z-10 bg-mata px-4 pb-24 pt-28 text-white md:pt-32">
      {/* foto de fundo + camada verde para manter o texto legível */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {destaque && (
          <img
            src={destaque}
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-mata/55 max-md:bg-mata/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(36,57,27,0.55),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-mata/50 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl min-h-[420px] md:min-h-[480px]">
        <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#c9dca8]">
            Campo Grande, MS
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
            Vasos de cimento artesanais, com <span className="text-[#e0a15a]">preço de fábrica</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white">
            Muitos tamanhos, modelos e acabamentos, feitos à mão pelo Caetano. Escolha os seus e a gente entrega.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <BotaoWhats />
            <a
              href="#modelos"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-mata"
            >
              Ver modelos
            </a>
          </div>
        </Reveal>
        </div>
      </div>
      <Reveal className="relative mx-auto -mb-36 mt-14 grid max-w-5xl gap-3 rounded-3xl bg-creme p-5 text-mata shadow-xl sm:grid-cols-3">
        {itens.map((i) => (
          <p
            key={i.forte}
            className="group relative cursor-default overflow-hidden rounded-2xl bg-musgo px-3 py-4 text-center text-mata transition-all duration-700 ease-in-out hover:-translate-y-1 hover:bg-folha hover:text-white hover:shadow-lg"
          >
            {/* folhinhas que brotam dos cantos ao passar o mouse */}
            <Folha className="pointer-events-none absolute -bottom-1 left-2 h-7 w-7 origin-bottom-left -rotate-45 scale-0 text-[#c9dca8] transition-transform duration-700 ease-in-out group-hover:scale-100" />
            <Folha className="pointer-events-none absolute -bottom-1 left-7 h-5 w-5 origin-bottom -rotate-12 scale-0 text-[#a9c47f] transition-transform delay-100 duration-700 ease-in-out group-hover:scale-100" />
            <Folha className="pointer-events-none absolute -top-1 right-3 h-6 w-6 origin-top-right rotate-[135deg] scale-0 text-[#c9dca8] transition-transform delay-150 duration-700 ease-in-out group-hover:scale-100" />
            <Folha className="pointer-events-none absolute -bottom-1 right-2 h-8 w-8 origin-bottom-right rotate-[40deg] scale-0 text-[#a9c47f] transition-transform delay-75 duration-700 ease-in-out group-hover:scale-100" />
            <strong className="relative block font-serif text-2xl">{i.forte}</strong>
            <span className="relative text-sm text-cimento transition-colors duration-700 ease-in-out group-hover:text-white">{i.texto}</span>
          </p>
        ))}
      </Reveal>
    </section>
  )
}
