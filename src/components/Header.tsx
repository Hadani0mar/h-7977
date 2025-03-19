
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header className="py-8 px-4 md:px-6 relative overflow-hidden">
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            Bn0mar
          </h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div 
                  className="text-primary" 
                  title="حساب موثق"
                >
                  <i className="bi bi-patch-check-fill text-2xl"></i>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>حساب موثق</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-lg text-muted-foreground font-medium flex items-center justify-center gap-2">
          <i className="bi bi-code-slash"></i>
          Frontend Developer & UI Designer
        </p>
      </motion.div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-1">
        <div className="absolute top-0 right-0 bg-primary/20 rounded-full w-64 h-64 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-primary/20 rounded-full w-64 h-64 filter blur-3xl"></div>
      </div>
    </header>
  );
};

export default Header;
