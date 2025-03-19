
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define a comprehensive skill interface
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="h-full"
    >
      <Card 
        className="border border-border/40 backdrop-blur-lg hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300 overflow-hidden skill-card group h-full relative"
        style={{ background: `${skill.gradient}20` }}
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
              className="text-3xl p-3 rounded-lg glass-icon"
              style={{ color: skill.iconColor }}
            >
              <i className={skill.icon}></i>
            </div>
          </div>
          
          {skill.description && (
            <p className="text-sm text-muted-foreground mt-2 flex-grow">
              {skill.description}
            </p>
          )}
          
          <div className="skill-spotlight absolute inset-0 pointer-events-none z-0"></div>
          <div className="absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full opacity-20" style={{ background: skill.gradient }}></div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const allSkills: Skill[] = [
    // Frontend Skills
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
    { 
      name: "React", 
      category: "أطر العمل", 
      icon: "bi bi-react", 
      gradient: "linear-gradient(135deg, #61DAFB, #00B2FF)",
      textColor: "#61DAFB",
      iconColor: "#61DAFB",
      description: "مكتبة JavaScript لبناء واجهات المستخدم"
    },
    
    // Frameworks & Libraries
    { 
      name: "Next.js", 
      category: "أطر العمل", 
      icon: "bi bi-ladder", 
      gradient: "linear-gradient(135deg, #000000, #444444)",
      textColor: "#ffffff",
      iconColor: "#ffffff",
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
      name: "Redux", 
      category: "أطر العمل", 
      icon: "bi bi-diagram-3", 
      gradient: "linear-gradient(135deg, #764ABC, #9775d9)",
      textColor: "#764ABC",
      iconColor: "#764ABC",
      description: "مكتبة لإدارة حالة التطبيقات"
    },
    { 
      name: "Shadcn/UI", 
      category: "مكتبات", 
      icon: "bi bi-box", 
      gradient: "linear-gradient(135deg, #000000, #333333)",
      textColor: "#ffffff",
      iconColor: "#ffffff",
      description: "مكونات UI قابلة للتخصيص عالية الجودة"
    },
    { 
      name: "Material UI", 
      category: "مكتبات", 
      icon: "bi bi-grid", 
      gradient: "linear-gradient(135deg, #0081CB, #00B0FF)",
      textColor: "#0081CB",
      iconColor: "#0081CB",
      description: "مكتبة مكونات React تتبع تصميم Material"
    },
    
    // Tools
    { 
      name: "Git", 
      category: "أدوات", 
      icon: "bi bi-git", 
      gradient: "linear-gradient(135deg, #F05032, #F15235)",
      textColor: "#F05032",
      iconColor: "#F05032",
      description: "نظام التحكم بالإصدارات للمشاريع"
    },
    { 
      name: "Figma", 
      category: "تصميم", 
      icon: "bi bi-vector-pen", 
      gradient: "linear-gradient(135deg, #A259FF, #F24E1E)",
      textColor: "#A259FF",
      iconColor: "#F24E1E",
      description: "أداة تصميم واجهات المستخدم التعاونية"
    },
    { 
      name: "VS Code", 
      category: "أدوات", 
      icon: "bi bi-code-square", 
      gradient: "linear-gradient(135deg, #0078D7, #22A7F2)",
      textColor: "#0078D7",
      iconColor: "#0078D7",
      description: "محرر أكواد متكامل لتطوير البرمجيات"
    },
    { 
      name: "Webpack", 
      category: "أدوات", 
      icon: "bi bi-box-seam", 
      gradient: "linear-gradient(135deg, #8DD6F9, #1C78C0)",
      textColor: "#1C78C0",
      iconColor: "#8DD6F9",
      description: "أداة لحزم وإدارة الأصول للمشاريع"
    },
    { 
      name: "npm/yarn", 
      category: "أدوات", 
      icon: "bi bi-terminal", 
      gradient: "linear-gradient(135deg, #CB3837, #E43526)",
      textColor: "#CB3837",
      iconColor: "#CB3837",
      description: "أدوات إدارة حزم JavaScript"
    },
  ];
  
  // Show only first 6 skills initially
  const visibleSkills = showAllSkills ? allSkills : allSkills.slice(0, 6);

  // Scroll to top of container when expanding/collapsing
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showAllSkills]);

  return (
    <div ref={containerRef} className="space-y-6 relative overflow-hidden space-background pb-8">
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Card className="border border-border/40 bg-card/5 backdrop-blur-md hover:shadow-lg transition-all relative z-10">
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
          
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              variant="outline" 
              className="gap-2 glass-card" 
              onClick={() => setShowAllSkills(!showAllSkills)}
            >
              {showAllSkills ? "عرض أقل" : "عرض المزيد من المهارات"}
              <i className={`bi ${showAllSkills ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillSection;
