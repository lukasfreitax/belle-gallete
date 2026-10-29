import { Link, useParams, Navigate } from 'react-router-dom'
import { categorias, buscarCategoria } from '../data/catalogo.js'
import useCarrossel from '../hooks/useCarrossel.js'
import { iconesPorNome, IconeSetaDir } from '../components/Icons.jsx'
import { Seta, Pontos, Dica } from '../components/Controles.jsx'
import Folhas from '../components/Folhas.jsx'
import './Catalogo.css'

// RF-001 / RF-002: catálogo por categoria; dentro de cada categoria, as ocasiões em carrossel (RF-005).
export default function Catalogo() {
  const { categoriaId = 'macarons' } = useParams()
  const categoria = buscarCategoria(categoriaId)
  const ocasioes = categoria?.ocasioes ?? []
  const { indice, proximo, anterior, irPara, gestos } = useCarrossel(Math.max(ocasioes.length, 1))

  if (!categoria) return <Navigate to="/catalogo" replace />
  const ocasiao = ocasioes[indice]

  return (
    <section className="catalogo">
      {/* Faixa 1 (azul profundo): título e abas de categoria */}
      <div className="catalogo__topo">
        <p className="selo">Explore nossas criações</p>
        <h1 className="catalogo__titulo">{categoria.nome}</h1>
        <p className="catalogo__sub">{categoria.subtitulo}</p>

        <nav className="abas" aria-label="Categorias">
          {categorias.map((c) => {
            const Icone = iconesPorNome[c.icone]
            return (
              <Link
                key={c.id} to={`/catalogo/${c.id}`}
                className={`aba ${c.id === categoria.id ? 'aba--ativa' : ''}`}
                aria-current={c.id === categoria.id ? 'page' : undefined}
              >
                <Icone /><span>{c.nome}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Faixa 2 (azul base): vitrine da ocasião */}
      <div className="catalogo__vitrine" {...gestos}>
        {ocasiao ? (
          <>
            <Seta lado="esq" onClick={anterior} rotulo="Ocasião anterior" />
            <Seta lado="dir" onClick={proximo} rotulo="Próxima ocasião" />

            <div className="palco" key={ocasiao.id}>
              <img className="palco__foto" src={ocasiao.foto} alt={ocasiao.titulo} />
              <article className="card">
                <p className="card__selo">{ocasiao.selo}</p>
                <span className="card__linha" />
                <h2 className="card__titulo">{ocasiao.titulo}</h2>
                <p className="card__texto">{ocasiao.descricao}</p>
                <Link to={`/catalogo/${categoria.id}/${ocasiao.id}`} className="botao">
                  Conhecer esta ocasião <IconeSetaDir />
                </Link>
              </article>
            </div>
          </>
        ) : (
          <div className="vazio">
            <p className="vazio__titulo">Em breve</p>
            <p>Estamos preparando esta seção com muito carinho.</p>
          </div>
        )}
        <Folhas lado="esquerda" />
        <Folhas lado="direita" />
      </div>

      {/* Faixa 3 (azul profundo): indicadores e dica */}
      {ocasiao && (
        <div className="catalogo__rodape">
          <Pontos total={ocasioes.length} atual={indice} onEscolher={irPara} rotulo="Ocasião" />
          <Dica texto="Role para ver outras ocasiões" onClick={proximo} />
        </div>
      )}
    </section>
  )
}
