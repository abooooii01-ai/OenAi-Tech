export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  link: string;
  icon: string;
  isPremium?: boolean;
  tags?: string[];
}

export type ToolCategory = 'writing' | 'design' | 'code' | 'video' | 'audio' | 'chat' | 'other';
