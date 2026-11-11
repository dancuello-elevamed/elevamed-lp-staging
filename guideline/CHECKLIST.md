# Checklist antes de publicar — LP Elevamed

## Marca
- [ ] Logo oficial de `assets/logos/` (nada redesenhado)
- [ ] Só cores dos tokens; âmbar só na faixa LED; ✗ suave só no comparativo
- [ ] Lexend + Michroma carregadas; nenhum peso acima de 500

## Conteúdo
- [ ] Nenhum texto entre `[colchetes]` na página
- [ ] Nenhum preço visível
- [ ] Nenhuma promessa de resultado ("garantido", "cura", prazo exato)
- [ ] Sem relógio regressivo ou "só hoje"
- [ ] Depoimentos só de pacientes reais com termo assinado; card com "X MESES DE TRATAMENTO" e "Nome, idade"
- [ ] Aviso "Resultados variam de pessoa para pessoa. Tratamento sempre a critério médico."
- [ ] Crédito do vídeo (CC BY-SA) visível, se usar o vídeo do ciclo

## Ação e links
- [ ] Todos os botões dizem "Começar minha avaliação" (exceto o do kit) e levam a `avaliacao.html?origem=<slug>`
- [ ] Links do menu e do rodapé apontam para âncoras que existem
- [ ] Rodapé com Termos de uso, Política de privacidade e Termos promocionais
- [ ] Link "Condições da promoção" abaixo do botão do kit

## Celular
- [ ] Testado em 320, 360, 375, 390, 414 e 430px sem rolagem lateral
- [ ] Antes/depois logo abaixo do menu; botão do hero na 1ª tela
- [ ] Seções com 48px em cima/embaixo e 16px nas laterais
- [ ] Botões em largura total; nada fixo cobrindo botão principal

## Desktop
- [ ] Testado em 768, 1024, 1280, 1440 e 1920px
- [ ] Sem colunas com buraco grande (usar sticky)

## Técnico e legal
- [ ] `noindex, nofollow` no staging
- [ ] Imagens em WebP; hero ≤ 250 KB
- [ ] `prefers-reduced-motion` desliga a faixa LED e o autoplay
- [ ] Clarity instalado
- [ ] Antes de tirar o `noindex`: nome e CRM do diretor técnico, CNPJ e razão social preenchidos, termos aprovados pelo jurídico
