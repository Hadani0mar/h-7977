
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useTheme, Theme } from "@/components/ThemeProvider";
import SocialCard from "@/components/SocialCard";
import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillSection";
import ColorSelector from "@/components/ColorSelector";
import Header from "@/components/Header";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [accentColor, setAccentColor] = useState<string>("blue");
  const [fontSize, setFontSize] = useState<number>(100); // 100% is default
  const { theme, setTheme } = useTheme();

  // Apply font size to root element
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-xs', `${0.75 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-sm', `${0.875 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-base', `${1 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-lg', `${1.125 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-xl', `${1.25 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-2xl', `${1.5 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-3xl', `${1.875 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-4xl', `${2.25 * fontSize / 100}rem`);
    document.documentElement.style.setProperty('--font-size-5xl', `${3 * fontSize / 100}rem`);
  }, [fontSize]);

  // Apply accent color
  useEffect(() => {
    document.documentElement.dataset.accent = accentColor;
  }, [accentColor]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-tajawal">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-4xl">
        <Tabs 
          defaultValue="home" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsContent value="home" className="animate-fade-in space-y-6">
            <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all glass-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <i className="bi bi-house-door"></i>
                  مرحباً بك في ملفي الشخصي
                </h2>
                <p className="text-muted-foreground text-base">
                  أنا مطور واجهات أمامية متخصص في إنشاء تجارب مستخدم سلسة وجذابة. أعمل على تطوير تطبيقات الويب
                  باستخدام أحدث التقنيات والأدوات.
                </p>
                
                <div className="mt-6 p-4 bg-primary/5 backdrop-blur-sm rounded-lg glass-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground flex items-center gap-2">
                    <i className="bi bi-info-circle"></i>
                    كيفية استخدام الموقع:
                  </h3>
                  <ul className="list-none space-y-2 text-muted-foreground text-base">
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                      استعرض مهاراتي التقنية في قسم <strong>المهارات</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                      تصفح مشاريعي السابقة في قسم <strong>المشاريع</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                      تواصل معي من خلال وسائل التواصل في قسم <strong>التواصل</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                      خصص مظهر الموقع في قسم <strong>الإعدادات</strong>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className="animate-fade-in">
            <SkillSection />
          </TabsContent>
          
          <TabsContent value="projects" className="animate-fade-in space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard 
                title="مشروع تطبيق ويب" 
                description="تطبيق ويب متكامل مبني بتقنية React وTailwind CSS، يتميز بواجهة مستخدم جذابة وسهلة الاستخدام." 
                link="https://example.com/project1" 
              />
              <ProjectCard 
                title="موقع تفاعلي" 
                description="موقع تفاعلي متجاوب مع جميع أحجام الشاشات، يتضمن تأثيرات حركية متقدمة وواجهة مستخدم حديثة." 
                link="https://example.com/project2" 
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
                verified={true}
              />
              <SocialCard 
                platform="Facebook" 
                username="mousa.0mar" 
                link="https://www.facebook.com/mousa.0mar" 
                icon="facebook"
                verified={true}
              />
              <SocialCard 
                platform="Instagram" 
                username="mousa_0mar" 
                link="https://www.instagram.com/mousa_0mar" 
                icon="instagram"
                verified={true}
              />
              <SocialCard 
                platform="GitHub" 
                username="Hadani0mar" 
                link="https://github.com/Hadani0mar" 
                icon="github"
                verified={true}
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
            <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all glass-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <i className="bi bi-gear"></i>
                  الإعدادات
                </h2>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                      <i className="bi bi-palette"></i>
                      المظهر
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap">
                      <Button 
                        variant={theme === "light" ? "default" : "outline"} 
                        className="flex gap-2 btn-hover-effect"
                        onClick={() => setTheme("light")}
                      >
                        <i className="bi bi-sun"></i>
                        فاتح
                      </Button>
                      <Button 
                        variant={theme === "dark" ? "default" : "outline"} 
                        className="flex gap-2 btn-hover-effect"
                        onClick={() => setTheme("dark")}
                      >
                        <i className="bi bi-moon"></i>
                        داكن
                      </Button>
                      <Button 
                        variant={theme === "system" ? "default" : "outline"} 
                        className="flex gap-2 btn-hover-effect"
                        onClick={() => setTheme("system")}
                      >
                        <i className="bi bi-display"></i>
                        النظام
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                      <i className="bi bi-droplet"></i>
                      ألوان الواجهة
                    </h3>
                    <ColorSelector onChange={(color) => setAccentColor(color)} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                      <i className="bi bi-type"></i>
                      حجم الخط
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium">صغير</span>
                      <Slider 
                        value={[fontSize]} 
                        min={75} 
                        max={150} 
                        step={5} 
                        onValueChange={(values) => setFontSize(values[0])}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium">كبير</span>
                      <span className="text-xs bg-primary/10 px-2 py-1 rounded-md ml-2 font-medium">
                        {fontSize}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bottom Tab Navigation with Icons */}
          <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border z-10">
            <div className="container mx-auto px-4">
              <TabsList className="w-full h-16">
                <TabsTrigger value="home" className="tab-trigger group">
                  <i className="bi bi-house-door text-xl mb-1"></i>
                  <span className="text-xs">الرئيسية</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="tab-trigger group">
                  <i className="bi bi-code-slash text-xl mb-1"></i>
                  <span className="text-xs">المهارات</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="projects" className="tab-trigger group">
                  <i className="bi bi-briefcase text-xl mb-1"></i>
                  <span className="text-xs">المشاريع</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="contact" className="tab-trigger group">
                  <i className="bi bi-envelope text-xl mb-1"></i>
                  <span className="text-xs">التواصل</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="tab-trigger group">
                  <i className="bi bi-gear text-xl mb-1"></i>
                  <span className="text-xs">الإعدادات</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
