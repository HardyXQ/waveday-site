(function () {
  var KEY = 'waveday-lang';
  var LANGS = ['ru', 'uk', 'en'];
  var RIGHTS = { ru: 'Все права защищены.', uk: 'Всі права захищені.', en: 'All rights reserved.' };
  var NAV_SITE = { ru: 'Сайт', uk: 'Сайт', en: 'Site' };
  var TITLES = window.LEGAL_TITLES || {};
  function norm(c) {
    c = String(c || '').toLowerCase().split(/[-_]/)[0];
    return c === 'ua' ? 'uk' : LANGS.indexOf(c) > -1 ? c : null;
  }
  function deviceLang() {
    var list = [];
    if (navigator.languages && navigator.languages.length) {
      list = Array.prototype.slice.call(navigator.languages);
    } else if (navigator.language) {
      list = [navigator.language];
    }
    for (var i = 0; i < list.length; i++) {
      var n = norm(list[i]);
      if (n) return n;
    }
    return null;
  }
  function stored() {
    try { var v = norm(localStorage.getItem(KEY)); if (v) return v; } catch (e) {}
    var m = document.cookie.match(/(?:^|; )waveday-lang=([^;]*)/);
    return m ? norm(decodeURIComponent(m[1])) : null;
  }
  function save(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.cookie = KEY + '=' + encodeURIComponent(lang) + ';max-age=31536000;path=/;samesite=lax';
  }
  function apply(lang) {
    document.documentElement.lang = lang === 'uk' ? 'uk' : lang;
    if (TITLES[lang]) document.title = TITLES[lang];
    var r = document.querySelector('[data-rights]');
    if (r) r.textContent = '© ' + new Date().getFullYear() + ' WaveSign Studio. ' + RIGHTS[lang];
    [].forEach.call(document.querySelectorAll('[data-lang]'), function (n) {
      n.hidden = n.getAttribute('data-lang') !== lang;
    });
    [].forEach.call(document.querySelectorAll('[data-set-lang]'), function (b) {
      var on = b.getAttribute('data-set-lang') === lang;
      b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('active', on);
    });
    var siteNav = document.querySelector('[data-nav-site]');
    if (siteNav) siteNav.textContent = NAV_SITE[lang] || NAV_SITE.en;
  }
  function initScrollHeader() {
    var bar = document.getElementById('siteBar');
    if (!bar) return;
    var tick = function () {
      bar.classList.toggle('is-scrolled', window.scrollY > 6);
    };
    tick();
    window.addEventListener('scroll', tick, { passive: true });
  }
  var q = norm(new URLSearchParams(location.search).get('lang'));
  apply(q || stored() || deviceLang() || 'en');
  initScrollHeader();
  [].forEach.call(document.querySelectorAll('[data-set-lang]'), function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-set-lang');
      save(l);
      apply(l);
    });
  });
})();
