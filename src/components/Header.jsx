import { NAV, NOME } from '../dados'
import BotaoWhats from './BotaoWhats'
import Folha from './Folha'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-folha/15 bg-creme/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#topo" className="flex items-center gap-2 font-serif text-lg font-bold leading-tight text-mata">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-folha text-white">
            <Folha className="h-4 w-4" />
          </span>
          <span className="max-[420px]:text-base">{NOME}</span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-medium xl:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-terracota">{n.rotulo}</a>
          ))}
        </nav>
        <BotaoWhats className="!px-4 !py-2 text-sm max-md:hidden">Chamar no WhatsApp</BotaoWhats>
      </div>
    </header>
  )
}
