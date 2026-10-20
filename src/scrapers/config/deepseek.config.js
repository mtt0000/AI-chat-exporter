export const DEEPSEEK_CONFIG = {
  platform: 'DeepSeek',
  selectors: {
    CONTAINER: 'main',
    CHAT_CONTAINER: 'main',
    USER_TURN: '[data-role="user"]',
    MODEL_TURN: '[data-role="assistant"]',
    USER_CONTENT: '[data-role="user"]',
    MODEL_CONTENT: '[data-role="assistant"]',
    USER_TEXT: 'div',
    MODEL_TEXT: '.ds-markdown',
  },
  scrollConfig: { maxAttempts: 50, delay: 800, stabilityDelay: 500, stabilityTimeout: 10000, scrollIncrement: 0.8 },
  codeLanguageAliases: { 'c++': 'cpp', cpp: 'cpp', 'c#': 'csharp', csharp: 'csharp', javascript: 'js', typescript: 'ts' },
};
export default DEEPSEEK_CONFIG;
