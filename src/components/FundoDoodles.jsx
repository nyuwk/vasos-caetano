import { Planta, Flor, Vaso, Folhas } from './Decoracao'

const tipos = { planta: Planta, flor: Flor, vaso: Vaso, folhas: Folhas }
const cores = {
  v: 'text-folha/20',
  t: 'text-terracota/20',
  c: 'text-cimento/15',
  // versões claras, para seções de fundo verde escuro
  m: 'text-[#c9dca8]/15',
  o: 'text-[#e0a15a]/15',
  b: 'text-white/10',
}

// Desenhos de natureza espalhados no fundo de uma seção.
// A seção pai precisa ter "relative overflow-hidden" e o conteúdo, "relative".
// Cada item: [tipo, cor, posição e tamanho (classes Tailwind)]
export default function FundoDoodles({ itens }) {
  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      {itens.map(([tipo, cor, pos], i) => {
        const Desenho = tipos[tipo]
        return <Desenho key={i} className={`absolute ${cores[cor]} ${pos}`} />
      })}
    </div>
  )
}

// Layout da seção "Onde estamos"
export const DOODLES_LOCALIZACAO = [
  ['planta', 'v', 'left-2 top-4 h-28 w-24 -rotate-6'],
  ['flor', 't', 'left-24 top-24 h-20 w-16 rotate-12'],
  ['vaso', 'v', 'left-[14%] top-3 h-16 w-16 rotate-6 max-md:hidden'],
  ['folhas', 'v', 'left-[30%] top-2 h-20 w-20 rotate-12 max-md:hidden'],
  ['flor', 'c', 'left-[44%] top-4 h-20 w-16 -rotate-12 max-lg:hidden'],
  ['planta', 't', 'left-[56%] top-2 h-24 w-20 rotate-6 max-lg:hidden'],
  ['folhas', 'v', 'right-[22%] top-2 h-20 w-20 -rotate-12 max-md:hidden'],
  ['vaso', 'c', 'right-[10%] top-4 h-16 w-16 -rotate-6 max-md:hidden'],
  ['flor', 'v', 'right-2 top-6 h-28 w-24 rotate-6'],
  ['folhas', 't', 'right-3 top-40 h-20 w-20 rotate-45 max-md:hidden'],
  ['planta', 'v', 'left-3 bottom-3 h-32 w-28 rotate-3'],
  ['vaso', 't', 'left-[16%] bottom-2 h-20 w-20 -rotate-6'],
  ['flor', 'v', 'left-[28%] bottom-3 h-24 w-20 rotate-6 max-md:hidden'],
  ['folhas', 'c', 'left-[42%] bottom-2 h-20 w-20 -rotate-12 max-lg:hidden'],
  ['planta', 'v', 'left-[54%] bottom-2 h-28 w-24 -rotate-3 max-lg:hidden'],
  ['flor', 't', 'right-[26%] bottom-3 h-24 w-20 -rotate-6 max-md:hidden'],
  ['vaso', 'v', 'right-[14%] bottom-2 h-20 w-20 rotate-6'],
  ['planta', 't', 'right-2 bottom-3 h-32 w-28 -rotate-6'],
  ['folhas', 'v', 'left-2 top-[45%] h-16 w-16 rotate-45 max-md:hidden'],
  ['flor', 'c', 'right-1 top-[48%] h-20 w-16 -rotate-12 max-md:hidden'],
]

// Layout do espaço em volta do chamado final
export const DOODLES_CTA = [
  ['planta', 'v', 'left-2 top-4 h-28 w-24 rotate-6'],
  ['flor', 't', 'left-[12%] bottom-3 h-24 w-20 -rotate-6 max-md:hidden'],
  ['vaso', 'v', 'left-[22%] top-2 h-16 w-16 rotate-12 max-md:hidden'],
  ['folhas', 'v', 'left-3 bottom-8 h-20 w-20 -rotate-12'],
  ['flor', 'v', 'right-2 top-4 h-28 w-24 -rotate-6'],
  ['vaso', 't', 'right-[14%] bottom-2 h-20 w-20 rotate-6 max-md:hidden'],
  ['planta', 'v', 'right-3 bottom-4 h-28 w-24 rotate-3'],
  ['folhas', 'c', 'right-[24%] top-2 h-16 w-16 rotate-45 max-md:hidden'],
]

// Troca esquerda/direita para variar o desenho entre seções vizinhas
const espelhar = (lista) =>
  lista.map(([t, c, pos]) => [
    t,
    c,
    pos.replace(/left-/g, '§').replace(/right-/g, 'left-').replace(/§/g, 'right-'),
  ])

const paraEscuro = (lista) =>
  lista.map(([t, c, pos]) => [t, { v: 'm', t: 'o', c: 'b' }[c] || c, pos])

// Layouts genéricos (funcionam em seções de qualquer altura)
export const DOODLES_CLARO = DOODLES_LOCALIZACAO
export const DOODLES_CLARO_ESPELHADO = espelhar(DOODLES_LOCALIZACAO)
export const DOODLES_ESCURO = paraEscuro(DOODLES_LOCALIZACAO)
export const DOODLES_ESCURO_ESPELHADO = paraEscuro(espelhar(DOODLES_LOCALIZACAO))
