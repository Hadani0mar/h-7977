
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  githubLink?: string;
  imageSrc?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  link, 
  tags = [], 
  githubLink,
  imageSrc 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all duration-300 h-full glass-card overflow-hidden">
        {imageSrc && (
          <div className="w-full overflow-hidden">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <img
                src={imageSrc}
                alt={title}
                className="object-cover w-full h-full transition-all hover:scale-105 duration-500"
              />
            </AspectRatio>
          </div>
        )}
        
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <div className="text-primary" title="مشروع مميز">
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
          
          <p className="text-muted-foreground text-base">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="pt-0 flex justify-between">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium transition-colors ${!link ? 'pointer-events-none opacity-50' : ''}`}
          >
            <ExternalLink className="h-4 w-4" />
            مشاهدة المشروع
          </a>
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
