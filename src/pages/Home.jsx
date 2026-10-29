import { Link } from 'react-router-dom'
import { IconeSetaDir } from '../components/Icons.jsx'
import './Home.css'

const fotoHero = `${import.meta.env.BASE_URL}images/hero.jpg`

// RF-003: página inicial com identidade da marca e chamada para o catálogo.
export default function Home() {
  return (
    <section className="home">
      <div className="home__fundo" style={{ backgroundImage: `url(${fotoHero})` }} />
      <img className="home__foto" src={fotoHero} alt="" />
      <div className="home__veu" />

      <div className="home__conteudo">
        <p className="selo">Belle Galette Pâtisserie</p>
        <h1 className="home__titulo">Macarons<br />Franceses</h1>
        <p className="home__sub">Tradição, sabor e delicadeza<br />em cada mordida.</p>
      </div>

      <div className="home__rodape">
        <Link to="/catalogo" className="botao botao--cheio">
          Conheça nosso catálogo <IconeSetaDir />
        </Link>
        <div className="home__ornamento" aria-hidden="true">
          <span /><svg viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"><path d="M12 3v5M12 8L7 37M12 8l5 29M9.500 20h5M8 28h8M6 37h12M8 37q4-12 8 0" /></svg><span />
        </div>
      </div>
    </section>
  )
}
