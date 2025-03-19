
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
 * Scrolls to a specific element by selector with improved behavior
 * @param selector CSS selector for the target element
 */
export const scrollToElement = (selector: string) => {
  // Small delay to ensure DOM is updated
  setTimeout(() => {
    const element = document.querySelector(selector);
    if (element) {
      // Calculate position to center the element in the viewport
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
      
      // Smooth scroll to the element
      window.scrollTo({
        top: middle,
        behavior: 'smooth'
      });
      
      // Add a subtle highlight animation to draw attention
      element.classList.add('pulse-highlight');
      setTimeout(() => {
        element.classList.remove('pulse-highlight');
      }, 1500);
    }
  }, 100);
};

/**
 * Restarts the tour guide
 * This function is called from the UI when user wants to see the tour again
 */
export const restartTourGuide = () => {
  if (typeof window.restartTour === 'function') {
    window.restartTour();
  } else {
    console.warn('Tour guide restart function not available');
    // Force restart by clearing localStorage
    window.localStorage.removeItem('tourCompleted');
    // Reload the page to restart the tour from the beginning
    window.location.reload();
  }
};
