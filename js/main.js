/* =========================================================
   LÍVIA CONDE ARQUITETURA — comportamento do site
   Contatos: js/config.js · Portfólio: data/projetos.js
   ========================================================= */
(function () {
  'use strict';

  var S = window.SITE || {};
  var PROJ = window.PROJETOS || [];
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  function waUrl(msg) { return 'https://wa.me/' + S.whatsapp + '?text=' + encodeURIComponent(msg); }
  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }

  /* ---------- Config -> páginas ---------- */
  var igUrl = 'https://instagram.com/' + S.instagram;
  S.instagramArroba = '@' + S.instagram;
  $$('[data-cfg]').forEach(function (el) { el.textContent = S[el.getAttribute('data-cfg')] || ''; });
  $$('[data-wa]').forEach(function (el) { el.href = waUrl(el.getAttribute('data-msg') || S.mensagemPadrao); });
  $$('[data-tel]').forEach(function (el) { el.href = 'tel:' + S.telefoneLink; });
  $$('[data-mail]').forEach(function (el) { el.href = 'mailto:' + S.email; });
  $$('[data-ig]').forEach(function (el) { el.href = igUrl; });
  var anoEl = $('#ano'); if (anoEl) anoEl.textContent = new Date().getFullYear();

  // JSON-LD do negócio: contatos vêm do config.js
  var ld = $('#ld-negocio');
  if (ld) {
    try {
      var o = JSON.parse(ld.textContent);
      o.telephone = S.telefoneLink; o.email = S.email; o.sameAs = [igUrl];
      ld.textContent = JSON.stringify(o);
    } catch (e) {}
  }

  // Analítica: preparada e DESLIGADA. Só carrega se S.analyticsId existir E houver consentimento.
  // (LGPD: antes de ativar, adicione um aviso de cookies que grave localStorage 'lc-consent' = 'granted'.)
  /* ponytail: gancho vazio de propósito; implemente o carregamento do provedor escolhido aqui. */

  if (!$('#header')) return; // páginas auxiliares terminam aqui

  /* ---------- Intro ---------- */
  var intro = $('#intro');
  function startPage() { document.body.classList.add('hero-in'); }
  if (intro && root.classList.contains('has-intro')) {
    try { sessionStorage.setItem('lc-intro', '1'); } catch (e) {}
    var closed = false, t1;
    var closeIntro = function () {
      if (closed) return; closed = true; clearTimeout(t1);
      intro.classList.add('out'); startPage();
      setTimeout(function () { root.classList.remove('has-intro'); }, 700);
    };
    t1 = setTimeout(closeIntro, 1900);
    intro.addEventListener('click', closeIntro);
    document.addEventListener('keydown', closeIntro, { once: true });
  } else { startPage(); }

  /* ---------- Header ---------- */
  var header = $('#header'), burger = $('#burger'), nav = $('#nav');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    root.classList.toggle('lock', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1100) setMenu(false); });

  /* ---------- Hero ---------- */
  var slides = $$('.hero-slide'), si = 0;
  if (slides.length > 1 && !reduce) {
    setInterval(function () {
      slides[si].classList.remove('active');
      si = (si + 1) % slides.length;
      slides[si].classList.add('active');
    }, 6500);
  }

  /* ---------- Revelar ao rolar ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add('in'); }); }

  /* ---------- Rolagem: parallax, linha curva, progresso do processo ---------- */
  var parEls = $$('[data-parallax]'), curve = $('#curve-path'), essence = $('#essencia'), tl = $('#timeline');
  var curveLen = 0;
  if (curve) { curveLen = curve.getTotalLength(); curve.style.strokeDasharray = curveLen; curve.style.strokeDashoffset = reduce ? 0 : curveLen; }
  var ticking = false;
  function frame() {
    ticking = false;
    var vh = window.innerHeight;
    if (!reduce) {
      parEls.forEach(function (img) {
        var r = img.parentNode.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var p = (r.top + r.height / 2 - vh / 2) / vh;
        img.style.transform = 'translate3d(0,' + (p * -48).toFixed(1) + 'px,0)';
      });
      if (curve) {
        var cr = essence.getBoundingClientRect();
        var cp = clamp((vh * 0.85 - cr.top) / (cr.height * 0.9), 0, 1);
        curve.style.strokeDashoffset = (curveLen * (1 - cp)).toFixed(1);
      }
    }
    if (tl) {
      var tr = tl.getBoundingClientRect();
      tl.style.setProperty('--p', clamp((vh * 0.6 - tr.top) / tr.height, 0, 1).toFixed(3));
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req); frame();

  /* ---------- Acordeões ---------- */
  $$('.acc-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item'), open = btn.getAttribute('aria-expanded') !== 'true';
      var acc = item.parentNode;
      if (open) $$('.acc-item.is-open', acc).forEach(function (o) { o.classList.remove('is-open'); $('.acc-btn', o).setAttribute('aria-expanded', 'false'); });
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open);
    });
  });

  /* ---------- Serviços: botões ---------- */
  $$('.acc-item[data-servico]').forEach(function (item) {
    var nome = item.getAttribute('data-servico');
    var wa = $('[data-wa-servico]', item);
    wa.href = waUrl('Olá, Lívia! Vim pelo site e tenho interesse em: ' + nome + '. Gostaria de conversar sobre o meu projeto.');
    wa.target = '_blank'; wa.rel = 'noopener';
    $('[data-brief]', item).addEventListener('click', function () { goBriefing(nome); });
  });
  $$('[data-brief]').forEach(function (b) {
    var v = b.getAttribute('data-brief');
    if (v) b.addEventListener('click', function () { goBriefing(v); });
  });

  /* ---------- Portfólio ---------- */
  var grid = $('#grid'), filters = $('#filters');
  var cats = [];
  PROJ.forEach(function (p) { if (cats.indexOf(p.categoria) < 0) cats.push(p.categoria); });

  grid.innerHTML = PROJ.map(function (p) {
    return '<li class="card' + (p.destaque ? ' card--big' : '') + '" data-cat="' + esc(p.categoria) + '">' +
      '<button class="card-btn" type="button" data-id="' + esc(p.id) + '" aria-label="Abrir projeto ' + esc(p.titulo) + '">' +
      '<img src="' + esc(p.capa) + '" alt="Render do projeto ' + esc(p.titulo) + ' (' + esc(p.categoria) + ')" width="900" height="675" loading="lazy">' +
      '<span class="card-info"><span class="card-cat">' + esc(p.categoria) + '</span><span class="card-title">' + esc(p.titulo) + '</span></span>' +
      '</button></li>';
  }).join('');

  if (cats.length > 1) {
    filters.innerHTML = ['Todos'].concat(cats).map(function (c, i) {
      return '<button class="filter" type="button" data-f="' + (i ? esc(c) : '') + '" aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>';
    }).join('');
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.filter'); if (!b) return;
      $$('.filter', filters).forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      var f = b.getAttribute('data-f');
      $$('.card', grid).forEach(function (c) {
        var show = !f || c.getAttribute('data-cat') === f;
        c.classList.toggle('is-hidden', !show);
        c.classList.remove('show'); void c.offsetWidth;
        if (show) c.classList.add('show');
      });
    });
  } else { filters.hidden = true; }

  grid.addEventListener('click', function (e) {
    var b = e.target.closest('.card-btn'); if (b) location.hash = 'projeto/' + b.getAttribute('data-id');
  });

  // Instagram: 6 miniaturas do portfólio
  var ig = $('#insta-grid');
  var thumbs = PROJ.slice(0, 6);
  ig.innerHTML = thumbs.map(function (p) {
    return '<li><a href="' + igUrl + '" target="_blank" rel="noopener" aria-label="Ver ' + esc(p.titulo) + ' no Instagram"><img src="' + esc(p.capa) + '" alt="' + esc(p.titulo) + '" width="900" height="675" loading="lazy"></a></li>';
  }).join('');

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- Visualizador ---------- */
  var V = $('#viewer'), vImg = $('#v-img'), vThumbs = $('#v-thumbs'), vStage = $('#v-stage');
  var cur = null, idx = 0, lastFocus = null;

  function showPhoto(i) {
    idx = (i + cur.fotos.length) % cur.fotos.length;
    var clone = vImg.cloneNode(); // reinicia a animação de entrada
    clone.src = cur.fotos[idx]; clone.alt = cur.titulo + ' — imagem ' + (idx + 1) + ' de ' + cur.fotos.length;
    vImg.parentNode.replaceChild(clone, vImg); vImg = clone;
    $('#v-count').textContent = cur.fotos.length > 1 ? (idx + 1) + ' / ' + cur.fotos.length : '';
    $$('button', vThumbs).forEach(function (b, k) { b.setAttribute('aria-current', k === idx); });
  }

  function openProject(id) {
    var p = PROJ.filter(function (x) { return x.id === id; })[0];
    if (!p) return false;
    cur = p;
    var multi = p.fotos.length > 1;
    $('#v-cat').textContent = p.categoria;
    $('#v-title').textContent = p.titulo;
    var spec = [['Categoria', p.categoria], ['Local', p.local], ['Ano', p.ano], ['Área', p.area], ['Etapa', p.etapa]];
    $('#v-spec').innerHTML = spec.filter(function (r) { return r[1]; }).map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('');
    $('#v-text').textContent = p.resumo || '';
    $('#v-cta').href = waUrl('Olá, Lívia! Vi o projeto "' + p.titulo + '" no seu site e quero um projeto assim. Podemos conversar?');
    $('#v-prev').hidden = $('#v-next').hidden = !multi;
    vThumbs.hidden = !multi;
    vThumbs.innerHTML = multi ? p.fotos.map(function (f, k) {
      return '<button type="button" aria-label="Ver imagem ' + (k + 1) + '"><img src="' + esc(f) + '" alt="" loading="lazy"></button>';
    }).join('') : '';

    var cmp = $('#v-compare');
    if (p.comparar && p.comparar.antes && p.comparar.depois) {
      var c = p.comparar;
      cmp.innerHTML = '<p class="cmp-title">Render × obra pronta</p><div class="cmp">' +
        '<img src="' + esc(c.depois) + '" alt="' + esc(c.rotuloDepois || 'Obra pronta') + '">' +
        '<img class="cmp-before" src="' + esc(c.antes) + '" alt="' + esc(c.rotuloAntes || 'Render') + '">' +
        '<span class="cmp-label l">' + esc(c.rotuloAntes || 'Render') + '</span><span class="cmp-label r">' + esc(c.rotuloDepois || 'Obra pronta') + '</span>' +
        '<span class="cmp-handle"></span>' +
        '<input type="range" min="0" max="100" value="50" aria-label="Comparar ' + esc(c.rotuloAntes || 'Render') + ' e ' + esc(c.rotuloDepois || 'Obra pronta') + '"></div>';
      var box = $('.cmp', cmp);
      $('input', box).addEventListener('input', function (e) { box.style.setProperty('--pos', e.target.value + '%'); });
    } else { cmp.innerHTML = ''; }

    if (V.hidden) {
      lastFocus = document.activeElement;
      V.hidden = false; void V.offsetWidth; V.classList.add('open');
      root.classList.add('lock'); V.scrollTop = 0;
      $('#v-close').focus();
    }
    $('.v-info', V).scrollTop = 0;
    showPhoto(0);
    document.title = p.titulo + ' — Lívia Conde Arquitetura';
    return true;
  }

  function closeViewer(updateHash) {
    if (V.hidden) return;
    V.classList.remove('open'); root.classList.remove('lock');
    setTimeout(function () { V.hidden = true; }, 400);
    document.title = baseTitle;
    if (updateHash && /^#projeto\//.test(location.hash)) {
      try { history.replaceState(null, '', location.pathname + location.search + '#portfolio'); }
      catch (e) { location.hash = 'portfolio'; }
    }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  var baseTitle = document.title;

  function route() {
    var m = location.hash.match(/^#projeto\/(.+)$/);
    if (m) { if (!openProject(decodeURIComponent(m[1]))) closeViewer(false); }
    else closeViewer(false);
  }
  window.addEventListener('hashchange', route);
  if (/^#projeto\//.test(location.hash)) route();

  $('#v-close').addEventListener('click', function () { closeViewer(true); });
  $('#v-prev').addEventListener('click', function () { showPhoto(idx - 1); });
  $('#v-next').addEventListener('click', function () { showPhoto(idx + 1); });
  vThumbs.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (b) showPhoto($$('button', vThumbs).indexOf(b));
  });
  document.addEventListener('keydown', function (e) {
    if (V.hidden) return;
    if (e.key === 'Escape') closeViewer(true);
    else if (e.key === 'ArrowLeft' && cur.fotos.length > 1 && e.target.tagName !== 'INPUT') showPhoto(idx - 1);
    else if (e.key === 'ArrowRight' && cur.fotos.length > 1 && e.target.tagName !== 'INPUT') showPhoto(idx + 1);
    else if (e.key === 'Tab') { // prende o foco dentro do visualizador
      var f = $$('button, a[href], input', V).filter(function (x) { return !x.hidden && x.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // swipe
  var sx = null;
  vStage.addEventListener('pointerdown', function (e) { sx = e.clientX; });
  vStage.addEventListener('pointerup', function (e) {
    if (sx === null) return;
    var dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 50 && cur.fotos.length > 1) showPhoto(idx + (dx < 0 ? 1 : -1));
  });
  vStage.addEventListener('pointercancel', function () { sx = null; });

  /* ---------- Briefing ---------- */
  var F = $('#briefing-form'), steps = $$('.step', F), step = 0;
  var bar = $('#progress-bar'), label = $('#progress-label');

  function showStep(n, focus) {
    step = n;
    steps.forEach(function (s, k) { s.hidden = k !== n; });
    bar.style.width = ((n + 1) / steps.length * 100) + '%';
    label.textContent = 'Etapa ' + (n + 1) + ' de ' + steps.length;
    if (focus) {
      var f = $('input:not([type=hidden]):not([tabindex]), select, textarea', steps[n]);
      if (f) f.focus({ preventScroll: true });
      $('.form-card').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  }
  function fieldsOf(s) { return $$('input, select, textarea', s).filter(function (f) { return f.type !== 'hidden' && !f.hasAttribute('tabindex'); }); }
  function validate(n) {
    var s = steps[n], err = $('.step-err', s), first = null;
    fieldsOf(s).forEach(function (f) { f.removeAttribute('aria-invalid'); });
    fieldsOf(s).forEach(function (f) {
      if (!first && !f.checkValidity()) first = f;
    });
    if (first) {
      var grp = first.type === 'radio' ? $$('input[name="' + first.name + '"]', s) : [first];
      grp.forEach(function (g) { g.setAttribute('aria-invalid', 'true'); });
      err.textContent = first.getAttribute('data-msg') || first.validationMessage;
      first.focus({ preventScroll: true });
      return false;
    }
    err.textContent = ''; return true;
  }
  F.addEventListener('input', function (e) {
    e.target.removeAttribute('aria-invalid');
    $$('.step-err', F).forEach(function (x) { x.textContent = ''; });
  });
  F.addEventListener('click', function (e) {
    if (e.target.closest('[data-next]') && validate(step)) showStep(step + 1, true);
    else if (e.target.closest('[data-prev]')) showStep(step - 1, true);
  });
  F.addEventListener('keydown', function (e) { // Enter nas etapas 1-3 avança em vez de enviar
    if (e.key === 'Enter' && step < steps.length - 1 && e.target.tagName !== 'TEXTAREA') { e.preventDefault(); if (validate(step)) showStep(step + 1, true); }
  });

  // máscara do WhatsApp
  $('#f-whats').addEventListener('input', function (e) {
    var d = e.target.value.replace(/\D/g, '').slice(0, 11), v = d;
    if (d.length > 6) v = '(' + d.slice(0, 2) + ') ' + d.slice(2, d.length > 10 ? 7 : 6) + '-' + d.slice(d.length > 10 ? 7 : 6);
    else if (d.length > 2) v = '(' + d.slice(0, 2) + ') ' + d.slice(2);
    else if (d.length) v = '(' + d;
    e.target.value = v;
  });

  function value(name) { var el = F.elements[name]; return el ? (el.value || '').trim() : ''; }

  $('#send-wa').addEventListener('click', function () {
    if (!validate(step)) return;
    var linhas = ['Olá, Lívia! Preenchi o briefing no site:', '',
      '*Serviço:* ' + value('servico'),
      '*Tipo:* ' + value('tipo'),
      '*Cidade/UF:* ' + value('cidade_uf'),
      value('metragem') ? '*Metragem:* ' + value('metragem') : null,
      '*Situação:* ' + value('situacao'),
      '*Prazo:* ' + value('prazo'),
      value('mensagem') ? '*Detalhes:* ' + value('mensagem') : null,
      '', '*Nome:* ' + value('nome'), '*E-mail:* ' + value('email'), '*WhatsApp:* ' + value('whatsapp'),
      '*Prefere contato por:* ' + (F.querySelector('[name=preferencia]:checked') || {}).value];
    window.open(waUrl(linhas.filter(function (l) { return l !== null; }).join('\n')), '_blank', 'noopener');
  });

  F.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate(step)) return;
    var err = $('.step-err', steps[step]), btn = $('#send-site');
    if (!S.formKey) { err.textContent = 'O envio pelo site ainda não está configurado. Use "Enviar pelo WhatsApp".'; return; }
    $('#f-key').value = S.formKey;
    btn.disabled = true; btn.textContent = 'Enviando…';
    fetch(F.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(F) })
      .then(function (r) { return r.json(); })
      .then(function (j) { if (!j.success) throw new Error(j.message); })
      .then(function () {
        F.hidden = true;
        var ok = $('#success'); ok.hidden = false; ok.focus();
        $('.form-card').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      })
      .catch(function () {
        err.textContent = 'Não foi possível enviar agora. Tente novamente ou use "Enviar pelo WhatsApp".';
        btn.disabled = false; btn.textContent = 'Enviar pelo site';
      });
  });

  function goBriefing(servico) {
    var r = $$('input[name="servico"]', F).filter(function (x) { return x.value === servico; })[0];
    if (r) { r.checked = true; $$('.step-err', F).forEach(function (x) { x.textContent = ''; }); }
    showStep(0, false);
    $('#briefing').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
  // links "Solicitar orçamento" e afins já rolam via âncora #briefing

  // Botão flutuante some enquanto o briefing está na tela (não cobre os botões de envio)
  var fab = $('#fab');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { fab.classList.toggle('away', es[0].isIntersecting); }, { threshold: 0.05 }).observe($('#briefing'));
  }
})();
