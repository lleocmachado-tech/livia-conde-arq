# Pendências — o que é provisório

## Contatos e dados da marca
- [ ] WhatsApp, telefone e e-mail reais em `js/config.js` (hoje: números e e-mail fictícios)
- [ ] Usuário real do Instagram (hoje `liviaconde.arq`, fictício)
- [ ] Registro CAU real (hoje `CAU A000000-0`)

## Conteúdo
- [ ] Foto da Lívia (espaço reservado na seção Essência)
- [ ] Texto da biografia: marcador `BIO` em `index.html`
- [ ] Nomes, locais, anos, áreas e etapas dos projetos em `data/projetos.js` (hoje: nomes e textos provisórios; local "A definir")
- [ ] Fotos de obra pronta para o slider "render x obra" (campo `comparar`, hoje `null`)
- [ ] Portfólio: cards usam a foto 1 de cada projeto; ajustar `foco` em `data/projetos.js` se o corte ficar ruim
- [ ] Revisar todos os textos do site (escritos a partir do PDF de apresentação)
- [ ] Revisar o FAQ (respostas genéricas, sem preços nem prazos; atualizar também o JSON-LD `FAQPage`)
- [ ] Descrições dos 7 serviços e dos 4 diferenciais de Gerenciamento de Obras
- [ ] Imagem de cada serviço (aba da seção Serviços): hoje reaproveita renders do portfólio; trocar por fotos que combinem com cada serviço
- [ ] Texto da Política de Privacidade (provisório): prazo de retenção, razão social/CNPJ se houver

## Publicação
- [ ] Domínio próprio: trocar `liviaconde.vercel.app` em `index.html`, `robots.txt`, `sitemap.xml`
- [ ] Imagem de compartilhamento (Open Graph): hoje usa `entardecer-fachada.jpg`; ideal 1200×630
- [ ] Criar a chave do Web3Forms e colocar em `formKey` (`js/config.js`); testar um envio real após o deploy
- [ ] Backend próprio (fase futura): permitir anexo no formulário e guardar briefings
- [ ] Rodar Lighthouse no site publicado (meta mobile ≥ 90)
- [ ] Analítica: desligada; ativar só com aviso de cookies

## Marca
- [ ] Confirmar licença comercial da fonte Abramo (não usada no site; hoje: Bodoni Moda, Barlow Condensed, Barlow e Allura do Google Fonts)
- [ ] Gamilia e Ubin Sans não podem ser usadas (licença demo, sem acentos)
