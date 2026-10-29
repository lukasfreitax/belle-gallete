import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Galeria from './pages/Galeria.jsx'
import Pedidos from './pages/Pedidos.jsx'
import Sobre from './pages/Sobre.jsx'

// Mapa de rotas: cada endereço aponta para uma página.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:categoriaId" element={<Catalogo />} />
        <Route path="/catalogo/:categoriaId/:ocasiaoId" element={<Galeria />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
