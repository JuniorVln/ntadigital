# NTA Digital — Contexto do Projeto

## Visão Geral do Projeto

**NTA Digital** é um site institucional para uma agência de marketing digital especializada em geração de clientes e aumento de vendas através de tráfego pago. O projeto é desenvolvido com **HTML5, CSS3 e JavaScript vanilla**, sem frameworks modernos.

### Posicionamento da Marca

A NTA **não** se posiciona como "agência de tráfego pago", mas como:
> **Empresa especializada em aumentar vendas e gerar clientes através do marketing digital.**

Princípios de comunicação:
- **Resultado** (clientes e faturamento)
- **Estratégia** (não apenas execução)
- **Clareza** (sem linguagem técnica)

---

## Estrutura do Projeto

```
NTA DIGITAL/
├── src/                          # Código-fonte do site
│   ├── index.html                # Página inicial (Home)
│   ├── css/
│   │   ├── main.css              # Stylesheet principal (imports)
│   │   ├── tokens.css            # Design tokens (variáveis CSS)
│   │   ├── reset.css             # Reset CSS
│   │   ├── layout.css            # Layout e grid
│   │   ├── components.css        # Componentes UI
│   │   ├── animations.css        # Animações e transições
│   │   └── home.css              # Estilos específicos da Home
│   ├── js/
│   │   └── main.js               # JavaScript principal
│   ├── pages/                    # Páginas internas
│   │   ├── servicos.html
│   │   ├── gerar-clientes.html
│   │   ├── posicionamento-digital.html
│   │   ├── site-estrategico.html
│   │   ├── sobre.html
│   │   ├── blog.html
│   │   └── contato.html
│   └── assets/
│       ├── img/                  # Imagens e logos
│       ├── fonts/                # Fontes locais (se houver)
│       └── icons/                # Ícones customizados
├── Design System/                # Assets de referência (PNGs)
├── design-system.html            # Documentação visual do DS
├── design-system.css             # CSS do Design System (standalone)
├── planejamento_site_nta.md      # Planejamento detalhado do site
├── vercel.json                   # Configuração de deploy (Vercel)
└── .gitignore
```

---

## Arquitetura de Páginas

| Página | Slug | Arquivo | Status |
|--------|------|---------|--------|
| Home | `/` | `src/index.html` | ✅ Implementada |
| Serviços | `/servicos` | `src/pages/servicos.html` | ⚠️ Placeholder |
| Gerar Clientes | `/servicos/gerar-clientes` | `src/pages/gerar-clientes.html` | ⚠️ Placeholder |
| Posicionamento Digital | `/servicos/posicionamento-digital` | `src/pages/posicionamento-digital.html` | ⚠️ Placeholder |
| Site Estratégico | `/servicos/site-estrategico` | `src/pages/site-estrategico.html` | ⚠️ Placeholder |
| Sobre | `/sobre` | `src/pages/sobre.html` | ⚠️ Placeholder |
| Blog | `/blog` | `src/pages/blog.html` | ⚠️ Placeholder |
| Contato | `/contato` | `src/pages/contato.html` | ⚠️ Placeholder |

---

## Design System

O Design System está documentado em `design-system.html` e `design-system.css`.

### Tokens Principais

```css
/* Cores */
--bg-primary: #080808;          /* Fundo principal (preto) */
--bg-card: #0F0F0F;             /* Fundo de cards */
--amber: #FFB400;               /* Cor de destaque (âmbar/dourado) */
--whatsapp: #25D366;            /* Verde WhatsApp */

/* Tipografia */
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;

/* Espaçamento (base 8px) */
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-24: 96px;

/* Bordas */
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 999px;
```

### Componentes Disponíveis

- **Botões**: `.btn--primary`, `.btn--whatsapp`, `.btn--secondary`, `.btn--ghost`
- **Cards**: `.h-service-card`, `.h-stat`, `.h-proof__item`
- **Inputs**: `.input-wrapper`, `.textarea-wrapper`
- **Badges**: `.h-section-tag`, `.h-service-card__tag`
- **Navegação**: `.nav`, `.nav__pill`, `.nav__mobile`

---

## Building e Running

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge)
- Opcional: Live Server (VS Code) ou servidor HTTP simples

### Desenvolvimento Local

```bash
# Opção 1: VS Code Live Server
# Clique com botão direito em src/index.html → "Open with Live Server"

# Opção 2: Python HTTP Server
cd "src"
python -m http.server 8000
# Acessar: http://localhost:8000

# Opção 3: Node.js http-server
npx http-server src -p 8000
```

### Build

Não há processo de build — o projeto usa **CSS e JavaScript puros**, sem bundlers.

### Deploy

O deploy é feito via **Vercel**, configurado em `vercel.json`:

```json
{
  "outputDirectory": "src",
  "rewrites": [
    { "source": "/servicos", "destination": "/pages/servicos.html" },
    ...
  ]
}
```

---

## Convenções de Desenvolvimento

### CSS

1. **Ordering**: Imports em `main.css` seguem ordem específica:
   ```css
   @import url('./tokens.css');
   @import url('./reset.css');
   @import url('./layout.css');
   @import url('./components.css');
   @import url('./animations.css');
   ```

2. **Nomenclatura**: BEM-like com prefixos:
   - `.h-*` → Home page components
   - `.nav-*` → Navegação
   - `.btn-*` → Botões
   - `.ds-*` → Design System (arquivo standalone)

3. **Comentários**: Usar `/* ═══════ Section ═══════ */` para separar seções grandes

4. **Mobile-first breakpoints**:
   - `@media (max-width: 768px)` → Tablet e mobile
   - `@media (max-width: 480px)` → Mobile pequeno

### JavaScript

1. **Padrão**: Funções nomeadas e organizadas por feature
2. **Inicialização**: `DOMContentLoaded` como ponto de entrada
3. **Eventos**: Usar `{ passive: true }` em listeners de scroll

### HTML

1. **Semântica**: Usar tags semânticas (`<nav>`, `<main>`, `<section>`, `<article>`)
2. **Acessibilidade**: Atributos `aria-*` e `role` quando necessário
3. **SEO**: Meta tags completas por página (title, description, OG, Twitter Card)

---

## Integrações Técnicas

| Integração | Status | Detalhes |
|------------|--------|----------|
| WhatsApp Floating CTA | ✅ | Botão fixo em todas as páginas |
| Google Tag Manager | ⏳ | Placeholder no `<head>` |
| Google Analytics 4 | ⏳ | Via GTM |
| Google Ads Conversion | ⏳ | Tag nos botões WhatsApp |
| Meta Pixel | ⏳ | Via GTM |
| Schema Markup | ✅ | LocalBusiness na Home |
| Lucide Icons | ✅ | CDN: `unpkg.com/lucide` |
| Google Fonts | ✅ | Space Grotesk + Inter |

---

## Roadmap de Implementação

```
Fase 1 — Estrutura base (em andamento)
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

- [ ] Posicionamento correto em todas as páginas
- [ ] H1 e H2 da Home seguem o briefing
- [ ] Sem jargão técnico visível (ROAS, CPL, CTR)
- [ ] Botão WhatsApp funcional em todas as páginas
- [ ] Formulário de contato testado
- [ ] Google Tag Manager instalado
- [ ] GA4 recebendo eventos de conversão
- [ ] Google Ads conversion tag configurada
- [ ] Meta Pixel instalado
- [ ] Schema markup validado
- [ ] Sitemap.xml e robots.txt
- [ ] Core Web Vitals aprovados
- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] SSL ativo (HTTPS)
- [ ] Todas as páginas responsivas

---

## Referências

- **Briefing do Cliente**: `BRIEFING_NTA.pdf` (não enviar para repositório público)
- **Planejamento Completo**: `planejamento_site_nta.md`
- **Design System Visual**: `design-system.html`
- **Assets de Referência**: pasta `Design System/` (PNGs)

---

## Contato do Projeto

- **WhatsApp**: (41) 99808-1519
- **Email**: contato@ntadigital.com.br
- **Localização**: Curitiba, PR, Brasil
