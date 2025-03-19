
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

لتعديل قائمة المهارات التقنية، افتح ملف `src/components/SkillSection.tsx`:

#### تعديل مهارة موجودة أو إضافة مهارة جديدة

يمكنك تعديل مصفوفة `allSkills` لتغيير أو إضافة مهارات:

```typescript
const allSkills: Skill[] = [
  // تعديل مهارة موجودة
  { 
    name: "HTML", // اسم المهارة
    category: "لغات الواجهة", // فئة المهارة
    icon: "bi bi-filetype-html", // أيقونة bootstrap 
    gradient: "linear-gradient(135deg, #E44D26, #F16529)", // تدرج لوني للخلفية
    textColor: "#E44D26", // لون النص (يفضل لون المهارة الرسمي)
    iconColor: "#E44D26", // لون الأيقونة
    description: "لغة ترميز المستندات الرئيسية لصفحات الويب" // وصف المهارة
  },
  
  // إضافة مهارة جديدة (اتبع نفس البنية)
  { 
    name: "اسم المهارة الجديدة", 
    category: "فئة المهارة", 
    icon: "bi bi-icon-name", // اختر من مكتبة bootstrap icons 
    gradient: "linear-gradient(135deg, #COLOR1, #COLOR2)",
    textColor: "#COLOR1",
    iconColor: "#COLOR1",
    description: "وصف المهارة الجديدة" 
  },
];
```

#### تعديل تأثير البطاقات والتفاعلات

لتعديل المظهر والتأثيرات البصرية للبطاقات، يمكنك تعديل CSS في `SkillCard`:

```typescript
<Card 
  ref={cardRef}
  className="h-full relative glass-card backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 skill-card"
  style={{ 
    // تعديل شفافية الخلفية هنا
    background: `${skill.gradient}10`, 
    // تعديل ظل البطاقة هنا
    boxShadow: `0 4px 20px -5px ${skill.gradient.split(')')[0]}25)`
  }}
>
```

### 3. تخصيص المشاريع

#### إضافة أو تعديل المشاريع

لتعديل قائمة المشاريع، افتح ملف `src/pages/Index.tsx` وقم بالبحث عن قسم المشاريع:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* تعديل مشروع موجود */}
  <ProjectCard 
    title="تطبيق إدارة المهام" // عنوان المشروع
    description="تطبيق ويب متكامل لإدارة المهام والمشاريع، مبني بتقنية React وTailwind CSS..." // وصف المشروع
    link="https://example.com/project1" // رابط المشروع الحي
    tags={["React", "Tailwind CSS", "TypeScript"]} // التقنيات المستخدمة
    githubLink="https://github.com/username/task-manager" // رابط GitHub (اختياري)
  />
  
  {/* إضافة مشروع جديد */}
  <ProjectCard 
    title="عنوان المشروع الجديد" 
    description="وصف تفصيلي للمشروع الجديد..." 
    link="https://example.com/new-project"
    tags={["تقنية 1", "تقنية 2", "تقنية 3"]}
    githubLink="https://github.com/username/new-project"
  />
</div>
```

كل بطاقة مشروع تحتاج إلى:
- `title`: عنوان المشروع
- `description`: وصف المشروع (يمكن أن يكون نصًا طويلًا)
- `link`: رابط للمشروع الحي
- `tags`: مصفوفة من التقنيات المستخدمة (اختياري)
- `githubLink`: رابط مستودع GitHub (اختياري)

#### تخصيص مظهر بطاقات المشاريع

إذا كنت ترغب في تغيير تصميم بطاقة المشروع، فيمكنك تعديل مكون `ProjectCard.tsx` (ملاحظة: هذا ملف للقراءة فقط لذا يجب إنشاء نسخة جديدة):

1. أنشئ نسخة معدلة:
```tsx
// src/components/CustomProjectCard.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  githubLink?: string;
}

const CustomProjectCard = ({ title, description, link, tags, githubLink }: ProjectCardProps) => {
  // قم بإجراء التعديلات على التصميم هنا
  return (
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md hover:shadow-lg transition-all glass-card overflow-hidden">
      {/* قم بتنفيذ التصميم المخصص الخاص بك هنا */}
    </Card>
  );
};

export default CustomProjectCard;
```

2. ثم استخدم المكون الجديد في `Index.tsx`:
```tsx
import CustomProjectCard from "@/components/CustomProjectCard";
// ...
<CustomProjectCard 
  title="عنوان المشروع" 
  description="وصف المشروع..." 
  link="https://example.com"
  tags={["Tag 1", "Tag 2"]}
/>
```

### 4. تخصيص وسائل التواصل

لتحديث معلومات التواصل، افتح ملف `src/pages/Index.tsx` وقم بتعديل بيانات مكونات `SocialCard` في قسم التواصل:

```typescript
<SocialCard 
  platform="TikTok" // منصة التواصل
  username="@your_username" // اسم المستخدم
  link="https://www.tiktok.com/@your_username" // رابط الملف الشخصي
  icon="tiktok" // نوع الأيقونة
  verified={true} // إظهار علامة التحقق (true/false)
/>
```

الخيارات المتاحة لـ `icon` هي:
- `facebook`
- `github`
- `instagram`
- `tiktok`
- `mail`

### 5. تخصيص المظهر العام

#### تغيير الألوان

لتخصيص نظام الألوان، افتح ملف `src/index.css` وقم بتعديل متغيرات CSS في قسم `:root`:

```css
:root {
  /* تعديل الألوان الأساسية في الوضع الفاتح */
  --primary: 221.2 83% 53.3%;
  --primary-rgb: 37, 99, 235; /* قيمة RGB للون الأساسي */
  /* يمكنك تعديل الألوان الأخرى بنفس الطريقة */
}

.dark {
  /* تعديل الألوان في الوضع الداكن */
  --primary: 217.2 91.2% 59.8%;
  --primary-rgb: 59, 130, 246;
}

/* إضافة مخطط ألوان مخصص جديد */
[data-accent="my-custom-color"] {
  --primary: 210 100% 50%;
  --primary-rgb: 0, 122, 255;
}
```

لإضافة خيار لون جديد في منتقي الألوان، قم بتعديل ملف `src/components/ColorSelector.tsx`:

```typescript
const colors = [
  // إضافة لون جديد
  { name: "my-custom-color", bg: "bg-blue-400", hover: "hover:bg-blue-500" },
  // ... الألوان الموجودة مسبقًا
];
```

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

#### تعديل التأثيرات الضوئية

لتعديل تأثير الانعكاس الضوئي على الأيقونات، افتح ملف `src/index.css`:

```css
.icon-reflection {
  /* تعديل تأثير الانعكاس الضوئي */
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%, /* تعديل شفافية الانعكاس هنا */
    rgba(255, 255, 255, 0) 100%
  );
  /* تعديل حركة الانعكاس */
  animation: light-sweep 3s ease-in-out infinite; /* تعديل سرعة الحركة هنا */
}

@keyframes light-sweep {
  /* تعديل مسار حركة الانعكاس */
  0% {
    transform: rotate(25deg) translateX(-100%) translateY(-100%);
  }
  50% {
    transform: rotate(25deg) translateX(100%) translateY(100%);
  }
  100% {
    transform: rotate(25deg) translateX(-100%) translateY(-100%);
  }
}
```

#### تعديل تأثير البقع الضوئية على البطاقات

لتعديل تأثير البقع الضوئية التي تظهر عند التحويم فوق البطاقات:

```css
.skill-spotlight {
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(var(--primary-rgb), 0.15) 0%, /* تعديل شفافية البقعة هنا */
    rgba(var(--primary-rgb), 0) 70% /* تعديل مدى البقعة هنا */
  );
}
```

#### إضافة تأثيرات حركية جديدة

لإضافة تأثير حركي جديد، أضف تعريفات جديدة في ملف `src/index.css`:

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

ثم استخدم الكلاس الجديد في أي عنصر:

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

### 8. تخصيص دليل المستخدم التفاعلي (جولة التعريف)

لتعديل الدليل التفاعلي الذي يظهر للمستخدمين، افتح ملف `src/components/TourGuide.tsx`:

#### تعديل خطوات الجولة التعريفية

```typescript
const TOUR_STEPS: TourStep[] = [
  // تعديل خطوة موجودة
  {
    id: 'home-tab',
    selector: '[data-tour="home-tab"]', // محدد العنصر (CSS selector)
    title: 'عنوان جديد', // عنوان الشرح
    content: 'وصف جديد للشرح', // محتوى الشرح
    placement: 'top', // موقع التلميح ('top', 'right', 'bottom', 'left')
    tab: 'home' // القسم المرتبط
  },
  
  // إضافة خطوة جديدة
  {
    id: 'new-element-id',
    selector: '[data-tour="my-new-element"]',
    title: 'عنوان العنصر الجديد',
    content: 'شرح العنصر الجديد',
    placement: 'bottom',
    tab: 'tab-id' // اسم التبويب (اتركه فارغًا إذا كان العنصر في نفس التبويب الحالي)
  }
];
```

لإضافة عناصر جديدة للدليل، أضف سمة `data-tour` للعناصر التي تريد شرحها:

```tsx
<div data-tour="my-new-element">محتوى العنصر</div>
```

#### تعديل مظهر نافذة الشرح

لتعديل مظهر نافذة الشرح، عدّل مكون `Tooltip` في `TourGuide.tsx`:

```tsx
<motion.div 
  className="tour-tooltip fixed z-50 w-72 shadow-lg rounded-md bg-popover text-popover-foreground p-4 border border-border/50 backdrop-blur-sm"
  style={tooltipStyle}
  // تعديل تأثيرات الظهور والاختفاء
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.2 }}
>
  {/* تعديل محتوى وتنسيق التلميح */}
</motion.div>
```

### 9. تخصيص تخطيط الصفحة

#### إضافة قسم جديد للموقع

لإضافة قسم جديد، عدّل ملف `src/pages/Index.tsx`:

1. أضف زر التبويب الجديد:
```tsx
<TabsTrigger value="new-section" className="tab-trigger group" data-tour="new-section-tab">
  <i className="bi bi-star text-xl mb-1"></i>
  <span className="text-xs">اسم القسم الجديد</span>
  <span className="tab-spotlight"></span>
</TabsTrigger>
```

2. أضف محتوى القسم الجديد:
```tsx
<TabsContent value="new-section" className="animate-fade-in space-y-6">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="border border-border/40 glass-card">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <i className="bi bi-star"></i>
          عنوان القسم الجديد
        </h2>
        {/* محتوى القسم */}
        <p className="text-muted-foreground">
          محتوى القسم الجديد يأتي هنا...
        </p>
      </CardContent>
    </Card>
  </motion.div>
</TabsContent>
```

3. إذا كنت ترغب في إضافة القسم للجولة التعريفية، أضف خطوة جديدة في ملف `src/components/TourGuide.tsx`:
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

### 10. إنشاء مكونات مخصصة جديدة

#### إنشاء مكون جديد

لإنشاء مكون جديد، أنشئ ملفًا جديدًا في `src/components`:

```tsx
// src/components/MyNewComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface MyNewComponentProps {
  title: string;
  content: string;
}

const MyNewComponent = ({ title, content }: MyNewComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="glass-card hover-lift">
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MyNewComponent;
```

ثم استخدم المكون الجديد في أي مكان في التطبيق:

```tsx
import MyNewComponent from '@/components/MyNewComponent';

// في المكون الرئيسي
<MyNewComponent 
  title="عنوان مخصص" 
  content="محتوى مخصص يظهر هنا..." 
/>
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
npm install --no-optional # استخدم --no-optional لتخطي الاعتماديات الاختيارية التي قد تسبب مشاكل على Termux
```

5. قم بتشغيل المشروع:

```bash
npm run dev
```

يمكنك الوصول إلى التطبيق عبر المتصفح على العنوان: `http://localhost:5173`

### تحسين الأداء على Termux

المشروع يستخدم esbuild للحصول على أداء أفضل على الأجهزة منخفضة الموارد مثل الهواتف التي تستخدم Termux. إذا واجهت مشاكل في الأداء، يمكنك:

1. تقليل عدد الاعتماديات بتثبيت الأساسية فقط:
```bash
npm install --production
```

2. تعطيل خرائط المصدر (source maps) في وضع الإنتاج:
```bash
# أضف هذا الإعداد في ملف vite.config.ts
build: {
  sourcemap: false
}
```

3. استخدام وضع الإنتاج المحسن:
```bash
npm run build
npx vite preview --host
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
