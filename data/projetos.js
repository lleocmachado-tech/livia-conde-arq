/* =========================================================
   PORTFÓLIO — cada bloco { ... } é um projeto.
   Para adicionar um projeto: copie um bloco inteiro, cole no
   final da lista (antes do "];"), troque os textos e coloque
   as fotos na pasta assets/img/projetos/.

   Campos:
   id         → nome curto sem espaços/acentos (único)
   titulo     → nome exibido
   categoria  → "Residencial", "Comercial", "Interiores", "Reformas",
                "Regularização" ou "Desmembramento"
                (os filtros são criados automaticamente)
   local, ano, area, etapa → ficha técnica (pode deixar "")
   resumo     → texto curto do conceito do projeto
   capa       → imagem do card (de preferência a versão -thumb)
   fotos      → lista de imagens da galeria (a 1ª abre primeiro)
   comparar   → slider antes x depois (opcional):
                { antes: "caminho-antes.jpg", depois: "caminho-depois.jpg",
                  titulo: "Antes × depois", rotuloAntes: "Antes", rotuloDepois: "Depois" }
                Se não houver, deixe: comparar: null
   destaque   → true = card em largura total no portfólio
   foco       → (opcional) parte da foto que aparece no card, ex.: "50% 30%"
                (horizontal vertical). Útil para fotos em pé.

   Fotos vindas da pasta "Site e Portifólio LC" (Drive): cada subpasta é uma
     categoria e cada pasta dentro dela é um projeto. Local, ano e área
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
    destaque: true
  },
  {
    id: "amarilis-resto-bar",
    titulo: "Amarílis Resto Bar",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Fachada vazada com letreiro marcante e varanda de vidro, pensada para chamar atenção e receber bem.",
    capa: "assets/img/projetos/amarilis-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/amarilis-1.jpg"
    ],
    foco: "50% 40%",
    comparar: null,
    destaque: true
  },
  {
    id: "bistro-da-idi",
    titulo: "Bistrô da IDI",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Fachada em tons escuros com iluminação quente e toldo, que deixa o bistrô aconchegante à noite.",
    capa: "assets/img/projetos/bistro-idi-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/bistro-idi-1.jpg"
    ],
    comparar: null,
    destaque: false
  },
  {
    id: "tulipas-lounge",
    titulo: "Tulipa's Lounge",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Pérgola, deck e vista aberta: um lounge que convida a ficar até o fim do dia.",
    capa: "assets/img/projetos/tulipas-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/tulipas-1.jpg"
    ],
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
    resumo: "Showroom com teto em espiral iluminado, mármore escuro e muita personalidade para os carros.",
    capa: "assets/img/projetos/d3-motors-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/d3-motors-1.jpg",
      "assets/img/projetos/d3-motors-2.jpg",
      "assets/img/projetos/d3-motors-3.jpg"
    ],
    comparar: null,
    destaque: true
  },
  {
    id: "grupo-boticario",
    titulo: "Escritório Grupo Boticário",
    categoria: "Comercial",
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
  },
  {
    id: "academia-condominio",
    titulo: "Academia para Condomínio",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Tijolo aparente, madeira e vidro, com a academia aberta para o jardim do condomínio.",
    capa: "assets/img/projetos/academia-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/academia-1.jpg"
    ],
    comparar: null,
    destaque: true
  },
  {
    id: "stevanatto-store",
    titulo: "Stevanatto Store",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Loja com nichos em pedra e madeira, escada escultural e iluminação de destaque.",
    capa: "assets/img/projetos/stevanatto-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/stevanatto-1.jpg"
    ],
    foco: "50% 50%",
    comparar: null,
    destaque: false
  },
  {
    id: "padaria-eskina",
    titulo: "Padaria Eskina",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Salão acolhedor com madeira, pedra e pé-direito generoso, para um café sem pressa.",
    capa: "assets/img/projetos/padaria-eskina-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/padaria-eskina-1.jpg"
    ],
    comparar: null,
    destaque: false
  },
  {
    id: "residencial-nova-holanda",
    titulo: "Residencial Nova Holanda",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Portaria em tijolo aparente com arcos e telhado cerâmico, vista à noite.",
    capa: "assets/img/projetos/nova-holanda-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/nova-holanda-1.jpg"
    ],
    comparar: null,
    destaque: false
  },
  {
    id: "alcir",
    titulo: "Alcir",
    categoria: "Comercial",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Balcão em madeira trabalhada, tijolo aparente e pendentes criam um ambiente rústico e acolhedor.",
    capa: "assets/img/projetos/alcir-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/alcir-1.jpg"
    ],
    comparar: null,
    destaque: false
  },
  {
    id: "interiores-cidade-jardim",
    titulo: "Cidade Jardim",
    categoria: "Interiores",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Cozinha integrada, suíte e banheiros em tons suaves, com madeira e detalhes dourados.",
    capa: "assets/img/projetos/cidade-jardim-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/cidade-jardim-1.jpg",
      "assets/img/projetos/cidade-jardim-2.jpg",
      "assets/img/projetos/cidade-jardim-3.jpg",
      "assets/img/projetos/cidade-jardim-4.jpg"
    ],
    foco: "50% 50%",
    comparar: null,
    destaque: true
  },
  {
    id: "interiores-residencia-do-lago",
    titulo: "Residência do Lago",
    categoria: "Interiores",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Varanda gourmet, sala com pedra natural e suíte aconchegante, em uma casa clara e luminosa.",
    capa: "assets/img/projetos/lago-int-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/lago-int-1.jpg",
      "assets/img/projetos/lago-int-2.jpg",
      "assets/img/projetos/lago-int-3.jpg",
      "assets/img/projetos/lago-int-4.jpg",
      "assets/img/projetos/lago-int-5.jpg",
      "assets/img/projetos/lago-int-6.jpg"
    ],
    comparar: null,
    destaque: false
  },
  {
    id: "interiores-residencia-tropical",
    titulo: "Residência Tropical",
    categoria: "Interiores",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Papel de parede com folhagens, madeira e tons terrosos trazem leveza e conforto aos ambientes.",
    capa: "assets/img/projetos/tropical-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/tropical-1.jpg",
      "assets/img/projetos/tropical-2.jpg",
      "assets/img/projetos/tropical-3.jpg",
      "assets/img/projetos/tropical-4.jpg",
      "assets/img/projetos/tropical-5.jpg"
    ],
    foco: "50% 40%",
    comparar: null,
    destaque: false
  },
  {
    id: "interiores-rio-barra-olimpica",
    titulo: "Rio Barra Olímpica",
    categoria: "Interiores",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Apartamento com marcenaria em madeira clara, iluminação em led embutido e cortinas leves.",
    capa: "assets/img/projetos/barra-olimpica-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/barra-olimpica-1.jpg",
      "assets/img/projetos/barra-olimpica-2.jpg",
      "assets/img/projetos/barra-olimpica-3.jpg",
      "assets/img/projetos/barra-olimpica-4.jpg",
      "assets/img/projetos/barra-olimpica-5.jpg",
      "assets/img/projetos/barra-olimpica-6.jpg"
    ],
    foco: "50% 45%",
    comparar: null,
    destaque: false
  },
  {
    id: "interiores-vila-guedes",
    titulo: "Vila Guedes",
    categoria: "Interiores",
    local: "",
    ano: "",
    area: "",
    etapa: "Projeto",
    resumo: "Cozinha gourmet clara e quartos infantis delicados, em tons de rosa e muita luz natural.",
    capa: "assets/img/projetos/vila-guedes-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/vila-guedes-1.jpg",
      "assets/img/projetos/vila-guedes-2.jpg",
      "assets/img/projetos/vila-guedes-3.jpg"
    ],
    foco: "50% 45%",
    comparar: null,
    destaque: false
  },
  {
    id: "reforma-grupo-viva",
    titulo: "Grupo Viva — Escritório",
    categoria: "Reformas",
    local: "",
    ano: "",
    area: "",
    etapa: "Reforma",
    resumo: "Fachada renovada, com letreiro iluminado e identidade colorida. Arraste para ver o antes e o depois.",
    capa: "assets/img/projetos/reforma-viva-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/reforma-viva-1.jpg",
      "assets/img/projetos/reforma-viva-2.jpg"
    ],
    comparar: {
      antes: "assets/img/projetos/reforma-viva-2.jpg",
      depois: "assets/img/projetos/reforma-viva-1.jpg",
      titulo: "Antes × depois",
      rotuloAntes: "Antes",
      rotuloDepois: "Depois"
    },
    destaque: true
  },
  {
    id: "reforma-comercio-se",
    titulo: "Comércio S.E.",
    categoria: "Reformas",
    local: "",
    ano: "",
    area: "",
    etapa: "Reforma",
    resumo: "De um imóvel simples a uma fachada nova, com linhas retas, madeira e pedra. Arraste para comparar.",
    capa: "assets/img/projetos/reforma-comercio-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/reforma-comercio-1.jpg",
      "assets/img/projetos/reforma-comercio-2.jpg"
    ],
    comparar: {
      antes: "assets/img/projetos/reforma-comercio-2.jpg",
      depois: "assets/img/projetos/reforma-comercio-1.jpg",
      titulo: "Antes × depois",
      rotuloAntes: "Antes",
      rotuloDepois: "Depois"
    },
    destaque: false
  },
  {
    id: "reforma-gourmet-ke",
    titulo: "Gourmet K.E.",
    categoria: "Reformas",
    local: "",
    ano: "",
    area: "",
    etapa: "Reforma",
    resumo: "Área gourmet reformada, com cobertura leve, piso novo e integração com a casa. Arraste para comparar.",
    capa: "assets/img/projetos/reforma-gourmet-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/reforma-gourmet-1.jpg",
      "assets/img/projetos/reforma-gourmet-2.jpg"
    ],
    comparar: {
      antes: "assets/img/projetos/reforma-gourmet-2.jpg",
      depois: "assets/img/projetos/reforma-gourmet-1.jpg",
      titulo: "Antes × depois",
      rotuloAntes: "Antes",
      rotuloDepois: "Depois"
    },
    destaque: false
  },
  {
    id: "regularizacao",
    titulo: "Regularização de Imóveis",
    categoria: "Regularização",
    local: "",
    ano: "",
    area: "",
    etapa: "",
    resumo: "A regularização de imóveis é o processo de adequar e legalizar a construção junto à Prefeitura. Se o seu imóvel ainda não possui projeto aprovado ou documentação regularizada, cuidamos de todo o trâmite necessário para buscar sua aprovação e regularização.",
    capa: "assets/img/projetos/regularizacao-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/regularizacao-1.jpg"
    ],
    foco: "50% 60%",
    comparar: null,
    destaque: true
  },
  {
    id: "desmembramento",
    titulo: "Desmembramento e Unificação de Lotes",
    categoria: "Desmembramento",
    local: "",
    ano: "",
    area: "",
    etapa: "",
    resumo: "O desmembramento consiste em dividir um terreno em dois ou mais lotes independentes, enquanto a unificação reúne dois ou mais lotes em uma única área. Ambos os processos exigem análise técnica e aprovação dos órgãos competentes, garantindo a regularidade do imóvel e sua adequação à legislação vigente.",
    capa: "assets/img/projetos/desmembramento-1-thumb.jpg",
    fotos: [
      "assets/img/projetos/desmembramento-1.jpg"
    ],
    foco: "50% 62%",
    comparar: null,
    destaque: true
  }
];
