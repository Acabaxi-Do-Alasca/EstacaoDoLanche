# Estação do Lanche — Arquitetura de telas e plano de expansão

> Material de referência para criar páginas futuras sem perder a unidade visual.

## Sistema de navegação

- **Início:** apresenta identidade, categorias, produtos existentes e chamada ao pedido.
- **Cardápio:** listagem de produtos com filtros por categoria. Demonstração funcional sem backend.
- **Detalhe do produto:** foto, nome, composição, valor, quantidade e botão de pedido por WhatsApp.
- **Sobre:** institucional, com copy demonstrativa que deverá ser trocada pela história real.
- **Contato:** WhatsApp, telefone, localidade e formulário preparatório para mensagem.
- **Guia visual (interno):** biblioteca prática para futuras telas.
- **Modelo de página (interno):** base copiável para novas telas.
- **404:** recuperação de navegação quando uma URL não existir.

## Estrutura visual padrão

```text
[Cabeçalho sticky: marca]  [Início] [Cardápio] [Sobre] [Contato] [Fazer pedido]

[Eyebrow: seção]
[Título principal com ênfase curta]   [Texto de apoio]

[Conteúdo principal com largura máxima 1160 px]
[Cards, grids, formulário ou blocos editoriais]

[CTA final em amarelo: próxima ação clara]

[Rodapé escuro: marca, navegação, contato]
```

## Exemplos de futuras telas

### 1. Promoções (`promocoes.html`)

Objetivo: tornar campanhas temporárias fáceis de encontrar, sem misturá-las com os preços usuais.

```text
Eyebrow: Ofertas especiais
Título: Um bom motivo para pedir hoje.
[Card promoção A] [Card promoção B]
[Data/condições da promoção — apenas com dados reais]
[CTA: Consultar pelo WhatsApp]
```

**Componentes:** `.page-intro`, `.badge`, `.product-grid`, `.product-card`, `.cta-banner`.

### 2. Novidades (`novidades.html`)

Objetivo: divulgar produtos recém-chegados usando fotos e textos curtos.

```text
Eyebrow: Acabou de chegar
Título: Novidade que dá água na boca.
[Foto grande] [Título + descrição + preço confirmado]
[Cards de outras novidades]
[CTA: Conhecer o cardápio]
```

**Componentes:** `.feature-layout`, `.feature-visual`, `.product-grid`, `.btn`.

### 3. Entrega e retirada (`como-pedir.html`)

Objetivo: explicar o fluxo operacional real, após confirmar como a empresa atende.

```text
Eyebrow: Como pedir
Título: Seu pedido, do seu jeito.
[Etapa 1] [Etapa 2] [Etapa 3]
[Regras de entrega ou retirada — somente após confirmação]
[CTA: Iniciar conversa]
```

**Componentes:** `.steps`, `.step`, `.info-card`, `.faq-item`.

### 4. Perguntas frequentes (`perguntas.html`)

Objetivo: eliminar dúvidas antes do contato, com respostas mantidas pela loja.

```text
Eyebrow: Precisa de ajuda?
Título: Respondemos por aqui.
[Accordion com pergunta 1]
[Accordion com pergunta 2]
[Accordion com pergunta 3]
[CTA: Não encontrou? Fale com a gente]
```

**Componentes:** `<details class="faq-item">`, `.contact-option`, `.cta-banner`.

### 5. Página de campanha (`campanha.html`)

Objetivo: dedicar uma página a um lançamento/ação especial, com começo, meio e fim.

```text
[Banner editorial com foto licenciada]
[Título e descrição]
[Benefícios / composição do item]
[Imagem e preço confirmado]
[CTA: Conversar sobre a campanha]
```

**Componentes:** `.hero`, `.feature-layout`, `.badge`, `.btn`.

## Checklist antes de criar uma tela

1. Qual é o objetivo principal? (descobrir, escolher, informar ou entrar em contato)
2. Existe uma ação prioritária? Uma CTA principal por seção relevante.
3. O título comunica a utilidade sem depender da imagem?
4. Há conteúdo real para todos os preços, contatos e condições?
5. Os botões continuam claros em tela de 390 px de largura?
6. Há apenas um título principal `h1` e uma hierarquia `h2`/`h3` lógica?
7. Todos os links, campos e ícones com função estão acessíveis via teclado?
8. A página mantém cores e raios definidos em `assets/css/tokens.css`?
9. Novos estilos reutilizáveis estão em `components.css` em vez de duplicados?
10. Se houver dados de cliente, o fluxo possui política e infraestrutura adequadas antes de armazená-los?

## Exemplo de um componente novo

HTML:

```html
<article class="info-card">
  <div class="icon-chip" aria-hidden="true">★</div>
  <h3>Seu novo destaque</h3>
  <p>Explique o benefício com poucas palavras.</p>
  <a class="text-link" href="cardapio.html">Saiba mais →</a>
</article>
```

CSS: não precisa criar um novo CSS para essa composição: `info-card`, `icon-chip` e `text-link` já estão definidos no design system.

## Regra de manutenção

**Tokens** definem a identidade; **base** cuida da legibilidade; **componentes** reaparecem entre páginas; **pages** define apenas composições locais. O arquivo `assets/css/style.css` importa tudo na ordem correta.

Neste exemplo estático o cabeçalho/rodapé está repetido nos HTMLs para funcionar sem etapa de build; ao escalar, use layout compartilhado (ex.: Astro/Eleventy ou componentes server-side).
