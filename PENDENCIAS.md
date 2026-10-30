# Pendências — o que é provisório

## Contatos e dados da marca
- [ ] Confirmar que (19) 99146-2591 é o WhatsApp e telefone definitivos (já em `js/config.js`)
- [x] Registro CAU real (`CAU A266794-0`)

## Conteúdo
- [ ] Foto da Lívia: hoje é a enviada em 28/10; trocar se houver foto em melhor resolução (`assets/img/livia.jpg`)
- [ ] Projetos em `data/projetos.js`: categorias e títulos vêm das pastas do Drive (Residencial, Comercial, Interiores, Reformas, Regularização, Desmembramento) e os textos são descrições simples; preencher local, ano e área (hoje vazios) e confirmar se os nomes de clientes (Grupo Boticário, D3 Motors, Instituto Médico Casagrande, Amarílis, Bistrô da IDI, Tulipa's Lounge, Padaria Eskina, Stevanatto, Alcir, Grupo Viva etc.) podem aparecer
- [ ] Reformas: confirmar o que significam "S.E." e "K.E." nos títulos (vêm dos nomes das pastas) e se o "depois" é render ou obra pronta
- [ ] Fotos de obra pronta para o slider "render x obra" (campo `comparar`; hoje só as 3 reformas usam antes x depois)
- [ ] Portfólio: cards usam a foto 1 de cada projeto; ajustar `foco` em `data/projetos.js` se o corte ficar ruim
- [ ] Equipe: nomes e funções (hoje só texto genérico e a foto); confirmar o texto da seção
- [ ] Revisar todos os textos do site (escritos a partir do PDF de apresentação)
- [ ] Revisar o FAQ (respostas genéricas, sem preços nem prazos; atualizar também o JSON-LD `FAQPage`)
- [ ] Descrições dos 8 serviços e dos 4 diferenciais de Gerenciamento de Obras
- [ ] Imagem de cada serviço (aba da seção Serviços): hoje reaproveita fotos do portfólio; trocar se quiser imagens específicas por serviço
- [ ] Texto da Política de Privacidade (provisório): prazo de retenção, razão social/CNPJ se houver

## Publicação
- [ ] Domínio próprio: trocar `liviaconde.vercel.app` em `index.html`, `robots.txt`, `sitemap.xml`
- [ ] Imagem de compartilhamento (Open Graph): hoje usa `casa-campo-1.jpg`; ideal 1200×630
- [ ] Clicar no link de ativação do FormSubmit que chega em liviacondearq@gmail.com (1ª vez) e conferir um briefing de teste
- [ ] Backend próprio (fase futura): permitir anexo no formulário e guardar briefings
- [ ] Rodar Lighthouse no site publicado (meta mobile ≥ 90)
- [ ] Analítica: desligada; ativar só com aviso de cookies

## Marca
- [ ] Confirmar licença comercial da fonte Abramo (não usada no site; hoje: Bodoni Moda, Barlow Condensed, Barlow e Allura do Google Fonts)
- [ ] Gamilia e Ubin Sans não podem ser usadas (licença demo, sem acentos)
