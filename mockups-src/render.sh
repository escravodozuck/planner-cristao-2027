#!/usr/bin/env bash
# Renderiza os mockups em PNG (Chrome headless) e converte para WebP/JPEG em ../img
# Uso (Git Bash):  bash mockups-src/render.sh
set -e
cd "$(dirname "$0")"
SRC="$(pwd -W 2>/dev/null || pwd)"
OUT="../img"; TMP="./_png"; mkdir -p "$OUT" "$TMP"
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
PROFILE="$(mktemp -d)"
run(){ "$CHROME" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$PROFILE" --allow-file-access-from-files "$@" 2>/dev/null; }

shot(){ # nome cena largura altura escala
  run --screenshot="$SRC/_png/$1.png" --window-size="$3,$4" --force-device-scale-factor="$5" \
      --default-background-color=00000000 --virtual-time-budget=6000 "file:///$SRC/mockups.html#$2"
}
conv(){ # png-entrada saída largura tipo qualidade [fundo]
  run --dump-dom --virtual-time-budget=4000 "file:///$SRC/conv.html#src=_png/$1.png&w=$3&type=$4&q=$5&bg=$6" \
    | sed -n 's/.*DATA:\([^:]*\):END.*/\1/p' | base64 -d > "$OUT/$2"
  echo "$OUT/$2 $(wc -c < "$OUT/$2") bytes"
}

shot hero hero 640 580 2;       conv hero mockup-hero-1200.webp 1200 image/webp .82; conv hero mockup-hero-720.webp 720 image/webp .82
# shot mesa mesa 800 640 2;       conv mesa mockup-mesa-1200.webp 1200 image/webp .8;  conv mesa mockup-mesa-720.webp 720 image/webp .8
# shot tablet tablet 600 640 2;   conv tablet mockup-tablet-900.webp 900 image/webp .82; conv tablet mockup-tablet-600.webp 600 image/webp .82
# shot espiral espiral 820 600 2; conv espiral mockup-espiral-1200.webp 1200 image/webp .82; conv espiral mockup-espiral-720.webp 720 image/webp .82
shot og og 1200 630 1;          conv og og-planner-2027.jpg 1200 image/jpeg .86 '%23F5E9DB'
for p in capa versiculos planooracao; do
  shot "pg-$p" "page-$p" 420 594 1.5; conv "pg-$p" "pagina-$p.webp" 480 image/webp .8
done
rm -rf "$PROFILE"
