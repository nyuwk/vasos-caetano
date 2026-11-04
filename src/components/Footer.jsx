import { NOME, ENDERECO, INSTAGRAM_LINK, INSTAGRAM_USUARIO } from '../dados'
import FundoDoodles, { DOODLES_ESCURO_ESPELHADO } from './FundoDoodles'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-mata px-4 py-12 text-creme">
      <FundoDoodles itens={DOODLES_ESCURO_ESPELHADO} />
      <div className="relative mx-auto max-w-6xl space-y-2 text-center text-sm">
        <p className="font-serif text-xl font-bold">{NOME}</p>
        <p>{ENDERECO}</p>
        <p>
          Instagram:{' '}
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            {INSTAGRAM_USUARIO}
          </a>
        </p>
        <p className="pt-4 text-white/80">Projeto acadêmico, página desenvolvida para fins educacionais</p>
        <p className="text-xs text-white/70">Imagem de destaque ilustrativa, gerada por inteligência artificial.</p>
      </div>
    </footer>
  )
}
