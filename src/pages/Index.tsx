
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Github, Facebook, Instagram, Mail, Moon, Sun, Monitor } from "lucide-react";
import ThemeProvider, { useTheme } from "@/components/ThemeProvider";
import SocialCard from "@/components/SocialCard";
import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillSection";
import ColorSelector from "@/components/ColorSelector";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [accentColor, setAccentColor] = useState("blue");
  // Updated theme type to use the Theme type from ThemeProvider
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  const handleThemeChange = (selectedTheme: "light" | "dark" | "system") => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
    
    if (selectedTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      document.documentElement.classList.toggle("dark", selectedTheme === "dark");
    }
  };

  return (
    <ThemeProvider initialTheme={theme}>
      <div className="min-h-screen bg-background text-foreground pb-20">
        {/* Header */}
        <header className="py-6 px-4 md:px-6 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bn0mar
              <Badge variant="outline" className="ml-2 bg-yellow-400 text-black">
                <span className="text-xs">✓</span>
              </Badge>
            </h1>
            <p className="mt-2 text-muted-foreground">Frontend Developer & UI Designer</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 max-w-4xl">
          <Tabs 
            defaultValue={activeTab} 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsContent value="home" className="animate-fade-in space-y-6">
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">مرحباً بك في ملفي الشخصي</h2>
                  <p className="text-muted-foreground">
                    أنا مطور واجهات أمامية متخصص في إنشاء تجارب مستخدم سلسة وجذابة. أعمل على تطوير تطبيقات الويب
                    باستخدام أحدث التقنيات والأدوات.
                  </p>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">كيفية استخدام الموقع:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>استعرض مهاراتي التقنية في قسم <strong>المهارات</strong></li>
                      <li>تصفح مشاريعي السابقة في قسم <strong>المشاريع</strong></li>
                      <li>تواصل معي من خلال وسائل التواصل في قسم <strong>التواصل</strong></li>
                      <li>خصص مظهر الموقع في قسم <strong>الإعدادات</strong></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills" className="animate-fade-in space-y-6">
              <SkillSection />
            </TabsContent>
            
            <TabsContent value="projects" className="animate-fade-in space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard 
                  title="مشروع تطبيق ويب" 
                  description="سيتم إضافة الوصف لاحقاً" 
                  link="" 
                />
                <ProjectCard 
                  title="موقع تفاعلي" 
                  description="سيتم إضافة الوصف لاحقاً" 
                  link="" 
                />
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="animate-fade-in space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SocialCard 
                  platform="TikTok" 
                  username="@m0usa_0mar" 
                  link="https://www.tiktok.com/@m0usa_0mar" 
                  icon="tiktok" 
                />
                <SocialCard 
                  platform="Facebook" 
                  username="mousa.0mar" 
                  link="https://www.facebook.com/mousa.0mar" 
                  icon="facebook" 
                />
                <SocialCard 
                  platform="Instagram" 
                  username="mousa_0mar" 
                  link="https://www.instagram.com/mousa_0mar" 
                  icon="instagram" 
                />
                <SocialCard 
                  platform="GitHub" 
                  username="Hadani0mar" 
                  link="https://github.com/Hadani0mar" 
                  icon="github" 
                />
                <SocialCard 
                  platform="Email" 
                  username="mousa.omar.com@gmail.com" 
                  link="mailto:mousa.omar.com@gmail.com" 
                  icon="mail" 
                />
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="animate-fade-in space-y-6">
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">الإعدادات</h2>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">المظهر</h3>
                      <div className="flex items-center gap-4">
                        <Button 
                          variant={theme === "light" ? "default" : "outline"} 
                          className="flex gap-2"
                          onClick={() => handleThemeChange("light")}
                        >
                          <Sun size={16} />
                          فاتح
                        </Button>
                        <Button 
                          variant={theme === "dark" ? "default" : "outline"} 
                          className="flex gap-2"
                          onClick={() => handleThemeChange("dark")}
                        >
                          <Moon size={16} />
                          داكن
                        </Button>
                        <Button 
                          variant={theme === "system" ? "default" : "outline"} 
                          className="flex gap-2"
                          onClick={() => handleThemeChange("system")}
                        >
                          <Monitor size={16} />
                          النظام
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">ألوان الواجهة</h3>
                      <ColorSelector onChange={(color) => setAccentColor(color)} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bottom Tab Navigation - Moved into the Tabs component */}
            <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border z-10">
              <div className="container mx-auto px-4">
                <TabsList className="w-full h-16">
                  <TabsTrigger value="home">الرئيسية</TabsTrigger>
                  <TabsTrigger value="skills">المهارات</TabsTrigger>
                  <TabsTrigger value="projects">المشاريع</TabsTrigger>
                  <TabsTrigger value="contact">التواصل</TabsTrigger>
                  <TabsTrigger value="settings">الإعدادات</TabsTrigger>
                </TabsList>
              </div>
            </div>
          </Tabs>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
