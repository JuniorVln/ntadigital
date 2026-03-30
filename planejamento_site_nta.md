# NTA Digital — Planejamento de Estrutura do Site

> Documento de planejamento completo: páginas, seções, conteúdo, CTAs, SEO e integrações técnicas.
> **Design System de referência:** [design-system.html](design-system.html)
>
> ⚠️ Este documento está alinhado ao briefing `BRIEFING_NTA.pdf`. Qualquer alteração deve respeitar as diretrizes de posicionamento definidas no briefing.

---

## Posicionamento Central (do Briefing)

> A NTA **não** deve se posicionar como "agência de tráfego pago".
>
> Deve se posicionar como: **empresa especializada em aumentar vendas e gerar clientes através do marketing digital**.
>
> Toda comunicação deve reforçar: **Resultado** (clientes e faturamento) · **Estratégia** (não apenas execução) · **Clareza** (sem linguagem técnica)

---

## Visão Geral da Arquitetura

```
HOME (/)
├── SERVIÇOS (/servicos)
│   ├── Gerar Clientes com Marketing Digital (/servicos/gerar-clientes)  [página principal]
│   ├── Posicionamento Digital (/servicos/posicionamento-digital)
│   └── Site Estratégico (/servicos/site-estrategico)
├── SOBRE (/sobre)
├── BLOG (/blog)
└── CONTATO (/contato)
```

| Página | Slug | Prioridade | Objetivo Principal |
|--------|------|------------|-------------------|
| Home | `/` | Alta | Converter visitante → lead (WhatsApp/formulário) |
| Serviços | `/servicos` | Alta | Apresentar os serviços com foco em resultado |
| Gerar Clientes | `/servicos/gerar-clientes` | Alta | Página principal de serviço — detalhar método |
| Posicionamento Digital | `/servicos/posicionamento-digital` | Média | Autoridade e atração de clientes |
| Site Estratégico | `/servicos/site-estrategico` | Média | Conversão e geração de leads |
| Sobre | `/sobre` | Média | Humanizar a marca e gerar confiança |
| Blog | `/blog` | Média | SEO orgânico e autoridade |
| Contato | `/contato` | Alta | Captura direta de leads |

---

## Elementos Globais (Todas as Páginas)

### Header / Navegação
| Elemento | Detalhe |
|----------|---------|
| **Logo** | NTA Digital (SVG) — canto esquerdo |
| **Menu** | Home · Serviços · Sobre · Blog · Contato |
| **CTA Header** | Botão `ds-btn--primary` → "Quero gerar clientes" (WhatsApp) |
| **Comportamento** | Fixed top, blur backdrop, shrink on scroll |
| **Componente DS** | `.ds-nav` |

### WhatsApp Floating CTA
| Elemento | Detalhe |
|----------|---------|
| **Posição** | Fixed, bottom-right, z-index alto — **visível em toda a página** |
| **Ícone** | WhatsApp verde `#25D366` |
| **Link** | `wa.me/5541998081519?text=Olá, quero saber como gerar mais clientes` |
| **Animação** | Pulse suave + tooltip "Fale conosco" |
| **Componente DS** | `.ds-btn--whatsapp` |

### Footer
| Elemento | Detalhe |
|----------|---------|
| **Col 1** | Logo + "Especialistas em aumentar vendas e gerar clientes pelo marketing digital." |
| **Col 2** | Links rápidos (páginas do menu) |
| **Col 3** | Serviços (links internos) |
| **Col 4** | Contato: telefone, email, redes sociais |
| **Redes** | YouTube · Instagram · LinkedIn |
| **Rodapé** | © 2026 NTA Digital — Todos os direitos reservados |
| **Componente DS** | `.ds-footer` |

---

## PÁGINA 1: HOME (Landing Page Principal)

> **Objetivo:** Converter visitantes em leads via WhatsApp ou formulário.
> **URL:** `ntadigital.com.br/`
> **Linguagem:** Direta, focada na dor do cliente, sem termos técnicos.

### SEO
| Campo | Valor (definido no briefing) |
|-------|------------------------------|
| **Title** | `Marketing Digital para Aumentar Vendas e Clientes \| NTA Digital` |
| **Meta Description** | `Aumente suas vendas e gere mais clientes com estratégias de marketing digital focadas em resultado. Fale com a NTA Digital.` |
| **Meta Robots** | `index, follow` |

### Estrutura de Headings (definida no briefing)
| Tag | Texto |
|-----|-------|
| **H1** | Estratégias de marketing digital para aumentar suas vendas e gerar clientes com Tráfego pago |
| **H2** | Sua empresa pode estar perdendo vendas todos os dias |
| **H2** | Você não precisa de mais tráfego, precisa de clientes |
| **H2** | Como ajudamos empresas a crescer na internet |
| **H2** | Soluções focadas em gerar resultado |
| **H2** | Resultados reais de clientes |
| **H2** | Como funciona nosso processo |

---

### Seção 1.1 — Hero Principal
| Item | Detalhe |
|------|---------|
| **H1** | "Estratégias de marketing digital para aumentar suas **vendas** e gerar clientes com Tráfego pago" |
| **Subtítulo** | "Ajudamos empresas a crescer na internet com estratégias focadas em resultado, não em ferramentas." |
| **CTA 1** | `ds-btn--primary` → "Quero gerar mais clientes" (WhatsApp) |
| **CTA 2** | `ds-btn--ghost` → "Como fazemos isso" (scroll para H2 "Como ajudamos") |
| **Col Direita** | Card showcase com métricas: +1000 clientes · +5 anos · +R$15M gerenciados |
| **Componentes DS** | `.ds-hero`, `.ds-badge--amber`, `.ds-btn--primary`, `.ds-btn--ghost` |

### Seção 1.2 — Problema (H2: "Sua empresa pode estar perdendo vendas todos os dias")
| Item | Detalhe |
|------|---------|
| **Propósito** | Ativar a dor do cliente — ele se identifica com o problema |
| **Conteúdo** | Lista de sintomas: "Investe em anúncios mas não vê retorno", "Tem tráfego mas poucas conversões", "Não sabe quanto cada cliente custa" |
| **Tom** | Empático, sem culpar o cliente |
| **Componentes DS** | `.ds-card--standard` (lista de dores), ícones de alerta âmbar |

### Seção 1.3 — Reposicionamento (H2: "Você não precisa de mais tráfego, precisa de clientes")
| Item | Detalhe |
|------|---------|
| **Propósito** | Quebrar a objeção de quem acha que precisa só de mais visitas |
| **Layout** | 2 colunas — afirmação forte + explicação |
| **Conteúdo** | Distinção entre tráfego sem estratégia vs. marketing orientado a resultado |
| **CTA** | "Entenda nosso método" → ancora para seção "Como funciona" |
| **Componentes DS** | `.ds-card--glow`, `.ds-btn--ghost` |

### Seção 1.4 — Como Ajudamos (H2: "Como ajudamos empresas a crescer na internet")
| Item | Detalhe |
|------|---------|
| **Layout** | Grid 3 colunas (cards de pilares) |
| **Card 1** | "Diagnóstico de Oportunidade" — Identificamos onde sua empresa está deixando dinheiro na mesa |
| **Card 2** | "Estratégia de Aquisição" — Criamos um plano focado em atrair clientes prontos para comprar |
| **Card 3** | "Execução e Escala" — Campanhas ativas, otimização contínua e crescimento previsível |
| **Componentes DS** | `.ds-step-card`, `.ds-step-card__number` |

### Seção 1.5 — Serviços (H2: "Soluções focadas em gerar resultado")
| Item | Detalhe |
|------|---------|
| **Propósito** | Apresentar serviços com foco em resultado, não em ferramentas |
| **Layout** | Grid 3 cards |
| **Card 1** | "Gerar Clientes com Marketing Digital" — Anúncios e estratégias para trazer clientes prontos para comprar |
| **Card 2** | "Posicionamento Digital" — Construa autoridade e seja encontrado por quem você quer atender |
| **Card 3** | "Site Estratégico" — Site feito para converter visitantes em clientes, não apenas para "ter presença" |
| **CTA de cada card** | "Saiba mais" → página interna do serviço |
| **Componentes DS** | `.ds-card--standard`, `.ds-card__icon-wrap`, hover lift |

### Seção 1.6 — Prova Social (H2: "Resultados reais de clientes")
| Item | Detalhe |
|------|---------|
| **Layout** | Barra de números grandes + cards de depoimentos |
| **Métricas** | `+1000 clientes atendidos` · `+5 anos de experiência` · `+R$15M gerenciados` · `Dezenas de segmentos` |
| **Depoimentos** | Cards com foto (ou inicial), nome, empresa, resultado obtido |
| **Animação** | Counter up nos números ao entrar na viewport |
| **Componentes DS** | `.ds-card`, `.ds-text--amber`, animação `fadeUp` |

### Seção 1.7 — Processo (H2: "Como funciona nosso processo")
| Item | Detalhe |
|------|---------|
| **Layout** | Steps numerados horizontais (ou verticais em mobile) |
| **Step 01** | "Conversa inicial" — Entendemos seu negócio e seus objetivos de venda |
| **Step 02** | "Diagnóstico e plano" — Identificamos oportunidades e montamos a estratégia |
| **Step 03** | "Execução com acompanhamento" — Campanhas no ar com relatórios e otimização contínua |
| **CTA final** | "Quero começar" → WhatsApp |
| **Componentes DS** | `.ds-step-card`, `.ds-btn--primary` |

### Seção 1.8 — FAQ
| Item | Detalhe |
|------|---------|
| **Layout** | 2 colunas — texto + accordion |
| **Col Esquerda** | "Ficou com dúvida?" + CTA WhatsApp |
| **Perguntas** | Em quanto tempo vejo resultado? · Preciso ter um site? · Qual o investimento mínimo? · Funciona para qualquer segmento? · Como acompanho os resultados? · Vocês fazem o site também? |
| **Tom** | Sem jargão técnico — falar em "clientes", "vendas", "retorno" |
| **Componentes DS** | `.ds-faq-item`, `.ds-faq-question`, `.ds-faq-answer` |

### Seção 1.9 — Formulário / CTA Final
| Item | Detalhe |
|------|---------|
| **Layout** | 2 colunas — info de contato + formulário |
| **Campos** | Nome, Email, Telefone, Empresa, Mensagem, Botão enviar |
| **Integração** | FormSubmit ou Contact Form 7 |
| **Componentes DS** | `.ds-input-wrapper`, `.ds-textarea-wrapper`, `.ds-btn--primary` |

---

## PÁGINA 2: SERVIÇOS (Listagem)

> **Objetivo:** Visão geral dos serviços com linguagem focada em resultado.
> **URL:** `ntadigital.com.br/servicos`

### SEO
| Campo | Valor |
|-------|-------|
| **Title** | `Serviços de Marketing Digital para Gerar Clientes \| NTA Digital` |
| **Meta Description** | `Conheça as soluções da NTA Digital para aumentar suas vendas: geração de clientes, posicionamento digital e sites estratégicos.` |

### Seções
| Seção | Conteúdo |
|-------|----------|
| **Hero** | H1: "Soluções para sua empresa vender mais pela internet" |
| **Cards de serviços** | 3 cards linkando para as páginas internas (mesmos da home seção 1.5) |
| **CTA Final** | "Qual serviço é certo para você? Fale conosco" → WhatsApp |

---

## PÁGINA 3: GERAR CLIENTES COM MARKETING DIGITAL (Serviço Principal)

> **Objetivo:** Detalhar o método e converter em lead.
> **URL:** `ntadigital.com.br/servicos/gerar-clientes`

### SEO (definido no briefing)
| Campo | Valor |
|-------|-------|
| **Title** | `Como Gerar Clientes e Aumentar Vendas com Marketing Digital` |
| **Meta Description** | `Descubra como transformar seu marketing em vendas. Estratégias focadas em gerar clientes e crescimento real para sua empresa.` |

### Estrutura de Headings (definida no briefing)
| Tag | Texto |
|-----|-------|
| **H1** | Como gerar clientes e aumentar vendas pela internet |
| **H2** | Por que sua empresa não está vendendo como poderia |
| **H2** | O erro de focar apenas em anúncios |
| **H2** | O que realmente gera clientes |
| **H2** | Nosso método para aumentar vendas |
| **H2** | Resultados reais |

### Seções
| Seção | Conteúdo |
|-------|----------|
| **Hero** | H1 + subtítulo + CTA WhatsApp |
| **Problema** | H2 "Por que sua empresa não está vendendo como poderia" — lista de causas comuns |
| **Erro comum** | H2 "O erro de focar apenas em anúncios" — reposicionamento de valor |
| **Solução** | H2 "O que realmente gera clientes" — pilares da estratégia NTA |
| **Método** | H2 "Nosso método para aumentar vendas" — passo a passo visual |
| **Prova social** | H2 "Resultados reais" — métricas + depoimentos |
| **CTA Final** | Banner full-width → WhatsApp |

---

## PÁGINA 4: POSICIONAMENTO DIGITAL

> **Objetivo:** Autoridade e atração de clientes certos.
> **URL:** `ntadigital.com.br/servicos/posicionamento-digital`

### SEO
| Campo | Valor |
|-------|-------|
| **Title** | `Posicionamento Digital: Seja Encontrado por Quem Quer Comprar \| NTA Digital` |
| **Meta Description** | `Construa autoridade online e atraia os clientes certos para o seu negócio com estratégias de posicionamento digital.` |

### Seções
| Seção | Conteúdo |
|-------|----------|
| **Hero** | "Seja encontrado por quem já quer comprar o que você vende" |
| **Problema** | "Sua empresa existe, mas os clientes certos não te encontram" |
| **O que é** | Posicionamento não é só aparecer — é aparecer para as pessoas certas |
| **Como fazemos** | SEO, presença orgânica, conteúdo estratégico |
| **CTA** | WhatsApp |

---

## PÁGINA 5: SITE ESTRATÉGICO

> **Objetivo:** Converter visitantes em leads — site como ferramenta de vendas.
> **URL:** `ntadigital.com.br/servicos/site-estrategico`

### SEO
| Campo | Valor |
|-------|-------|
| **Title** | `Site Estratégico: Transforme Visitantes em Clientes \| NTA Digital` |
| **Meta Description** | `Um site feito para vender. Criamos sites estratégicos focados em conversão, não apenas em presença online.` |

### Seções
| Seção | Conteúdo |
|-------|----------|
| **Hero** | "Um site que trabalha por você — gerando clientes enquanto você dorme" |
| **Problema** | "A maioria dos sites existe. O seu precisa vender." |
| **O que entregamos** | Site otimizado para conversão, velocidade, mobile e SEO desde o início |
| **Exemplos** | Mockups / prints de sites desenvolvidos |
| **CTA** | WhatsApp |

---

## PÁGINA 6: SOBRE

> **Objetivo:** Humanizar a marca e gerar confiança.
> **URL:** `ntadigital.com.br/sobre`

### SEO
| Campo | Valor |
|-------|-------|
| **Title** | `Sobre a NTA Digital \| Especialistas em Gerar Clientes pelo Marketing Digital` |
| **Meta Description** | `Conheça a NTA Digital: +5 anos gerando clientes para empresas de todos os segmentos. Resultados reais, atendimento próximo.` |
| **Schema** | Organization |

### Seções
| Seção | Conteúdo |
|-------|----------|
| **Hero** | "Conheça quem vai cuidar do crescimento do seu negócio" |
| **História** | Trajetória, missão — linguagem de parceiro, não de fornecedor |
| **Números** | +1000 clientes · +5 anos · +R$15M gerenciados · Dezenas de segmentos |
| **Valores** | Resultados reais · Atendimento próximo · Estratégia personalizada |
| **CTA** | "Quer resultados assim para o seu negócio?" → WhatsApp |

---

## PÁGINA 7: BLOG

> **Objetivo:** Atrair tráfego orgânico via SEO e posicionar como autoridade.
> **URL:** `ntadigital.com.br/blog`

### SEO
| Campo | Valor |
|-------|-------|
| **Title** | `Blog NTA Digital \| Marketing Digital para Vendas e Geração de Clientes` |
| **Meta Description** | `Dicas práticas de marketing digital para vender mais. Sem linguagem técnica — só o que realmente funciona.` |
| **Schema** | Blog |

### Temas de conteúdo (definidos no briefing)
| Tipo | Exemplos de artigos |
|------|---------------------|
| **Vendas** | "Por que sua empresa não vende pela internet" |
| **Geração de clientes** | "Como gerar clientes todos os dias com marketing digital" |
| **Erros comuns** | "O maior erro de quem investe em marketing digital" |
| **Investimento** | "Quanto investir para ter resultado com marketing digital" |
| **Retorno** | "Por que você não está tendo retorno com anúncios" |

### Seções da página
| Seção | Conteúdo |
|-------|----------|
| **Hero** | "Insights para você vender mais pela internet" |
| **Post destaque** | Card grande horizontal — post mais recente/relevante |
| **Grid de posts** | Grid 3 colunas com cards: imagem + categoria + título + excerpt |
| **Newsletter CTA** | "Receba dicas exclusivas no seu email" |

---

## PÁGINA 8: CONTATO

> **Objetivo:** Captura direta de leads com múltiplos canais.
> **URL:** `ntadigital.com.br/contato`

### SEO
| Campo | Valor |
|-------|-------|
| **Title** | `Contato \| Fale com a NTA Digital` |
| **Meta Description** | `Entre em contato com a NTA Digital. WhatsApp, email ou formulário. Atendimento para todo o Brasil.` |
| **Schema** | ContactPage |

### Seções
| Seção | Conteúdo |
|-------|----------|
| **Hero** | "Vamos conversar sobre como aumentar suas vendas" |
| **Cards de contato rápido** | WhatsApp · Email · Instagram |
| **Formulário** | Nome, Email, Telefone, Empresa (opcional), Serviço desejado (select), Investimento mensal previsto (select), Mensagem |
| **Integração** | FormSubmit ou Contact Form 7 |

---

## Integrações Técnicas

| Integração | Prioridade | Detalhes |
|------------|-----------|----------|
| **WhatsApp** | Alta | Botão flutuante em todas as páginas + todos os CTAs |
| **Google Tag Manager** | Alta | Container GTM em todas as páginas |
| **Google Analytics 4** | Alta | Via GTM, eventos de conversão |
| **Google Ads Conversion** | Alta | Tag nos botões WhatsApp e form submit |
| **Meta Pixel** | Alta | Via GTM — PageView, Lead, Contact |
| **Instagram Feed** | Média | Widget na home (seção social) |
| **Hotjar / Clarity** | Média | Heatmaps e gravações de sessão |
| **Schema Markup** | Média | LocalBusiness, Organization, FAQPage, Blog |

---

## SEO Técnico por Página

| Página | Title Tag | Schema |
|--------|-----------|--------|
| **Home** | `Marketing Digital para Aumentar Vendas e Clientes \| NTA Digital` | LocalBusiness, FAQPage |
| **Serviços** | `Serviços de Marketing Digital para Gerar Clientes \| NTA Digital` | Service |
| **Gerar Clientes** | `Como Gerar Clientes e Aumentar Vendas com Marketing Digital` | Service |
| **Posicionamento Digital** | `Posicionamento Digital: Seja Encontrado por Quem Quer Comprar \| NTA Digital` | Service |
| **Site Estratégico** | `Site Estratégico: Transforme Visitantes em Clientes \| NTA Digital` | Service |
| **Sobre** | `Sobre a NTA Digital \| Especialistas em Gerar Clientes pelo Marketing Digital` | Organization |
| **Blog** | `Blog NTA Digital \| Marketing Digital para Vendas e Geração de Clientes` | Blog |
| **Contato** | `Contato \| Fale com a NTA Digital` | ContactPage |

**Requisitos técnicos (do briefing):**
- Site rápido (Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms)
- Responsivo — mobile first
- HTTPS
- Sitemap.xml e robots.txt

---

## Breakpoints Responsivos

| Breakpoint | Target | Adaptações |
|-----------|--------|------------|
| `> 1200px` | Desktop | Layout padrão, grids completos |
| `769–1024px` | Tablet | Grids 2 colunas, hero empilhado |
| `< 768px` | Mobile | Single column, menu hambúrguer, CTAs full-width |

---

## Roadmap de Implementação

```
Fase 1 — Estrutura base
  └── Home completa (todas as seções)

Fase 2 — Páginas de serviço
  ├── Gerar Clientes (/servicos/gerar-clientes)
  ├── Posicionamento Digital
  └── Site Estratégico

Fase 3 — Institucionais
  ├── Sobre
  └── Contato

Fase 4 — Blog & SEO
  ├── Template de posts
  ├── Schema markup
  └── Sitemap + robots.txt

Fase 5 — Integrações e QA
  ├── GTM + GA4 + Ads + Meta Pixel
  ├── WhatsApp flutuante
  └── QA mobile + Core Web Vitals + Launch
```

---

## Checklist Pré-Launch

- [ ] Posicionamento correto em todas as páginas (sem "agência de tráfego pago" isolado)
- [ ] H1 e H2 da Home seguem exatamente o briefing
- [ ] Sem jargão técnico visível ao usuário (ROAS, CPL, CTR, etc.)
- [ ] Botão WhatsApp visível e funcional em todas as páginas
- [ ] Formulário de contato testado e recebendo emails
- [ ] Google Tag Manager instalado e disparando
- [ ] GA4 recebendo eventos de conversão
- [ ] Google Ads conversion tag configurada
- [ ] Meta Pixel instalado e rastreando
- [ ] Schema markup validado (Google Rich Results Test)
- [ ] Sitemap.xml e robots.txt configurados
- [ ] Core Web Vitals aprovados
- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] SSL ativo (HTTPS)
- [ ] Todas as páginas responsivas (mobile-first)
- [ ] 404 page personalizada

---

> **Componentes do Design System:** Todos os componentes (`.ds-card`, `.ds-btn`, `.ds-input`, `.ds-faq`, `.ds-step-card`) estão implementados em `design-system.css`. A construção de cada página deve seguir estritamente os tokens e padrões definidos no Design System.
