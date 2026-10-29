// Ícones de linha fina (stroke), todos no mesmo estilo. Herdam a cor do texto.
const Svg = ({ children, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {children}
  </svg>
)

export const IconeMenu = (p) => <Svg {...p}><path d="M2 8h20M2 12h20M2 16h20" /></Svg>
export const IconeFechar = (p) => <Svg {...p}><path d="M5 5l14 14M19 5L5 19" /></Svg>
export const IconeBusca = (p) => <Svg {...p}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" /></Svg>
export const IconeSacola = (p) => <Svg {...p}><path d="M5 8h14l-1 13H6L5 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></Svg>
export const IconeSetaEsq = (p) => <Svg {...p}><path d="M20 12H4M10 6l-6 6 6 6" /></Svg>
export const IconeSetaDir = (p) => <Svg {...p}><path d="M4 12h16M14 6l6 6-6 6" /></Svg>
export const IconeEsq = (p) => <Svg {...p}><path d="M15 5l-7 7 7 7" /></Svg>
export const IconeDir = (p) => <Svg {...p}><path d="M9 5l7 7-7 7" /></Svg>
export const IconeBaixo = (p) => <Svg {...p}><path d="M5 9l7 7 7-7" /></Svg>
export const IconeMouse = (p) => <Svg {...p}><rect x="6" y="2" width="12" height="20" rx="6" /><path d="M12 6v4" /></Svg>

export const IconeMacaron = (p) => <Svg {...p}><path d="M4 10c0-3 3.5-5 8-5s8 2 8 5H4z" /><path d="M5 12.5h14M5 14.5h14" /><path d="M4 17c0 2 3.5 3.5 8 3.5s8-1.500 8-3.500H4z" /></Svg>
export const IconeCupcake = (p) => <Svg {...p}><path d="M5 11h14l-2 9H7l-2-9z" /><path d="M6 11c0-3 2-5 6-5s6 2 6 5" /><path d="M12 6V3" /><path d="M9 14l1 4M14 14l-1 4" /></Svg>
export const IconeBolo = (p) => <Svg {...p}><path d="M4 21h16v-8H4v8z" /><path d="M6 13c0-2 2-3 6-3s6 1 6 3" /><path d="M12 10V6M12 4v.5" /><path d="M4 17c2 1.500 4-1.500 8 0s6 1 8 0" /></Svg>
export const IconePresente = (p) => <Svg {...p}><rect x="3" y="9" width="18" height="12" rx="1" /><path d="M2 9h20v-3H2zM12 6v15" /><path d="M12 6c-1-3-5-3.500-5-1.500S10 6 12 6zM12 6c1-3 5-3.500 5-1.500S14 6 12 6z" /></Svg>

export const iconesPorNome = {
  macaron: IconeMacaron, cupcake: IconeCupcake, bolo: IconeBolo, presente: IconePresente,
}
