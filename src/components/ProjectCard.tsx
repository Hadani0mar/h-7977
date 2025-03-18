
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
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all hover:scale-105 duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground font-medium">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" className="gap-2 font-medium" disabled={!link}>
          <ExternalLink className="h-4 w-4" />
          مشاهدة المشروع
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
