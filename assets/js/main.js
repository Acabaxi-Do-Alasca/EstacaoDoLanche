(() => {
  'use strict';
  const PHONE = '5518997692145'; // WhatsApp encontrado no HTML original
  const waURL = message => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll('[data-current-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  // Caso as fotos AdobeStock do site original ainda nao tenham sido copiadas,
  // utilizamos ilustracoes locais apenas como demonstracao.
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    const fallback = img.dataset.fallback;
    const recover = () => {
      if (img.getAttribute('src') !== fallback) img.src = fallback;
    };
    img.addEventListener('error', recover);
    if (img.complete && img.naturalWidth === 0) recover();
  });

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('[data-nav-toggle]');
  if (header && toggle) {
    const closeMenu = () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    };
    toggle.addEventListener('click', () => {
      const opened = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.setAttribute('aria-label', opened ? 'Fechar menu' : 'Abrir menu');
    });
    header.querySelectorAll('.desktop-nav a').forEach(anchor => anchor.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  }

  // Demonstracao funcional: filtros de categoria (sem backend).
  const chips = [...document.querySelectorAll('[data-filter]')];
  const products = [...document.querySelectorAll('[data-category]')];
  if (chips.length && products.length) {
    const apply = category => {
      const validCategory = ['todos','hamburguer','combo'].includes(category) ? category : 'todos';
      let visible = 0;
      chips.forEach(chip => chip.setAttribute('aria-pressed', String(chip.dataset.filter === validCategory)));
      products.forEach(card => {
        const show = validCategory === 'todos' || card.dataset.category === validCategory;
        card.hidden = !show;
        if (show) visible++;
      });
      const counter = document.querySelector('[data-product-count]');
      if (counter) counter.textContent = `${visible} ${visible === 1 ? 'produto encontrado' : 'produtos encontrados'}`;
    };
    chips.forEach(chip => chip.addEventListener('click', () => {
      const category = chip.dataset.filter;
      apply(category);
      const url = new URL(window.location.href);
      if (category === 'todos') url.searchParams.delete('categoria');
      else url.searchParams.set('categoria', category);
      history.replaceState(null, '', url);
    }));
    apply(new URLSearchParams(window.location.search).get('categoria') || 'todos');
  }

  // Demonstracao funcional: selecao de quantidade e pedido pre-formatado.
  const qtyRoot = document.querySelector('[data-quantity-selector]');
  if (qtyRoot) {
    const output = qtyRoot.querySelector('[data-quantity]');
    const buy = document.querySelector('[data-product-order]');
    const productName = qtyRoot.dataset.product;
    let quantity = 1;
    const update = () => {
      output.textContent = quantity;
      if (buy) buy.href = waURL(`Olá! Gostaria de pedir ${quantity}x ${productName}.`);
    };
    qtyRoot.querySelectorAll('[data-qty-step]').forEach(button => {
      button.addEventListener('click', () => {
        quantity = Math.max(1, Math.min(20, quantity + Number(button.dataset.qtyStep)));
        update();
      });
    });
    update();
  }

  // Formulario sem backend: abre o WhatsApp com o texto preenchido.
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get('nome') || '').trim();
      const phone = String(data.get('telefone') || '').trim();
      const message = String(data.get('mensagem') || '').trim();
      window.open(waURL(`Olá! Sou ${name}.\nMeu telefone: ${phone}\nMensagem: ${message}`), '_blank', 'noopener,noreferrer');
    });
  }
})();
