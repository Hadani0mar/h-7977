
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header className="py-6 px-4 md:px-6 relative overflow-hidden">
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Bn0mar
          </h1>
          <div className="text-primary verification-badge" title="حساب موثق">
            <i className="bi bi-patch-check-fill text-2xl"></i>
          </div>
        </div>
        <p className="text-lg text-muted-foreground font-medium flex items-center justify-center gap-2">
          <i className="bi bi-code-slash"></i>
          Frontend Developer & UI Designer
        </p>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-1 opacity-10">
        <div className="absolute top-0 right-0 bg-primary rounded-full w-64 h-64 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-primary rounded-full w-64 h-64 filter blur-3xl"></div>
      </div>
    </header>
  );
};

export default Header;
