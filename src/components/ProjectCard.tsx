
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

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
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  // Handle image load error
  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setImageError(true);
    setImageLoading(false);
  };
  
  // Handle successful image load
  const handleImageLoad = () => {
    setImageLoading(false);
  };

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
            <AspectRatio ratio={16 / 9} className="bg-muted relative">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                </div>
              )}
              
              {imageError ? (
                <div className="flex h-full w-full flex-col items-center justify-center bg-muted/20 p-4">
                  <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
                  <p className="mt-2 text-xs text-muted-foreground">صورة غير متوفرة</p>
                </div>
              ) : (
                <img
                  src={imageSrc}
                  alt={title}
                  className={cn(
                    "object-cover w-full h-full transition-all hover:scale-105 duration-500",
                    imageLoading ? "opacity-0" : "opacity-100"
                  )}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              )}
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
