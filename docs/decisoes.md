# Decisões de projeto

Registro das decisões técnicas e visuais, com justificativa. Útil para a documentação acadêmica.

| ID | Data | Decisão | Justificativa |
|----|------|---------|---------------|
| D-001 | 29/10/2026 | Catálogo digital, não e-commerce | Escopo do MVP; pedido concluído no WhatsApp (RN-004) |
| D-002 | 29/10/2026 | React + Vite, dados locais | Simples de hospedar e validar com a cliente; sem backend no MVP (RNF-006) |
| D-003 | 29/10/2026 | React Router com rotas `/catalogo/:categoria/:ocasiao` | Cada tela tem endereço próprio e pode ser compartilhada por link |
| D-004 | 29/10/2026 | Cores e fontes em variáveis CSS (`tokens.css`) | Ajustar a identidade em um único lugar (RNF-005) |
| D-005 | 29/10/2026 | Catálogo v2 com três faixas de tom (azul profundo / base / profundo) | Protótipo v1 causou fadiga visual por falta de separação tonal (RNF-004) |
| D-006 | 29/10/2026 | Texto separado da foto no celular | Fotografia como protagonista (RNF-002) |
| D-007 | 29/10/2026 | Botão "Pedir pelo WhatsApp" adicionado à galeria | Atende RF-008; não existia nos protótipos v1, a validar com a cliente |
| D-008 | 29/10/2026 | Fotos provisórias recortadas dos protótipos | Permitir demonstração antes das fotos reais; substituir em `public/images/` |
