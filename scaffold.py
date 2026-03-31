import os
import re

pages_dir = 'src/pages'

pages = [
    {
        'file': 'sobre.html',
        'title': 'Sobre a NTA Digital | Especialistas em Gerar Clientes',
        'desc': 'Conheça a NTA Digital: +5 anos gerando clientes...',
        'active': 'sobre.html'
    },
    {
        'file': 'blog.html',
        'title': 'Blog | Dicas e Estratégias de Marketing Digital | NTA Digital',
        'desc': 'Conteúdos, dicas e estratégias avançadas de marketing digital e SEO.',
        'active': 'blog.html'
    },
    {
        'file': 'contato.html',
        'title': 'Contato | Fale com a NTA Digital | (41) 99808-1519',
        'desc': 'Entre em contato com a NTA Digital. WhatsApp, email ou formulário. Atendimento em todo o Brasil.',
        'active': 'contato.html'
    },
    {
        'file': 'gerar-clientes.html',
        'title': 'Como Gerar Clientes e Aumentar Vendas com Marketing Digital',
        'desc': 'Descubra como transformar seu marketing em vendas. Estratégias focadas em gerar clientes...',
        'active': 'servicos.html'
    },
    {
        'file': 'posicionamento-digital.html',
        'title': 'Posicionamento Digital: Sua Marca como Referência no Mercado',
        'desc': 'Construa uma marca forte e seja lembrado pelo seu cliente. Estratégias de posicionamento digital e branding.',
        'active': 'servicos.html'
    },
    {
        'file': 'site-estrategico.html',
        'title': 'Site Estratégico: Landing Pages e Sites Focados em Vendas',
        'desc': 'Criação de sites e landing pages de alta performance, desenhados para conversão e geração de leads.',
        'active': 'servicos.html'
    }
]

with open('src/pages/servicos.html', 'r', encoding='utf-8') as f:
    template = f.read()

head_match = re.search(r'(<head>.*?</head>)', template, flags=re.DOTALL)
body_top_match = re.search(r'(<body[^>]*>.*?)(<main)', template, flags=re.DOTALL)
main_match = re.search(r'(<main id="main"[^>]*>).*?(</main>)', template, flags=re.DOTALL)
body_bottom_match = re.search(r'</main>(.*</body>\s*</html>)', template, flags=re.DOTALL)

for page in pages:
    page_path = os.path.join(pages_dir, page['file'])
    
    top = body_top_match.group(1)
    
    # Remove active class from servicos.html
    top = re.sub(r'class="nav__pill-link nav__pill-link--active"', 'class="nav__pill-link"', top)
    top = re.sub(r'class="nav__link nav__link--active"', 'class="nav__link"', top)
    
    # Add active class to the correct item
    active_regex = r'href="\./{0}" class="nav__pill-link"'.format(page['active'])
    top = re.sub(active_regex, f'href="./{page["active"]}" class="nav__pill-link nav__pill-link--active"', top)
    
    active_mobile_regex = r'href="\./{0}" class="nav__link"'.format(page['active'])
    top = re.sub(active_mobile_regex, f'href="./{page["active"]}" class="nav__link nav__link--active"', top)
    
    head = head_match.group(1)
    head = re.sub(r'<title>.*?</title>', f'<title>{page["title"]}</title>', head, flags=re.DOTALL)
    head = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{page["desc"]}">', head, flags=re.DOTALL)
    
    page_url = page["file"].replace(".html", "")
    if page_url in ["gerar-clientes", "posicionamento-digital", "site-estrategico"]:
        slug = f"servicos/{page_url}"
    else:
        slug = page_url
        
    head = re.sub(r'https://ntadigital\.com\.br/servicos', f'https://ntadigital.com.br/{slug}', head)
    head = re.sub(r'<meta property="og:title" content=".*?">', f'<meta property="og:title" content="{page["title"]}">', head)
    head = re.sub(r'<meta property="og:description" content=".*?">', f'<meta property="og:description" content="{page["desc"]}">', head)
    head = re.sub(r'<meta name="twitter:title" content=".*?">', f'<meta name="twitter:title" content="{page["title"]}">', head)
    head = re.sub(r'<meta name="twitter:description" content=".*?">', f'<meta name="twitter:description" content="{page["desc"]}">', head)

    main_empty = f'{main_match.group(1)}\n        <section class="h-hero pt-32 pb-16">\n            <div class="container">\n                <div class="h-section-header">\n                    <h1 class="h-section-title" style="margin-top: 15vh; text-transform: uppercase">{page["file"].replace(".html", "").replace("-", " ")}</h1>\n                    <p class="h-about__desc">Conteúdo em construção...</p>\n                </div>\n            </div>\n        </section>\n    {main_match.group(2)}'

    main_content = main_empty
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as existing_file:
            existing_html = existing_file.read()
        existing_main_match = re.search(r'(<main id="main"[^>]*>.*?</main>)', existing_html, flags=re.DOTALL)
        if existing_main_match:
            main_content = existing_main_match.group(1)
    
    full_html = f'<!DOCTYPE html>\n<html lang="pt-BR">\n{head}\n{top}{main_content}\n{body_bottom_match.group(1)}'
    
    with open(page_path, 'w', encoding='utf-8') as out:
        out.write(full_html)

print("Scaffolding complete.")
