import { Tool } from '../types/tool';
import { ExternalLink, Crown } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-xl p-6 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{tool.icon}</div>
        {tool.isPremium && (
          <div className="flex items-center gap-1 text-amber-500 text-xs bg-amber-500/10 px-2 py-1 rounded-full">
            <Crown className="w-3 h-3" />
            <span>مدفوع</span>
          </div>
        )}
      </div>
      
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {tool.description}
      </p>
      
      {tool.tags && tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
