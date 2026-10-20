import { BaseScraper } from '../base/BaseScraper.js';
import { GROK_CONFIG } from '../config/grok.config.js';

export class GrokScraper extends BaseScraper {
  constructor() {
    super(GROK_CONFIG);
  }

  async extractAllMessages(container) {
    const allMessages = [];

    // Grok UI extraction logic
    const elements = Array.from(container.querySelectorAll(this.selectors.USER_TURN + ', ' + this.selectors.MODEL_TURN));

    if (elements.length > 0) {
      let turnIndex = 0;
      for (const element of elements) {
        const isUser = element.matches(this.selectors.USER_TURN);
        const role = isUser ? 'user' : 'model';
        const contentNode = element.querySelector(isUser ? this.selectors.USER_TEXT : this.selectors.MODEL_TEXT) || element;

        let content = contentNode.innerText || contentNode.textContent || '';

        // Try looking for markdown class in model response
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

    return allMessages;
  }
}
export default GrokScraper;
