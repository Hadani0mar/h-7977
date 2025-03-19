
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const SkillCard = ({ name, level, category, icon }: SkillCardProps) => {
  return (
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all hover:translate-y-[-5px] duration-300 overflow-hidden skill-card group">
      <CardContent className="p-4 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <i className={icon} style={{ fontSize: "1.25rem" }}></i>
            <h4 className="text-base font-bold text-foreground">{name}</h4>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-1000" 
              style={{ width: `${level}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground font-medium">{level}%</span>
            <span className="text-xs font-medium text-primary">{category}</span>
          </div>
        </div>
        <div className="skill-spotlight absolute inset-0 pointer-events-none z-0"></div>
      </CardContent>
    </Card>
  );
};

const SkillSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const allSkills = [
    // Frontend Skills
    { name: "HTML", level: 95, category: "لغات الواجهة", icon: "bi bi-filetype-html" },
    { name: "CSS", level: 90, category: "لغات الواجهة", icon: "bi bi-filetype-css" },
    { name: "JavaScript", level: 85, category: "لغات الواجهة", icon: "bi bi-filetype-js" },
    { name: "TypeScript", level: 80, category: "لغات الواجهة", icon: "bi bi-filetype-tsx" },
    { name: "React", level: 85, category: "لغات الواجهة", icon: "bi bi-code-slash" },
    
    // Frameworks & Libraries
    { name: "Next.js", level: 75, category: "أطر العمل", icon: "bi bi-laptop" },
    { name: "Tailwind CSS", level: 90, category: "أطر العمل", icon: "bi bi-palette" },
    { name: "Redux", level: 70, category: "أطر العمل", icon: "bi bi-diagram-3" },
    { name: "Shadcn/UI", level: 80, category: "أطر العمل", icon: "bi bi-box" },
    { name: "Material UI", level: 75, category: "أطر العمل", icon: "bi bi-grid" },
    
    // Tools
    { name: "Git", level: 85, category: "أدوات", icon: "bi bi-git" },
    { name: "Figma", level: 70, category: "أدوات", icon: "bi bi-vector-pen" },
    { name: "VS Code", level: 90, category: "أدوات", icon: "bi bi-code-square" },
    { name: "Webpack", level: 65, category: "أدوات", icon: "bi bi-box-seam" },
    { name: "npm/yarn", level: 85, category: "أدوات", icon: "bi bi-terminal" },
  ];
  
  // Show only first 6 skills initially
  const visibleSkills = showAllSkills ? allSkills : allSkills.slice(0, 6);

  return (
    <div className="space-y-6 relative overflow-hidden space-background pb-8">
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Card className="border border-border/40 bg-card/10 backdrop-blur-md hover:shadow-lg transition-all relative z-10">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <i className="bi bi-code-square"></i>
            المهارات التقنية
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {visibleSkills.map((skill, index) => (
              <SkillCard 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                category={skill.category}
                icon={skill.icon}
              />
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button 
              variant="outline" 
              className="gap-2" 
              onClick={() => setShowAllSkills(!showAllSkills)}
            >
              {showAllSkills ? "عرض أقل" : "عرض المزيد"}
              <i className={`bi ${showAllSkills ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillSection;
