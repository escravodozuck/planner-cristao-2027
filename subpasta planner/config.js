/* =====================================================================
   CONFIGURAÇÕES DA LOJA: edite só este arquivo.
   Vale para index.html, obrigado.html, privacidade.html e termos-e-trocas.html.

   Valor "PREENCHER" = informação que ainda falta. Na página ela fica ESCONDIDA.
   Para ver tudo o que falta destacado em amarelo, abra a página com ?debug=1 no fim do endereço.
   ===================================================================== */

var NOME_PRODUTO = "Planner Cristão 2027";

/* ---------- Preço ---------- */
var PRECO = "47,90";            // preço de venda
var PRECO_DE = "97,00";         // preço riscado ("de")
var FIM_LANCAMENTO = "15/01";   // último dia do preço de lançamento (aparece igual em todo o site)

/* ---------- Checkout ---------- */
var CHECKOUT_URL = "https://pay.kivopay.pro/0894e2c7-13dc-4831-9a50-c445e99b1b01";
// Opcional: um link de checkout por cor. Use o "id" da cor (lista CORES abaixo). Ex.:
// var CHECKOUT_POR_COR = { vinho: "https://pay.kivopay.pro/...", rosa: "https://pay.kivopay.pro/..." };
// Cor sem link aqui usa o CHECKOUT_URL.
var CHECKOUT_POR_COR = {};

/* ---------- Entrega ---------- */
var FRETE = "Frete grátis para todo o Brasil";
var PRAZO_DIGITAL = 5;          // dias úteis para a versão digital personalizada (após o formulário)
var PRAZO_PRODUCAO = 5;         // dias úteis para produzir o planner físico

/* ---------- O planner físico ---------- */
var TAMANHO = "PREENCHER";      // ex.: "A5 (14,8 × 21 cm)"
var CAPA = "PREENCHER";         // ex.: "dura" (aparece como "capa dura")
var ENCADERNACAO = "Espiral";
var NUM_PAGINAS = "150";
var TEM_ABAS = true;            // true = mostra "abas mensais" no site
var TEM_ADESIVOS = true;        // true = mostra "cartela de adesivos" no site

/* ---------- Cores de capa ----------
   AJUSTAR PARA AS CORES REAIS.
   id: sem espaço nem acento (usado no CHECKOUT_POR_COR e nos nomes de foto)
   hex: cor da capa · tinta: cor do texto na capa
   foto (opcional): "img/capa-<id>.webp". Se existir, aparece na miniatura da capa. */
var CORES = [
  { id: "vinho",  nome: "Vinho",           hex: "#6B1E33", tinta: "#D9B26F", foto: "" },
  { id: "rosa",   nome: "Rosa",            hex: "#E9B4C2", tinta: "#6B1E33", foto: "" },
  { id: "lilas",  nome: "Lilás",           hex: "#BBA6D8", tinta: "#3E2A5C", foto: "" },
  { id: "azul",   nome: "Azul serenidade", hex: "#9CBCDD", tinta: "#1F3A5A", foto: "" },
  { id: "oliva",  nome: "Verde-oliva",     hex: "#7B8452", tinta: "#F4EBD3", foto: "" },
  { id: "nude",   nome: "Nude",            hex: "#DCC0A3", tinta: "#5A3B22", foto: "" },
  { id: "preto",  nome: "Preto",           hex: "#211C1E", tinta: "#D9B26F", foto: "" }
];

/* ---------- O que dá para personalizar ---------- */
var OPCOES_PERSONALIZACAO = [
  { titulo: "Cor e capa",        texto: "Escolha a cor e o modelo de capa que têm a sua cara." },
  { titulo: "Seu nome",          texto: "Seu nome (ou uma frase) impresso na capa." },
  { titulo: "Versículo da capa", texto: "O versículo que vai te acompanhar o ano inteiro." },
  { titulo: "O que vai dentro",  texto: "Você escolhe as seções: com ou sem finanças, meu ciclo, jejum, família e mais." },
  { titulo: "Plano de oração",   texto: "Versículos e plano de oração para o seu momento de vida." },
  { titulo: "Metas 2027",        texto: "Metas e temas do ano pensados para você." }
];

/* ---------- O que vem dentro ---------- */
var CONTEUDO = [
  { grupo: "Vida com Deus", itens: ["Meu devocional", "Bíblia em 1 ano", "Check de leitura bíblica", "Quadro de leitura", "Motivos de oração", "Diário de oração", "Jejum", "Anotações de culto", "Versículo e conselho bíblico do mês"] },
  { grupo: "Planejamento", itens: ["Calendário 2027", "“Neste ano eu vou…”", "Círculo do propósito", "Metas por área", "Temática mensal", "Planejamento mensal e semanal", "Destaques do mês"] },
  { grupo: "Vida pessoal", itens: ["Sendo intencional com a família", "Livros que quero ler", "Lugares que quero conhecer", "Filmes e séries", "Meu ciclo", "Registro de emoções", "Hábitos e água"] },
  { grupo: "Organização", itens: ["Finanças", "Dízimo", "Anotações"] }
];

/* ---------- Bônus (todos digitais) ---------- */
var BONUS = [
  { nome: "52 cartões de versículos",  de: "27,00", tipo: "digital" },
  { nome: "Planner da Esposa Cristã",  de: "37,00", tipo: "digital" },
  { nome: "Capas editáveis no Canva",  de: "19,00", tipo: "digital" }
];

/* ---------- Pós-compra e suporte ---------- */
var FORM_URL = "PREENCHER";     // link do formulário de personalização (Google Forms, Tally...)
var WHATSAPP = "PREENCHER";     // número de suporte, só dígitos: 55 + DDD + número (ex.: 5511999999999)

/* ---------- Depoimentos REAIS (com autorização). Vazio = a seção não aparece. ----------
   Formato: { nome: "Ana Paula", cidade: "Recife/PE", texto: "…" } */
var DEPOIMENTOS = [];

/* ---------- Perguntas frequentes ----------
   Use {VARIAVEL} para mostrar um valor deste arquivo (ex.: {FRETE}).
   Um trecho entre [[ e ]] some sozinho se alguma variável dentro dele estiver "PREENCHER". */
var FAQ = [
  { p: "Recebo o físico em casa?", r: "Sim! O planner é impresso, encadernado ({ENCADERNACAO}) e enviado pelos Correios com código de rastreio para o endereço que você informar. E você ainda ganha a versão digital com hiperlinks de presente." },
  { p: "Qual o prazo e o frete?", r: "<strong>Versão digital personalizada:</strong> [[em até {PRAZO_DIGITAL} ]]depois que você envia o formulário.<br><strong>Planner físico:</strong> produzido[[ em {PRAZO_PRODUCAO}]] e enviado pelos Correios; o prazo do frete varia conforme a região.[[<br><strong>Frete:</strong> {FRETE}.]]" },
  { p: "Como acompanho o envio?", r: "Quando o planner for postado, você recebe o código de rastreio por e-mail ou WhatsApp para acompanhar a entrega no site dos Correios." },
  { p: "Recebo algo na hora?", r: "Sim. Logo depois da compra chegam por e-mail e WhatsApp o formulário de personalização e a versão digital base do planner, para você começar a usar hoje." },
  { p: "Posso escolher a cor e o que vai dentro?", r: "Pode. No formulário você escolhe a cor e o modelo da capa, o nome ou frase da capa, o versículo e quais seções entram no miolo." },
  { p: "Quais cores existem?", r: "Hoje temos: {LISTA_CORES}." },
  { p: "Posso pedir uma cor diferente?", r: "Pode pedir! Conte no formulário a cor que você quer e a nossa equipe fala com você para combinar." },
  { p: "É datado ou não datado?", r: "Os dois: tem o calendário 2027 completo + planejamentos mensais e semanais sem data, para você começar em qualquer mês, sem desperdiçar páginas." },
  { p: "Qual o tamanho e a capa?", r: "Encadernação {ENCADERNACAO}, {NUM_PAGINAS} páginas[[, tamanho {TAMANHO}]][[, capa {CAPA}]]." },
  { p: "Posso dar de presente e enviar para outro endereço?", r: "Pode! Na compra, informe o endereço de quem vai receber. O formulário pode ser preenchido por você ou por ela, para o planner sair com o nome e o jeito dela." },
  { p: "Serve para evangélicas e católicas?", r: "Sim. O planner é centrado na Bíblia, sem doutrina de denominação. Os versículos são da Almeida Revista e Corrigida." },
  { p: "Como funciona a garantia?", r: "Você tem 7 dias a partir do recebimento para desistir, sem precisar justificar (art. 49 do Código de Defesa do Consumidor). A devolução pelos Correios é sem custo e devolvemos 100% do valor. Veja os <a href=\"termos-e-trocas.html\">Termos e Trocas</a>." },
  { p: "Meus pedidos de oração ficam em sigilo?", r: "Sim. As respostas do formulário são usadas só para preparar o seu planner e não são compartilhadas com ninguém. Veja a <a href=\"privacidade.html\">Política de Privacidade</a>." }
];
