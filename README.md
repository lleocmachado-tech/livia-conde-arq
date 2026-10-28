# Site Lívia Conde Arquitetura

Site estático (HTML + CSS + JavaScript puro). Abre com duplo clique em `index.html`. Hospedagem: Vercel. Formulário: FormSubmit.

## Estrutura

```
index.html · privacidade.html
css/style.css        → cores, fontes e layout (tokens no topo, em :root)
js/config.js         → CONTATOS (edite aqui)
js/main.js           → comportamento do site
data/projetos.js     → PORTFÓLIO (edite aqui)
assets/logo/         → logos e monogramas
assets/img/projetos/ → fotos dos projetos
```

## Como trocar os contatos
1. No GitHub (site ou GitHub Desktop), abra `js/config.js`.
2. Troque os valores entre aspas: `whatsapp` (só números, com 55 + DDD), `telefoneExibicao`, `telefoneLink`, `email`, `instagram` (sem @), `cau`.
3. Salve (*Commit changes*). Todos os botões, cards e o rodapé usam esses dados automaticamente.

## Como adicionar um projeto
1. **Fotos:** otimize antes no [Squoosh](https://squoosh.app) (JPG, ~2000 px de largura no máximo, qualidade ~75). Gere também uma versão menor (~900 px) para a capa e nomeie com `-thumb` (ex.: `casa-nova-thumb.jpg`).
2. No GitHub, abra `assets/img/projetos/` → **Add file → Upload files** e envie as imagens.
3. Abra `data/projetos.js`, copie um bloco `{ ... }` inteiro, cole no final da lista (antes do `];`) e troque os textos e caminhos das imagens. Cuidado com as vírgulas entre os blocos.
4. Salve. A categoria nova ganha filtro sozinha. Use `destaque: true` para um card maior.

## Slider "render x obra pronta"
No bloco do projeto, troque `comparar: null` por:

```js
comparar: {
  antes: "assets/img/projetos/casa-render.jpg",
  depois: "assets/img/projetos/casa-obra.jpg",
  rotuloAntes: "Render",
  rotuloDepois: "Obra pronta"
},
```
Use duas fotos com o mesmo enquadramento para o efeito ficar melhor.

## Como trocar textos
Os textos estão em `index.html` (procure por um trecho do texto com Ctrl+F). Os 8 serviços ficam na seção `id="servicos"` (cada aba tem um botão `svc-tab` e um painel `svc-pane`; o nome precisa ser igual nos dois e na lista do formulário), as perguntas frequentes em `id="duvidas"`.
- Se mudar uma pergunta do FAQ, atualize também o bloco `FAQPage` (JSON-LD) no topo do `index.html`.
- Se mudar o nome de um serviço, mude também na lista de serviços do formulário (etapa 1), pois o nome precisa ser igual.
- **Biografia e foto da Lívia:** procure `about-text` em `index.html` para editar o texto. Para trocar a foto, substitua o arquivo `assets/img/livia.jpg` (mesmo nome).

## Publicar na Vercel
1. Suba as alterações pelo GitHub Desktop (*Commit* e *Push*).
2. Na Vercel: *Add New → Project*, escolha o repositório `livia-conde-arq`, deixe *Framework Preset* em **Other** e *Build Command* / *Output Directory* vazios. Clique em *Deploy*. Cada novo push publica sozinho.
3. **Formulário de briefing:** os briefings chegam por e-mail no endereço de `formEmail` (`js/config.js`), via FormSubmit, sem cadastro. Na primeira vez, o FormSubmit envia um e-mail de ativação para esse endereço: abra e clique no link. O plano grátis não aceita anexos; o formulário pede que a pessoa mande planta/fotos pelo WhatsApp.
4. Com o domínio definido, troque `liviaconde.vercel.app` em `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` e `sitemap.xml`.

## Analítica
Nenhuma ferramenta de rastreamento está ativa (LGPD). Se for usar, adicione antes um aviso de cookies.
