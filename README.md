# Estação do Lanche — Redesign de interface

Projeto demonstrativo completo, baseado nos arquivos `index(1).html` e `style.css` enviados.

## Como visualizar

1. Extraia este ZIP mantendo as pastas.
2. Abra `index.html` no navegador. O menu e as telas funcionam sem instalar dependências.
3. Abra `cardapio.html`, use os filtros e clique num produto. Veja também `produto.html` e `contato.html`.
4. Abra `guia-visual.html` para conhecer o padrão visual e `modelo-pagina.html` para começar uma nova tela.
5. Se tiver as fotos originais, copie a pasta `images` do site anterior para a pasta `images` deste projeto. Isso substitui automaticamente as ilustrações locais pelos arquivos originais disponíveis.

## Estrutura

```
/
  index.html           — home redesenhada
  cardapio.html        — cardápio com filtro funcional
  produto.html         — detalhe + quantidade + WhatsApp
  sobre.html           — modelo institucional (texto de exemplo)
  contato.html         — formulário que prepara texto no WhatsApp
  guia-visual.html     — biblioteca de componentes para próximas telas
  modelo-pagina.html   — base para futuras telas
  404.html             — página de erro
  assets/
    css/
      tokens.css       — cores, tamanhos, tipografia e espaçamento
      base.css         — reset, grid, títulos e base acessível
      components.css   — cabeçalho, botões, cards, formulário, rodapé
      pages.css        — composição das telas
      style.css        — importa os arquivos acima
    js/main.js         — menu mobile, imagens alternativas, filtros, pedido, formulário
    img/*.svg          — ilustrações provisórias de funcionamento offline
  images/              — coloque aqui as imagens originais do site
  templates/           — instruções para iniciar futuras telas
```

## O que foi mantido do site enviado

- Nome: Estação do Lanche, localidade informada: Birigui/SP.
- Produtos existentes: Smash Burger Fenomenal (R$ 18,90), Extremo Picante Burger (R$ 24,90), Combo Picles (R$ 39,90).
- Descrições e número de WhatsApp encontrado no HTML: +55 18 99769-2145.
- Direção de cores amarelo/vermelho, modernizada com superfícies claras e carvão.

## Pontos que precisam de revisão antes de publicar

- **Telefone:** confirmar se o WhatsApp do HTML original (+55 18 99769-2145) é o contato definitivo; o rodapé original continha números diferentes e fictícios.
- **Endereço e mapa:** o mapa original estava configurado para SESI Penápolis, enquanto o conteúdo menciona Birigui. Retiramos o mapa incorreto e não inventamos endereço de rua.
- **Imagens:** nesta entrega, imagens locais SVG substituem fotografias quando a pasta original `images/` não está presente. Troque por fotos reais/licenciadas para um acabamento fotográfico.
- **Formulário:** a versão antiga não enviava para backend. Aqui o formulário valida campos e abre uma mensagem no WhatsApp (não envia dados silenciosamente nem armazena dados no servidor).
- **Preços e disponibilidade:** preservados do HTML recebido, mas precisam de conferência com a loja.
- **Sobre:** texto demonstrativo, não afirma fatos sobre fundação, horário, serviços de entrega etc.
- **Fontes:** Google Fonts (Outfit + Inter) são opcionais; há fallback seguro em fontes do sistema para funcionar offline.
- **Redes sociais:** os nomes no HTML original não foram transformados em links sem URLs verificadas. Acrescentar URLs reais caso desejado.

## Como criar uma página nova

1. Copie `modelo-pagina.html` na raiz com novo nome, como `promocoes.html`.
2. Altere `<title>`, meta-description, cabeçalho interno e conteúdo das seções.
3. Reutilize `.container`, `.section`, `.section-heading`, `.product-grid`, `.info-card`, `.btn`, `.badge`, `.field`.
4. Se algum novo componente se repetir em duas ou mais páginas, coloque seu CSS em `assets/css/components.css`.
5. Novo layout específico da página vai para `assets/css/pages.css`.
6. Novos padrões de marca (cores, raios, tipografia) devem ser declarados em `assets/css/tokens.css`.
7. Inclua a página no menu e rodapé das páginas que precisam dela.

## Próxima evolução técnica

O site usa HTML, CSS e JavaScript puro, sem backend, compilador ou framework. Para 10+ páginas, vale adotar templates reais (Astro, Eleventy, Django, PHP includes ou outro mecanismo), para não duplicar o cabeçalho/rodapé.

Esta entrega é um protótipo de interface navegável, não um sistema de checkout, estoque ou processamento de pagamentos.
