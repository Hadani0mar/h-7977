
/**
 * Adds spotlight effects to elements with specific classes
 */
export const initSpotlightEffects = () => {
  // For skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      (card as HTMLElement).style.setProperty('--x', `${x}%`);
      (card as HTMLElement).style.setProperty('--y', `${y}%`);
    });
  });

  // For tab triggers
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = (trigger as HTMLElement).getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      (trigger as HTMLElement).style.setProperty('--tab-x', `${x}%`);
      (trigger as HTMLElement).style.setProperty('--tab-y', `${y}%`);
    });
  });
  
  // For social cards
  const socialCards = document.querySelectorAll('.social-card');
  
  socialCards.forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      (card as HTMLElement).style.setProperty('--social-x', `${x}%`);
      (card as HTMLElement).style.setProperty('--social-y', `${y}%`);
    });
  });
};
