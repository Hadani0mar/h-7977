
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  icon: string;
  index: number;
}

const SkillCard = ({ name, level, category, icon, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all hover:translate-y-[-5px] duration-300 overflow-hidden skill-card group h-full">
        <CardContent className="p-4 relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="text-primary/90 text-xl">
                  <i className={icon}></i>
                </div>
                <h4 className="text-base font-bold text-foreground">{name}</h4>
              </div>
              <Badge variant="outline" className="text-xs font-medium">
                {category}
              </Badge>
            </div>
            
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">مستوى الخبرة</span>
              <span className="text-xs font-medium text-primary">{level}%</span>
            </div>
          </div>
          <div className="skill-spotlight absolute inset-0 pointer-events-none z-0"></div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const allSkills = [
    // Frontend Skills
    { name: "HTML", level: 95, category: "لغات الواجهة", icon: "bi bi-filetype-html" },
    { name: "CSS", level: 90, category: "لغات الواجهة", icon: "bi bi-filetype-css" },
    { name: "JavaScript", level: 85, category: "لغات البرمجة", icon: "bi bi-filetype-js" },
    { name: "TypeScript", level: 80, category: "لغات البرمجة", icon: "bi bi-filetype-tsx" },
    { name: "React", level: 85, category: "أطر العمل", icon: "bi bi-react" },
    
    // Frameworks & Libraries
    { name: "Next.js", level: 75, category: "أطر العمل", icon: "bi bi-ladder" },
    { name: "Tailwind CSS", level: 90, category: "أطر العمل", icon: "bi bi-palette" },
    { name: "Redux", level: 70, category: "أطر العمل", icon: "bi bi-diagram-3" },
    { name: "Shadcn/UI", level: 80, category: "مكتبات", icon: "bi bi-box" },
    { name: "Material UI", level: 75, category: "مكتبات", icon: "bi bi-grid" },
    
    // Tools
    { name: "Git", level: 85, category: "أدوات", icon: "bi bi-git" },
    { name: "Figma", level: 70, category: "تصميم", icon: "bi bi-vector-pen" },
    { name: "VS Code", level: 90, category: "أدوات", icon: "bi bi-code-square" },
    { name: "Webpack", level: 65, category: "أدوات", icon: "bi bi-box-seam" },
    { name: "npm/yarn", level: 85, category: "أدوات", icon: "bi bi-terminal" },
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
                  name={skill.name} 
                  level={skill.level} 
                  category={skill.category}
                  icon={skill.icon}
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
