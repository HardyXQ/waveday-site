const PLAY_URL = '';
const APP_VERSION = '1.4.4';

const LANG_KEY = 'waveday-lang';
const LANGS = ['ru', 'uk', 'en'];
const RIGHTS = {
  ru: 'Все права защищены.',
  uk: 'Всі права захищені.',
  en: 'All rights reserved.'
};
const COPY_HOLDER = 'WaveSign Studio';

const locales = {
  ru: {
    menuOpen: 'Открыть меню',
    menuLabel: 'Меню',
    langLabel: 'Язык',
    navFeatures: 'Возможности',
    navChat: 'Чат',
    navPrivacy: 'Приватность',
    navData: 'Данные',
    navDownload: 'Скачать',
    navSupport: 'Поддержка',
    navLabel: 'Сайт',
    contactsLabel: 'Контакты',
    docsLabel: 'Документы',
    heroLine1: 'Твой день',
    heroAccent: 'в одном приложении',
    heroLead: 'Привычки, задачи, цели, заметки и чаты на твоём устройстве!',
    pillHabits: 'Привычки',
    pillTasks: 'Задачи',
    pillGoals: 'Цели',
    wavyBanner1: 'Спроси Wavy в чате',
    download: 'Скачать',
    downloadSoon: 'Скоро в Google Play',
    playLabel: 'Google Play',
    playBadgeAria: 'Get it on Google Play',
    phoneToday: 'Сегодня',
    phoneStreak: '12 дней',
    phoneWater: 'Пить воду',
    phoneStretch: 'Зарядка',
    phoneMilk: 'Купить молоко',
    phoneCall: 'Созвон 15:00',
    phoneLock: 'Чат закрыт',
    phoneChat: 'Чат',
    phoneE2e: 'E2E',
    featuresTitle: 'Один день — одно место',
    featuresLead: 'Задачи, привычки, цели, заметки и пауза. Планировать день стало проще!',
    feat1: 'Привычки со стриком и напоминаниями',
    feat2: 'Задачи на сегодня, завтра и неделю',
    feat3: 'Wavy в чате — разложить план словами',
    feat4: 'Отправляй другу задачу или привычку прямо из чата',
    pillStats: 'Статистика',
    pillMood: 'Настроение',
    pillChatE2e: 'E2E',
    statsMoodCard: 'Календарь настроения',
    statsTitle: 'Статистика и настроение',
    statsLead: 'Подробная статистика с отслеживанием выполнения привычек, задач и целей',
    statsF1: 'Запись настроения и календарь по дням',
    statsF2: 'Графики привычек и активности',
    themeBase: 'Base',
    themeZefir: 'Зефир',
    themeCustom: 'Своя',
    themePro: 'Pro',
    themesTitle: 'Темы оформления',
    themesLead: 'Меняйте вид приложения под себя: стандартная тема, Зефир или свои цвета чернил и бумаги.',
    themesF1: 'Base — знакомая стандартная тема WaveDay',
    themesF2: 'Все темы адаптированы под светлый и тёмный режим',
    themesF3: 'Своя тема: любая пара цветов, светлый и темный режим (Pro only)',
    chatTitle: 'Чаты со сквозным шифрованием',
    chatLead: 'Все чаты защищены сквозным шифрованием и хранятся только на устройствах собеседников чата',
    chatF2: 'Без входа — локальный планер; чат после авторизации',
    chatF3: 'Присылайте задачи, привычки или цели друзьям и выполняйте вместе',
    msg1: 'Напомни про воду вечером',
    msg2: 'Добавила привычку в твой день',
    msg3: 'Ок, созвон в 15:00',
    wavyTitle: 'Wavy AI',
    wavyLead: 'Твой карманный помощник для планирования. Помогает разложить день, и начать планировать без сложностей.',
    wavyLeadNote: '* Ответы модели могут быть неточными, так как это искусственный интеллект.',
    privacyEyebrow: 'Приватность',
    privacyTitle: 'Простыми словами',
    privacyP1Title: 'Хранение на устройстве',
    privacyP1Text: 'Задачи, привычки, цели и заметки по умолчанию хранятся на устройстве. Если выполнен вход через Google, доступна синхронизация через Google Drive.',
    privacyP2Title: 'Чаты со сквозным шифрованием',
    privacyP2Text: 'Все переписки и ключи шифрования хранятся исключительно локально на устройствах участников чата. При потере устройства чаты не сохраняются.',
    privacyMore: 'Полная политика конфиденциальности',
    faqTitle: 'Частые вопросы',
    faqQ1: 'Нужен ли аккаунт?',
    faqA1: 'Нет. Можно пользоваться «без входа»: день, привычки, задачи и заметки работают локально на телефоне. Чат, синхронизация с Google Drive и Wavy — после входа через Google или почту.',
    faqQ2: 'Где хранятся данные?',
    faqA2: 'На устройстве. Если выполнен вход через Google, доступна синхронизация с помощью Google Drive. Переписка шифруется на телефоне.',
    faqQ3: 'Как перенести на другой телефон?',
    faqA3: 'Войдите в тот же аккаунт на новом телефоне и включите синхронизацию с Google Drive — данные подтянутся из вашей копии. Или в Настройках → «Данные» экспортируйте архив здесь и импортируйте на новом устройстве.',
    faqQ4: 'Как удалить данные?',
    faqA4: 'Аккаунт и данные на сервере: Мой профиль → Иконка редактирования → «Удалить аккаунт». Только локально на устройстве: Настройки → «Сбросить все данные». Без приложения — напишите на wavesign.art@gmail.com.',
    faqDeleteLink: 'Подробнее об удалении',
    faqMore: 'Ещё ответы в поддержке',
    dataTitle: 'Где лежат данные',
    data1: 'Записи — на устройстве',
    data2: 'Синхронизация — ваш Google Drive, если включите',
    data3: 'Чат — зашифрован на телефоне',
    data4: 'Трекеров и рекламы нет',
    ctaTitle: 'Скачать для Android',
    ctaLead: 'Сборка: {{version}}',
    whatsNew: 'Что нового',
    footerDesc: 'Планер от WaveSign Studio',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия',
    deleteAccount: 'Удаление данных',
    footerFeedback: 'Ошибки и идеи',
    cookie: 'На сайте только язык в cookie. Аналитики нет.',
    cookieOk: 'Понятно',
    title: 'WaveDay — планер, привычки и закрытый чат',
    description: 'WaveDay: задачи, привычки и чаты со сквозным шифрованием. Android.'
  },
  uk: {
    menuOpen: 'Відкрити меню',
    menuLabel: 'Меню',
    langLabel: 'Мова',
    navFeatures: 'Можливості',
    navChat: 'Чат',
    navPrivacy: 'Приватність',
    navData: 'Дані',
    navDownload: 'Завантажити',
    navSupport: 'Підтримка',
    navLabel: 'Сайт',
    contactsLabel: 'Контакти',
    docsLabel: 'Документи',
    heroLine1: 'Твій день',
    heroAccent: 'в одному застосунку',
    heroLead: 'Звички, задачі, цілі, нотатки й чати на твоєму пристрої!',
    pillHabits: 'Звички',
    pillTasks: 'Задачі',
    pillGoals: 'Цілі',
    wavyBanner1: 'Запитай Wavy в чаті',
    download: 'Завантажити',
    downloadSoon: 'Скоро в Google Play',
    playLabel: 'Google Play',
    playBadgeAria: 'Get it on Google Play',
    phoneToday: 'Сьогодні',
    phoneStreak: '12 днів',
    phoneWater: 'Пити воду',
    phoneStretch: 'Зарядка',
    phoneMilk: 'Купити молоко',
    phoneCall: 'Дзвінок 15:00',
    phoneLock: 'Чат закрито',
    phoneChat: 'Чат',
    phoneE2e: 'E2E',
    featuresTitle: 'Один день — одне місце',
    featuresLead: 'Задачі, звички, цілі, нотатки й пауза. Планувати день стало простіше!',
    feat1: 'Звички зі стріком і нагадуваннями',
    feat2: 'Задачі на сьогодні, завтра й тиждень',
    feat3: 'Wavy в чаті — розкласти план словами',
    feat4: 'Надсилай другу задачу або звичку прямо з чату',
    pillStats: 'Статистика',
    pillMood: 'Настрій',
    pillChatE2e: 'E2E',
    statsMoodCard: 'Календар настрою',
    statsTitle: 'Статистика і настрій',
    statsLead: 'Детальна статистика з відстеженням виконання звичок, задач і цілей',
    statsF1: 'Запис настрою й календар по днях',
    statsF2: 'Графіки звичок і активності',
    themeBase: 'Base',
    themeZefir: 'Зефір',
    themeCustom: 'Своя',
    themePro: 'Pro',
    themesTitle: 'Теми оформлення',
    themesLead: 'Змінюйте вигляд під себе: стандартна тема, Зефір або свої кольори чорнил і паперу.',
    themesF1: 'Base — знайома стандартна тема WaveDay',
    themesF2: 'Усі теми адаптовані під світлий і темний режим',
    themesF3: 'Своя тема: будь-яка пара кольорів, світлий і темний режим (Pro only)',
    chatTitle: 'Чати із наскрізним шифруванням',
    chatLead: 'Усі чати захищені наскрізним шифруванням і зберігаються лише на пристроях учасників чату',
    chatF2: 'Без входу — локальний планер; чат після авторизації',
    chatF3: 'Надсилайте задачі, звички чи цілі друзям і виконуйте разом',
    msg1: 'Нагадай про воду ввечері',
    msg2: 'Додала звичку в твій день',
    msg3: 'Ок, дзвінок о 15:00',
    wavyTitle: 'Wavy AI',
    wavyLead: 'Твій кишеньковий помічник для планування. Допомагає розкласти день і почати планувати без складностей.',
    wavyLeadNote: '* Відповіді моделі можуть бути неточними, оскільки це штучний інтелект.',
    privacyEyebrow: 'Приватність',
    privacyTitle: 'Простими словами',
    privacyP1Title: 'Зберігання на пристрої',
    privacyP1Text: 'Задачі, звички, цілі й нотатки за замовчуванням зберігаються на пристрої. Після входу через Google доступна синхронізація через Google Drive.',
    privacyP2Title: 'Чати із наскрізним шифруванням',
    privacyP2Text: 'Уся переписка та ключі шифрування зберігаються виключно локально на пристроях учасників чату. При втраті пристрою чати не зберігаються.',
    privacyMore: 'Повна політика конфіденційності',
    faqTitle: 'Часті запитання',
    faqQ1: 'Чи потрібен акаунт?',
    faqA1: 'Ні. Можна «без входу»: день, звички, задачі й нотатки працюють локально на телефоні. Чат, синхронізація з Google Drive і Wavy — після входу через Google або пошту.',
    faqQ2: 'Де зберігаються дані?',
    faqA2: 'На пристрої. Після входу через Google доступна синхронізація за допомогою Google Drive. Листування шифрується на телефоні.',
    faqQ3: 'Як перенести на інший телефон?',
    faqA3: 'Увійдіть у той самий акаунт на новому телефоні й увімкніть синхронізацію з Google Drive — дані підтягнуться з вашої копії. Або в Налаштування → «Дані» експортуйте архів тут і імпортуйте на новому пристрої.',
    faqQ4: 'Як видалити дані?',
    faqA4: 'Акаунт і дані на сервері: Мій профіль → Іконка редагування → «Видалити акаунт». Лише локально на пристрої: Налаштування → «Скинути всі дані». Без застосунку — напишіть на wavesign.art@gmail.com.',
    faqDeleteLink: 'Детальніше про видалення',
    faqMore: 'Більше відповідей у підтримці',
    dataTitle: 'Де лежать дані',
    data1: 'Записи — на пристрої',
    data2: 'Синхронізація — ваш Google Drive, якщо увімкнете',
    data3: 'Чат — зашифрований на телефоні',
    data4: 'Трекерів і реклами немає',
    ctaTitle: 'Завантажити для Android',
    ctaLead: 'Збірка: {{version}}',
    whatsNew: 'Що нового',
    footerDesc: 'Планер від WaveSign Studio',
    privacy: 'Політика конфіденційності',
    terms: 'Умови',
    deleteAccount: 'Видалення даних',
    footerFeedback: 'Помилки та ідеї',
    cookie: 'На сайті лише мова в cookie. Аналітики немає.',
    cookieOk: 'Зрозуміло',
    title: 'WaveDay — планер, звички і закритий чат',
    description: 'WaveDay: задачі, звички і чати із наскрізним шифруванням. Android.'
  },
  en: {
    menuOpen: 'Open menu',
    menuLabel: 'Menu',
    langLabel: 'Language',
    navFeatures: 'Features',
    navChat: 'Chat',
    navPrivacy: 'Privacy',
    navData: 'Data',
    navDownload: 'Download',
    navSupport: 'Support',
    navLabel: 'Site',
    contactsLabel: 'Contact',
    docsLabel: 'Documents',
    heroLine1: 'Your day',
    heroAccent: 'in one app',
    heroLead: 'Habits, tasks, goals, notes and chats on your device!',
    pillHabits: 'Habits',
    pillTasks: 'Tasks',
    pillGoals: 'Goals',
    wavyBanner1: 'Ask Wavy in chat',
    download: 'Download',
    downloadSoon: 'Coming to Google Play',
    playLabel: 'Google Play',
    playBadgeAria: 'Get it on Google Play',
    phoneToday: 'Today',
    phoneStreak: '12 days',
    phoneWater: 'Drink water',
    phoneStretch: 'Stretch',
    phoneMilk: 'Buy milk',
    phoneCall: 'Call 15:00',
    phoneLock: 'Chat locked',
    phoneChat: 'Chat',
    phoneE2e: 'E2E',
    featuresTitle: 'One day, one place',
    featuresLead: 'Tasks, habits, goals, notes and pause. Planning your day got simpler!',
    feat1: 'Habits with streaks and reminders',
    feat2: 'Tasks for today, tomorrow and the week',
    feat3: 'Wavy in chat — plan in plain words',
    feat4: 'Send a friend a task or habit straight from chat',
    pillStats: 'Statistics',
    pillMood: 'Mood',
    pillChatE2e: 'E2E',
    statsMoodCard: 'Mood calendar',
    statsTitle: 'Statistics and mood',
    statsLead: 'Detailed stats that track how you complete habits, tasks and goals',
    statsF1: 'Mood logging and a day-by-day calendar',
    statsF2: 'Habit and activity charts',
    themeBase: 'Base',
    themeZefir: 'Zefir',
    themeCustom: 'Custom',
    themePro: 'Pro',
    themesTitle: 'Themes',
    themesLead: 'Make the app look yours: the default theme, Zefir, or your own ink and paper colours.',
    themesF1: 'Base — the familiar default WaveDay theme',
    themesF2: 'Every theme works in light and dark mode',
    themesF3: 'Custom theme: any colour pair, light and dark mode (Pro only)',
    chatTitle: 'End-to-end encrypted chats',
    chatLead: 'All chats are end-to-end encrypted and stored only on participants\' devices',
    chatF2: 'No sign-in for local planning; chat needs an account',
    chatF3: 'Send tasks, habits or goals to friends and complete them together',
    msg1: 'Remind me about water tonight',
    msg2: 'Added a habit to your day',
    msg3: 'Ok, call stays at 15:00',
    wavyTitle: 'Wavy AI',
    wavyLead: 'Your pocket planning assistant. Helps you break down the day and start planning without the hassle.',
    wavyLeadNote: '* Model answers may be inaccurate because this is artificial intelligence.',
    privacyEyebrow: 'Privacy',
    privacyTitle: 'In plain words',
    privacyP1Title: 'Storage on your device',
    privacyP1Text: 'Tasks, habits, goals and notes are stored on your device by default. After signing in with Google, sync via Google Drive is available.',
    privacyP2Title: 'End-to-end encrypted chats',
    privacyP2Text: 'All conversations and encryption keys are stored exclusively on chat participants\' devices. If a device is lost, chats are not preserved.',
    privacyMore: 'Full privacy policy',
    faqTitle: 'FAQ',
    faqQ1: 'Do I need an account?',
    faqA1: 'No. You can use the app without signing in: your day, habits, tasks and notes work locally on the phone. Chat, Google Drive sync and Wavy need Google or email sign-in.',
    faqQ2: 'Where is data stored?',
    faqA2: 'On your device. After signing in with Google, sync via Google Drive is available. Messages are encrypted on the phone.',
    faqQ3: 'How do I move to another phone?',
    faqA3: 'Sign in to the same account on the new phone and enable Google Drive sync — your copy will download. Or in Settings → Data, export an archive on the old phone and import it on the new one.',
    faqQ4: 'How do I delete data?',
    faqA4: 'Account and server data: My profile → Edit icon → Delete account. On this device only: Settings → Reset all data. Without the app: email wavesign.art@gmail.com.',
    faqDeleteLink: 'More on deletion',
    faqMore: 'More answers in support',
    dataTitle: 'Where data lives',
    data1: 'Records stay on the device',
    data2: 'Sync to your Google Drive if you turn it on',
    data3: 'Chat encrypted on the phone',
    data4: 'No trackers or ads',
    ctaTitle: 'Download for Android',
    ctaLead: 'Build: {{version}}',
    whatsNew: 'What\'s new',
    footerDesc: 'Planner by WaveSign Studio',
    privacy: 'Privacy Policy',
    terms: 'Terms',
    deleteAccount: 'Data deletion',
    footerFeedback: 'Bugs and ideas',
    cookie: 'Only language is stored in a cookie. No analytics.',
    cookieOk: 'Got it',
    title: 'WaveDay — planner, habits and sealed chat',
    description: 'WaveDay: tasks, habits and end-to-end encrypted chats. Android.'
  }
};

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
  try {
    var v = norm(localStorage.getItem(LANG_KEY));
    if (v) return v;
  } catch (e) {}
  var m = document.cookie.match(/(?:^|; )waveday-lang=([^;]*)/);
  return m ? norm(decodeURIComponent(m[1])) : null;
}
function save(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  document.cookie = LANG_KEY + '=' + encodeURIComponent(lang) + ';max-age=31536000;path=/;samesite=lax';
}
function apply(lang) {
  var t = locales[lang] || locales.ru;
  document.documentElement.lang = lang === 'uk' ? 'uk' : lang;
  document.title = t.title;
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t.description);
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key].replace(/\{\{version\}\}/g, APP_VERSION);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria');
    if (t[key]) el.setAttribute('aria-label', t[key]);
  });
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    var on = b.getAttribute('data-set-lang') === lang;
    b.setAttribute('aria-pressed', String(on));
    b.classList.toggle('active', on);
  });
  var r = document.querySelector('[data-rights]');
  if (r) r.textContent = '© ' + new Date().getFullYear() + ' ' + COPY_HOLDER + '. ' + RIGHTS[lang];
}

function setPlayButtons() {
  var href = PLAY_URL || '#download';
  ['playBtn', 'playBtn2'].forEach(function (id) {
    var a = document.getElementById(id);
    if (a) a.setAttribute('href', href);
  });
}

function setMobileNav(open) {
  var nav = document.getElementById('mobileNav');
  var toggle = document.getElementById('menuToggle');
  if (!nav) return;
  nav.hidden = !open;
  document.body.classList.toggle('nav-open', open);
  if (toggle) toggle.setAttribute('aria-expanded', String(open));
}

function initNav() {
  var toggle = document.getElementById('menuToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var nav = document.getElementById('mobileNav');
      setMobileNav(Boolean(nav && nav.hidden));
    });
  }
  document.querySelectorAll('[data-nav-close]').forEach(function (a) {
    a.addEventListener('click', function () { setMobileNav(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMobileNav(false);
  });
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

function initCookie() {
  var box = document.getElementById('cookieNotice');
  var ok = document.getElementById('cookieOk');
  if (!box || !ok) return;
  try {
    if (localStorage.getItem('waveday-cookie-ok')) return;
  } catch (e) {}
  box.hidden = false;
  window.setTimeout(function () { box.classList.add('is-visible'); }, 800);
  ok.addEventListener('click', function () {
    try { localStorage.setItem('waveday-cookie-ok', '1'); } catch (e) {}
    box.classList.remove('is-visible');
    window.setTimeout(function () { box.hidden = true; }, 300);
  });
}

(function () {
  var q = norm(new URLSearchParams(location.search).get('lang'));
  var lang = q || stored() || deviceLang() || 'en';
  apply(lang);
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-set-lang');
      save(l);
      apply(l);
    });
  });
  setPlayButtons();
  initNav();
  initScrollHeader();
  initCookie();
})();
