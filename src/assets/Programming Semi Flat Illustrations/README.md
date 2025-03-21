
# مجلد الصور التوضيحية

## مهم: استخدام روابط الصور الخارجية

**ملاحظة**: نحن نستخدم روابط صور خارجية موثوقة بدلاً من الصور المحلية في المشروع لتقليل حجم المستودع وتحسين الأداء.

## روابط الصور الموصى بها:

- [Unsplash](https://unsplash.com/) - صور عالية الجودة مجانية للاستخدام
- [Storyset](https://storyset.com/) - رسومات توضيحية جميلة
- [Pexels](https://www.pexels.com/) - مكتبة صور مجانية عالية الجودة

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
  imageSrc="https://example.com/project-image.jpg"
  isFeatured={true}  // اختياري: ضع true لإظهار أيقونة النجمة
  additionalInfo="معلومات إضافية اختيارية"  // اختياري
/>
```

### ملاحظات مهمة حول مشروع Bn0mar-AI:

- يستخدم مشروع Bn0mar-AI نموذج GPT-4o مما قد يجعل استجابته بطيئة بسبب ضعف البيئة التي يعمل عليها.
- حالياً المشروع ليس له ذاكرة للتذكر.
- سيتم إضافة المزيد من التحديثات والتحسينات على المشروع في المستقبل القريب إن شاء الله 🚀
