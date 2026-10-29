import { Link, useParams, Navigate } from 'react-router-dom'
import { buscarCategoria, buscarOcasiao } from '../data/catalogo.js'
import useCarrossel from '../hooks/useCarrossel.js'
import { linkWhatsApp, mensagemModelo } from '../services/whatsapp.js'
import { IconeSetaEsq } from '../components/Icons.jsx'
import { Seta, Pontos, Dica } from '../components/Controles.jsx'
import Folhas from '../components/Folhas.jsx'
import './Galeria.css'

// RF-005, RF-006, RF-007, RF-008: galeria de modelos de uma ocasião.
export default function Galeria() {
  const { categoriaId, ocasiaoId } = useParams()
  const categoria = buscarCategoria(categoriaId)
  const ocasiao = buscarOcasiao(categoria, ocasiaoId)
  const modelos = ocasiao?.modelos ?? []
  const { indice, proximo, anterior, irPara, gestos } = useCarrossel(Math.max(modelos.length, 1))

  if (!ocasiao) return <Navigate to="/catalogo" replace />
  const modelo = modelos[indice]

  return (
    <section className="galeria" {...gestos}>
      {/* A própria foto, desfocada, vira a atmosfera do fundo */}
      <div className="galeria__fundo" style={{ backgroundImage: `url(${modelo.foto})` }} />
      <div className="galeria__veu" />

      <Seta lado="esq" onClick={anterior} rotulo="Modelo anterior" />
      <Seta lado="dir" onClick={proximo} rotulo="Próximo modelo" />

      <div className="galeria__conteudo">
        <div className="galeria__texto" key={`t-${indice}`}>
          <p className="selo galeria__selo">{categoria.nome}</p>
          <h1 className="galeria__titulo">{modelo.titulo}</h1>
          <p className="galeria__descricao">{modelo.descricao}</p>
        </div>

        <div className="galeria__palco">
          <img key={`f-${indice}`} className="galeria__foto" src={modelo.foto} alt={modelo.titulo} />
        </div>

        <div className="galeria__acoes">
          <Link to={`/catalogo/${categoria.id}`} className="botao botao--cheio">
            <IconeSetaEsq /> Voltar à categoria
          </Link>
          <a
            className="botao botao--contorno"
            href={linkWhatsApp(mensagemModelo(modelo.titulo, ocasiao.titulo))}
            target="_blank" rel="noreferrer"
          >
            Pedir pelo WhatsApp
          </a>
        </div>

        <Pontos total={modelos.length} atual={indice} onEscolher={irPara} variante="bolinha" rotulo="Modelo" />
        <Dica texto="Role para ver outros modelos" onClick={proximo} />
      </div>

      <Folhas lado="esquerda" />
      <Folhas lado="direita" />
    </section>
  )
}
