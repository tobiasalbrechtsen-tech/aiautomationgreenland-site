// AI-chatbot på hjemmesiden (n8n).
// Indsæt jeres n8n "Production URL" fra noden "Chat fra hjemmesiden" mellem anførselstegnene.
// Så længe den er tom, vises der ingen chat, og siden virker som før.
const CHAT_WEBHOOK = '';

if (CHAT_WEBHOOK) {
  const en = document.documentElement.lang === 'en';
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(css);
  const theme = document.createElement('style');
  theme.textContent = `:root{--chat--color-primary:#d00c33;--chat--color-primary-shade-50:#b00a2b;--chat--color-secondary:#0a2a43;--chat--header--background:#0a2a43;--chat--header--color:#fff;--chat--toggle--background:#d00c33;--chat--toggle--hover--background:#b00a2b;--chat--message--bot--background:#eaf5fb;--chat--message--user--background:#d00c33;--chat--message--user--color:#fff;--chat--font-family:Inter,system-ui,sans-serif;--chat--window--z-index:40}`;
  document.head.appendChild(theme);
  try {
    const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
    createChat({
      webhookUrl: CHAT_WEBHOOK,
      mode: 'window',
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: en
        ? ['Hi! I am the AI assistant for AI Automation Greenland.', 'What takes up time in your business?']
        : ['Hej! Jeg er AI-assistenten for AI Automation Greenland.', 'Hvad tager tid i jeres hverdag?'],
      i18n: {
        en: en
          ? { title: 'AI Automation Greenland', subtitle: 'AI assistant · answers right away', footer: '', getStarted: 'New conversation', inputPlaceholder: 'Write a message …', closeButtonTooltip: 'Close' }
          : { title: 'AI Automation Greenland', subtitle: 'AI-assistent · svarer med det samme', footer: '', getStarted: 'Ny samtale', inputPlaceholder: 'Skriv en besked …', closeButtonTooltip: 'Luk' },
      },
    });
    // Chatboblen erstatter knappen "Skriv til os" nederst på mobilen.
    document.querySelectorAll('.fab').forEach((f) => f.remove());
  } catch (e) {
    console.warn('Chatten kunne ikke indlæses', e);
  }
}
