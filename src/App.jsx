import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Galeria from './components/Galeria'
import Vantagens from './components/Vantagens'
import ComoPedir from './components/ComoPedir'
import Localizacao from './components/Localizacao'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppFlutuante from './components/WhatsAppFlutuante'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Galeria />
        <Vantagens />
        <ComoPedir />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  )
}