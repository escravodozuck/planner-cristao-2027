/* =====================================================================
   CONFIGURAÇÕES DO SITE: edite só este arquivo
   Vale para index.html, obrigado.html e termos.html.
   Campo vazio ("") = a informação não aparece no site até você preencher.
   ===================================================================== */

// Nome do produto (igual ao do checkout)
var NOME_PRODUTO = "Planner Cristão 2027";

// Preço de venda, no formato brasileiro (ex.: "47,90")
var PRECO = "47,90";

// Link do checkout. TODOS os botões "Quero..." abrem este link (a Utmify cola as UTMs nele).
// Configure na plataforma o redirecionamento pós-compra para https://www.plannercomdeus2027.site/obrigado.html
var LINK_CHECKOUT = "https://pay.kivopay.pro/0894e2c7-13dc-4831-9a50-c445e99b1b01";

// Fim do preço de lançamento (horário de Brasília). Quando passar, a barra do topo,
// o selo "Preço de lançamento" e o contador somem sozinhos.
var DATA_FIM_OFERTA = "2027-01-15T23:59:00-03:00";

// Link do formulário que a cliente preenche depois de comprar (Google Forms, Tally, Typeform...)
var FORMULARIO_URL = "COLE_AQUI_O_LINK_DO_FORMULARIO";

/* ---------- Entrega ---------- */
// Dias úteis para entregar a versão DIGITAL personalizada, contados do envio do formulário (ex.: 5)
var PRAZO_DIGITAL = 5;
// Dias úteis para PRODUZIR o planner físico, antes de postar nos Correios (ex.: 7)
var PRAZO_PRODUCAO = "";
// Texto do frete (ex.: "Frete grátis para todo o Brasil" ou "Frete fixo de R$ 15,00")
var FRETE = "";
// Como funciona a devolução do planner físico na garantia de 7 dias
// (ex.: "Você nos avisa pelo e-mail, enviamos uma etiqueta de devolução e reembolsamos 100% assim que o planner chegar.")
var POLITICA_DEVOLUCAO = "É só nos avisar por e-mail ou WhatsApp em até 7 dias depois de receber. Combinamos a devolução do planner pelos Correios e devolvemos 100% do valor pago.";

/* ---------- Como ele é por fora (planner físico) ---------- */
var TAMANHO = "";               // ex.: "A5 (14,8 × 21 cm)"
var CAPA = "";                  // ex.: "Capa dura com laminação fosca"
var ENCADERNACAO = "Espiral";     // ex.: "Espiral metálico"
var NUM_PAGINAS = "cerca de 150"; // ex.: "150" (é o único número de páginas usado no site)
var TEM_ABAS = true;              // abas/divisórias mensais: true = aparece no site, false = some
var TEM_ADESIVOS = true;          // cartela de adesivos: true = aparece no site, false = some

/* ---------- Cores de capa ---------- */
// Uma linha por cor. "arquivo" é a foto da capa dentro da pasta img/ (ex.: "capa-vinho.webp").
// Se a foto não existir, aparece um quadrado na cor "hex" com o nome.
var CORES = [
  { nome: "Vinho",        arquivo: "capa-vinho.webp", hex: "#6E2537" },
  { nome: "Rosé",         arquivo: "capa-rose.webp",  hex: "#B97C82" },
  { nome: "Verde-oliva",  arquivo: "capa-oliva.webp", hex: "#5E6B47" },
  { nome: "Azul-marinho", arquivo: "capa-azul.webp",  hex: "#2E3A55" }
];

/* ---------- O que a cliente pode personalizar ---------- */
// icone: "cor" | "nome" | "versiculo" | "miolo" | "oracao" | "metas"
var OPCOES_PERSONALIZACAO = [
  { icone: "cor",       titulo: "Cor e modelo da capa",       texto: "Escolha a cor e o modelo que mais combinam com você." },
  { icone: "nome",      titulo: "Seu nome na capa",           texto: "Seu nome (ou uma frase) impresso na capa." },
  { icone: "versiculo", titulo: "Versículo da capa",          texto: "O versículo que vai te acompanhar o ano inteiro." },
  { icone: "miolo",     titulo: "O que vai dentro",           texto: "Você escolhe as seções: com ou sem finanças, meu ciclo, jejum, família e mais." },
  { icone: "oracao",    titulo: "Versículos e oração",        texto: "Versículos e plano de oração para o seu momento de vida." },
  { icone: "metas",     titulo: "Metas e temas para 2027",    texto: "Metas e temas do ano pensados para você." }
];

// Vagas por semana. Se preencher (ex.: "30"), aparece na oferta:
// "Preparamos apenas 30 planners por semana". Vazio = não mostra nada.
var VAGAS_SEMANA = "";

// Depoimentos REAIS de clientes (com autorização delas). Enquanto a lista estiver
// vazia, a seção de depoimentos fica escondida. Formato:
// { nome: "Ana Paula", cidade: "Recife/PE", texto: "…", foto: "img/dep-ana.webp" }  (foto é opcional)
var DEPOIMENTOS = [
];
