
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
}

const SkillCard = ({ name, level, category }: SkillCardProps) => {
  return (
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all hover:scale-105 duration-300 overflow-hidden skill-card group">
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-bold text-foreground">{name}</h4>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${level}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground font-medium">{level}%</span>
          <span className="text-xs font-medium text-primary">{category}</span>
        </div>
        <div className="skill-spotlight"></div>
      </CardContent>
    </Card>
  );
};

const SkillSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const allSkills = [
    // Frontend Skills
    { name: "HTML", level: 95, category: "لغات الواجهة" },
    { name: "CSS", level: 90, category: "لغات الواجهة" },
    { name: "JavaScript", level: 85, category: "لغات الواجهة" },
    { name: "TypeScript", level: 80, category: "لغات الواجهة" },
    { name: "React", level: 85, category: "لغات الواجهة" },
    
    // Frameworks & Libraries
    { name: "Next.js", level: 75, category: "أطر العمل" },
    { name: "Tailwind CSS", level: 90, category: "أطر العمل" },
    { name: "Redux", level: 70, category: "أطر العمل" },
    { name: "Shadcn/UI", level: 80, category: "أطر العمل" },
    { name: "Material UI", level: 75, category: "أطر العمل" },
    
    // Tools
    { name: "Git", level: 85, category: "أدوات" },
    { name: "Figma", level: 70, category: "أدوات" },
    { name: "VS Code", level: 90, category: "أدوات" },
    { name: "Webpack", level: 65, category: "أدوات" },
    { name: "npm/yarn", level: 85, category: "أدوات" },
  ];
  
  // Show only first 6 skills initially
  const visibleSkills = showAllSkills ? allSkills : allSkills.slice(0, 6);

  return (
    <div className="space-y-6 space-background relative overflow-hidden">
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Card className="border border-border/40 bg-card/10 backdrop-blur-md hover:shadow-lg transition-all relative z-10">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-foreground">المهارات التقنية</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {visibleSkills.map((skill, index) => (
              <SkillCard 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                category={skill.category} 
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
              <ChevronDown className={`h-4 w-4 transition-transform ${showAllSkills ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillSection;
