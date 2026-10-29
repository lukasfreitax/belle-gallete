// RF-008: pedido via WhatsApp. Sem backend: abrimos uma conversa com mensagem pronta.
// TODO: trocar pelo número real da Belle (formato: 55 + DDD + número, só dígitos).
export const NUMERO_WHATSAPP = '5500000000000'

export function linkWhatsApp(mensagem) {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`
}

export function mensagemModelo(modelo, ocasiao) {
  return `Olá, Belle! Tenho interesse no modelo "${modelo}" (${ocasiao}). Pode me passar mais informações?`
}
