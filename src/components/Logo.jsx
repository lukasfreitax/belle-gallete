// Selo circular da marca em SVG: texto curvo + Torre Eiffel.
// A cor do fundo vem da variável CSS --logo-fundo (definida pelo Header).
export default function Logo({ className = '' }) {
  return (
    <svg className={`logo ${className}`} viewBox="0 0 200 200" role="img" aria-label="Belle Galette Pâtisserie">
      <defs>
        <path id="arco-topo" d="M 26,100 A 74,74 0 0 1 174,100" />
        <path id="arco-base" d="M 16,100 A 84,84 0 0 0 184,100" />
      </defs>
      <circle cx="100" cy="100" r="100" style={{ fill: 'var(--logo-fundo, #4a6580)' }} />
      <g fill="#f4eee4" fontFamily="Jost, sans-serif" fontSize="11" letterSpacing="2.6" opacity="0.9">
        <text textAnchor="middle"><textPath href="#arco-topo" startOffset="50%">BELLE GALETTE PÂTISSERIE</textPath></text>
        <text textAnchor="middle"><textPath href="#arco-base" startOffset="50%">BELLE GALETTE PÂTISSERIE</textPath></text>
      </g>
      <g stroke="#f4eee4" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
        <path d="M100 50 V58 M100 58 L90 140 M100 58 L110 140" />
        <path d="M95 82 H105 M92 100 H108 M89 120 H111 M86 140 H114" />
        <path d="M93 82 L106 100 M107 82 L94 100 M91 100 L109 120 M109 100 L91 120" />
        <path d="M92 140 Q100 118 108 140" />
      </g>
      <g fill="#f4eee4" opacity="0.8"><circle cx="22" cy="100" r="1.6" /><circle cx="178" cy="100" r="1.6" /></g>
    </svg>
  )
}
