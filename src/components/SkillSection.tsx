
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define a focused skill interface with only important technologies
interface Skill {
  name: string;
  category: string;
  icon: string;
  gradient: string;
  textColor: string;
  iconColor: string;
  description?: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Add spotlight effect on mouse move
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="h-full"
    >
      <Card 
        ref={cardRef}
        className="h-full relative glass-card backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 skill-card"
        style={{ 
          background: `${skill.gradient}10`,
          boxShadow: `0 4px 20px -5px ${skill.gradient.split(')')[0]}25)`
        }}
      >
        <CardContent className="p-5 relative z-10 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="flex flex-col gap-1">
              <h4 
                className="text-lg font-bold" 
                style={{ color: skill.textColor }}
              >
                {skill.name}
              </h4>
              <span className="text-xs font-medium text-foreground/70">{skill.category}</span>
            </div>
            <div 
              className="text-3xl p-3 rounded-lg icon-spotlight relative overflow-hidden"
              style={{ color: skill.iconColor }}
            >
              <i className={skill.icon}></i>
              <div className="absolute inset-0 icon-reflection"></div>
            </div>
          </div>
          
          {skill.description && (
            <p className="text-sm text-muted-foreground mt-2 flex-grow">
              {skill.description}
            </p>
          )}
          
          <div className="skill-spotlight absolute inset-0 pointer-events-none z-0"></div>
          <div className="absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full opacity-10" style={{ background: skill.gradient }}></div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Focused list on core languages and frameworks only
  const allSkills: Skill[] = [
    // Frontend Languages
    { 
      name: "HTML", 
      category: "لغات الواجهة", 
      icon: "bi bi-filetype-html", 
      gradient: "linear-gradient(135deg, #E44D26, #F16529)",
      textColor: "#E44D26",
      iconColor: "#E44D26",
      description: "لغة ترميز المستندات الرئيسية لصفحات الويب"
    },
    { 
      name: "CSS", 
      category: "لغات الواجهة", 
      icon: "bi bi-filetype-css", 
      gradient: "linear-gradient(135deg, #264DE4, #2965F1)",
      textColor: "#264DE4",
      iconColor: "#264DE4",
      description: "لغة تنسيق وتصميم صفحات الويب"
    },
    { 
      name: "JavaScript", 
      category: "لغات البرمجة", 
      icon: "bi bi-filetype-js", 
      gradient: "linear-gradient(135deg, #F0DB4F, #F7DF1E)",
      textColor: "#c8b134",
      iconColor: "#F0DB4F",
      description: "لغة البرمجة الأساسية للويب والتفاعلات"
    },
    { 
      name: "TypeScript", 
      category: "لغات البرمجة", 
      icon: "bi bi-filetype-tsx", 
      gradient: "linear-gradient(135deg, #007ACC, #3178C6)",
      textColor: "#007ACC",
      iconColor: "#007ACC",
      description: "لغة جافاسكريبت قوية بإضافة الأنواع"
    },
    
    // Frameworks
    { 
      name: "React", 
      category: "أطر العمل", 
      icon: "bi bi-react", 
      gradient: "linear-gradient(135deg, #61DAFB, #00B2FF)",
      textColor: "#61DAFB",
      iconColor: "#61DAFB",
      description: "مكتبة JavaScript لبناء واجهات المستخدم"
    },
    { 
      name: "Next.js", 
      category: "أطر العمل", 
      icon: "bi bi-ladder", 
      gradient: "linear-gradient(135deg, #000000, #444444)",
      textColor: "#333333",
      iconColor: "#333333",
      description: "إطار عمل React للتطبيقات الشاملة"
    },
    { 
      name: "Tailwind CSS", 
      category: "أطر العمل", 
      icon: "bi bi-palette", 
      gradient: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
      textColor: "#38BDF8",
      iconColor: "#38BDF8",
      description: "إطار CSS سريع لتصميم واجهات مخصصة"
    },
    { 
      name: "Shadcn/UI", 
      category: "مكتبات", 
      icon: "bi bi-box", 
      gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
      textColor: "#6366F1",
      iconColor: "#6366F1", 
      description: "مكونات UI قابلة للتخصيص عالية الجودة"
    },
  ];
  
  // Show all skills by default since we reduced the total number
  const visibleSkills = allSkills;

  return (
    <div ref={containerRef} className="space-y-6 relative overflow-hidden pb-8">
      <div className="stars-container absolute inset-0 -z-10">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Card className="border border-border/40 glass-card backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <i className="bi bi-code-square"></i>
              المهارات التقنية
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {visibleSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillSection;
