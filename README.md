# Belle Galette Pâtisserie

Catálogo digital interativo para a **Belle Galette Pâtisserie**, confeitaria artesanal especializada em macarons franceses.

> **Status:** em definição. Requisitos em rascunho, aguardando validação da cliente.
> **Última atualização:** 29/10/2026

---

## 1. Visão do projeto

### 1.1 O que é

Um **catálogo digital** para apresentar os produtos da Belle Galette de forma elegante, organizados por categoria e por ocasião, com a fotografia como protagonista.

### 1.2 O que NÃO é

Este projeto **não é uma loja virtual** (e-commerce). O site não processa pagamentos, não gerencia estoque e não finaliza compras. O objetivo é apresentar os produtos e levar o cliente interessado a **conversar com a confeiteira pelo WhatsApp**.

### 1.3 Objetivos

| # | Objetivo |
|---|----------|
| O1 | Apresentar os produtos de forma visual e sofisticada, alinhada à identidade da marca |
| O2 | Facilitar a exploração por categoria e por ocasião de uso |
| O3 | Converter o interesse do cliente em pedido via WhatsApp |
| O4 | Servir como projeto real de aprendizado e estudo de caso acadêmico (ver seção 9) |

### 1.4 Público-alvo

- Clientes que desejam macarons e doces para celebrações (casamentos, aniversários, presentes).
- Acesso predominantemente por **celular** (a confirmar com a cliente).

---

## 2. Requisitos funcionais

Legenda de status: `Proposto` (veio da conversa de planejamento) · `Validado` (aprovado pela cliente) · `Implementado` · `Alterado`.

| ID | Requisito | Prioridade | Status |
|----|-----------|------------|--------|
| RF-001 | O sistema deve apresentar os produtos organizados por **ocasião de uso**. | Alta | Proposto |
| RF-002 | O sistema deve organizar o catálogo em **categorias**: Macarons, Doces Finos, Bolos e Kits & Presentes. | Alta | Proposto |
| RF-003 | O sistema deve possuir uma **página inicial** com identidade da marca e chamada para o catálogo ("Conheça nosso catálogo"). | Alta | Proposto |
| RF-004 | O sistema deve possuir **navegação** com as seções: Sobre a Belle, Catálogo e Pedidos. | Alta | Proposto |
| RF-005 | O usuário deve poder **navegar entre os modelos de uma ocasião** por meio de um carrossel com setas, indicadores de posição e deslize no celular. | Alta | Proposto |
| RF-006 | Cada modelo deve exibir **foto, título e descrição curta**. | Alta | Proposto |
| RF-007 | O usuário deve poder **voltar à categoria** a partir da galeria de uma ocasião. | Média | Proposto |
| RF-008 | O usuário deve poder **demonstrar interesse/fazer pedido via WhatsApp**, com mensagem pré-preenchida identificando o produto de interesse. | Alta | Proposto |
| RF-009 | O sistema deve ter uma página **Sobre a Belle** apresentando a marca. | Média | Proposto |

> Os itens abaixo aparecem nos protótipos, mas **ainda não foram discutidos como requisito** e precisam de confirmação: ícones de busca e sacola no cabeçalho, botão "Conhecer esta ocasião" e comportamento de "role para ver outras ocasiões".

---

## 3. Requisitos não funcionais

| ID | Requisito | Status |
|----|-----------|--------|
| RNF-001 | **Responsividade:** o site deve funcionar bem em celular e computador, com abordagem *mobile-first*. | Proposto |
| RNF-002 | **Fotografia como protagonista:** em telas pequenas, o texto fica separado da foto, com descrição curta para não competir com a imagem. | Proposto |
| RNF-003 | **Legibilidade:** texto com contraste mínimo de 4,5:1 (WCAG AA), corpo com peso regular e tamanho mínimo de 16px no celular. | Proposto |
| RNF-004 | **Separação visual de conteúdo:** as áreas da página devem ser distinguidas por variação de tom, evitando telas inteiras em um único azul. | Proposto |
| RNF-005 | **Manutenibilidade visual:** cores, fontes e espaçamentos centralizados em variáveis (*design tokens*), permitindo ajustes sem mexer nos componentes. | Proposto |
| RNF-006 | **Dados locais no MVP:** produtos e ocasiões definidos em arquivos do projeto, sem backend nem banco de dados nesta fase. | Proposto |
| RNF-007 | **Implantação simples:** publicação em hospedagem estática, com link compartilhável para validação com a cliente. | Proposto |

---

## 4. Regras de negócio

| ID | Regra |
|----|-------|
| RN-001 | Cada **categoria** pode conter várias **ocasiões**. |
| RN-002 | Cada **ocasião** pode possuir vários **modelos**. |
| RN-003 | O site **não exibe preços nem finaliza vendas** nesta fase (a confirmar com a cliente). |
| RN-004 | Todo pedido é concluído por **conversa direta no WhatsApp**. |

Estrutura conceitual do catálogo:

```
Catálogo
 └── Categoria (ex.: Macarons)
      └── Ocasião (ex.: Casamentos)
           └── Modelo (ex.: Torre de Macarons)
                └── foto + título + descrição
```

---

## 5. Fora do escopo (MVP)

- Pagamento online
- Carrinho de compras com checkout
- Controle de estoque
- Login de clientes
- Painel administrativo
- Backend e banco de dados

Esses itens podem ser reavaliados em fases futuras.

---

## 6. Identidade visual

Referência estética em protótipos (aguardando aprovação da cliente).
- **Cores:** azul acinzentado como base, creme para textos e respiros, rosa framboesa como acento pontual.
- **Tipografia:** serifada elegante nos títulos; sem serifa leve no corpo.
- **Estilo:** fotografia ocupando a maior área, fundo desfocado com a própria imagem, elementos de vidro (*glass*) com moderação, folhas decorativas apenas como detalhe.
- **Logo:** selo circular com a Torre Eiffel.

Paleta proposta (valores aproximados, a ajustar com a identidade oficial):

| Papel | Valor |
|-------|-------|
| Azul profundo (cabeçalho, rodapé) | `#1F3040` |
| Azul base (fundo) | `#4A6580` |
| Azul superfície (cards) | `#5F7B96` |
| Creme (texto e respiros) | `#F4EEE4` |
| Rosa acento | `#C2386B` |

---

## 7. Arquitetura e tecnologia

| Item | Escolha | Motivo |
|------|---------|--------|
| Biblioteca de interface | React | Componentes reutilizáveis |
| Ferramenta de build | Vite | Desenvolvimento rápido |
| Rotas | React Router (a instalar quando houver várias páginas) | Navegação entre Home, Catálogo e Pedidos |
| Dados | Arquivos locais em `src/data/` | MVP sem backend |
| Integração | Link `wa.me` com mensagem pronta | Pedido via WhatsApp sem servidor |

Estrutura prevista:

```
belle-gallete/
├── docs/
│   ├── design/          protótipos e referências visuais
│   ├── requisitos.md    (a criar, se este README ficar extenso)
│   ├── decisoes.md      decisões de projeto e justificativas
│   └── validacoes.md    registro de aprovações e pedidos da cliente
├── public/
├── src/
│   ├── assets/          imagens e logo
│   ├── components/      peças reutilizáveis da interface
│   ├── pages/           telas (Home, Catálogo, Pedidos)
│   ├── data/            produtos, categorias e ocasiões
│   ├── services/        integrações (WhatsApp, futura API)
│   ├── styles/          tokens e estilos globais
│   └── App.jsx
├── package.json
└── README.md
```

---

## 8. Fluxo de trabalho (Git)

- `main` protegida: nada é enviado direto, exceto o commit inicial.
- **Uma branch por recurso**, com nome `feature/nome-do-recurso`.
- Alterações entram na `main` por **Pull Request**, após revisão e testes.
- Commits seguem o padrão `tipo: descrição` (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`).

### Roadmap do MVP

| Ordem | Branch | Entrega |
|-------|--------|---------|
| 1 | `feature/base-projeto` | Projeto React/Vite, pastas, tokens de cor, README |
| 2 | `feature/home` | Página inicial e navegação |
| 3 | `feature/catalogo-macarons` | Categorias e ocasiões com dados locais |
| 4 | `feature/carrossel-ocasioes` | Carrossel com setas, indicadores e "Voltar à categoria" |
| 5 | `feature/pedidos-whatsapp` | Botão de pedido com mensagem pré-preenchida |

---

## 9. Documentação acadêmica

O projeto é também um **estudo de caso** (projeto de inovação / possível artigo ou TCC). Para isso, o desenvolvimento registra:

1. A necessidade real da cliente.
2. Os requisitos levantados e suas alterações.
3. Os protótipos e as validações feitas.
4. As decisões de arquitetura e suas justificativas.
5. Os testes e resultados.

Cadeia de rastreabilidade adotada:

```
Necessidade → Requisito → Protótipo → Validação → Arquitetura → Implementação → Teste → Resultado
```

---

## 10. Registro de validações com a cliente

| Data | Item apresentado | Resultado | Alterações pedidas |
|------|------------------|-----------|--------------------|
| — | Protótipos v1 (home, catálogo, galeria) | Aguardando | — |

---

## 11. Pendências para levantar com a cliente

- [ ] Quais são as **ocasiões** que ela quer destacar?
- [ ] Os produtos terão **preço visível** ou só sob consulta?
- [ ] Qual o número de **WhatsApp** e o texto padrão da mensagem?
- [ ] Todas as categorias (Doces Finos, Bolos, Kits) entram no MVP ou só Macarons?
- [ ] Ela já tem **fotos profissionais** de cada produto?
- [ ] Existe **manual de marca** (cores, fontes oficiais)?
- [ ] Terá **redes sociais** vinculadas ao site (Instagram)?
- [ ] Nome oficial: **Belle Galette** ou **Belle Gallette**? (o logo usa "Galette")

---

## 12. Como executar

*(será preenchido após a branch `feature/base-projeto`)*

```bash
npm install
npm run dev
```

---

## Autor

Lucas Freitas, desenvolvimento e documentação.
