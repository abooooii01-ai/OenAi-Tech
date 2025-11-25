import { ArrowRight, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
              نسعد بسماع آرائكم واستفساراتكم
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">البريد الإلكتروني</h3>
                  <p className="text-sm text-muted-foreground">info@oenai.one</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">وسائل التواصل</h3>
                  <p className="text-sm text-muted-foreground">تابعنا على منصاتنا</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك الكامل"
                  required />

              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  required />

              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">الموضوع</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="موضوع الرسالة"
                  required />

              </div>

              <div className="space-y-2">
                <Label htmlFor="message">الرسالة</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب رسالتك هنا..."
                  rows={6}
                  required />

              </div>

              <Button type="submit" className="w-full gradient-primary text-primary-foreground" size="lg">
                <Send className="w-5 h-5 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">لماذا تتواصل معنا؟</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>للاستفسار عن موضوع معين أو طلب مقال</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>لتقديم اقتراحات لتحسين المحتوى</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>للإبلاغ عن مشكلة تقنية في الموقع</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>للتعاون والشراكات</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>);

}