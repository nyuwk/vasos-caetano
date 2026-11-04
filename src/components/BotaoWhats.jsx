import { WHATSAPP_LINK } from '../dados'
import Folha from './Folha'

const broto =
  'pointer-events-none absolute origin-bottom scale-0 transition-transform duration-700 ease-in-out group-hover:scale-100'

export default function BotaoWhats({ children = 'Chamar no WhatsApp', className = '', variante = 'solido' }) {
  const estilos = {
    solido: 'bg-terracota text-white hover:bg-terracota-escuro',
    // botão do chamado final: vira terracota e "brota" folhas por cima
    claro: 'bg-creme text-mata hover:bg-terracota hover:text-white duration-700 ease-in-out',
  }
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center rounded-full px-6 py-3 font-bold shadow-md transition-all hover:-translate-y-0.5 ${estilos[variante]} ${className}`}
    >
      {variante === 'claro' && (
        <>
          <Folha className={`${broto} -top-5 left-5 h-7 w-7 -rotate-[30deg] text-[#c9dca8]`} />
          <Folha className={`${broto} -top-4 left-12 h-5 w-5 rotate-[10deg] text-[#a9c47f] delay-100`} />
          <Folha className={`${broto} -top-6 right-14 h-6 w-6 -rotate-[10deg] text-[#a9c47f] delay-75`} />
          <Folha className={`${broto} -top-5 right-5 h-7 w-7 rotate-[30deg] text-[#c9dca8] delay-150`} />
        </>
      )}
      <span className="relative">{children}</span>
    </a>
  )
}
