import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolsGrid from '../components/ToolsGrid';
import { AI_TOOLS, CATEGORIES } from '../constants/tools';
import { Sparkles } from 'lucide-react';

export default function AIToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = selectedCategory === 'all'
    ? AI_TOOLS
    : AI_TOOLS.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">مجموعة شاملة من الأدوات</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                أدوات الذكاء الاصطناعي
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                اكتشف أفضل وأقوى أدوات الذكاء الاصطناعي لمساعدتك في الكتابة، التصميم، البرمجة، وإنشاء المحتوى
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm
                    transition-all duration-200 whitespace-nowrap flex-shrink-0
                    ${selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:scale-105'
                    }
                  `}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="bg-background/20 text-xs px-2 py-0.5 rounded-full">
                    {category.id === 'all' 
                      ? AI_TOOLS.length 
                      : AI_TOOLS.filter(t => t.category === category.id).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCategory === 'all' 
                  ? `جميع الأدوات (${filteredTools.length})`
                  : `${CATEGORIES.find(c => c.id === selectedCategory)?.name} (${filteredTools.length})`
                }
              </h2>
            </div>
            <ToolsGrid tools={filteredTools} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
