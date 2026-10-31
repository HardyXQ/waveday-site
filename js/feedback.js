(function () {
  var EMAIL = 'wavesign.art@gmail.com';
  var SUBJECT = {
    ru: { bug: 'WaveDay — ошибка', idea: 'WaveDay — предложение' },
    uk: { bug: 'WaveDay — помилка', idea: 'WaveDay — пропозиція' },
    en: { bug: 'WaveDay — bug report', idea: 'WaveDay — suggestion' }
  };

  function pageLang() {
    var l = document.documentElement.lang || 'ru';
    return l === 'uk' ? 'uk' : l === 'en' ? 'en' : 'ru';
  }

  function buildBody(lang, data) {
    var lines = [];
    if (lang === 'uk') {
      lines.push('Тип: ' + (data.kind === 'bug' ? 'помилка' : 'пропозиція'));
      if (data.device) lines.push('Пристрій: ' + data.device);
      lines.push('', 'Опис:', data.message);
      if (data.contact) lines.push('', 'Відповідь на: ' + data.contact);
    } else if (lang === 'en') {
      lines.push('Type: ' + (data.kind === 'bug' ? 'bug' : 'suggestion'));
      if (data.device) lines.push('Device: ' + data.device);
      lines.push('', 'Description:', data.message);
      if (data.contact) lines.push('', 'Reply to: ' + data.contact);
    } else {
      lines.push('Тип: ' + (data.kind === 'bug' ? 'ошибка' : 'предложение'));
      if (data.device) lines.push('Устройство: ' + data.device);
      lines.push('', 'Текст:', data.message);
      if (data.contact) lines.push('', 'Ответ на: ' + data.contact);
    }
    lines.push('', '—', 'WaveDay feedback (site form)');
    return lines.join('\n');
  }

  [].forEach.call(document.querySelectorAll('.report-form'), function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var lang = form.getAttribute('data-lang') || pageLang();
      if (!SUBJECT[lang]) lang = 'ru';
      var kindEl = form.querySelector('input[name="kind"]:checked');
      var msgEl = form.querySelector('textarea[name="message"]');
      if (!kindEl || !msgEl) return;
      var message = msgEl.value.trim();
      if (!message) {
        msgEl.focus();
        return;
      }
      var deviceEl = form.querySelector('input[name="device"]');
      var contactEl = form.querySelector('input[name="contact"]');
      var subject = SUBJECT[lang][kindEl.value] || SUBJECT.ru.bug;
      var body = buildBody(lang, {
        kind: kindEl.value,
        message: message,
        device: deviceEl ? deviceEl.value.trim() : '',
        contact: contactEl ? contactEl.value.trim() : ''
      });
      window.location.href =
        'mailto:' +
        EMAIL +
        '?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body);
    });
  });
})();
