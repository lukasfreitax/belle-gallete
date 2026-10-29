import { IconeEsq, IconeDir, IconeMouse, IconeBaixo } from './Icons.jsx'
import './Controles.css'

// Seta redonda de navegação do carrossel.
export function Seta({ lado, onClick, rotulo }) {
  const Icone = lado === 'esq' ? IconeEsq : IconeDir
  return (
    <button className={`seta seta--${lado}`} onClick={onClick} aria-label={rotulo}>
      <Icone />
    </button>
  )
}

// Indicadores de posição. variante: 'barra' (catálogo) ou 'bolinha' (galeria).
export function Pontos({ total, atual, onEscolher, variante = 'barra', rotulo = 'Item' }) {
  return (
    <div className={`pontos pontos--${variante}`} role="tablist">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i} role="tab" aria-selected={i === atual} aria-label={`${rotulo} ${i + 1}`}
          className={`ponto ${i === atual ? 'ponto--ativo' : ''}`} onClick={() => onEscolher(i)}
        />
      ))}
    </div>
  )
}

// "Role para ver..." do protótipo; aqui clicar avança para o próximo item.
export function Dica({ texto, onClick }) {
  return (
    <button className="dica" onClick={onClick}>
      <span className="dica__fio" />
      <IconeMouse className="dica__mouse" />
      <span className="dica__texto">{texto}</span>
      <IconeBaixo className="dica__seta" />
    </button>
  )
}
