import { BaseScraper } from '../base/BaseScraper.js';
import { DEEPSEEK_CONFIG } from '../config/deepseek.config.js';

export class DeepseekScraper extends BaseScraper {
  constructor() {
    super(DEEPSEEK_CONFIG);
  }

  async extractAllMessages(container) {
    const allMessages = [];

    // DeepSeek UI typically separates user and assistant messages
    // Without exact selectors, let's implement a robust generic fallback approach
    // looking for elements that look like chat bubbles or use standard roles.

    const elements = Array.from(container.querySelectorAll(this.selectors.USER_TURN + ', ' + this.selectors.MODEL_TURN));

    if (elements.length > 0) {
      let turnIndex = 0;
      for (const element of elements) {
        const isUser = element.matches(this.selectors.USER_TURN);
        const role = isUser ? 'user' : 'model';
        const contentNode = element.querySelector(isUser ? this.selectors.USER_TEXT : this.selectors.MODEL_TEXT) || element;

        let content = contentNode.innerText || contentNode.textContent || '';

        // Deepseek might use markdown for model
        if (!isUser && this.selectors.MODEL_TEXT) {
          const markdownNode = element.querySelector(this.selectors.MODEL_TEXT);
          if (markdownNode) {
             content = markdownNode.innerText || markdownNode.textContent || '';
          }
        }

        allMessages.push({
          role,
          content: content.trim(),
          media: [],
          uploaded_files: [],
          embedded_documents: [],
          turn_index: turnIndex++,
          timestamp: new Date().toISOString()
        });
      }
      return allMessages;
    }

    // Generic fallback: Try to find alternating elements or specific classes if roles aren't used
    const genericElements = Array.from(container.querySelectorAll('div')); // Highly generic, normally we'd need better selectors
    // ... For now, return what we have or empty
    return allMessages;
  }
}
export default DeepseekScraper;
