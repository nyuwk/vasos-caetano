// ===== Dados do comércio — edite aqui =====
export const WHATSAPP_NUMBER = "5567991257616"
export const WHATSAPP_EXIBIDO = "(67) 99125-7616"
export const WHATSAPP_MENSAGEM =
  "Olá! Vi o site da Fábrica de Vasos do Caetano e gostaria de saber mais sobre os vasos."
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`

export const NOME = "Fábrica de Vasos do Caetano"
export const ENDERECO = "Av. Euler de Azevedo, 562, São Francisco, Campo Grande, MS, 79010-060"
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(NOME + ", " + ENDERECO)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`

export const INSTAGRAM_USUARIO = "@fabrica.vasos.caetano"
export const INSTAGRAM_LINK = "https://www.instagram.com/fabrica.vasos.caetano"

// Horário: ajuste as linhas livremente
export const HORARIO_DESTAQUE = "Atendimento até 17h30"
export const HORARIO_DETALHE = "Abre durante o dia e fecha às 17h30."

export const NOTA_GOOGLE = "4,7"
export const AVALIACOES = 53
export const PRECO_INICIAL = "R$ 5,00"

// Reportagem usada como fonte da história do Caetano
export const MATERIA_LINK =
  "https://www.campograndenews.com.br/lado-b/comportamento-23-08-2011-08/caetano-largou-balcao-para-fazer-300-vasos-de-cimento-por-mes-sozinho"

// Legendas por arquivo em public/fotos.
// Arquivos que começam com "caetano" aparecem na seção Sobre; os demais, na galeria.
export const LEGENDAS = {
  "hero.jpg": "Vasos de cimento e terracota com samambaias, espadas-de-são-jorge e suculentas",
  "vasos.png": "Bacias decorativas sobre colunas",
  "vasos1.png": "Vasos coloridos e texturados",
  "vasos2.png": "Vasos texturados em azul e areia",
  "vasos3.jpg": "Bacias decorativas em cinza envelhecido",
  "vasos3.png": "Vasos e bacias em várias cores",
  "vasos4.png": "Jardineiras e vasos em tons claros",
  "caetano.jpg": "Caetano sorrindo enquanto arruma vasos azuis na fábrica",
  "caetano1.jpg": "Caetano montando uma forma de vaso na oficina",
  "caetano2.jpg": "Caetano segurando uma forma vermelha e um vaso de cimento",
}
export const LEGENDA_PADRAO = "Vasos de cimento artesanais"

export const NAV = [
  { href: "#sobre", rotulo: "O Caetano" },
  { href: "#modelos", rotulo: "Modelos" },
  { href: "#vantagens", rotulo: "Vantagens" },
  { href: "#como-pedir", rotulo: "Como pedir" },
  { href: "#onde-estamos", rotulo: "Onde estamos" },
]

export const VANTAGENS = [
  { titulo: "Preço de fábrica", texto: `Vasos a partir de ${PRECO_INICIAL}, direto de quem fabrica.` },
  { titulo: "Variedade de tamanhos", texto: "Do pequeno ao grande: modelos, formatos e acabamentos para cada espaço." },
  { titulo: "Feito à mão", texto: "Produção artesanal em cimento, com cuidado em cada peça." },
  { titulo: "Atendimento atacado", texto: "Preço especial para quem compra em quantidade. Combine pelo WhatsApp." },
]

export const PASSOS = [
  { titulo: "Chame no WhatsApp", texto: "Mande uma mensagem e conte o que você procura." },
  { titulo: "Escolha modelos e tamanhos", texto: "Veja as opções e escolha os vasos ideais para o seu espaço." },
  { titulo: "Retire na fábrica", texto: "Combine o pedido e passe na fábrica para retirar os seus vasos." },
]
