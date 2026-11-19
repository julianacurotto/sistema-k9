# SISTEMA K9 — app instalável (PWA)

Esta pasta é a **"casca" instalável** do SISTEMA K9: ícone do brasão, nome "SISTEMA K9", tela de abertura
e aviso de "sem internet". Ela **não guarda nenhum dado**: só abre o sistema (Apps Script) dentro dela.
Os dados continuam no Google, com o login institucional @pm.pr.gov.br.

## 1. Publicar no GitHub Pages (uma vez só, ~10 minutos)

1. Crie uma conta em **github.com** (pode ser com o e-mail institucional).
2. Clique em **New repository** (botão verde "New").
   - Repository name: `sistema-k9`
   - Deixe **Public** (o GitHub Pages gratuito exige público; não há dado nenhum aqui, só a casca).
   - Clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file** e **arraste todo o conteúdo desta pasta**
   (`index.html`, `manifest.webmanifest`, `sw.js` e a pasta `icones`). Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Build and deployment → Branch*, escolha **main** e **/(root)** e clique em **Save**.
5. Em 1 ou 2 minutos aparece o endereço do app, algo como:
   `https://SEU-USUARIO.github.io/sistema-k9/`

## 2. Instalar no celular

- **Android (Chrome):** abra o endereço acima → aparece **"Instalar app"** (ou menu ⋮ → *Instalar app* / *Adicionar à tela inicial*).
- **Computador (Chrome/Edge):** ícone de instalar na barra de endereço (⊕) → *Instalar*.
- **iPhone:** use o "app leve" (abaixo). No iPhone o Safari bloqueia o login do Google dentro de outra página,
  então a casca do GitHub pode não conseguir entrar.

> Primeiro acesso: se a tela ficar só carregando, toque em **"Entrar pelo navegador"**, entre na conta
> @pm.pr.gov.br e volte ao app.

## 3. App leve (iPhone e qualquer celular, sem GitHub)

Abra o link do sistema no navegador do celular e:
- **iPhone (Safari):** botão **Compartilhar** → **Adicionar à Tela de Início**.
- **Android (Chrome):** menu ⋮ → **Adicionar à tela inicial**.

Depois de publicar no GitHub, coloque o endereço do ícone no `Code.gs`, em
`CONFIG.ICONE_URL`, por exemplo:
`https://SEU-USUARIO.github.io/sistema-k9/icones/icone-192.png`
Assim o atalho do "app leve" também fica com o brasão.

## Se o link do sistema mudar

O endereço do Apps Script está no começo do `<script>` do `index.html` (variável `SISTEMA`).
Se um dia criar uma **nova implantação** (link novo), troque ali e envie o arquivo de novo ao GitHub.
Publicar "Nova versão" na mesma implantação **não** muda o link.
