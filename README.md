
# موقع Bn0mar الشخصي

## معلومات المشروع

**URL**: https://lovable.dev/projects/00c7f47b-3eb8-453c-9f3a-847605e64035

## كيفية تعديل الكود

هناك عدة طرق لتعديل التطبيق:

### استخدام Lovable

ببساطة قم بزيارة [مشروع Lovable](https://lovable.dev/projects/00c7f47b-3eb8-453c-9f3a-847605e64035) وابدأ بإدخال الطلبات.

سيتم حفظ التغييرات التي تتم عبر Lovable تلقائيًا في المستودع.

### استخدام بيئة التطوير المفضلة لديك

إذا كنت ترغب في العمل محليًا باستخدام بيئة التطوير الخاصة بك، يمكنك استنساخ هذا المستودع ودفع التغييرات. ستظهر التغييرات المدفوعة أيضًا في Lovable.

المتطلب الوحيد هو تثبيت Node.js و npm - [التثبيت باستخدام nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

اتبع هذه الخطوات:

```sh
# الخطوة 1: استنساخ المستودع باستخدام عنوان Git للمشروع.
git clone <YOUR_GIT_URL>

# الخطوة 2: الانتقال إلى دليل المشروع.
cd <YOUR_PROJECT_NAME>

# الخطوة 3: تثبيت التبعيات اللازمة.
npm i

# الخطوة 4: بدء خادم التطوير مع إعادة التحميل التلقائي ومعاينة فورية.
npm run dev
```

## دليل التخصيص الشامل

### 1. تخصيص المعلومات الشخصية

#### تعديل البيانات الرئيسية

لتعديل المعلومات الشخصية الأساسية مثل الاسم والوصف، قم بفتح ملف `src/components/Header.tsx`:

```typescript
// تغيير الاسم في السطر التالي
<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground bg-clip-text bg-gradient-to-r from-primary to-primary/70">
  Bn0mar
</h1>

// تغيير الوصف الوظيفي في السطر التالي
<p className="text-lg text-muted-foreground font-medium flex items-center justify-center gap-2">
  <i className="bi bi-code-slash"></i>
  Frontend Developer & UI Designer
</p>
```

#### تعديل المحتوى في الصفحة الرئيسية

لتعديل محتوى الصفحة الرئيسية، افتح ملف `src/pages/Index.tsx` وقم بتعديل النص في القسم التالي:

```typescript
<p className="text-muted-foreground text-base leading-relaxed">
  أنا مطور واجهات أمامية متخصص في إنشاء تجارب مستخدم سلسة وجذابة. أعمل على تطوير تطبيقات الويب
  باستخدام أحدث التقنيات والأدوات. أسعى دائمًا لتعلم كل ما هو جديد في عالم تطوير الويب وتطبيقه
  في مشاريعي.
</p>
```

### 2. تخصيص المهارات

لتعديل قائمة المهارات التقنية، افتح ملف `src/components/SkillSection.tsx` وقم بتعديل مصفوفة `allSkills`:

```typescript
const allSkills: Skill[] = [
  // قم بتعديل المهارات الحالية أو إضافة مهارات جديدة
  { 
    name: "HTML", 
    category: "لغات الواجهة", 
    icon: "bi bi-filetype-html", 
    gradient: "linear-gradient(135deg, #E44D26, #F16529)",
    textColor: "#E44D26",
    iconColor: "#E44D26",
    description: "لغة ترميز المستندات الرئيسية لصفحات الويب"
  },
  // يمكنك إضافة مهارات جديدة بهذا الشكل:
  { 
    name: "اسم المهارة الجديدة", 
    category: "الفئة", 
    icon: "bi bi-icon-name", 
    gradient: "linear-gradient(135deg, #COLOR1, #COLOR2)",
    textColor: "#COLOR1",
    iconColor: "#COLOR1",
    description: "وصف المهارة" 
  },
];
```

كل مهارة تتكون من:
- `name`: اسم المهارة
- `category`: فئة المهارة (مثل لغات البرمجة، أطر العمل، إلخ)
- `icon`: رمز أيقونة Bootstrap (يمكنك استخدام أي أيقونة من [مكتبة Bootstrap Icons](https://icons.getbootstrap.com/))
- `gradient`: تدرج لوني للخلفية (لتعزيز المظهر البصري)
- `textColor`: لون النص (يُفضل استخدام اللون الرسمي للتقنية)
- `iconColor`: لون الأيقونة (يُفضل استخدام اللون الرسمي للتقنية)
- `description`: وصف موجز للمهارة (اختياري)

### 3. تخصيص المشاريع

#### إضافة أو تعديل المشاريع

لتعديل قائمة المشاريع، افتح ملف `src/pages/Index.tsx` وقم بالبحث عن قسم المشاريع:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <ProjectCard 
    title="تطبيق إدارة المهام" 
    description="تطبيق ويب متكامل لإدارة المهام والمشاريع، مبني بتقنية React وTailwind CSS..." 
    link="https://example.com/project1"
    tags={["React", "Tailwind CSS", "TypeScript"]}
    githubLink="https://github.com/username/task-manager"
  />
  // إضافة مشروع جديد أو تعديل المشاريع الموجودة
</div>
```

كل مشروع يتكون من:
- `title`: عنوان المشروع
- `description`: وصف تفصيلي للمشروع
- `link`: رابط للمشروع المنشور
- `tags`: مصفوفة من التقنيات المستخدمة في المشروع (اختياري)
- `githubLink`: رابط لمستودع GitHub للمشروع (اختياري)

#### تخصيص مكون بطاقة المشروع

إذا كنت ترغب في تعديل تصميم بطاقة المشروع، افتح ملف `src/components/ProjectCard.tsx` وقم بتعديل هيكل البطاقة حسب الحاجة.

### 4. تخصيص وسائل التواصل

لتحديث معلومات التواصل، افتح ملف `src/pages/Index.tsx` وقم بتعديل بيانات مكونات `SocialCard` في قسم التواصل:

```typescript
<SocialCard 
  platform="TikTok" 
  username="@your_username" 
  link="https://www.tiktok.com/@your_username" 
  icon="tiktok"
  verified={true} // اجعلها false لإخفاء علامة التحقق
/>
// قم بتعديل أو إضافة وسائل تواصل أخرى
```

كل وسيلة تواصل تتكون من:
- `platform`: اسم المنصة
- `username`: اسم المستخدم أو العنوان
- `link`: رابط لصفحة الملف الشخصي
- `icon`: نوع الأيقونة (يمكنك استخدام "facebook" | "github" | "instagram" | "tiktok" | "mail")
- `verified`: إظهار علامة التحقق الزرقاء (true/false)

### 5. تخصيص المظهر العام

#### تغيير الألوان

لتخصيص نظام الألوان، افتح ملف `src/index.css` وقم بتعديل متغيرات CSS في قسم `:root`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-rgb: 28, 30, 39; /* RGB value of primary color */
  /* قم بتعديل الألوان الأخرى حسب الحاجة */
}

/* لإضافة مخطط ألوان جديد */
[data-accent="my-custom-color"] {
  --primary: 210 100% 50%;
  --primary-rgb: 0, 122, 255;
}
```

ثم قم بتعديل ملف `src/components/ColorSelector.tsx` لإضافة اللون الجديد كخيار.

#### تغيير الخطوط

لتغيير الخط المستخدم في الموقع:

1. أضف رابط الخط في ملف `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_NAME:wght@400;500;700&display=swap" rel="stylesheet">
```

2. عدّل ملف `tailwind.config.ts` لإضافة الخط:
```typescript
extend: {
  fontFamily: {
    'custom': ['YOUR_FONT_NAME', 'sans-serif'],
  },
}
```

3. استخدم الخط الجديد عن طريق تعديل الكلاس في الملف `src/App.tsx` أو الملفات الأخرى:
```tsx
<div className="min-h-screen bg-background text-foreground font-custom">
```

### 6. تخصيص التأثيرات والحركات

#### تعديل تأثيرات الضوء والظل

لتخصيص تأثير البقع الضوئية التي تظهر عند التحويم فوق العناصر، افتح ملف `src/styles/animations.css`:

```css
/* تعديل تأثير البقع الضوئية على بطاقات المهارات */
.skill-spotlight {
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(var(--primary-rgb), 0.4) 0%,
    rgba(var(--primary-rgb), 0) 70%
  );
  /* يمكنك تعديل قيم الشفافية والمدى لتغيير شكل التأثير */
}

/* تعديل تأثير الانعكاس الضوئي على الأيقونات */
.icon-spotlight::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  /* يمكنك تعديل قيم الشفافية هنا */
}
```

#### إضافة تأثيرات حركية جديدة

لإضافة تأثيرات حركية جديدة، أضف تعريفات جديدة في ملف `src/styles/animations.css`:

```css
/* إضافة تأثير حركي جديد */
@keyframes myNewAnimation {
  0% { transform: scale(1) rotate(0); }
  50% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1) rotate(0); }
}

.my-animation-class {
  animation: myNewAnimation 2s infinite ease-in-out;
}
```

ثم استخدم الكلاس الجديد في أي عنصر تريد إضافة التأثير إليه:

```tsx
<div className="my-animation-class">محتوى متحرك</div>
```

### 7. تخصيص الأيقونات

#### تغيير أيقونات Bootstrap

الموقع يستخدم أيقونات Bootstrap. لتغيير أيقونة:

1. ابحث عن الأيقونة المطلوبة في [مكتبة Bootstrap Icons](https://icons.getbootstrap.com/)
2. استبدل اسم الأيقونة في الكود:

```html
<i className="bi bi-new-icon-name"></i>
```

لتغيير لون الأيقونة أو حجمها:

```html
<i className="bi bi-icon-name text-primary text-2xl"></i>
```

#### إضافة مكتبات أيقونات أخرى

إذا كنت ترغب في استخدام مكتبة أيقونات أخرى:

1. قم بتثبيت المكتبة:
```sh
npm install new-icon-library
```

2. استوردها في الملف المطلوب:
```tsx
import { IconName } from 'new-icon-library';
```

3. استخدمها في التصميم:
```tsx
<IconName size={24} color="currentColor" />
```

### 8. تخصيص دليل المستخدم التفاعلي

لتعديل الدليل التفاعلي الذي يظهر للمستخدمين، افتح ملف `src/components/TourGuide.tsx` وقم بتعديل مصفوفة `TOUR_STEPS`:

```typescript
const TOUR_STEPS: TourStep[] = [
  {
    id: 'home-tab',
    selector: '[data-tour="home-tab"]',
    title: 'عنوان جديد',
    content: 'وصف جديد للشرح',
    placement: 'top', // يمكن تغييرها إلى 'right', 'bottom', 'left'
    tab: 'home'
  },
  // أضف أو عدّل الخطوات حسب الحاجة
];
```

لإضافة عناصر جديدة للدليل، أضف سمة `data-tour` للعناصر التي تريد شرحها:

```tsx
<div data-tour="my-new-element">محتوى العنصر</div>
```

ثم أضف خطوة جديدة في مصفوفة `TOUR_STEPS`:

```typescript
{
  id: 'my-new-element',
  selector: '[data-tour="my-new-element"]',
  title: 'عنوان العنصر الجديد',
  content: 'شرح العنصر الجديد',
  placement: 'bottom'
}
```

### 9. تخصيص تخطيط الصفحة

#### إضافة أقسام جديدة

لإضافة قسم جديد للموقع، قم بتعديل ملف `src/pages/Index.tsx`:

1. أضف محتوى القسم الجديد:
```tsx
<TabsContent value="new-section" className="animate-fade-in space-y-6">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* محتوى القسم الجديد */}
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all glass-card">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <i className="bi bi-star"></i>
          عنوان القسم الجديد
        </h2>
        {/* محتوى القسم */}
      </CardContent>
    </Card>
  </motion.div>
</TabsContent>
```

2. أضف زر التبويب للقسم الجديد:
```tsx
<TabsTrigger value="new-section" className="tab-trigger group" data-tour="new-section-tab">
  <i className="bi bi-star text-xl mb-1"></i>
  <span className="text-xs">القسم الجديد</span>
  <span className="tab-spotlight"></span>
</TabsTrigger>
```

3. إذا كنت ترغب في إضافة القسم للدليل التفاعلي، أضف خطوة جديدة في ملف `src/components/TourGuide.tsx`:
```typescript
{
  id: 'new-section-tab',
  selector: '[data-tour="new-section-tab"]',
  title: 'القسم الجديد',
  content: 'شرح القسم الجديد وما يحتويه',
  placement: 'top',
  tab: 'new-section'
}
```

#### تعديل البنية الأساسية للصفحة

لتعديل البنية الأساسية للصفحة، افتح ملف `src/App.tsx`:

```tsx
// تعديل بنية التطبيق الرئيسية
<ThemeProvider initialTheme="light">
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-page" element={<NewPage />} /> // إضافة صفحة جديدة
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</ThemeProvider>
```

### 10. تحسين الأداء وتجربة المستخدم

#### تحسين حجم الموقع

لتقليل حجم الموقع وتحسين الأداء، يمكنك تعديل ملف `vite.config.ts`:

```typescript
build: {
  minify: 'esbuild',
  target: 'es2018',
  outDir: 'dist',
  sourcemap: false, // قم بتغيير هذا إلى false لتوفير الذاكرة
  chunkSizeWarningLimit: 1000, // زيادة الحد المسموح لحجم الأجزاء
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
        ui: ['@radix-ui/react-tabs', '@radix-ui/react-dialog'],
        animations: ['framer-motion'],
      }
    }
  }
}
```

#### تحسين الحالة التفاعلية

لتحسين الحالة التفاعلية للموقع، استخدم خطافات React مخصصة. يمكنك إنشاء ملفات جديدة في مجلد `src/hooks`:

```tsx
// مثال: src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

ثم استخدم الخطاف في مكوناتك:

```tsx
const [settings, setSettings] = useLocalStorage('user-settings', { theme: 'light', fontSize: 100 });
```

## تشغيل المشروع على Termux

لتشغيل المشروع على Termux، يمكنك استخدام esbuild للحصول على أداء أفضل. اتبع هذه الخطوات:

1. قم بتثبيت Termux من [F-Droid](https://f-droid.org/en/packages/com.termux/)
2. قم بتثبيت Node.js وGit:

```bash
pkg update
pkg install nodejs git
```

3. استنسخ المشروع:

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

4. قم بتثبيت التبعيات:

```bash
npm install
```

5. قم بتشغيل المشروع:

```bash
npm run dev
```

يمكنك الوصول إلى التطبيق عبر المتصفح على العنوان: `http://localhost:8080`

### تحسين الأداء على Termux

المشروع يستخدم بالفعل esbuild للحصول على أداء أفضل على الأجهزة منخفضة الموارد مثل الهواتف التي تستخدم Termux. إذا واجهت مشاكل في الأداء، يمكنك تعديل ملف `vite.config.ts` لتحسين الأداء أكثر:

```typescript
build: {
  minify: 'esbuild',
  target: 'es2018',
  outDir: 'dist',
  sourcemap: false, // قم بتغيير هذا إلى false لتوفير الذاكرة
  chunkSizeWarningLimit: 1000 // زيادة الحد المسموح لحجم الأجزاء
},
```

## استكشاف الأخطاء وإصلاحها

إذا واجهت أي مشاكل، جرّب ما يلي:

1. تأكد من تثبيت أحدث إصدار من Node.js (نوصي باستخدام Node.js 18 أو أحدث)
2. احذف مجلد `node_modules` وملف `package-lock.json` وأعد تثبيت التبعيات:

```bash
rm -rf node_modules package-lock.json
npm install
```

3. إذا استمرت المشكلة، تحقق من سجلات الخطأ في وحدة التحكم بالمتصفح (F12 ثم انتقل إلى Console)

4. للمشاكل المتعلقة بالترميز أو اللغة العربية، تأكد من أن الملفات محفوظة بترميز UTF-8

## موارد إضافية

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [esbuild Documentation](https://esbuild.github.io/)
