
# مجلد الصور التوضيحية

## مهم: استخدام أيقونات SVG بدلاً من الصور

**ملاحظة**: تم تحويل المشروع لاستخدام أيقونات SVG من مكتبة lucide-react بدلاً من الصور الخارجية لتجنب مشاكل تحميل الصور وتحسين الأداء.

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

- يستخدم مشروع Bn0mar-AI نموذج GPT-4o مما قد يجعل استجابته بطيئة بسبب ضعف البيئة التي يعمل عليها.
- حالياً المشروع ليس له ذاكرة للتذكر.
- سيتم إضافة المزيد من التحديثات والتحسينات على المشروع في المستقبل القريب إن شاء الله 🚀
