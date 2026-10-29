import './Folhas.css'
// Ornamento botânico de linha fina para os cantos das telas (decorativo).
const Galho = () => (
  <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 190 C40 150 70 110 120 50" />
    <path d="M40 150 C20 140 15 120 25 105 C40 110 48 130 40 150z" />
    <path d="M62 122 C85 120 100 105 100 85 C80 85 62 100 62 122z" />
    <path d="M85 92 C70 75 72 55 85 42 C100 55 98 78 85 92z" />
    <path d="M45 130 C60 150 85 150 100 140 C90 125 65 118 45 130z" />
  </g>
)

export default function Folhas({ lado = 'esquerda' }) {
  return (
    <svg className={`folhas folhas--${lado}`} viewBox="0 0 140 200" aria-hidden="true">
      <Galho />
    </svg>
  )
}
