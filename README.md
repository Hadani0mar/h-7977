
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

لتعديل قائمة المهارات، افتح ملف `src/components/SkillSection.tsx` وقم بتعديل مصفوفة `allSkills`:

```typescript
const allSkills = [
  // قم بتعديل المهارات الحالية أو إضافة مهارات جديدة
  { name: "HTML", level: 95, category: "لغات الواجهة", icon: "bi bi-filetype-html" },
  // يمكنك إضافة مهارات جديدة بهذا الشكل:
  { name: "اسم المهارة", level: 85, category: "فئة المهارة", icon: "bi bi-icon-name" },
];
```

كل مهارة تتكون من:
- `name`: اسم المهارة
- `level`: مستوى الإتقان (من 0 إلى 100)
- `category`: فئة المهارة (مثل لغات البرمجة، أطر العمل، إلخ)
- `icon`: رمز أيقونة Bootstrap (يمكنك استخدام أي أيقونة من [مكتبة Bootstrap Icons](https://icons.getbootstrap.com/))

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

لتعديل التأثيرات الحركية في الموقع، افتح ملف `src/styles/animations.css`:

```css
/* تعديل تأثيرات البقع الضوئية */
.skill-spotlight {
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(var(--primary-rgb), 0.4) 0%, rgba(var(--primary-rgb), 0) 70%);
  /* قم بتعديل القيم لتغيير حجم وشدة التأثير */
}

/* تعديل تأثيرات النجوم */
.stars-container {
  background: linear-gradient(to bottom, rgba(0,0,20,0.7) 0%, rgba(0,0,20,0.2) 100%);
  /* قم بتعديل القيم لتغيير ألوان الخلفية */
}

/* إضافة تأثير جديد */
@keyframes my-animation {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

.my-animated-element {
  animation: my-animation 2s infinite ease-in-out;
}
```

### 7. تخصيص الأيقونات

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

### 8. تخصيص تخطيط الصفحة

لتعديل تخطيط الصفحة بشكل كامل، يمكنك تعديل ملف `src/pages/Index.tsx`. لإضافة قسم جديد:

```tsx
<TabsContent value="new-section" className="animate-fade-in">
  {/* محتوى القسم الجديد */}
</TabsContent>

// أضف زر تبويب جديد في قائمة الأزرار
<TabsTrigger value="new-section" className="tab-trigger group">
  <i className="bi bi-icon-name text-xl mb-1"></i>
  <span className="text-xs">اسم القسم</span>
  <span className="tab-spotlight"></span>
</TabsTrigger>
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

## تطوير واختبار التطبيق

للعمل على التطبيق وتطويره:

1. قم بإجراء التعديلات اللازمة على الكود
2. اختبر التغييرات محليًا باستخدام `npm run dev`
3. قم ببناء نسخة الإنتاج باستخدام `npm run build`
4. قم بمعاينة نسخة الإنتاج محليًا باستخدام `npm run preview`

## موارد إضافية

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
