/* =========================================================
   PORTFÓLIO — cada bloco { ... } é um projeto.
   Para adicionar um projeto: copie um bloco inteiro, cole no
   final da lista (antes do "];"), troque os textos e coloque
   as fotos na pasta assets/img/projetos/.

   Campos:
   id         → nome curto sem espaços/acentos (único)
   titulo     → nome exibido
   categoria  → "Residencial", "Comercial" ou "Interiores"
                (os filtros são criados automaticamente)
   local, ano, area, etapa → ficha técnica (pode deixar "")
   resumo     → texto curto do conceito do projeto
   capa       → imagem do card (de preferência a versão -thumb)
   fotos      → lista de imagens da galeria (a 1ª abre primeiro)
   comparar   → slider "render x obra pronta" (opcional):
                { antes: "caminho-render.jpg", depois: "caminho-obra.jpg",
                  rotuloAntes: "Render", rotuloDepois: "Obra pronta" }
                Se não houver, deixe: comparar: null
   destaque   → true = card em largura total no portfólio
   foco       → (opcional) parte da foto que aparece no card, ex.: "50% 30%"
                (horizontal vertical). Útil para fotos em pé.

   Fotos vindas da pasta "Site e Portfólio LC" (Drive). Local, ano e área
     ficam vazios por enquanto: preencha quando quiser que apareçam.
   ========================================================= */
window.PROJETOS = [
  {
    id: "residencia-flor-daldeia",
    titulo: "Residência Flor D'Aldeia",
    categoria: "Residencial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Volumes em desnível, madeira e pedra compõem uma fachada contemporânea e acolhedora, vista ao entardecer.",
    capa: "assets/img/projetos/flor-daldeia-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/flor-daldeia-1.jpg",
      "assets/img/projetos/flor-daldeia-2.jpg",
      "assets/img/projetos/flor-daldeia-3.jpg"
    ],
    comparar: null,
    destaque: true
  },
  {
    id: "casa-de-campo",
    titulo: "Casa de Campo",
    categoria: "Residencial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Tijolo aparente, telhado cerâmico e deck de madeira junto a um lago ornamental: uma casa para desacelerar.",
    capa: "assets/img/projetos/casa-campo-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/casa-campo-1.jpg",
      "assets/img/projetos/casa-campo-2.jpg"
    ],
    foco: "50% 40%",
    comparar: null,
    destaque: false
  },
  {
    id: "chacara-cs",
    titulo: "Chácara CS",
    categoria: "Residencial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Pedra, madeira e grandes panos de vidro abrem a chácara para o jardim. À noite, a iluminação cênica ganha destaque.",
    capa: "assets/img/projetos/chacara-cs-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/chacara-cs-1.jpg",
      "assets/img/projetos/chacara-cs-2.jpg",
      "assets/img/projetos/chacara-cs-3.jpg",
      "assets/img/projetos/chacara-cs-4.jpg"
    ],
    foco: "50% 45%",
    comparar: null,
    destaque: false
  },
  {
    id: "residencia-lago-azul",
    titulo: "Residência do Lago Azul",
    categoria: "Residencial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Volumes brancos e pedra, varanda ampla com deck e paisagismo tropical em volta.",
    capa: "assets/img/projetos/lago-azul-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/lago-azul-1.jpg",
      "assets/img/projetos/lago-azul-2.jpg"
    ],
    comparar: null,
    destaque: true
  },
  {
    id: "residencia-explorar",
    titulo: "Residência Explorar",
    categoria: "Residencial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Vidro, pedra e pé-direito generoso integram a casa ao quintal, com rede para o fim de tarde.",
    capa: "assets/img/projetos/explorar-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/explorar-1.jpg",
      "assets/img/projetos/explorar-2.jpg",
      "assets/img/projetos/explorar-3.jpg"
    ],
    foco: "50% 65%",
    comparar: null,
    destaque: false
  },
  {
    id: "residencia-refugio",
    titulo: "Residência Refúgio",
    categoria: "Residencial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Telhado cerâmico, pedra e portas de madeira trabalhada: uma casa com alma afetiva e muitos detalhes.",
    capa: "assets/img/projetos/refugio-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/refugio-1.jpg",
      "assets/img/projetos/refugio-2.jpg",
      "assets/img/projetos/refugio-3.jpg"
    ],
    foco: "50% 40%",
    comparar: null,
    destaque: false
  },
  {
    id: "restaurantes",
    titulo: "Restaurantes",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Restaurantes, bistrôs e padarias, cada um com identidade própria na fachada e no salão.",
    capa: "assets/img/projetos/restaurantes-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/restaurantes-1.jpg",
      "assets/img/projetos/restaurantes-2.jpg",
      "assets/img/projetos/restaurantes-3.jpg",
      "assets/img/projetos/restaurantes-4.jpg",
      "assets/img/projetos/restaurantes-5.jpg"
    ],
    comparar: null,
    destaque: true
  },
  {
    id: "residencia-formas",
    titulo: "Residência Formas",
    categoria: "Residencial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Linhas retas, platibandas e palmeiras para uma fachada moderna e limpa.",
    capa: "assets/img/projetos/formas-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/formas-1.jpg",
      "assets/img/projetos/formas-2.jpg",
      "assets/img/projetos/formas-3.jpg"
    ],
    comparar: null,
    destaque: false
  },
  {
    id: "escritorio-grupo-boticario",
    titulo: "Escritório Grupo Boticário",
    categoria: "Interiores",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Escritório de revenda com sala de treinamento e cores vivas, pensado para acolher a equipe.",
    capa: "assets/img/projetos/boticario-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/boticario-1.jpg",
      "assets/img/projetos/boticario-2.jpg",
      "assets/img/projetos/boticario-3.jpg"
    ],
    foco: "50% 40%",
    comparar: null,
    destaque: false
  },
  {
    id: "d3-motors",
    titulo: "D3 Motors",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Espaços comerciais com iluminação marcante e identidade forte.",
    capa: "assets/img/projetos/d3-motors-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/d3-motors-1.jpg",
      "assets/img/projetos/d3-motors-2.jpg"
    ],
    comparar: null,
    destaque: false
  },
  {
    id: "instituto-medico-casagrande",
    titulo: "Instituto Médico Casagrande",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Recepção em tons neutros, madeira e vegetação, para um atendimento acolhedor.",
    capa: "assets/img/projetos/imc-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/imc-1.jpg"
    ],
    comparar: null,
    destaque: false
  }
];
