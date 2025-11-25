import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-accent opacity-5"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>مدونة تقنية متخصصة</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            اكتشف أحدث الأخبار
            <br />
            
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم لك آخر المستجدات في عالم التكنولوجيا، التطبيقات، والأدوات الذكية
            التي تساعدك على الاستفادة القصوى من أجهزتك
          </p>
        </div>
      </div>
    </section>);

}