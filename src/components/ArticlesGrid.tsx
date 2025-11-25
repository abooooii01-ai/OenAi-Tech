import { articles } from "@/constants/articles";
import ArticleCard from "./ArticleCard";

export default function ArticlesGrid() {
  return (
    <section className="container py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">آخر المقالات</h2>
        <p className="text-muted-foreground">
          تابع أحدث المقالات والأخبار التقنية
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
