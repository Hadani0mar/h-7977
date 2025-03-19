
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SocialCardProps {
  platform: string;
  username: string;
  link: string;
  icon: "facebook" | "github" | "instagram" | "tiktok" | "mail";
  verified?: boolean;
}

const SocialCard = ({ platform, username, link, icon, verified = false }: SocialCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group social-card"
    >
      <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all group-hover:scale-105 duration-300 overflow-hidden relative">
        <CardContent className="p-6 flex items-center gap-4 relative z-10">
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all flex items-center justify-center">
            <i className={getIconClass(icon)} style={{ fontSize: "1.5rem" }}></i>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h3 className="font-medium text-foreground">{platform}</h3>
              {verified && (
                <div className="text-primary" title="حساب موثق">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground font-medium">{username}</p>
          </div>
        </CardContent>
        <div className="social-spotlight absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-radial"></div>
      </Card>
    </a>
  );
};

function getIconClass(icon: string): string {
  switch (icon) {
    case "facebook":
      return "bi bi-facebook";
    case "github":
      return "bi bi-github";
    case "instagram":
      return "bi bi-instagram";
    case "tiktok":
      return "bi bi-tiktok";
    case "mail":
      return "bi bi-envelope";
    default:
      return "bi bi-link";
  }
}

export default SocialCard;
