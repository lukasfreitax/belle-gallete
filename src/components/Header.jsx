import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { IconeMenu, IconeFechar, IconeBusca, IconeSacola } from './Icons.jsx'
import './Header.css'

const links = [
  { para: '/sobre', rotulo: 'Sobre a Belle' },
  { para: '/catalogo', rotulo: 'Catálogo' },
  { para: '/pedidos', rotulo: 'Pedidos' },
]

// Variante visual conforme a página:
//  home   -> sobre a foto de abertura
//  vidro  -> sobre a galeria (foto desfocada), logo translúcida
//  solido -> faixa azul profunda (catálogo e demais páginas): separa o cabeçalho do conteúdo
function variantePara(caminho) {
  if (caminho === '/') return 'home'
  if (/^\/catalogo\/[^/]+\/[^/]+/.test(caminho)) return 'vidro'
  return 'solido'
}

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const { pathname } = useLocation()
  const fechar = () => setAberto(false)

  return (
    <>
      <header className={`header header--${variantePara(pathname)}`}>
        <div className="header__esq">
          <button className="header__icone header__menu" onClick={() => setAberto(true)} aria-label="Abrir menu">
            <IconeMenu />
          </button>
        </div>

        <Link to="/" className="header__logo" aria-label="Belle Galette Pâtisserie, página inicial">
          <Logo />
        </Link>

        <nav className="header__nav" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.para} to={l.para} className="header__link">{l.rotulo}</NavLink>
          ))}
        </nav>

        <div className="header__dir">
          {/* Busca e sacola aparecem nos protótipos mas ainda não são requisito (ver README, seção 2). */}
          <button className="header__icone" disabled aria-label="Buscar (em breve)" title="Em breve"><IconeBusca /></button>
          <Link to="/pedidos" className="header__icone" aria-label="Pedidos"><IconeSacola /></Link>
        </div>
      </header>

      {aberto && (
        <div className="menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="menu__fechar header__icone" onClick={fechar} aria-label="Fechar menu"><IconeFechar /></button>
          <nav className="menu__links">
            <NavLink to="/" onClick={fechar}>Início</NavLink>
            {links.map((l) => (
              <NavLink key={l.para} to={l.para} onClick={fechar}>{l.rotulo}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
