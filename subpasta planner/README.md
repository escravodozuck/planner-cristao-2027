# Loja do Planner Cristão 2027 (página de produto)

Página de vendas estilo loja, separada da página principal do site. Tudo fica nesta pasta.

| Arquivo | O que é |
|---|---|
| `index.html` | Página de produto: galeria, prévia da capa ao vivo, seletor de cor, nome na capa, compra |
| `obrigado.html` | Pós-compra: botão do formulário de personalização, cor e nome escolhidos, prazos |
| `privacidade.html` | Política de privacidade (endereço de entrega e Correios incluídos) |
| `termos-e-trocas.html` | Termos, trocas, devoluções e garantia de 7 dias a partir do recebimento |
| `config.js` | **Todos os dados editáveis** (preço, cores, prazos, FAQ, bônus...) |
| `img/` | Imagens |

## 1. Como editar o `config.js`

Abra o `config.js` em qualquer editor de texto, troque o valor entre aspas e salve. A página se atualiza sozinha.

- **Valor `"PREENCHER"`** = informação que ainda falta. O trecho fica **escondido** na página.
- Para ver tudo o que falta, abra a página com **`?debug=1`** no fim do endereço: cada pendência aparece destacada em amarelo com o nome da variável.

**O que ainda está `"PREENCHER"`:**

| Variável | Exemplo | Onde aparece |
|---|---|---|
| `TAMANHO` | `"A5 (14,8 × 21 cm)"` | especificações, FAQ, termos |
| `CAPA` | `"dura"` | especificações, FAQ, termos |
| `FORM_URL` | link do Google Forms/Tally | botão "Personalizar meu planner" no `obrigado.html` |
| `WHATSAPP` | `"5511999999999"` | botão flutuante, rodapé, obrigado, termos, privacidade |

**Outros pontos para ajustar:**
- `CORES`: as 7 cores são **exemplos**. Troque pelas cores reais (nome, `hex` da capa e `tinta` do texto). Se tiver foto da capa, coloque `foto: "img/capa-vinho.webp"`.
- `CHECKOUT_POR_COR`: se criar uma oferta por cor na KivoPay, coloque o link de cada cor aqui (pelo `id` da cor). Cor sem link usa o `CHECKOUT_URL`.
- `TEM_ABAS` / `TEM_ADESIVOS`: `false` esconde "Abas mensais" e "Cartela de adesivos".
- `DEPOIMENTOS`: só depoimentos **reais**, com autorização. Enquanto estiver vazio, a seção não aparece.
- `FAQ`: dá para mudar perguntas e respostas. `{FRETE}` mostra o valor do config; `[[ ... ]]` some se tiver algo "PREENCHER" dentro.

## 2. Fotos para tirar

Salve em `img/` com estes nomes, em `.webp`, quadradas (1:1) e com pelo menos 900 × 900 px. Enquanto a foto não existir, a página mostra uma imagem reserva ou "Foto em breve".

1. `foto-dentro.webp`: o planner aberto, mostrando páginas por dentro (hoje aparece um mockup de página).
2. `foto-abas.webp`: as abas mensais na lateral (hoje: "Foto em breve").
3. `foto-cores.webp`: várias capas de cores diferentes juntas (hoje: capas desenhadas com as cores do `config.js`).
4. `capa-<id>.webp`, uma por cor (ex.: `capa-vinho.webp`, `capa-rosa.webp`), e preencha o campo `foto` da cor no `config.js`.

## 3. Como publicar

A pasta faz parte do repositório do site, que a Vercel publica a cada `git push`:

```bash
git add "subpasta planner"
git commit -m "Loja do planner"
git push
```

Endereço depois de publicado: `https://www.plannercomdeus2027.site/subpasta%20planner/`

Dica: um nome sem espaço (ex.: `loja`) deixa o endereço mais bonito para anúncios. Se renomear a pasta, troque também o `canonical`, o `og:url` e o `og:image` no `<head>` do `index.html`.

**Na KivoPay:** configure o redirecionamento pós-compra para `https://www.plannercomdeus2027.site/subpasta%20planner/obrigado.html`.

## 4. Rastreamento

O `<head>` do `index.html` e do `obrigado.html` tem os mesmos blocos da página principal: Pixel da Meta e Google Analytics (comentados, prontos para colar o código), Utmify UTMs e Pixel da Utmify. Os botões de compra têm a classe `js-checkout`, e a Utmify cola as UTMs neles. O `obrigado.html` não dispara Purchase: a plataforma de checkout já envia esse evento.
