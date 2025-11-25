import { Clock, User, ArrowLeft } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Article } from "@/types/article";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/article/${article.id}`}>
      <Card className="overflow-hidden card-hover group h-full flex flex-col">
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge className="gradient-primary text-primary-foreground text-xs md:text-sm">
              {article.category}
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
            <h3 className="text-white font-bold text-base line-clamp-2">
              {article.title}
            </h3>
          </div>
        </div>

        <CardContent className="p-4 md:p-6 space-y-2 md:space-y-3 flex-1">
          <h3 className="hidden md:block text-lg md:text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 md:line-clamp-3 text-sm leading-relaxed">
            {article.excerpt}
          </p>
        </CardContent>

        <CardFooter className="px-4 md:px-6 pb-4 md:pb-6 flex items-center justify-between text-xs md:text-sm text-muted-foreground border-t pt-3">
          <div className="flex items-center gap-1.5 md:gap-2">
            <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="truncate max-w-[80px] md:max-w-none">{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{article.readTime}</span>
          </div>
        </CardFooter>

        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1 text-primary text-sm font-semibold">
            <span>اقرأ المزيد</span>
            <ArrowLeft className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
