# Guideline de Landing Pages — Elevamed

> **Para que serve:** montar qualquer LP nova da Elevamed (queda capilar, minoxidil, TDAH, emagrecimento…) com o mesmo padrão da LP de **Queda de Cabelo Masculina**, em qualquer IA ou ferramenta: Claude, ChatGPT, Gemini, Lovable, v0, Cursor ou um dev humano.
>
> **Página de referência:** https://dancuello-elevamed.github.io/elevamed-lp-staging/queda-de-cabelo
> **Guia visual (mesmo conteúdo, com exemplos):** `index.html` nesta pasta
> **Versão:** 1.0 · 11/11/2026

---

## 0. Como usar esta pasta

| Pasta / arquivo | O que tem | Quando usar |
|---|---|---|
| `README.md` | Este guia completo, em texto | Cole inteiro na IA antes de pedir a página |
| `PROMPT-IA.md` | Prompt pronto, com espaços para preencher | Para começar uma LP nova em qualquer IA |
| `CHECKLIST.md` | Conferência antes de publicar | Sempre, antes do staging e antes de tirar o `noindex` |
| `index.html` | O guia em versão visual (cores, fontes, componentes vivos) | Para ver e mostrar ao time |
| `tokens/tokens.css` | Cores, fontes, tamanhos e espaços como variáveis CSS | Importar em toda página nova |
| `tokens/tokens.json` | Os mesmos tokens em JSON | Figma, Lovable, Tailwind, outras IAs |
| `componentes/` | Blocos HTML prontos (botão, faixa LED, comparativo, card de caso…) | Copiar e adaptar |
| `assets/` | Logos, ícones, imagens, casos, vídeo e grafismos | Usar só estes arquivos oficiais |

**Regra de ouro para qualquer IA:** não invente cor, fonte, logo ou texto regulado. Tudo o que a página precisa está aqui. O que não estiver, pergunte.

---

## 1. Conceito da página

**Uma ideia por página, um destino por botão.** A LP não vende produto; ela vende a **avaliação médica**. O questionário vende o tratamento, depois que o médico aprova.

**O tom:** médico, calmo e direto. Fala com o homem de 25 a 34 anos que ainda está "na fase do boné": percebeu as entradas, ainda não assumiu o problema, tem medo de piorar e desconfia de promessa.

**O ritmo da página:** dor → oferta → prova → mecanismo → comparação → ciência → oferta → objeções → ação. A dor aparece três vezes: no hero (pergunta), em "O custo de esperar" (tabela) e no CTA final ("Cada dia é um folículo a menos").

**O diferencial central:** o kit tem **4 meses porque o resultado costuma aparecer entre o 3º e o 4º mês**. A oferta "3 + 1" se apoia nisso: *"O 4º mês, quando o resultado aparece, é por nossa conta."* Grátis ligado ao resultado, nunca ao preço.

---

## 2. Estrutura (ordem de rolagem)

| # | Bloco | Função | Elementos obrigatórios |
|---|---|---|---|
| 1 | **Faixa de oferta** (topo, fina) | Oferta visível no 1º segundo | Selo "3 + 1" + frase curta + seta → leva a `#planos` |
| 2 | **Header fixo** | Navegação | Logo oficial · Como funciona · A ciência · Kit 4 meses (com selo) · Dúvidas · botão "Fazer avaliação" |
| 3 | **Hero** (fundo sálvia) | Dor em forma de pergunta | Eyebrow · H1 pergunta · subtítulo de 1 linha · 3 checks · botão + "Leva cerca de 5 minutos" · antes/depois horizontal · painel "Sua avaliação médica" |
| 4 | **Faixa LED** (âmbar, em movimento) | Pacote completo, disruptivo | Frete grátis ✦ Avaliação inclusa ✦ 30% na 1ª parcela ✦ **3 + 1** (destacado) ✦ Paga só se o médico aprovar |
| 5 | **O custo de esperar** | Dor racional | Pílula-eyebrow · H2 · tabela ✓/✗ "Elevamed × Sem tratar" · aviso "Resultados variam…" · botão |
| 6 | **Resultados** | Prova | 3 cards de caso real: foto 4:3 com selos Antes/Depois · "X MESES DE TRATAMENTO" · depoimento entre aspas · Nome, idade |
| 7 | **Como funciona + O que esperar** | Mecanismo e expectativa | 4 passos à esquerda (fixa ao rolar no desktop) · card escuro com vídeo do ciclo, botões das fases e slider Mês 1/4/12 |
| 8 | **Compare** | Posicionamento | 3 colunas: Farmácia comum · **Elevamed (recomendado, destacado)** · Consultório particular |
| 9 | **A ciência por trás** | Credibilidade | 3 cards com ícone: DHT age → folículo enfraquece → tratamento bloqueia (o 3º em sálvia) |
| 10 | **Kit 4 meses (3 + 1)** (fundo escuro) | Oferta sem preço | Foto oficial do kit · blocos Mês 1-2-3 "Incluso" + Mês 4 "Grátis" · 3 checks · botão "Quero meu 4º mês grátis" · link "Condições da promoção" · 3 cards laterais |
| 11 | **Dúvidas** | Objeções | FAQ em acordeão + card "Segurança e transparência" |
| 12 | **CTA final** (fundo sálvia) | Ação | "Cada dia é um folículo a menos." · botão · 3 selos em lista |
| 13 | **Rodapé** (fundo escuro) | Confiança e legal | Tratamentos · Elevamed · Suporte (inclui Termos e Termos promocionais) · farmácia credenciada · aviso "não é farmácia" |

> Para uma LP de outro tema, mantenha o esqueleto e troque **a dor do hero**, a **tabela do custo**, os **casos** e a **ciência**. A ordem só muda com motivo (ex.: na LP de barba a dor é estética, então "O custo de esperar" sai).

---

## 3. Cores

| Token | Hex | Onde usar | Não usar em |
|---|---|---|---|
| `--ev-escuro` | `#213632` | Texto, botões, header/rodapé escuros, seção do kit | — |
| `--ev-escuro-2` | `#2F4A44` | Hover de botão | Fundos grandes |
| `--ev-grafite` | `#28342F` | Logo e peças do brandbook | Texto da LP (use `escuro`) |
| `--ev-salvia` | `#CBD9B7` | Fundo do hero e do CTA final, selos, destaque em fundo escuro | Texto sobre branco |
| `--ev-salvia-2` | `#EEF2E6` | Fundo de resultados, áreas suaves | — |
| `--ev-off` | `#F7F8F3` | Fundo padrão | — |
| `#FFFFFF` | branco | Cards | Fundo de seção inteira |
| `--ev-linha` | `#DDE3D2` | Bordas, divisórias | — |
| `--ev-cinza` | `#56675C` | Texto secundário, eyebrows, legendas | Botões |
| `--ev-ambar` | `#F5C443` | **Só a faixa LED** | Qualquer outro lugar (perde o efeito) |
| `--ev-alerta` | `#C97B70` | **Só o ✗ do comparativo** | Botões, textos de erro decorativos |

**Proporção aproximada:** 60% off-white/branco · 25% sálvia · 15% escuro · âmbar só em uma faixa.

---

## 4. Tipografia

- **Lexend** (Google Fonts, pesos 300/400/500): títulos, texto e botões.
- **Michroma** (Google Fonts): só eyebrows e rótulos, **em CAIXA ALTA**, 11px, espaçamento `0.24em`.
- Nunca use peso acima de 500. Títulos com `letter-spacing: -0.02em` e `text-wrap: balance`.

| Elemento | Desktop | Celular | Peso |
|---|---|---|---|
| H1 (hero) | 56px / 1.08 | 32px | 500 |
| H2 (seções) | 36px / 1.2 | 28px | 500 |
| Subtítulo do hero | 18px | 16px | 300 |
| Corpo | 16px | 15-16px | 300 |
| Texto de card / lista | 14-15px | 14-15px | 400 |
| Botão | 15-16px | 15-16px | 500 |
| Legenda / aviso legal | 12-13px | 12-13px | 300-400 |
| Eyebrow (Michroma) | 11px | 11px | 400 |

```
<link href="https://fonts.googleapis.com/css2?family=Michroma&family=Lexend:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## 5. Espaço, grade e cantos

- **Container:** 1160px centralizado.
- **Seções:** 80px em cima/embaixo e 24px nas laterais no desktop; **48px e 16px no celular** (todas iguais).
- **Gaps:** 20px padrão, 28px entre título e conteúdo, 56px entre colunas no desktop.
- **Quebras:** celular ≤ 600px · tablet 601–900px · desktop ≥ 901px · selo do menu some < 1000px.
- **Cantos:** pílula 999px (botões, selos, chips) · card 10px · foto/vídeo 16px.
- **Sombra:** só no card em destaque (Elevamed recomendado, painel do hero).

---

## 6. Componentes

Arquivos prontos em `componentes/`. Resumo:

| Componente | Regra |
|---|---|
| **Botão principal** | Pílula escura, texto branco 15-16px peso 500. Texto padrão: **"Começar minha avaliação"**. No celular ocupa a largura toda. Sempre leva a `avaliacao.html?origem=<slug>` |
| **Eyebrow** | Michroma 11px caixa alta acima de todo H2 |
| **Check** | SVG inline (nunca imagem em CSS, quebra no iPhone), traço escuro, alinhado ao texto |
| **Faixa de oferta (topo)** | Fundo escuro, selo sálvia "3 + 1", frase curta; no celular encurta |
| **Faixa LED** | Fundo âmbar, bordas escuras 2px, texto escuro em CAIXA ALTA, item principal em pílula escura; anima 32s, pausa no hover, parada com `prefers-reduced-motion` |
| **Tabela ✓/✗** | Coluna Elevamed escura com logo claro no topo; coluna "Sem tratar" com ✗ em `--ev-alerta` |
| **Card de caso** | Foto 4:3 com selos "Antes" (escuro) e "Depois" (sálvia) · rótulo Michroma "X MESES DE TRATAMENTO" · depoimento · **Nome, idade** |
| **Card de ciência** | Ícone de traço 76px (64 no celular) · número Michroma · título · frase curta; o último card em sálvia |
| **Blocos de meses** | 4 caixinhas: Mês 1-3 "Incluso" brancas, Mês 4 "Grátis" escura |
| **Acordeão FAQ** | Card branco, borda `--ev-linha`, 1º item aberto |
| **Painel "Sua avaliação médica"** | Sobre/abaixo da foto do hero, barra de 4 passos, 4 itens em 2 colunas |

---

## 7. Imagens, ícones e vídeo

- **Logo:** só os arquivos de `assets/logos/` (símbolo de 10 pontos + ELEVAMED). Nunca redesenhar. Versão clara em fundo escuro.
- **Ícones:** traço fino, uma cor (`--ev-escuro`), cantos arredondados, sem texto embutido. Fonte comprada: Adobe Stock 2120276062 (set "Hair loss and scalp health"). Reserva: IconScout "Hair Loss Icon Pack" (416411).
- **Fotos de caso:** só paciente real com **termo de uso de imagem assinado**; nome no arquivo sempre `caso-0X` ou `cliente-NNN`, nunca o nome real.
- **Hero:** antes/depois **horizontal**, mostrando a testa e as entradas (não só cabelo).
- **Kit:** foto oficial com a caixa "Cuidado em outro nível" (`assets/imagens/kit-linha.webp`). Foto gerada por IA: rótulo liso + logo oficial aplicado na perspectiva.
- **Vídeo do ciclo capilar:** MP4 sem som, `autoplay muted loop playsinline`, com capa (poster) e legendas em português sincronizadas. Licença CC BY-SA 3.0: **o crédito ao autor (Perolo31) é obrigatório**.
- **Formato:** WebP para imagens, MP4 (H.264) para vídeo. Hero ≤ 250 KB, ícones ≤ 20 KB.
- **Nomes de arquivo:** padrão `USO_PAGINA_SECAO_ASSUNTO_ESTILO_FORMATO_ORIGEM_NNN` (ver `claude/nomenclatura-imagens.md` no projeto).
- **Onde buscar novos assets:** grupo "Assets" do Chrome (IconScout, Magnific, Adobe Stock, Storyblocks, Motion Array, Lovepik) e os repositórios awesome-stock-resources, awesome-images e awesome-free-images.

---

## 8. Texto (voz e regras)

**Voz:** frases curtas, verbo no começo, sem jargão. Segunda pessoa ("você"). Médico, não vendedor.

| Faça | Não faça |
|---|---|
| Dor em pergunta: "E se a queda parasse agora?" | Promessa: "Recupere seu cabelo em 90 dias" |
| "costuma aparecer", "pode", "a critério médico" | "garantido", "100% eficaz", "cura" |
| "O 4º mês é por nossa conta" | "GRÁTIS!!!", "só hoje", relógio regressivo |
| "Você só paga se o médico aprovar" | Mostrar preço na LP |
| "Médicos independentes", "farmácias credenciadas" | Nome de remédio como promessa no hero |
| Um botão por bloco, mesmo texto em toda a página | Dois botões com destinos diferentes lado a lado |

**Frases-assinatura:** "Cuidado em outro nível" · "Leva cerca de 5 minutos" · "Resultados variam de pessoa para pessoa. Tratamento sempre a critério médico." · "Cada dia é um folículo a menos."

---

## 9. Regras de negócio que a página precisa respeitar

1. **Sem preço na LP.** O valor aparece depois da avaliação, antes da cobrança.
2. **Pagamento só após aprovação médica** (cartão em pré-autorização ao fim do questionário).
3. **Oferta do kit capilar:** 30% na 1ª parcela + 4º mês sem custo + avaliação inclusa + frete grátis. Regulamento em `promocional.html`.
4. **Cancelamento antes do envio à farmácia** (fórmula manipulada).
5. **Renovação só com confirmação do cliente.**
6. **Finasterida e dutasterida não são prescritas juntas.**
7. Todo link de ação: `avaliacao.html?origem=<slug-da-lp>`.

---

## 10. Legal e compliance (Brasil)

- Publicidade médica: CFM (sem promessa de resultado, antes/depois só com consentimento e caso real).
- Medicamento sob prescrição: **RDC 96/2008 da Anvisa** (não anunciar remédio de tarja como promessa ao leigo; validar "mês grátis" com o jurídico).
- CDC: oferta vincula; art. 49 (arrependimento) × fórmula manipulada em validação.
- LGPD: fotos do couro cabeludo são dado de saúde.
- Rodapé: "A Elevamed não é uma farmácia…" + links de Termos, Privacidade e Termos promocionais.
- Antes de tirar o `noindex`: nome e CRM do diretor técnico na página.
- Staging sempre com `<meta name="robots" content="noindex, nofollow">`.

---

## 11. Celular primeiro

- Desenhe para 390px e teste em **320, 360, 375, 390, 414 e 430px**. Nada pode criar rolagem lateral.
- Antes/depois é a 1ª coisa abaixo do menu; o botão do hero aparece na 1ª tela.
- Botões em largura total; selos em lista (ícone colado ao texto).
- Textos de botões pequenos com fonte fluida: `clamp(11.5px, 3.4vw, 14px)`.
- Elementos fixos (barra "Começar") não podem cobrir um botão principal.

## 12. Desktop

- Hero em 2 colunas (5 : 6), foto horizontal, painel abaixo da foto.
- Colunas laterais curtas ficam **fixas ao rolar** (`position: sticky; top: 96px`) em vez de deixar buraco.
- Card em destaque com sombra e um pouco maior.
- Testar em 768, 1024, 1280, 1440 e 1920px.

## 13. Medição

- Clarity instalado (mapas de calor e gravações).
- Parâmetro `origem` em todo botão para separar LPs no questionário.
- Toda mudança de copy relevante vira **hipótese com data de verificação** (ex.: faixa "4º mês por nossa conta", verificar em 24/11/2026: taxa de início do questionário).

---

*Mantido por Dan (Elevamed). Ao mudar uma regra, atualize este arquivo, o `index.html` e os tokens juntos.*
