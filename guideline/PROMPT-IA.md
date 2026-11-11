# Prompt mestre — nova LP Elevamed (funciona em Claude, ChatGPT, Gemini, Lovable, v0, Cursor)

**Como usar:** anexe ou cole o `README.md` desta pasta + os arquivos de `tokens/` e `componentes/`. Depois cole o prompt abaixo, trocando o que está entre `{{ }}`.

---

```
Você vai criar uma landing page da Elevamed seguindo À RISCA o guideline anexo (README.md, tokens.css, tokens.json e os componentes HTML).

CONTEXTO DA NOVA PÁGINA
- Tema/tratamento: {{ex.: minoxidil para barba}}
- Slug da página (usado em ?origem=): {{ex.: minoxidil-barba}}
- Público ideal: {{ex.: homem 22-35 anos, barba falhada}}
- Dor principal (vira a pergunta do hero): {{ex.: "E se a barba fechasse de vez?"}}
- Oferta: {{ex.: kit 4 meses, 3 + 1, 30% na 1ª parcela, frete grátis, avaliação inclusa}}
- Casos reais disponíveis: {{sim/não — se não, deixe a seção de resultados fora}}
- O que muda em relação à LP de queda capilar: {{ex.: sem a tabela "custo de esperar"}}

REGRAS QUE NÃO PODEM SER QUEBRADAS
1. Use só as cores, fontes, tamanhos, espaços e cantos dos tokens. Nada de cor nova.
2. Lexend para tudo; Michroma só em rótulos CAIXA ALTA de 11px. Peso máximo 500.
3. Use o logo oficial de assets/logos (não desenhe logo).
4. Não mostre preço. Não prometa resultado. Não use urgência falsa nem relógio.
5. Todo botão de ação: texto "Começar minha avaliação" e link avaliacao.html?origem={{slug}}.
6. Âmbar (#F5C443) só na faixa LED. Vermelho suave (#C97B70) só no ✗ do comparativo.
7. Checks e ícones em SVG inline, nunca como imagem de fundo no CSS.
8. <meta name="robots" content="noindex, nofollow"> enquanto for staging.
9. Celular primeiro: teste em 320 a 430px sem rolagem lateral; seções com 48px/16px no celular e 80px/24px no desktop.
10. Siga a ordem de seções do guideline; só remova/troque uma seção se eu pedir acima.
11. Textos entre [colchetes] são placeholders: liste-os no final para eu preencher; nada entre colchetes pode ir para o ar.

ENTREGA
- Um único arquivo HTML com CSS no <head> (importando tokens.css) e JS mínimo no final.
- No fim, uma lista: (a) placeholders a preencher, (b) imagens que faltam com o nome de arquivo sugerido, (c) pontos para validação médica/jurídica.
```

---

## Ferramentas específicas

| Ferramenta | Dica |
|---|---|
| **Lovable / v0** | Cole o prompt e anexe prints do `index.html` (guia visual) como referência. Peça "Tailwind com as cores do tokens.json como theme.extend.colors". |
| **ChatGPT / Gemini** | Anexe README + tokens + componentes como arquivos. Peça a página em partes (hero, depois cada seção) se a resposta cortar. |
| **Cursor / Claude Code** | Abra a pasta do repositório; diga "siga guideline/README.md". |
| **Figma** | Importe `tokens.json` como variáveis (plugin Tokens Studio). |
