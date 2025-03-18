
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Github, Instagram, Mail, TiktokIcon } from "@/components/ui/icons";

interface SocialCardProps {
  platform: string;
  username: string;
  link: string;
  icon: "facebook" | "github" | "instagram" | "tiktok" | "mail";
}

const SocialCard = ({ platform, username, link, icon }: SocialCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group"
    >
      <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all group-hover:scale-105 duration-300">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all">
            {icon === "facebook" && <Facebook className="h-6 w-6" />}
            {icon === "github" && <Github className="h-6 w-6" />}
            {icon === "instagram" && <Instagram className="h-6 w-6" />}
            {icon === "tiktok" && <TiktokIcon className="h-6 w-6" />}
            {icon === "mail" && <Mail className="h-6 w-6" />}
          </div>
          <div>
            <h3 className="font-medium text-foreground">{platform}</h3>
            <p className="text-sm text-muted-foreground font-medium">{username}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default SocialCard;
