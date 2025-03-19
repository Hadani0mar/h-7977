
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all hover:scale-105 duration-300 glass-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-base">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium transition-colors ${!link ? 'pointer-events-none opacity-50' : ''}`}
        >
          <ExternalLink className="h-4 w-4" />
          مشاهدة المشروع
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
