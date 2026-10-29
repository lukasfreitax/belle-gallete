import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'

// Moldura comum a todas as páginas: Header fixo no topo + conteúdo da rota (<Outlet />).
export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <>
      <Header />
      <main><Outlet /></main>
    </>
  )
}
