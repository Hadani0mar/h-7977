
/**
 * Sets the active tab in the application
 * @param tabId The ID of the tab to activate
 */
export const setActiveTab = (tabId: string) => {
  // Find all tab triggers
  const tabTriggers = document.querySelectorAll('[role="tab"]');
  
  // Find the requested tab trigger
  let targetTabTrigger: HTMLElement | null = null;
  tabTriggers.forEach(trigger => {
    if (trigger.getAttribute('value') === tabId) {
      targetTabTrigger = trigger as HTMLElement;
    }
  });
  
  // Click the tab if found
  if (targetTabTrigger) {
    targetTabTrigger.click();
  }
};

/**
 * Scrolls to a specific element by selector
 * @param selector CSS selector for the target element
 */
export const scrollToElement = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
