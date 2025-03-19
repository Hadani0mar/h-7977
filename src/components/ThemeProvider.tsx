
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider = ({ children, initialTheme = "system" }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") as Theme || initialTheme
  );
  
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Clear existing theme classes
    root.classList.remove("light", "dark");
    
    // Apply appropriate theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    // Store theme preference
    localStorage.setItem("theme", theme);
    
    // Apply text rendering improvements
    root.style.textRendering = "optimizeLegibility";
    root.style.webkitFontSmoothing = "antialiased";
    root.style.mozOsxFontSmoothing = "grayscale";
    
    // Configure font display
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Tajawal';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      const handleChange = () => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(mediaQuery.matches ? "dark" : "light");
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const value = { theme, setTheme };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
