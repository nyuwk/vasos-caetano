import Folha from './Folha'

// Folhinhas que brotam dos cantos de um card. O card pai precisa ter as classes "group relative overflow-hidden".
const base = 'pointer-events-none absolute scale-0 transition-transform duration-700 ease-in-out group-hover:scale-100'

export default function FolhasHover() {
  return (
    <>
      <Folha className={`${base} -bottom-1 left-2 h-7 w-7 origin-bottom-left -rotate-45 text-[#c9dca8]`} />
      <Folha className={`${base} -bottom-1 left-7 h-5 w-5 origin-bottom -rotate-12 text-[#a9c47f] delay-100`} />
      <Folha className={`${base} -top-1 right-3 h-6 w-6 origin-top-right rotate-[135deg] text-[#c9dca8] delay-150`} />
      <Folha className={`${base} -bottom-1 right-2 h-8 w-8 origin-bottom-right rotate-[40deg] text-[#a9c47f] delay-75`} />
    </>
  )
}
