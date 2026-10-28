# Relatório de testes

Testes feitos no navegador embutido do Claude (Chromium), servindo a pasta por `http://localhost` (a pré-visualização `file://` não executa scripts). Verificação de console sem erros em todas as passagens.

## Larguras
| Largura | Resultado |
|---|---|
| 375 px | Sem rolagem horizontal; menu em tela cheia abre/fecha; hero, portfólio (1 coluna), processo e etapa 1 do briefing conferidos em captura |
| 768 px | Sem rolagem horizontal; menu hambúrguer ativo |
| 1024 px | Sem rolagem horizontal; portfólio em 3 colunas; menu hambúrguer (nav completa só ≥ 1101 px) |
| 1440 px | Hero, essência, serviços, obras, portfólio e visualizador conferidos em captura |

## Funcionalidades verificadas
- **Config:** `mailto:`, `tel:`, Instagram e `wa.me` preenchidos a partir de `js/config.js`.
- **Serviços:** acordeão abre; botão WhatsApp gera mensagem citando o serviço; "Enviar briefing" pré-seleciona o serviço no formulário (testado com Gerenciamento de Obras).
- **Portfólio:** 6 cards e 3 filtros (Todos, Residencial, Interiores) gerados dos dados.
- **Visualizador:** abre pelo clique; link direto `#projeto/residencia-branca` abre ao carregar; setas ← → trocam a foto (contador 1/2 ↔ 2/2); Esc fecha, devolve o foco, restaura o título e limpa o hash. Slider render x obra: renderiza e atualiza a posição (testado com dados injetados, pois nenhum projeto tem `comparar` ainda).
- **Formulário:** validação por etapa (mensagem "Selecione o tipo de projeto." ao deixar em branco), avanço entre etapas, máscara do WhatsApp (`(19) 98765-4321`), aceite LGPD e nome obrigatórios, resumo montado para `wa.me` (conferido o texto), erro amigável quando o envio falha.
- **Intro:** aparece só na 1ª visita da sessão (sessionStorage), fecha sozinha em ~1,9 s e remove-se do DOM visível; não roda com `prefers-reduced-motion`.

## Não testado / limitações
- **Envio pelo Netlify Forms:** só funciona publicado. Localmente confirmado apenas o caminho de erro.
- **Anexo (8 MB, tipos):** lógica escrita, não exercitada com arquivo real.
- **Swipe no celular real:** implementado com pointer events; não testado em toque físico.
- **Animação da intro (traço do "L") e Ken Burns:** o painel de teste limita animações, então a fluidez não foi avaliada visualmente; verifique no navegador.
- **Navegação por teclado completa e leitor de tela:** apenas foco visível, ARIA nos acordeões/menu/visualizador e armadilha de foco no visualizador foram implementados; não houve auditoria com leitor de tela.
- **Lighthouse (meta ≥ 90):** não rodado; rode no site publicado.
- **Contraste:** botão terracota com texto branco (≈ 4,4:1) usa texto grande em negrito; demais textos pequenos usam terracota escuro.
- **Abertura com duplo clique (`file://`):** o código não usa `fetch` nem módulos, então deve funcionar; não validei no `file://` por limitação do painel.
