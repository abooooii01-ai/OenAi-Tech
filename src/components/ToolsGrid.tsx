import { Tool } from '../types/tool';
import ToolCard from './ToolCard';

interface ToolsGridProps {
  tools: Tool[];
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">لا توجد أدوات في هذا التصنيف حالياً</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
