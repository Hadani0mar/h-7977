
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2">
            <span className="text-sm min-w-[120px]">{skill.name}</span>
            <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillSection = () => {
  const frontendSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
  ];

  const frameworksLibraries = [
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 70 },
    { name: "Shadcn/UI", level: 80 },
    { name: "Material UI", level: 75 },
  ];

  const tools = [
    { name: "Git", level: 85 },
    { name: "Figma", level: 70 },
    { name: "VS Code", level: 90 },
    { name: "Webpack", level: 65 },
    { name: "npm/yarn", level: 85 },
  ];

  return (
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all">
      <CardContent className="p-6 space-y-8">
        <SkillCategory title="لغات تطوير الواجهة الأمامية" skills={frontendSkills} />
        <SkillCategory title="أطر العمل والمكتبات" skills={frameworksLibraries} />
        <SkillCategory title="الأدوات والتقنيات" skills={tools} />
      </CardContent>
    </Card>
  );
};

export default SkillSection;
