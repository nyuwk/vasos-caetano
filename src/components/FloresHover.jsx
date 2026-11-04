import { Flor } from './Decoracao'
import Folha from './Folha'

// Florzinhas que brotam da base de um card terracota. O card pai precisa ter "group relative overflow-hidden".
const base = 'pointer-events-none absolute origin-bottom scale-0 transition-transform duration-700 ease-in-out group-hover:scale-100'

export default function FloresHover() {
  return (
    <>
      <Flor className={`${base} -bottom-3 right-3 h-16 w-14 -rotate-6 text-[#f7e3c6]`} />
      <Flor className={`${base} -bottom-4 right-14 h-12 w-10 rotate-12 text-[#e0a15a] delay-100`} />
      <Folha className={`${base} -bottom-1 right-24 h-6 w-6 -rotate-12 text-[#c9dca8] delay-150`} />
      <Flor className={`${base} -bottom-4 left-3 h-12 w-10 rotate-6 text-[#f7e3c6] delay-75`} />
    </>
  )
}
