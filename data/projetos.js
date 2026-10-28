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

   ⚠ Nomes, locais e textos abaixo são PROVISÓRIOS
     (imagens retiradas do portfólio em PDF).
   ========================================================= */
window.PROJETOS = [
  {
    id: "residencia-entardecer",
    titulo: "Residência Entardecer",
    categoria: "Residencial",
    local: "A definir",
    ano: "2026",
    area: "",
    etapa: "Projeto",
    resumo: "Volumes puros, pedra natural e madeira compõem uma fachada contemporânea e acolhedora. Rasgos de luz linear desenham a arquitetura ao cair da tarde.",
    capa: "assets/img/projetos/entardecer-fachada-thumb.jpg",
    fotos: [
      "assets/img/projetos/entardecer-fachada.jpg",
      "assets/img/projetos/entardecer-entrada.jpg"
    ],
    comparar: null,
    destaque: true
  },
  {
    id: "residencia-pedra-arco",
    titulo: "Residência Pedra & Arco",
    categoria: "Residencial",
    local: "A definir",
    ano: "2026",
    area: "",
    etapa: "Projeto",
    resumo: "Telhado cerâmico, pedra e uma porta de madeira de demolição: uma casa de campo com alma afetiva e detalhes que contam história.",
    capa: "assets/img/projetos/pedra-arco-fachada-thumb.jpg",
    fotos: ["assets/img/projetos/pedra-arco-fachada.jpg"],
    comparar: null,
    destaque: false
  },
  {
    id: "living-tropical",
    titulo: "Living Tropical",
    categoria: "Interiores",
    local: "A definir",
    ano: "2026",
    area: "",
    etapa: "Projeto",
    resumo: "Pé-direito duplo, forro de madeira e papel de parede botânico criam um living sereno, banhado por luz natural filtrada.",
    capa: "assets/img/projetos/living-tropical-thumb.jpg",
    fotos: ["assets/img/projetos/living-tropical.jpg"],
    foco: "50% 35%",
    comparar: null,
    destaque: false
  },
  {
    id: "residencia-noturna",
    titulo: "Residência Varanda de Pedra",
    categoria: "Residencial",
    local: "A definir",
    ano: "2026",
    area: "",
    etapa: "Projeto",
    resumo: "Grandes panos de vidro integram a área social à varanda. À noite, a pedra rústica e a iluminação cênica transformam a casa em abrigo.",
    capa: "assets/img/projetos/noturna-fachada-thumb.jpg",
    fotos: ["assets/img/projetos/noturna-fachada.jpg"],
    foco: "50% 45%",
    comparar: null,
    destaque: false
  },
  {
    id: "residencia-contemporanea",
    titulo: "Residência Contemporânea",
    categoria: "Residencial",
    local: "A definir",
    ano: "2026",
    area: "",
    etapa: "Projeto",
    resumo: "Lote de esquina resolvido com volumes escuros, ripado de madeira e pedra vulcânica, equilibrando privacidade e presença.",
    capa: "assets/img/projetos/contemporanea-fachada-thumb.jpg",
    fotos: ["assets/img/projetos/contemporanea-fachada.jpg"],
    comparar: null,
    destaque: true
  },
  {
    id: "residencia-branca",
    titulo: "Residência Linhas Brancas",
    categoria: "Residencial",
    local: "A definir",
    ano: "2026",
    area: "",
    etapa: "Projeto",
    resumo: "Platibandas brancas em balanço e filetes de luz criam uma fachada leve, com pedra e ripado trazendo textura ao conjunto.",
    capa: "assets/img/projetos/branca-fachada-thumb.jpg",
    fotos: [
      "assets/img/projetos/branca-fachada.jpg",
      "assets/img/projetos/branca-vista.jpg"
    ],
    comparar: null,
    destaque: false
  }
];
