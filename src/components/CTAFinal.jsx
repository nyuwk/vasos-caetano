import BotaoWhats from './BotaoWhats'
import Reveal from './Reveal'

export default function CTAFinal() {
  return (
    <section className="px-4 pb-20">
      <Reveal className="folhas mx-auto max-w-5xl rounded-3xl bg-mata px-6 py-14 text-center text-white shadow-xl">
        <h2 className="font-serif text-3xl font-bold md:text-5xl">Pronto para encher a casa de verde?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Chame no WhatsApp e peça seus vasos de cimento com preço de fábrica.
        </p>
        <BotaoWhats variante="claro" className="mt-8 text-lg">Chamar no WhatsApp</BotaoWhats>
      </Reveal>
    </section>
  )
}
