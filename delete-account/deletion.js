import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js';
import { getAuth, inMemoryPersistence, setPersistence, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, getAdditionalUserInfo, deleteUser, signOut } from 'https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/12.13.0/firebase-functions.js';

const app = initializeApp({ apiKey: 'AIzaSyC8sZ1a88D3nZfIQWFen7QNpjq7Paea2uc', authDomain: 'wavechat-6ce15.firebaseapp.com', projectId: 'wavechat-6ce15', appId: '1:901066157989:web:3bc738f480e2c3baedc24c' });
const auth = getAuth(app);
const persistenceReady = setPersistence(auth, inMemoryPersistence);
const removeAccount = httpsCallable(getFunctions(app, 'europe-central2'), 'deleteAccountFromWeb', { timeout: 310000 });
const originalLink = window.location.href;
const returning = isSignInWithEmailLink(auth, originalLink);
if (returning) history.replaceState(null, '', location.pathname);
let currentUser = null;
let busy = false;

const text = {
  ru: { send: 'Получить ссылку', verify: 'Проверить адрес', sent: 'Если адрес подходит для входа, письмо со ссылкой отправлено. Проверьте почту и спам.', checking: 'Проверяем…', ready: 'Почта подтверждена. Проверьте сведения и подтвердите удаление ниже.', missing: 'Аккаунт не найден. Если нужна помощь, напишите в поддержку.', failed: 'Не удалось выполнить запрос. Проверьте адрес и ссылку или попробуйте позже.', expired: 'Ссылка недействительна или срок её действия истёк. Запросите новую ссылку.', deleting: 'Удаляем данные… Не закрывайте страницу.', done: 'Аккаунт и связанные данные WaveDay удалены. Данные на устройствах и резервную копию Google Drive удалите самостоятельно.', deleteError: 'Не удалось завершить удаление. Запросите новую ссылку и попробуйте снова.' },
  uk: { send: 'Отримати посилання', verify: 'Перевірити адресу', sent: 'Якщо адреса підходить для входу, лист із посиланням надіслано. Перевірте пошту і спам.', checking: 'Перевіряємо…', ready: 'Пошту підтверджено. Перевірте відомості та підтвердьте видалення нижче.', missing: 'Акаунт не знайдено. Якщо потрібна допомога, напишіть у підтримку.', failed: 'Не вдалося виконати запит. Перевірте адресу й посилання або спробуйте пізніше.', expired: 'Посилання недійсне або термін його дії минув. Запросіть нове.', deleting: 'Видаляємо дані… Не закривайте сторінку.', done: 'Акаунт і пов’язані дані WaveDay видалено. Дані на пристроях та резервну копію Google Drive видаліть самостійно.', deleteError: 'Не вдалося завершити видалення. Запросіть нове посилання й спробуйте ще раз.' },
  en: { send: 'Send verification link', verify: 'Verify email', sent: 'If the address can be used to sign in, a link has been sent. Check your inbox and spam.', checking: 'Checking…', ready: 'Email verified. Review the details and confirm deletion below.', missing: 'No account found. Contact support if you need help.', failed: 'The request failed. Check the email and link or try again later.', expired: 'The link is invalid or has expired. Request a new one.', deleting: 'Deleting data… Please keep this page open.', done: 'Your WaveDay account and associated data have been deleted. Delete data on your devices and your Google Drive backup yourself.', deleteError: 'Deletion could not be completed. Request a new link and try again.' },
};
const tools = Array.from(document.querySelectorAll('[data-tool]'));
for (const el of tools) el.querySelector('[data-delete-status]').textContent = ''; 
function update(key) { for (const el of tools) el.querySelector('[data-delete-status]').textContent = text[el.dataset.tool][key]; }
function lock(value) { busy = value; for (const el of tools) { el.querySelector('[data-delete-form] button').disabled = value; el.querySelector('[data-delete-now]').disabled = value || !el.querySelector('[data-delete-agree]').checked; } }
for (const el of tools) {
  const lang = el.dataset.tool;
  const form = el.querySelector('[data-delete-form]');
  const agree = el.querySelector('[data-delete-agree]');
  const submit = form.querySelector('button');
  if (returning) submit.textContent = text[lang].verify;
  agree.addEventListener('change', () => { el.querySelector('[data-delete-now]').disabled = busy || !agree.checked; });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy) return;
    const email = form.elements.email.value.trim();
    lock(true); update('checking');
    try {
      await persistenceReady;
      if (!returning) {
        await sendSignInLinkToEmail(auth, email, { url: 'https://waveday.wavesign.art/delete-account/', handleCodeInApp: true });
        update('sent');
      } else {
        const result = await signInWithEmailLink(auth, email, originalLink);
        if (getAdditionalUserInfo(result)?.isNewUser) {
          await deleteUser(result.user);
          update('missing');
        } else {
          currentUser = result.user;
          for (const block of tools) { block.querySelector('[data-delete-form]').hidden = true; block.querySelector('[data-delete-confirm]').hidden = false; }
          update('ready');
        }
      }
    } catch (error) {
      update(error?.code === 'auth/expired-action-code' || error?.code === 'auth/invalid-action-code' ? 'expired' : 'failed');
    } finally { lock(false); }
  });
  el.querySelector('[data-delete-now]').addEventListener('click', async () => {
    if (busy || !agree.checked || !currentUser) return;
    lock(true); update('deleting');
    try {
      await removeAccount();
      currentUser = null;
      for (const block of tools) block.querySelector('[data-delete-confirm]').hidden = true;
      update('done');
      signOut(auth).catch(() => {});
    } catch (_) { update('deleteError'); }
    finally { lock(false); }
  });
}
