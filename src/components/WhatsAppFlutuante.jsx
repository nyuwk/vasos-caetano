import { WHATSAPP_LINK } from '../dados'

export default function WhatsAppFlutuante() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25a244] text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16 4C9.4 4 4 9.200 4 15.600c0 2.200.6 4.200 1.700 6L4 28l6.600-1.700c1.500.8 3.200 1.300 5.100 1.300 6.600 0 12-5.200 12-11.600S22.600 4 16 4zm5.700 15.700c-.2.700-1.400 1.300-1.900 1.300-.5.100-1.100.100-3.500-.8-3-1.200-4.900-4.200-5-4.400-.2-.2-1.200-1.600-1.200-3s.7-2.100 1-2.400c.3-.3.600-.3.800-.3h.6c.2 0 .5-.1.700.5l1 2.300c.1.200.1.400 0 .6l-.4.600c-.2.200-.4.400-.2.800.2.400.9 1.500 1.900 2.400 1.300 1.100 2.400 1.500 2.800 1.700.4.200.6.100.8-.1l1-1.200c.2-.3.500-.2.700-.1l2.200 1.100c.3.200.5.200.5.400.1.200.1.800-.1 1.500z"/>
      </svg>
    </a>
  )
}