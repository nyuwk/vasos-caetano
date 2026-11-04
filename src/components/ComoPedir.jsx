import { PASSOS } from '../dados'
import BotaoWhats from './BotaoWhats'
import Reveal from './Reveal'
import Titulo from './Titulo'
import FloresHover from './FloresHover'

export default function ComoPedir() {
  return (
    <section id="como-pedir" className="folhas bg-mata-2 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center">
          <Titulo etiqueta="Como pedir" claro>Simples, em 3 passos</Titulo>
        </Reveal>
        <ol className="grid gap-6 md:grid-cols-3">
          {PASSOS.map((p, i) => (
            <li key={p.titulo}>
              <Reveal delay={i * 100} className="h-full">
                {/* o efeito fica no div interno, para não conflitar com a transição de entrada do Reveal */}
                <div className="group relative h-full cursor-default overflow-hidden rounded-3xl bg-creme p-6 text-mata shadow-lg transition-all duration-700 ease-in-out hover:-translate-y-1 hover:bg-terracota hover:text-white hover:shadow-2xl">
                  <FloresHover />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-terracota font-serif text-xl text-white transition-colors duration-700 ease-in-out group-hover:bg-creme group-hover:text-terracota-escuro">
                    {i + 1}
                  </span>
                  <h3 className="relative mt-4 font-serif text-xl font-bold">{p.titulo}</h3>
                  <p className="relative mt-2 text-cimento transition-colors duration-700 ease-in-out group-hover:text-white">{p.texto}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center"><BotaoWhats>Chamar no WhatsApp</BotaoWhats></div>
      </div>
    </section>
  )
}
