import { Github, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">O</span>
              </div>
              
            </div>
            <p className="text-sm text-muted-foreground">
              مدونة تقنية متخصصة في آخر أخبار التكنولوجيا والتطبيقات
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">التصنيفات</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">التطبيقات</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">iPhone</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Android</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">ذكاء اصطناعي</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">روابط مفيدة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">تواصل معنا</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 OenAI. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>);

}