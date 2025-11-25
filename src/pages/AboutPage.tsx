import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">

          <ArrowRight className="w-4 h-4" />
          <span>العودة للرئيسية</span>
        </Link>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            


            <p className="text-xl text-muted-foreground">
              مدونة تقنية متخصصة في آخر أخبار التكنولوجيا
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-6">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">مرحباً بك في OenAI</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن فريق متخصص من عشاق التكنولوجيا والخبراء في مجال التقنية، نسعى لتقديم أحدث الأخبار والمقالات حول عالم التطبيقات، الأجهزة الذكية، والذكاء الاصطناعي.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                نهدف إلى أن نكون المرجع الأول للمحتوى التقني العربي الموثوق، ونساعد القراء على مواكبة أحدث التطورات التكنولوجية واتخاذ قرارات مستنيرة عند اختيار الأجهزة والتطبيقات.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">ما نقدمه</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>أخبار تقنية حصرية ومحدثة باستمرار</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>مراجعات شاملة للتطبيقات والأجهزة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>شروحات وإرشادات تقنية سهلة الفهم</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>تغطية مؤتمرات وإطلاقات المنتجات التقنية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>موضوعات الذكاء الاصطناعي وتطبيقاته</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">فريق العمل</h2>
              <p className="text-muted-foreground leading-relaxed">
                يقود مدونتنا فريق من الكتّاب والمحررين المتخصصين في مجال التقنية، بقيادة الأستاذ <strong>AbuNawaf</strong> الذي يتمتع بخبرة واسعة في مجال التكنولوجيا والإعلام الرقمي.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">تواصل معنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن نقدر آراء قرائنا ونسعد دائماً بالتواصل معكم. سواء كان لديك استفسار، اقتراح، أو ترغب في مشاركة رأيك حول محتوانا، لا تتردد في <Link to="/contact" className="text-primary hover:underline">الاتصال بنا</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>);

}