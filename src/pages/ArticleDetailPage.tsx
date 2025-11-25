import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Share2, Bookmark, X } from 'lucide-react';
import Footer from '../components/Footer';
import { articles } from '../constants/articles';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-1 container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
          <Button onClick={() => navigate('/')}>العودة للرئيسية</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('تم نسخ الرابط');
    }
  };

  const handleBookmark = () => {
    toast.success('تم حفظ المقال في المفضلة');
  };

  // محتوى افتراضي للمقال
  const articleContent = article.content || `
    <p class="lead">${article.excerpt}</p>
    
    <h2>مقدمة</h2>
    <p>يُعد ${article.title} من الموضوعات المهمة التي تستحق الاهتمام والدراسة المتأنية. في هذا المقال، سنتناول أبرز الجوانب والتفاصيل المتعلقة بهذا الموضوع.</p>
    
    <h2>التفاصيل الرئيسية</h2>
    <p>من خلال تحليل شامل للموضوع، نجد أن هناك عدة نقاط أساسية يجب التركيز عليها:</p>
    <ul>
      <li>النقطة الأولى: تتعلق بالجوانب التقنية والتطبيقية</li>
      <li>النقطة الثانية: تركز على الفوائد والميزات الأساسية</li>
      <li>النقطة الثالثة: تناقش التحديات والحلول المقترحة</li>
    </ul>
    
    <h2>التأثير والأهمية</h2>
    <p>لا يمكن إنكار التأثير الكبير الذي يحدثه هذا الموضوع في المجال التقني. فقد أصبح جزءاً لا يتجزأ من التطورات الحديثة والمستقبلية.</p>
    
    <blockquote>
      "التقنية الحديثة ليست مجرد أدوات، بل هي وسيلة لتحسين حياتنا وزيادة إنتاجيتنا."
    </blockquote>
    
    <h2>نصائح وتوصيات</h2>
    <p>للاستفادة القصوى من هذا الموضوع، ننصح بالتالي:</p>
    <ol>
      <li>البدء بفهم الأساسيات جيداً قبل التعمق</li>
      <li>متابعة التحديثات والمستجدات بانتظام</li>
      <li>التطبيق العملي والتجربة الشخصية</li>
    </ol>
    
    <h2>الخلاصة</h2>
    <p>في الختام، يمكننا القول أن ${article.title} يمثل تطوراً مهماً يستحق المتابعة والاهتمام. نأمل أن يكون هذا المقال قد قدم لكم معلومات قيمة ومفيدة.</p>
  `;

  // مقالات مقترحة (عشوائية)
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        {/* زر الإغلاق العائم */}
        <div className="fixed top-4 right-4 z-50">
          <Link to="/">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full shadow-xl hover:shadow-2xl transition-all backdrop-blur-md bg-background/80"
            >
              <X className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* صورة الغلاف */}
        <div className="relative h-[250px] md:h-[400px] w-full overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </div>

        {/* محتوى المقال */}
        <article className="container max-w-3xl px-4 md:px-6 -mt-20 md:-mt-32 relative z-10">
          <div className="bg-card rounded-xl md:rounded-2xl shadow-2xl p-5 md:p-12 border">
            {/* العنوان والمعلومات */}
            <header className="mb-6 md:mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="gradient-primary text-primary-foreground text-xs">
                  {article.category}
                </Badge>
              </div>

              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-xs">{new Date(article.date).toLocaleDateString('ar-EG', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs">{article.readTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3 pb-4 md:pb-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs md:text-base font-semibold text-foreground">
                      <User className="w-3 h-3 md:w-4 md:h-4" />
                      {article.author}
                    </div>
                    <p className="text-xs text-muted-foreground">كاتب تقني</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-8 w-8 md:h-10 md:w-10"
                    onClick={handleShare}
                  >
                    <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-8 w-8 md:h-10 md:w-10"
                    onClick={handleBookmark}
                  >
                    <Bookmark className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Button>
                </div>
              </div>
            </header>

            {/* محتوى المقال */}
            <div 
              className="prose prose-base md:prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-a:text-primary prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:text-foreground/80 prose-code:text-primary prose-li:text-foreground/90"
              dangerouslySetInnerHTML={{ __html: articleContent }}
            />
          </div>

          {/* مقالات مقترحة */}
          {relatedArticles.length > 0 && (
            <div className="mt-8 md:mt-16 px-4 md:px-0">
              <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id} 
                    to={`/article/${relatedArticle.id}`}
                    className="group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 md:h-48 overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 md:p-4">
                        <h3 className="font-bold text-xs md:text-base line-clamp-2 group-hover:text-primary transition-colors mb-1 md:mb-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 hidden md:block">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <div className="h-8 md:h-20"></div>
      </main>

      <Footer />
    </div>
  );
}
