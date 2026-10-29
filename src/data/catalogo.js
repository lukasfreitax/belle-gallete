// Dados locais do MVP (RNF-006). Estrutura: categoria > ocasião > modelo (RN-001, RN-002).
// As fotos em public/images são PROVISÓRIAS (recortes dos protótipos).
// Para trocar: coloque a foto real em public/images/ e altere o nome abaixo.

const foto = (nome) => `${import.meta.env.BASE_URL}images/${nome}`

export const categorias = [
  {
    id: 'macarons',
    nome: 'Macarons',
    icone: 'macaron',
    subtitulo: 'Mais que um doce, uma experiência.',
    ocasioes: [
      {
        id: 'torre-de-macarons',
        selo: 'Para momentos especiais',
        titulo: 'Torre de Macarons',
        descricao:
          'Uma torre de macarons compõe a mesa de doces de forma clássica e encanta pela sua delicadeza, pelas cores vibrantes e pelo charme que traz a qualquer celebração.',
        foto: foto('torre.jpg'),
        modelos: [
          {
            titulo: 'Torre de Macarons',
            descricao: 'Macarons coloridos em torre, decorados com flores naturais.',
            foto: foto('torre.jpg'),
          },
          {
            titulo: 'Torre clássica',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('hero.jpg'),
          },
          {
            titulo: 'Torre com flores',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('torre.jpg'),
          },
        ],
      },
      {
        id: 'caixas-sortidas',
        selo: 'Para presentear',
        titulo: 'Caixas Sortidas',
        descricao:
          'Macarons de sabores variados organizados em caixas elegantes, perfeitos para presentear quem você ama ou adoçar o seu dia.',
        foto: foto('caixa.jpg'),
        modelos: [
          {
            titulo: 'Uma explosão de cores e sabores',
            descricao:
              'Nossos macarons são preparados de forma artesanal, com ingredientes selecionados e todo o cuidado que cada detalhe merece. Perfeitos para celebrar momentos especiais ou simplesmente para adoçar o seu dia.',
            foto: foto('caixa.jpg'),
          },
          {
            titulo: 'Caixa sortida',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('torre.jpg'),
          },
          {
            titulo: 'Caixa para presente',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('hero.jpg'),
          },
          {
            titulo: 'Caixa de lembrança',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('caixa.jpg'),
          },
          {
            titulo: 'Caixa especial',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('torre.jpg'),
          },
        ],
      },
      {
        id: 'casamentos',
        selo: 'Para o grande dia',
        titulo: 'Casamentos',
        descricao: 'Conteúdo provisório: macarons para casamentos, a definir com a cliente.',
        foto: foto('hero.jpg'),
        modelos: [
          {
            titulo: 'Casamentos',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('hero.jpg'),
          },
        ],
      },
      {
        id: 'aniversarios',
        selo: 'Para celebrar',
        titulo: 'Aniversários',
        descricao: 'Conteúdo provisório: macarons para aniversários, a definir com a cliente.',
        foto: foto('caixa.jpg'),
        modelos: [
          {
            titulo: 'Aniversários',
            descricao: 'Conteúdo provisório: descrição do modelo.',
            foto: foto('caixa.jpg'),
          },
        ],
      },
    ],
  },
  { id: 'doces-finos', nome: 'Doces Finos', icone: 'cupcake', subtitulo: 'Delicadeza em cada detalhe.', ocasioes: [] },
  { id: 'bolos', nome: 'Bolos', icone: 'bolo', subtitulo: 'Para tornar o momento inesquecível.', ocasioes: [] },
  { id: 'kits-presentes', nome: 'Kits & Presentes', icone: 'presente', subtitulo: 'Um carinho para presentear.', ocasioes: [] },
]

export const buscarCategoria = (id) => categorias.find((c) => c.id === id)
export const buscarOcasiao = (categoria, id) => categoria?.ocasioes.find((o) => o.id === id)
