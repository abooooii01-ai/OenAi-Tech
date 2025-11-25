import { Tool } from '../types/tool';

export const AI_TOOLS: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'أقوى نموذج محادثة ذكي من OpenAI للإجابة على الأسئلة وتوليد المحتوى',
    category: 'chat',
    link: 'https://chat.openai.com',
    icon: '🤖',
    isPremium: true,
    tags: ['محادثة', 'كتابة', 'برمجة']
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'أداة توليد صور بالذكاء الاصطناعي بجودة احترافية عالية',
    category: 'design',
    link: 'https://www.midjourney.com',
    icon: '🎨',
    isPremium: true,
    tags: ['تصميم', 'صور', 'فن']
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'مساعد برمجة ذكي يساعدك في كتابة الأكواد بسرعة وكفاءة',
    category: 'code',
    link: 'https://github.com/features/copilot',
    icon: '💻',
    isPremium: true,
    tags: ['برمجة', 'أكواد', 'تطوير']
  },
  {
    id: '4',
    name: 'Jasper AI',
    description: 'أداة كتابة محتوى تسويقي وإبداعي بالذكاء الاصطناعي',
    category: 'writing',
    link: 'https://www.jasper.ai',
    icon: '✍️',
    isPremium: true,
    tags: ['كتابة', 'تسويق', 'محتوى']
  },
  {
    id: '5',
    name: 'DALL-E',
    description: 'توليد صور من النص باستخدام تقنيات OpenAI المتقدمة',
    category: 'design',
    link: 'https://openai.com/dall-e-3',
    icon: '🖼️',
    tags: ['تصميم', 'صور', 'إبداع']
  },
  {
    id: '6',
    name: 'Runway ML',
    description: 'أدوات متقدمة لتحرير وتوليد الفيديو بالذكاء الاصطناعي',
    category: 'video',
    link: 'https://runwayml.com',
    icon: '🎬',
    isPremium: true,
    tags: ['فيديو', 'مونتاج', 'تحرير']
  },
  {
    id: '7',
    name: 'ElevenLabs',
    description: 'تحويل النص إلى صوت طبيعي بجودة عالية جداً',
    category: 'audio',
    link: 'https://elevenlabs.io',
    icon: '🎙️',
    isPremium: true,
    tags: ['صوت', 'تعليق', 'نطق']
  },
  {
    id: '8',
    name: 'Copy.ai',
    description: 'كتابة نصوص تسويقية وإعلانات بالذكاء الاصطناعي',
    category: 'writing',
    link: 'https://www.copy.ai',
    icon: '📝',
    tags: ['كتابة', 'تسويق', 'إعلانات']
  },
  {
    id: '9',
    name: 'Stable Diffusion',
    description: 'نموذج مفتوح المصدر لتوليد الصور من النص',
    category: 'design',
    link: 'https://stablediffusionweb.com',
    icon: '🎭',
    tags: ['تصميم', 'صور', 'مفتوح المصدر']
  },
  {
    id: '10',
    name: 'Grammarly',
    description: 'مساعد كتابة ذكي لتحسين القواعد والإملاء والأسلوب',
    category: 'writing',
    link: 'https://www.grammarly.com',
    icon: '📖',
    tags: ['كتابة', 'تصحيح', 'لغة']
  },
  {
    id: '11',
    name: 'Synthesia',
    description: 'إنشاء فيديوهات بمقدمين افتراضيين بالذكاء الاصطناعي',
    category: 'video',
    link: 'https://www.synthesia.io',
    icon: '🎥',
    isPremium: true,
    tags: ['فيديو', 'مقدم', 'تسويق']
  },
  {
    id: '12',
    name: 'Notion AI',
    description: 'مساعد ذكي متكامل داخل تطبيق Notion للكتابة والتنظيم',
    category: 'writing',
    link: 'https://www.notion.so/product/ai',
    icon: '📋',
    isPremium: true,
    tags: ['كتابة', 'تنظيم', 'إنتاجية']
  },
  {
    id: '13',
    name: 'Adobe Firefly',
    description: 'مجموعة أدوات ذكاء اصطناعي من Adobe للتصميم والإبداع',
    category: 'design',
    link: 'https://www.adobe.com/products/firefly.html',
    icon: '🔥',
    tags: ['تصميم', 'فوتوشوب', 'إبداع']
  },
  {
    id: '14',
    name: 'Claude',
    description: 'مساعد ذكاء اصطناعي من Anthropic للمحادثة والتحليل',
    category: 'chat',
    link: 'https://claude.ai',
    icon: '🧠',
    tags: ['محادثة', 'تحليل', 'كتابة']
  },
  {
    id: '15',
    name: 'Pictory',
    description: 'تحويل المقالات والنصوص إلى فيديوهات تلقائياً',
    category: 'video',
    link: 'https://pictory.ai',
    icon: '📹',
    isPremium: true,
    tags: ['فيديو', 'محتوى', 'تسويق']
  },
  {
    id: '16',
    name: 'Descript',
    description: 'تحرير الفيديو والصوت بتقنيات الذكاء الاصطناعي',
    category: 'video',
    link: 'https://www.descript.com',
    icon: '🎞️',
    isPremium: true,
    tags: ['فيديو', 'صوت', 'تحرير']
  },
  {
    id: '17',
    name: 'Writesonic',
    description: 'كتابة مقالات ومحتوى SEO بالذكاء الاصطناعي',
    category: 'writing',
    link: 'https://writesonic.com',
    icon: '🚀',
    tags: ['كتابة', 'SEO', 'محتوى']
  },
  {
    id: '18',
    name: 'Canva AI',
    description: 'أدوات تصميم ذكية داخل منصة Canva الشهيرة',
    category: 'design',
    link: 'https://www.canva.com/ai-image-generator',
    icon: '✨',
    tags: ['تصميم', 'سوشيال ميديا', 'إبداع']
  },
  {
    id: '19',
    name: 'Murf AI',
    description: 'تحويل النص إلى صوت احترافي بأصوات متعددة',
    category: 'audio',
    link: 'https://murf.ai',
    icon: '🎵',
    isPremium: true,
    tags: ['صوت', 'تعليق صوتي', 'بودكاست']
  },
  {
    id: '20',
    name: 'Perplexity',
    description: 'محرك بحث ذكي يجيب على أسئلتك بدقة عالية',
    category: 'chat',
    link: 'https://www.perplexity.ai',
    icon: '🔍',
    tags: ['بحث', 'محادثة', 'معلومات']
  },
  {
    id: '21',
    name: 'Otter.ai',
    description: 'تحويل الصوت إلى نص تلقائياً مع ملخصات ذكية',
    category: 'audio',
    link: 'https://otter.ai',
    icon: '🦦',
    tags: ['صوت إلى نص', 'اجتماعات', 'ترجمة']
  },
  {
    id: '22',
    name: 'Playground AI',
    description: 'منصة مجانية لتوليد الصور بالذكاء الاصطناعي',
    category: 'design',
    link: 'https://playgroundai.com',
    icon: '🎪',
    tags: ['تصميم', 'صور', 'مجاني']
  },
  {
    id: '23',
    name: 'Replit Ghostwriter',
    description: 'مساعد برمجة ذكي داخل بيئة Replit التطويرية',
    category: 'code',
    link: 'https://replit.com/ai',
    icon: '👻',
    isPremium: true,
    tags: ['برمجة', 'تطوير', 'أكواد']
  },
  {
    id: '24',
    name: 'Lumen5',
    description: 'تحويل المحتوى المكتوب إلى فيديوهات تلقائياً',
    category: 'video',
    link: 'https://lumen5.com',
    icon: '💡',
    isPremium: true,
    tags: ['فيديو', 'محتوى', 'سوشيال ميديا']
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'الكل', icon: '🌟' },
  { id: 'chat', name: 'محادثة', icon: '💬' },
  { id: 'writing', name: 'كتابة', icon: '✍️' },
  { id: 'design', name: 'تصميم', icon: '🎨' },
  { id: 'code', name: 'برمجة', icon: '💻' },
  { id: 'video', name: 'فيديو', icon: '🎬' },
  { id: 'audio', name: 'صوت', icon: '🎙️' }
];
