
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

### تخصيص المظهر العام

يمكنك تخصيص المظهر العام للموقع بسهولة من خلال تعديل الملفات التالية:

#### 1. تغيير الألوان

لتغيير نظام الألوان، قم بتعديل ملف `src/index.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-rgb: 28, 30, 39; /* قيمة RGB للون الأساسي */
  /* ... باقي متغيرات الألوان ... */
}
```

لإضافة لون جديد، أضف المتغيرات في `tailwind.config.ts`:

```typescript
colors: {
  'my-custom-color': {
    DEFAULT: 'hsl(var(--my-custom-color))',
    foreground: 'hsl(var(--my-custom-color-foreground))'
  },
}
```

#### 2. تغيير الخطوط

لتغيير الخط، قم بإضافة رابط الخط في `index.html` ثم تحديثه في `tailwind.config.ts`:

```html
<!-- في ملف index.html -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_NAME:wght@400;500;700&display=swap" rel="stylesheet">
```

```typescript
// في ملف tailwind.config.ts
extend: {
  fontFamily: {
    'custom-font': ['YOUR_FONT_NAME', 'sans-serif'],
  },
}
```

ثم استخدم الخط في التطبيق بإضافة الكلاس `font-custom-font`.

### تخصيص المحتوى

#### 1. تعديل المعلومات الشخصية

قم بتعديل المعلومات الشخصية في ملف `src/pages/Index.tsx`:

```typescript
// تغيير الاسم والوصف
<h1 className="text-4xl md:text-5xl font-bold">اسمك هنا</h1>
<p className="mt-2 text-muted-foreground">وصفك الوظيفي هنا</p>
```

#### 2. تعديل المهارات

قم بتعديل قائمة المهارات في ملف `src/components/SkillSection.tsx`:

```typescript
const allSkills = [
  { name: "اسم المهارة", level: 95, category: "فئة المهارة", icon: "bi bi-icon-name" },
  // أضف المزيد من المهارات هنا...
];
```

#### 3. تعديل المشاريع

قم بتعديل قائمة المشاريع في ملف `src/pages/Index.tsx`:

```typescript
<ProjectCard 
  title="عنوان المشروع" 
  description="وصف المشروع" 
  link="رابط المشروع" 
/>
```

#### 4. تعديل معلومات التواصل

قم بتعديل معلومات التواصل في ملف `src/pages/Index.tsx`:

```typescript
<SocialCard 
  platform="اسم المنصة" 
  username="اسم المستخدم" 
  link="الرابط" 
  icon="نوع الأيقونة" 
  verified={true/false} 
/>
```

### تخصيص التأثيرات والحركات

#### 1. تعديل تأثيرات الإضاءة والبقع الضوئية

قم بتعديل تأثيرات البقع الضوئية في ملف `src/styles/animations.css`:

```css
.skill-spotlight {
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(var(--primary-rgb), 0.4) 0%, rgba(var(--primary-rgb), 0) 70%);
  /* قم بتعديل القيم لتغيير حجم وشدة التأثير */
}
```

#### 2. تعديل خلفية الفضاء

قم بتعديل خلفية الفضاء والنجوم في ملف `src/styles/animations.css`:

```css
.stars-container {
  background: linear-gradient(to bottom, rgba(0,0,20,0.7) 0%, rgba(0,0,20,0.2) 100%);
  /* قم بتعديل القيم لتغيير ألوان الخلفية */
}
```

#### 3. إضافة تأثيرات جديدة

لإضافة تأثيرات حركية جديدة، قم بإضافة مفاتيح الإطارات (keyframes) وكلاسات CSS في `src/styles/animations.css`:

```css
@keyframes my-animation {
  0% { /* حالة البداية */ }
  100% { /* حالة النهاية */ }
}

.my-animated-element {
  animation: my-animation 1s infinite;
}
```

### تخصيص الأيقونات

الموقع يستخدم أيقونات Bootstrap. لتغيير أيقونة:

1. ابحث عن الأيقونة المطلوبة في [مكتبة Bootstrap Icons](https://icons.getbootstrap.com/)
2. استبدل اسم الأيقونة في الكود:

```html
<i className="bi bi-new-icon-name"></i>
```

### تخصيص تخطيط الصفحة

لتعديل تخطيط الصفحة، قم بتعديل ملف `src/pages/Index.tsx` و/أو إنشاء مكونات جديدة.

```typescript
// لإضافة قسم جديد
<TabsContent value="new-section" className="animate-fade-in">
  {/* محتوى القسم الجديد */}
</TabsContent>

// لإضافة زر تبويب جديد
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

## استكشاف الأخطاء وإصلاحها

إذا واجهت أي مشاكل، جرّب ما يلي:

1. تأكد من تثبيت أحدث إصدار من Node.js.
2. احذف مجلد `node_modules` وملف `package-lock.json` وأعد تثبيت التبعيات:

```bash
rm -rf node_modules package-lock.json
npm install
```

3. إذا استمرت المشكلة، تحقق من سجلات الخطأ في وحدة التحكم بالمتصفح.
