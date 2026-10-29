import './Pagina.css'

// RF-009: apresentação da marca. Texto PROVISÓRIO, a ser fornecido pela cliente.
export default function Sobre() {
  return (
    <section className="pagina">
      <p className="selo">Sobre a Belle</p>
      <h1 className="pagina__titulo">Belle Galette Pâtisserie</h1>
      <p className="pagina__texto">
        Conteúdo provisório. Aqui entrará a história da Belle, a inspiração francesa e o
        cuidado artesanal de cada receita, a ser definido com a cliente.
      </p>
    </section>
  )
}
