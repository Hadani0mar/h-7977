
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SocialCardProps {
  platform: string;
  username: string;
  link: string;
  icon: "facebook" | "github" | "instagram" | "tiktok" | "mail";
  verified?: boolean;
}

const SocialCard = ({ platform, username, link, icon, verified = false }: SocialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block group social-card"
      >
        <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all duration-300 overflow-hidden relative h-full">
          <CardContent className="p-6 flex items-center gap-4 relative z-10">
            <div className="p-3 rounded-full relative overflow-hidden icon-spotlight">
              <i className={getIconClass(icon)} style={{ fontSize: "1.5rem" }}></i>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <h3 className="font-medium text-foreground">{platform}</h3>
                {verified && (
                  <div 
                    className="text-primary verification-badge" 
                    title="حساب موثق"
                  >
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
    </motion.div>
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
      return "bi bi-envelope-paper-fill";
    default:
      return "bi bi-link";
  }
}

export default SocialCard;
