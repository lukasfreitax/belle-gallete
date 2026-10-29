import { linkWhatsApp } from '../services/whatsapp.js'
import { IconeSetaDir } from '../components/Icons.jsx'
import './Pagina.css'

// RF-008 / RN-004: o pedido é concluído por conversa direta no WhatsApp.
export default function Pedidos() {
  return (
    <section className="pagina">
      <p className="selo">Pedidos</p>
      <h1 className="pagina__titulo">Faça o seu pedido</h1>
      <p className="pagina__texto">
        Escolha os modelos que mais gostou no catálogo e fale diretamente com a Belle.
        Combinamos sabores, quantidades, datas e entrega pelo WhatsApp.
      </p>
      <a
        className="botao botao--cheio" target="_blank" rel="noreferrer"
        href={linkWhatsApp('Olá, Belle! Gostaria de fazer um pedido.')}
      >
        Conversar no WhatsApp <IconeSetaDir />
      </a>
    </section>
  )
}
