
# مجلد الصور التوضيحية

## مهم: استخدام أيقونات من مكتبة lucide-react والصور من Storyset

**ملاحظة**: تم تحويل المشروع لاستخدام أيقونات SVG من مكتبة lucide-react والصور التوضيحية من Storyset لتحسين الأداء والمظهر.

## كيفية إضافة مشاريع جديدة في المستقبل:

1. فتح ملف `src/pages/Index.tsx`
2. البحث عن قسم المشاريع (البداية بـ `<TabsContent value="projects"`)
3. إضافة مشروع جديد باستخدام مكون `ProjectCard` كما يلي:

```jsx
<ProjectCard 
  title="عنوان المشروع" 
  description="وصف المشروع" 
  link="https://example.com/project-url"
  tags={["React", "TypeScript", "أي تقنيات أخرى"]}
  githubLink="https://github.com/username/project-repo"
  customIcon={<IconComponent size={80} className="text-primary/70" />}  // استخدام أيقونة SVG من مكتبة lucide-react
  isFeatured={true}  // اختياري: ضع true لإظهار أيقونة النجمة
  additionalInfo="معلومات إضافية اختيارية"  // اختياري
/>
```

### ملاحظات مهمة حول مشروع Bn0mar-AI:

- مشروع Bn0mar-AI هو مساعد ليبي يتكلم باللهجة الليبية ويتعلم من المستخدمين
- قد يكون بطيء بسبب المعالجة والضغط عليه
- سيتم تحسينه مع التحديثات القادمة إن شاء الله 🚀

### استخدام صور من Storyset:

عند استخدام صور من Storyset، يجب إضافة هذا الإسناد في نهاية القسم:

```jsx
<div className="md:col-span-2 text-center mt-4 text-xs text-muted-foreground">
  <a href="https://storyset.com/illustration" target="_blank" rel="noopener noreferrer">Illustrations by Storyset</a>
</div>
```

الصور المستخدمة حاليًا:
- صورة واجهة المستخدم الرئيسية: https://storyset.com/illustration/dropdown-menu/bro
- صورة مشروع Bn0mar-AI: https://storyset.com/illustration/chat-bot/rafiki
