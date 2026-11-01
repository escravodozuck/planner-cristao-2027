/* =====================================================================
   CONFIGURAÇÕES DO SITE: edite só este arquivo
   Vale para index.html e obrigado.html.
   ===================================================================== */

// Link do formulário que a cliente preenche depois de comprar (Google Forms, Tally, Typeform...)
var FORMULARIO_URL = "COLE_AQUI_O_LINK_DO_FORMULARIO";

// Prazo de entrega em dias úteis. Aparece em todos os textos que citam o prazo.
var PRAZO_ENTREGA = 5;

// Preço de venda, no formato brasileiro (ex.: "47,90")
var PRECO = "47,90";

// Vagas por semana. Se preencher (ex.: "30"), aparece na oferta:
// "O Pastor José Marcos prepara apenas 30 planners por semana". Vazio = não mostra nada.
var VAGAS_SEMANA = "";

// Fim do preço de lançamento (horário de Brasília). Quando passar, a barra do topo,
// o selo "Preço de lançamento" e o contador somem sozinhos.
var DATA_FIM_OFERTA = "2027-01-15T23:59:00-03:00";

// Link do checkout (Hotmart, Kiwify, Eduzz, Ticto...). Configure na plataforma o
// redirecionamento pós-compra para https://escravodozuck.github.io/planner-cristao-2027/obrigado.html
// Só o botão do card da oferta abre este link; os outros botões levam até o card.
var LINK_CHECKOUT = "https://seguro-pago.lol/c/off_01m643wmyvh257p3g5vdyt7e52";

// Depoimentos REAIS de clientes (com autorização delas). Enquanto a lista estiver
// vazia, a seção de depoimentos fica escondida. Formato:
// { nome: "Ana Paula", cidade: "Recife/PE", texto: "…", foto: "img/dep-ana.webp" }  (foto é opcional)
var DEPOIMENTOS = [
];
