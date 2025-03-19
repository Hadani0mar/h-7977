
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { setActiveTab, scrollToElement } from '@/utils/navigation';

interface TourStep {
  id: string;
  selector: string;
  title: string;
  content: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  tab?: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 'home-tab',
    selector: '[data-tour="home-tab"]',
    title: 'الصفحة الرئيسية',
    content: 'هنا يمكنك العثور على معلومات عامة حول الملف الشخصي وكيفية استخدام الموقع.',
    placement: 'top',
    tab: 'home'
  },
  {
    id: 'skills-tab',
    selector: '[data-tour="skills-tab"]',
    title: 'المهارات التقنية',
    content: 'استعرض المهارات التقنية المختلفة ومستوى الخبرة في كل منها.',
    placement: 'top',
    tab: 'skills'
  },
  {
    id: 'projects-tab',
    selector: '[data-tour="projects-tab"]',
    title: 'المشاريع السابقة',
    content: 'تصفح المشاريع السابقة والأعمال المنجزة مع روابط للمعاينة والكود المصدري.',
    placement: 'top',
    tab: 'projects'
  },
  {
    id: 'contact-tab',
    selector: '[data-tour="contact-tab"]',
    title: 'وسائل التواصل',
    content: 'تواصل عبر مختلف المنصات الاجتماعية أو البريد الإلكتروني.',
    placement: 'top',
    tab: 'contact'
  },
  {
    id: 'settings-tab',
    selector: '[data-tour="settings-tab"]',
    title: 'الإعدادات',
    content: 'خصص مظهر الموقع وألوانه وحجم الخط ليناسب تفضيلاتك الشخصية.',
    placement: 'top',
    tab: 'settings'
  }
];

interface TooltipProps {
  step: TourStep;
  onNext: () => void;
  onFinish: () => void;
  isLastStep: boolean;
  targetRect: DOMRect | null;
}

const Tooltip = ({ step, onNext, onFinish, isLastStep, targetRect }: TooltipProps) => {
  if (!targetRect) return null;
  
  // Calculate position
  let tooltipStyle: React.CSSProperties = {};
  let arrowStyle: React.CSSProperties = {};
  const ARROW_SIZE = 6;
  const MARGIN = 10;
  
  switch (step.placement || 'top') {
    case 'top':
      tooltipStyle = {
        bottom: window.innerHeight - targetRect.top + MARGIN,
        left: targetRect.left + targetRect.width / 2 - 150,
      };
      arrowStyle = {
        bottom: -ARROW_SIZE,
        left: '50%',
        marginLeft: -ARROW_SIZE
      };
      break;
    case 'right':
      tooltipStyle = {
        left: targetRect.right + MARGIN,
        top: targetRect.top + targetRect.height / 2 - 60,
      };
      arrowStyle = {
        left: -ARROW_SIZE,
        top: '50%',
        marginTop: -ARROW_SIZE
      };
      break;
    case 'bottom':
      tooltipStyle = {
        top: targetRect.bottom + MARGIN,
        left: targetRect.left + targetRect.width / 2 - 150,
      };
      arrowStyle = {
        top: -ARROW_SIZE,
        left: '50%',
        marginLeft: -ARROW_SIZE
      };
      break;
    case 'left':
      tooltipStyle = {
        right: window.innerWidth - targetRect.left + MARGIN,
        top: targetRect.top + targetRect.height / 2 - 60,
      };
      arrowStyle = {
        right: -ARROW_SIZE,
        top: '50%',
        marginTop: -ARROW_SIZE
      };
      break;
  }
  
  return (
    <motion.div 
      className="tour-tooltip fixed z-50 w-72 shadow-lg rounded-md bg-popover text-popover-foreground p-4 border border-border/50 backdrop-blur-sm"
      style={tooltipStyle}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="tour-arrow absolute w-0 h-0 border-solid" 
        style={{
          ...arrowStyle,
          borderWidth: ARROW_SIZE + 'px',
          borderColor: (step.placement === 'top' ? 'transparent transparent var(--border-color) transparent' :
                       step.placement === 'right' ? 'transparent var(--border-color) transparent transparent' :
                       step.placement === 'bottom' ? 'var(--border-color) transparent transparent transparent' :
                       'transparent transparent transparent var(--border-color)')
        }}
      ></div>
      <h3 className="text-base font-bold mb-2">{step.title}</h3>
      <p className="text-xs mb-4">{step.content}</p>
      <div className="flex justify-between">
        <Button 
          size="sm"
          variant="ghost"
          onClick={onFinish}
        >
          إنهاء الجولة
        </Button>
        <Button 
          size="sm"
          onClick={isLastStep ? onFinish : onNext}
        >
          {isLastStep ? 'إنهاء' : 'التالي'}
        </Button>
      </div>
    </motion.div>
  );
};

const TourGuide = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  
  // Start the tour automatically when component mounts
  useEffect(() => {
    // Create portal container if it doesn't exist
    if (!portalRef.current) {
      const div = document.createElement('div');
      div.id = 'tour-portal';
      document.body.appendChild(div);
      portalRef.current = div;
    }
    
    // Check if tour has been completed before
    const tourCompleted = window.localStorage.getItem('tourCompleted') === 'true';
    if (!tourCompleted) {
      // Start tour after a slight delay
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
    
    return () => {
      if (portalRef.current && portalRef.current.parentNode) {
        portalRef.current.parentNode.removeChild(portalRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isActive) return;
    
    const currentStep = TOUR_STEPS[currentStepIndex];
    
    // If we need to change tabs first
    if (currentStep.tab) {
      setActiveTab(currentStep.tab);
    }
    
    // Find the target element with a small delay to ensure tab switching completes
    const targetTimer = setTimeout(() => {
      const targetElement = document.querySelector(currentStep.selector);
      if (targetElement) {
        // Add highlight to the target element
        targetElement.classList.add('tour-highlight');
        
        // Get position
        setTargetRect(targetElement.getBoundingClientRect());
        
        // Scroll into view if needed
        scrollToElement(currentStep.selector);
      }
    }, 300);
    
    return () => {
      clearTimeout(targetTimer);
      // Clean up highlight
      const targetElement = document.querySelector(currentStep.selector);
      if (targetElement) {
        targetElement.classList.remove('tour-highlight');
      }
    };
  }, [currentStepIndex, isActive]);
  
  const handleNext = () => {
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };
  
  const handleFinish = () => {
    setIsActive(false);
    window.localStorage.setItem('tourCompleted', 'true');
  };
  
  // Function to restart the tour - can be called from anywhere
  const restartTour = () => {
    setCurrentStepIndex(0);
    setIsActive(true);
    window.localStorage.removeItem('tourCompleted');
  };
  
  // Make restart function available globally
  useEffect(() => {
    window.restartTour = restartTour;
    return () => {
      delete window.restartTour;
    };
  }, []);
  
  if (!isActive || !portalRef.current) return null;
  
  const currentStep = TOUR_STEPS[currentStepIndex];
  const isLastStep = currentStepIndex === TOUR_STEPS.length - 1;
  
  return createPortal(
    <AnimatePresence>
      <Tooltip 
        step={currentStep}
        onNext={handleNext}
        onFinish={handleFinish}
        isLastStep={isLastStep}
        targetRect={targetRect}
      />
    </AnimatePresence>,
    portalRef.current
  );
};

export default TourGuide;
