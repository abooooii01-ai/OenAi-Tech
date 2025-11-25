import { Menu, Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn-ai.onspace.ai/onspace/files/CUZVgbw6vVnmBV6Rw5Dn6A/play_store_512.png"
              alt="OenAI Logo"
              className="w-10 h-10 object-contain" />

            
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              الرئيسية
            </Link>
            <Link to="/ai-tools" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              أدوات الذكاء الاصطناعي
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              من نحن
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              اتصل بنا
            </Link>
            <div className="relative">
              







              {isCategoriesOpen &&
              <div
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl py-2 animate-fade-in">

                  <a
                  href="https://www.oenai.one/search/label/Apple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors">

                    🍎 Apple
                  </a>
                  <a
                  href="https://www.oenai.one/search/label/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA?m=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors">

                    📱 تطبيقات
                  </a>
                  <a
                  href="https://www.oenai.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors border-t border-border/50 mt-2">

                    🌐 جميع الفئات
                  </a>
                </div>
              }
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>

            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {isMenuOpen &&
      <div className="md:hidden border-t bg-card p-4 animate-slide-in">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
              الرئيسية
            </Link>
            <Link to="/ai-tools" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
              أدوات الذكاء الاصطناعي
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
              من نحن
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
              اتصل بنا
            </Link>
            <div className="border-t pt-4 mt-2">
              <p className="text-xs text-muted-foreground mb-2 px-2">الفئات</p>
              <a
              href="https://www.oenai.one/search/label/Apple"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">

                🍎 Apple
              </a>
              <a
              href="https://www.oenai.one/search/label/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA?m=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">

                📱 تطبيقات
              </a>
              <a
              href="https://www.oenai.one"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 border-t mt-2 pt-4">

                🌐 جميع الفئات
              </a>
            </div>
          </nav>
        </div>
      }
    </header>);

}