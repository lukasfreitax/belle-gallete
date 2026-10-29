import { useCallback, useEffect, useRef, useState } from 'react'

// Lógica reutilizável de carrossel: posição atual, anterior/próximo (circular),
// ir para um índice, gesto de deslizar no celular e setas do teclado.
export default function useCarrossel(total) {
  const [indice, setIndice] = useState(0)
  const inicioToque = useRef(null)

  const proximo = useCallback(() => setIndice((i) => (i + 1) % total), [total])
  const anterior = useCallback(() => setIndice((i) => (i - 1 + total) % total), [total])

  // Se a lista mudar (ex.: troca de categoria), volta ao início.
  useEffect(() => setIndice(0), [total])

  useEffect(() => {
    const aoTeclar = (e) => {
      if (e.key === 'ArrowRight') proximo()
      if (e.key === 'ArrowLeft') anterior()
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [proximo, anterior])

  const gestos = {
    onTouchStart: (e) => { inicioToque.current = e.touches[0].clientX },
    onTouchEnd: (e) => {
      if (inicioToque.current === null) return
      const dx = e.changedTouches[0].clientX - inicioToque.current
      if (Math.abs(dx) > 50) (dx < 0 ? proximo : anterior)()
      inicioToque.current = null
    },
  }

  return { indice, proximo, anterior, irPara: setIndice, gestos }
}
