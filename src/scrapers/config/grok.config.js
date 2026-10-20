export const GROK_CONFIG = {
  platform: 'Grok',
  selectors: {
    CONTAINER: 'main',
    CHAT_CONTAINER: 'main',
    USER_TURN: '[data-role="user"]',
    MODEL_TURN: '[data-role="model"]',
    USER_CONTENT: '[data-role="user"]',
    MODEL_CONTENT: '[data-role="model"]',
    USER_TEXT: 'div',
    MODEL_TEXT: '.markdown',
  },
  scrollConfig: { maxAttempts: 50, delay: 800, stabilityDelay: 500, stabilityTimeout: 10000, scrollIncrement: 0.8 },
  codeLanguageAliases: { 'c++': 'cpp', cpp: 'cpp', 'c#': 'csharp', csharp: 'csharp', javascript: 'js', typescript: 'ts' },
};
export default GROK_CONFIG;
