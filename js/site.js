const PLAY_URL = '';
const APP_VERSION = '1.0.2';

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
    heroLead: 'Привычки, задачи, цели и заметки на телефоне. Переписку читаете только вы и собеседник.',
    pillHabits: 'Привычки',
    pillTasks: 'Задачи',
    pillGoals: 'Цели',
    wavyBanner1: 'Спроси Wavy в чате',
    wavyBanner2: 'Запрос уходит в Google Cloud',
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
    featuresLead: 'Задачи, привычки, цели, заметки и отдых. Без лишних экранов и рекламы.',
    feat1: 'Привычки со streak и напоминаниями',
    feat2: 'Задачи на сегодня, завтра и неделю',
    feat3: 'Wavy в чате — разложить план словами',
    feat4: 'Отправить другу задачу или привычку из переписки',
    pillStats: 'Статистика',
    pillMood: 'Настроение',
    statsMoodCard: 'Календарь настроения',
    statsTitle: 'Статистика и настроение',
    statsLead: 'Отдельный раздел в приложении: как проходит день и как вы себя чувствуете. Данные остаются у вас на телефоне.',
    statsF1: 'Запись настроения и календарь по дням',
    statsF2: 'Графики привычек и активности',
    statsF3: 'Достижения и подробная аналитика — в тарифе Pro',
    themeBase: 'Base',
    themeZefir: 'Зефир',
    themeCustom: 'Своя',
    themePro: 'Pro',
    themesTitle: 'Темы оформления',
    themesLead: 'Меняйте вид приложения: базовая тема, готовые палитры и свои цвета «чернил» и «бумаги».',
    themesF1: 'Base — знакомый светлый интерфейс WaveDay',
    themesF2: 'Палитры, например «Зефир», с мягким фоном и акцентом',
    themesF3: 'Своя тема: любая пара цветов, светлый и тёмный режим (Pro)',
    chatTitle: 'Чат со сквозным шифрованием',
    chatF1: 'Заявки на переписку и скрытый статус «в сети»',
    chatF2: 'Без входа — локальный планер; чат после авторизации',
    chatF3: 'Друзья могут прислать вам задачу в день',
    msg1: 'Напомни про воду вечером',
    msg2: 'Добавила привычку в твой день',
    msg3: 'Ок, созвон в 15:00',
    wavyTitle: 'Wavy',
    wavyLead: 'Помогает разложить день в чате. Ответы модели могут быть неточными; запрос уходит в Google Cloud. Не для медицины и юриспруденции.',
    privacyEyebrow: 'Приватность',
    privacyTitle: 'Простыми словами',
    privacyLead: 'Главное отличие WaveDay: ваш планер и переписка не превращаются в рекламный профиль.',
    privacyP1Title: 'Записи на телефоне',
    privacyP1Text: 'Задачи, привычки, цели и заметки по умолчанию хранятся на устройстве. Облако — только ваш Google Drive, если сами включите синхронизацию.',
    privacyP2Title: 'Чат со сквозным шифрованием',
    privacyP2Text: 'Ключи остаются на телефонах. Мы не читаем текст сообщений — только доставляем их так же, как закрытое письмо в конверте.',
    privacyMore: 'Полная политика конфиденциальности',
    faqTitle: 'Частые вопросы',
    faqQ1: 'Нужен ли аккаунт?',
    faqA1: 'Нет. Можно пользоваться «без входа»: день, привычки, задачи и заметки работают локально на телефоне. Чат, синхронизация с Google Drive и Wavy — после входа через Google или почту.',
    faqQ2: 'Где хранятся данные?',
    faqA2: 'Записи планера — на вашем устройстве. Если включите синхронизацию, копия попадает в вашу личную папку Google Drive, не в общую базу студии. Переписка шифруется на телефоне.',
    faqQ3: 'Как перенести на другой телефон?',
    faqA3: 'Войдите в тот же аккаунт на новом телефоне и включите синхронизацию с Google Drive — данные подтянутся из вашей копии. Или в Настройках → «Данные» экспортируйте архив здесь и импортируйте на новом устройстве.',
    faqQ4: 'Как удалить данные?',
    faqA4: 'Аккаунт и данные на сервере: Настройки → Аккаунт → «Удалить аккаунт». Только этот телефон: «Сбросить все данные». Без приложения — напишите на wavesign.art@gmail.com.',
    faqDeleteLink: 'Подробнее об удалении',
    faqMore: 'Ещё ответы в поддержке',
    dataTitle: 'Где лежат данные',
    data1: 'Записи — на устройстве',
    data2: 'Синхронизация — ваш Google Drive, если включите',
    data3: 'Чат — зашифрован на телефоне',
    data4: 'Трекеров и рекламы нет',
    ctaTitle: 'Скачать для Android',
    ctaLead: 'Последняя версия: {{version}}',
    whatsNew: 'Что нового',
    footerDesc: 'Планер от WaveSign Studio',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия',
    deleteAccount: 'Удаление данных',
    footerFeedback: 'Ошибки и идеи',
    cookie: 'На сайте только язык в cookie. Аналитики нет.',
    cookieOk: 'Понятно',
    title: 'WaveDay — планер, привычки и закрытый чат',
    description: 'WaveDay: задачи, привычки и чат со сквозным шифрованием. Android.'
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
    heroLead: 'Звички, задачі, цілі й нотатки на телефоні. Листування читаєте лише ви й співрозмовник.',
    pillHabits: 'Звички',
    pillTasks: 'Задачі',
    pillGoals: 'Цілі',
    wavyBanner1: 'Запитай Wavy в чаті',
    wavyBanner2: 'Запит іде в Google Cloud',
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
    featuresLead: 'Задачі, звички, цілі, нотатки й відпочинок. Без зайвих екранів і реклами.',
    feat1: 'Звички зі streak і нагадуваннями',
    feat2: 'Задачі на сьогодні, завтра й тиждень',
    feat3: 'Wavy в чаті — розкласти план словами',
    feat4: 'Надіслати другу задачу або звичку з листування',
    pillStats: 'Статистика',
    pillMood: 'Настрій',
    statsMoodCard: 'Календар настрою',
    statsTitle: 'Статистика і настрій',
    statsLead: 'Окремий розділ у застосунку: як проходить день і як ви себе почуваєте. Дані лишаються на телефоні.',
    statsF1: 'Запис настрою й календар по днях',
    statsF2: 'Графіки звичок і активності',
    statsF3: 'Досягнення й детальна аналітика — у тарифі Pro',
    themeBase: 'Base',
    themeZefir: 'Зефір',
    themeCustom: 'Своя',
    themePro: 'Pro',
    themesTitle: 'Теми оформлення',
    themesLead: 'Змінюйте вигляд: базова тема, готові палітри й свої кольори «чорнил» і «паперу».',
    themesF1: 'Base — знайомий світлий інтерфейс WaveDay',
    themesF2: 'Палітри, наприклад «Зефір», з м’яким фоном і акцентом',
    themesF3: 'Своя тема: будь-яка пара кольорів, світлий і темний режим (Pro)',
    chatTitle: 'Чат із наскрізним шифруванням',
    chatF1: 'Запити на листування й прихований статус «в мережі»',
    chatF2: 'Без входу — локальний планер; чат після авторизації',
    chatF3: 'Друзі можуть надіслати вам задачу в день',
    msg1: 'Нагадай про воду ввечері',
    msg2: 'Додала звичку в твій день',
    msg3: 'Ок, дзвінок о 15:00',
    wavyTitle: 'Wavy',
    wavyLead: 'Допомагає розкласти день у чаті. Відповіді моделі можуть бути неточними; запит іде в Google Cloud.',
    privacyEyebrow: 'Приватність',
    privacyTitle: 'Простими словами',
    privacyLead: 'Головна відмінність WaveDay: ваш планер і листування не стають рекламним профілем.',
    privacyP1Title: 'Записи на телефоні',
    privacyP1Text: 'Задачі, звички, цілі й нотатки за замовчуванням на пристрої. Хмара — лише ваш Google Drive, якщо самі увімкнете синхронізацію.',
    privacyP2Title: 'Чат із наскрізним шифруванням',
    privacyP2Text: 'Ключі лишаються на телефонах. Ми не читаємо текст повідомлень — лише доставляємо їх, як закритий лист у конверті.',
    privacyMore: 'Повна політика конфіденційності',
    faqTitle: 'Часті запитання',
    faqQ1: 'Чи потрібен акаунт?',
    faqA1: 'Ні. Можна «без входу»: день, звички, задачі й нотатки працюють локально на телефоні. Чат, синхронізація з Google Drive і Wavy — після входу через Google або пошту.',
    faqQ2: 'Де зберігаються дані?',
    faqA2: 'Записи планера — на вашому пристрої. Якщо увімкнете синхронізацію, копія потрапляє у вашу особисту теку Google Drive, не в спільну базу студії. Листування шифрується на телефоні.',
    faqQ3: 'Як перенести на інший телефон?',
    faqA3: 'Увійдіть у той самий акаунт на новому телефоні й увімкніть синхронізацію з Google Drive — дані підтягнуться з вашої копії. Або в Налаштування → «Дані» експортуйте архів тут і імпортуйте на новому пристрої.',
    faqQ4: 'Як видалити дані?',
    faqA4: 'Акаунт і дані на сервері: Налаштування → Акаунт → «Видалити акаунт». Лише цей телефон: «Скинути всі дані». Без застосунку — напишіть на wavesign.art@gmail.com.',
    faqDeleteLink: 'Детальніше про видалення',
    faqMore: 'Більше відповідей у підтримці',
    dataTitle: 'Де лежать дані',
    data1: 'Записи — на пристрої',
    data2: 'Синхронізація — ваш Google Drive, якщо увімкнете',
    data3: 'Чат — зашифрований на телефоні',
    data4: 'Трекерів і реклами немає',
    ctaTitle: 'Завантажити для Android',
    ctaLead: 'Остання версія: {{version}}',
    whatsNew: 'Що нового',
    footerDesc: 'Планер від WaveSign Studio',
    privacy: 'Політика конфіденційності',
    terms: 'Умови',
    deleteAccount: 'Видалення даних',
    footerFeedback: 'Помилки та ідеї',
    cookie: 'На сайті лише мова в cookie. Аналітики немає.',
    cookieOk: 'Зрозуміло',
    title: 'WaveDay — планер, звички і закритий чат',
    description: 'WaveDay: задачі, звички і чат із наскрізним шифруванням. Android.'
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
    heroLead: 'Habits, tasks, goals and notes on your phone. Only you and the other person read your messages.',
    pillHabits: 'Habits',
    pillTasks: 'Tasks',
    pillGoals: 'Goals',
    wavyBanner1: 'Ask Wavy in chat',
    wavyBanner2: 'Requests go to Google Cloud',
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
    featuresLead: 'Tasks, habits, goals, notes and rest. No clutter, no ads.',
    feat1: 'Habits with streaks and reminders',
    feat2: 'Tasks for today, tomorrow and the week',
    feat3: 'Wavy in chat — plan in plain words',
    feat4: 'Send a friend a task or habit from chat',
    pillStats: 'Statistics',
    pillMood: 'Mood',
    statsMoodCard: 'Mood calendar',
    statsTitle: 'Statistics and mood',
    statsLead: 'A dedicated section in the app: how your day goes and how you feel. Data stays on your phone.',
    statsF1: 'Mood logging and a day-by-day calendar',
    statsF2: 'Habit and activity charts',
    statsF3: 'Achievements and deeper analytics — on the Pro plan',
    themeBase: 'Base',
    themeZefir: 'Zefir',
    themeCustom: 'Custom',
    themePro: 'Pro',
    themesTitle: 'Themes',
    themesLead: 'Change how the app looks: the default Base theme, ready palettes and your own ink-and-paper colours.',
    themesF1: 'Base — the familiar light WaveDay look',
    themesF2: 'Palettes such as Zefir with soft paper and accent ink',
    themesF3: 'Custom theme: pick any colour pair, light and dark mode (Pro)',
    chatTitle: 'End-to-end encrypted chat',
    chatF1: 'Message requests and hidden online status',
    chatF2: 'No sign-in for local planning; chat needs an account',
    chatF3: 'Friends can add a task to your day',
    msg1: 'Remind me about water tonight',
    msg2: 'Added a habit to your day',
    msg3: 'Ok, call stays at 15:00',
    wavyTitle: 'Wavy',
    wavyLead: 'Helps sort your day in chat. Model answers can be wrong; requests go to Google Cloud. Not for medical or legal advice.',
    privacyEyebrow: 'Privacy',
    privacyTitle: 'In plain words',
    privacyLead: 'What sets WaveDay apart: your planner and messages are not turned into an ad profile.',
    privacyP1Title: 'Records on your phone',
    privacyP1Text: 'Tasks, habits, goals and notes stay on the device by default. Cloud means your Google Drive only if you turn sync on.',
    privacyP2Title: 'End-to-end encrypted chat',
    privacyP2Text: 'Keys stay on the phones. We cannot read message text — we only relay it, like a sealed envelope.',
    privacyMore: 'Full privacy policy',
    faqTitle: 'FAQ',
    faqQ1: 'Do I need an account?',
    faqA1: 'No. You can use the app without signing in: your day, habits, tasks and notes work locally on the phone. Chat, Google Drive sync and Wavy need Google or email sign-in.',
    faqQ2: 'Where is data stored?',
    faqA2: 'Planner records stay on your device. If you turn sync on, a copy goes to your personal Google Drive folder, not a studio-wide database. Messages are encrypted on the phone.',
    faqQ3: 'How do I move to another phone?',
    faqA3: 'Sign in to the same account on the new phone and enable Google Drive sync — your copy will download. Or in Settings → Data, export an archive on the old phone and import it on the new one.',
    faqQ4: 'How do I delete data?',
    faqA4: 'Account and server data: Settings → Account → Delete account. This phone only: Reset all data. Without the app: email wavesign.art@gmail.com.',
    faqDeleteLink: 'More on deletion',
    faqMore: 'More answers in support',
    dataTitle: 'Where data lives',
    data1: 'Records stay on the device',
    data2: 'Sync to your Google Drive if you turn it on',
    data3: 'Chat encrypted on the phone',
    data4: 'No trackers or ads',
    ctaTitle: 'Download for Android',
    ctaLead: 'Latest version: {{version}}',
    whatsNew: 'What\'s new',
    footerDesc: 'Planner by WaveSign Studio',
    privacy: 'Privacy Policy',
    terms: 'Terms',
    deleteAccount: 'Data deletion',
    footerFeedback: 'Bugs and ideas',
    cookie: 'Only language is stored in a cookie. No analytics.',
    cookieOk: 'Got it',
    title: 'WaveDay — planner, habits and sealed chat',
    description: 'WaveDay: tasks, habits and end-to-end encrypted chat. Android.'
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
