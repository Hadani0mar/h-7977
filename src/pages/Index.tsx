import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useTheme } from "@/components/ThemeProvider";
import { restartTourGuide } from "@/utils/navigation";
import SocialCard from "@/components/SocialCard";
import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillSection";
import ColorSelector from "@/components/ColorSelector";
import Header from "@/components/Header";
import TourGuide from "@/components/TourGuide";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [accentColor, setAccentColor] = useState<string>("blue");
  const [fontSize, setFontSize] = useState<number>(100); // 100% is default
  const { theme, setTheme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

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

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    console.error("Error loading image");
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-tajawal">
      {/* Tour Guide Component */}
      <TourGuide />

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-border/40 glass-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                        <i className="bi bi-house-door"></i>
                        مرحباً بك في ملفي الشخصي
                      </h2>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        أنا مطور واجهات أمامية متخصص في إنشاء تجارب مستخدم سلسة وجذابة. أعمل على تطوير تطبيقات الويب
                        باستخدام أحدث التقنيات والأدوات. أسعى دائمًا لتعلم كل ما هو جديد في عالم تطوير الويب وتطبيقه
                        في مشاريعي.
                      </p>
                    </div>
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      {!imageLoaded ? (
                        <div className="flex items-center justify-center h-48 bg-muted/20 rounded-lg animate-pulse">
                          <i className="bi bi-image text-4xl text-muted"></i>
                        </div>
                      ) : imageError ? (
                        <div className="flex flex-col items-center justify-center h-48 bg-muted/10 rounded-lg border border-dashed border-muted">
                          <i className="bi bi-exclamation-triangle text-3xl text-muted-foreground mb-2"></i>
                          <p className="text-sm text-muted-foreground">يرجى إضافة صورة في مجلد الصور</p>
                        </div>
                      ) : null}
                      <img 
                        src="https://storyset.com/illustration/data-reports/pana" 
                        alt="Developer illustration" 
                        className={`w-full h-auto object-contain ${!imageLoaded || imageError ? 'hidden' : 'block'}`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                      />
                      <div className="text-center text-xs text-muted-foreground mt-2">
                        <a href="https://storyset.com/data" target="_blank" rel="noopener noreferrer">Data illustrations by Storyset</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 backdrop-blur-sm rounded-lg border border-primary/10">
                    <h3 className="text-lg font-medium mb-3 text-foreground flex items-center gap-2">
                      <i className="bi bi-info-circle"></i>
                      كيفية استخدام الموقع:
                    </h3>
                    <ul className="list-none space-y-3 text-muted-foreground text-base">
                      <li className="flex items-start gap-2">
                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                        <span>استعرض مهاراتي التقنية في قسم <strong className="text-foreground">المهارات</strong> لمعرفة مستوى خبرتي في مختلف التقنيات.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                        <span>تصفح مشاريعي السابقة في قسم <strong className="text-foreground">المشاريع</strong> للاطلاع على أعمالي السابقة.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                        <span>تواصل معي من خلال وسائل التواصل في قسم <strong className="text-foreground">التواصل</strong> للاستفسارات أو التعليقات.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                        <span>خصص مظهر الموقع في قسم <strong className="text-foreground">الإعدادات</strong> ليناسب تفضيلاتك.</span>
                      </li>
                    </ul>
                    
                    <div className="flex justify-center mt-6">
                      <Button
                        variant="outline"
                        className="gap-2 hover-lift glass-card"
                        onClick={() => restartTourGuide()}
                      >
                        <i className="bi bi-info-circle"></i>
                        عرض الجولة التعريفية
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="skills" className="animate-fade-in">
            <SkillSection />
          </TabsContent>
          
          <TabsContent value="projects" className="animate-fade-in space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard 
                  title="تطبيق القرآن الكريم" 
                  description="تطبيق يحتوي على مواقيت الصلاة، الأحاديث، والقرآن الكريم صوت وسورة." 
                  link="https://ahadith-sdbc.web.app/"
                  tags={["React", "Tailwind CSS", "TypeScript"]}
                  githubLink="https://github.com/username/ahadith-sdbc"
                  imageSrc="https://blush.design/api/download?shareUri=Oj0M2R1lB&w=800&h=800&fm=png"
                />
                <ProjectCard 
                  title="Bn0mar-AI" 
                  description="مساعد ليبي مهمته مساعدة المبرمجين لحل الأخطاء والتعلم بطريقة سهلة وبسيطة." 
                  link="https://example.com/project2"
                  tags={["Next.js", "AI", "NLP"]}
                  githubLink="https://github.com/username/interactive-website"
                  imageSrc="https://storyset.com/illustration/artificial-intelligence/pana"
                />
                <div className="md:col-span-2 text-center mt-2 text-xs text-muted-foreground">
                  <a href="https://storyset.com/technology" target="_blank" rel="noopener noreferrer">Technology illustrations by Storyset</a>
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="contact" className="animate-fade-in space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
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
                  verified={true}
                />
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="settings" className="animate-fade-in space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute bottom-10 left-10 -z-10 opacity-10 dark:opacity-5 pointer-events-none">
                <img 
                  src="https://blush.design/api/download?shareUri=FeJolOyYQ&w=800&h=800&fm=png" 
                  alt="Settings illustration" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              <Card className="border border-border/40 glass-card hover:shadow-lg transition-all duration-300">
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
                          className="flex gap-2 hover-lift"
                          onClick={() => setTheme("light")}
                        >
                          <i className="bi bi-sun"></i>
                          فاتح
                        </Button>
                        <Button 
                          variant={theme === "dark" ? "default" : "outline"} 
                          className="flex gap-2 hover-lift"
                          onClick={() => setTheme("dark")}
                        >
                          <i className="bi bi-moon"></i>
                          داكن
                        </Button>
                        <Button 
                          variant={theme === "system" ? "default" : "outline"} 
                          className="flex gap-2 hover-lift"
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
                  
                  <div className="pt-4 border-t border-border/40">
                    <Button 
                      variant="outline" 
                      className="w-full gap-2 hover-lift"
                      onClick={() => restartTourGuide()}
                    >
                      <i className="bi bi-arrow-repeat"></i>
                      إعادة تشغيل الجولة التعريفية
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Bottom Tab Navigation with Icons */}
          <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border z-10">
            <div className="container mx-auto px-4">
              <TabsList className="w-full h-16">
                <TabsTrigger value="home" className="tab-trigger group" data-tour="home-tab">
                  <i className="bi bi-house-door text-xl mb-1"></i>
                  <span className="text-xs">الرئيسية</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="tab-trigger group" data-tour="skills-tab">
                  <i className="bi bi-code-slash text-xl mb-1"></i>
                  <span className="text-xs">المهارات</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="projects" className="tab-trigger group" data-tour="projects-tab">
                  <i className="bi bi-briefcase text-xl mb-1"></i>
                  <span className="text-xs">المشاريع</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="contact" className="tab-trigger group" data-tour="contact-tab">
                  <i className="bi bi-envelope text-xl mb-1"></i>
                  <span className="text-xs">التواصل</span>
                  <span className="tab-spotlight"></span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="tab-trigger group" data-tour="settings-tab">
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
