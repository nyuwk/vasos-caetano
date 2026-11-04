import Folha from './Folha'

export default function Titulo({ etiqueta, children, claro = false }) {
  return (
    <>
      <p className={`mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${claro ? 'text-[#c9dca8]' : 'text-folha'}`}>
        <Folha className="h-4 w-4" />
        {etiqueta}
      </p>
      <h2 className={`font-serif text-3xl font-bold leading-tight md:text-4xl ${claro ? 'text-white' : 'text-mata'}`}>
        {children}
      </h2>
    </>
  )
}
