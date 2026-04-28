import { Brain, Globe, Zap, Code2, Cpu, Layers, LucideIcon } from 'lucide-react';
import type { BlogSection } from './BlogReader';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  category: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  icon: LucideIcon;
  color: string;
  border: string;
  iconColor: string;
  glow: string;
  status: string;
  content: BlogSection[];
}

export const BLOGS: BlogPost[] = [
  {
    id: 1,
    title: 'Building a RAG Pipeline with LangChain and Pinecone',
    excerpt: 'A deep-dive into retrieval-augmented generation — how to combine vector search with large language models to build intelligent, context-aware applications.',
    tags: ['Gen AI', 'LangChain', 'Pinecone'],
    category: 'Gen AI',
    date: 'Apr 2025',
    readTime: '8 min read',
    views: 1240,
    likes: 89,
    icon: Brain,
    color: 'from-purple-600/20 to-pink-600/20',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    glow: 'rgba(168,85,247,0.15)',
    status: 'published',
    content: [
      { type: 'h2', text: 'What is RAG?' },
      { type: 'p', text: 'Retrieval-Augmented Generation (RAG) is a technique that enhances LLMs by giving them access to external knowledge at inference time. Instead of relying solely on parametric memory baked in during training, the model retrieves relevant documents from a vector store and uses them as context.' },
      { type: 'callout', variant: 'info', text: 'RAG is the go-to pattern when you need an LLM to answer questions about your own data without fine-tuning.' },
      { type: 'h2', text: 'Setting Up the Pipeline' },
      { type: 'p', text: 'We will use LangChain as our orchestration layer and Pinecone as the managed vector database. First, install the dependencies:' },
      { type: 'code', lang: 'bash', text: 'pip install langchain pinecone-client openai tiktoken' },
      { type: 'h3', text: '1. Embed and Index Your Documents' },
      { type: 'p', text: 'Split your source documents into chunks, embed them using OpenAI embeddings, and upsert them into a Pinecone index.' },
      { type: 'code', lang: 'python', text: `from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
import pinecone

pinecone.init(api_key="YOUR_KEY", environment="us-east1-gcp")

loader = TextLoader("docs/knowledge_base.txt")
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(docs)

embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_documents(chunks, embeddings, index_name="rag-index")` },
      { type: 'h3', text: '2. Build the Retrieval Chain' },
      { type: 'code', lang: 'python', text: `from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

llm = ChatOpenAI(model="gpt-4o", temperature=0)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 4}),
    return_source_documents=True,
)

result = qa_chain("What are the refund policies?")
print(result["result"])` },
      { type: 'h2', text: 'Key Considerations' },
      { type: 'ul', items: [
        'Chunk size matters — too large loses precision, too small loses context.',
        'Use hybrid search (dense + sparse) for better recall on keyword-heavy queries.',
        'Always cite source documents in your UI so users can verify answers.',
        'Monitor retrieval quality separately from generation quality.',
      ]},
      { type: 'callout', variant: 'tip', text: 'Use LangSmith to trace every step of your chain and identify where the pipeline breaks down.' },
      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: 'RAG pipelines are a powerful way to ground LLMs in your own data. LangChain + Pinecone gives you a production-ready foundation that scales well. The most impactful improvements usually come from better chunking strategies and re-ranking retrieved results before passing them to the model.' },
    ],
  },
  {
    id: 2,
    title: 'WebSockets vs Server-Sent Events: When to Use Which',
    excerpt: 'A practical comparison of real-time communication protocols — exploring use cases, trade-offs, and implementation patterns for modern web applications.',
    tags: ['Node.js', 'WebSockets', 'Backend'],
    category: 'Backend',
    date: 'Mar 2025',
    readTime: '6 min read',
    views: 870,
    likes: 62,
    icon: Globe,
    color: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    glow: 'rgba(59,130,246,0.15)',
    status: 'published',
    content: [
      { type: 'h2', text: 'The Core Difference' },
      { type: 'p', text: 'WebSockets provide a full-duplex, persistent connection between client and server — both sides can send messages freely. Server-Sent Events (SSE) are unidirectional: only the server pushes data to the client over a regular HTTP connection.' },
      { type: 'h2', text: 'When to Use WebSockets' },
      { type: 'ul', items: [
        'Chat applications where clients send and receive messages.',
        'Multiplayer games requiring low-latency bidirectional data.',
        'Collaborative editing tools (like Google Docs).',
        'Live trading dashboards that also submit orders.',
      ]},
      { type: 'code', lang: 'typescript', text: `// Node.js WebSocket server (ws library)
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    // Broadcast to all clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });
});` },
      { type: 'h2', text: 'When to Use SSE' },
      { type: 'ul', items: [
        'Live news feeds or social media timelines.',
        'Progress updates for long-running jobs.',
        'Streaming LLM responses (like ChatGPT does).',
        'Any scenario where the client only listens.',
      ]},
      { type: 'code', lang: 'typescript', text: `// Express SSE endpoint
app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const interval = setInterval(() => {
    res.write(\`data: \${JSON.stringify({ time: Date.now() })}\n\n\`);
  }, 1000);

  req.on('close', () => clearInterval(interval));
});` },
      { type: 'h2', text: 'Quick Comparison' },
      { type: 'ul', items: [
        'SSE: simpler, uses HTTP/2 multiplexing, automatic reconnect built in.',
        'WebSockets: full duplex, lower overhead per message, binary support.',
        'SSE has a browser connection limit per domain (6 on HTTP/1.1).',
        'WebSockets require special proxy/load-balancer config (sticky sessions).',
      ]},
      { type: 'callout', variant: 'tip', text: 'Default to SSE for server-push scenarios. Only reach for WebSockets when you genuinely need the client to send frequent messages.' },
    ],
  },
  {
    id: 3,
    title: 'Mastering React Performance: Memoization Deep Dive',
    excerpt: 'Understanding useMemo, useCallback, and React.memo — when they help, when they hurt, and how to profile your app to make data-driven decisions.',
    tags: ['React', 'Performance', 'Frontend'],
    category: 'Frontend',
    date: 'Feb 2025',
    readTime: '7 min read',
    views: 1530,
    likes: 114,
    icon: Zap,
    color: 'from-yellow-600/20 to-orange-600/20',
    border: 'border-yellow-500/20',
    iconColor: 'text-yellow-400',
    glow: 'rgba(234,179,8,0.15)',
    status: 'published',
    content: [
      { type: 'h2', text: 'Why Memoization Exists' },
      { type: 'p', text: 'React re-renders a component every time its state or props change. For most components this is fast, but when a child component is expensive to render or a value is costly to compute, memoization lets you skip redundant work.' },
      { type: 'callout', variant: 'warning', text: 'Memoization adds its own overhead (cache lookup + comparison). Never memoize by default — profile first.' },
      { type: 'h2', text: 'React.memo' },
      { type: 'p', text: 'Wraps a component so it only re-renders when its props change (shallow comparison).' },
      { type: 'code', lang: 'tsx', text: `const ExpensiveList = React.memo(({ items }: { items: string[] }) => {
  // Only re-renders when 'items' reference changes
  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
});` },
      { type: 'h2', text: 'useCallback' },
      { type: 'p', text: 'Memoizes a function reference. Essential when passing callbacks to memoized children — without it, a new function is created every render, breaking React.memo.' },
      { type: 'code', lang: 'tsx', text: `const handleDelete = useCallback((id: string) => {
  setItems(prev => prev.filter(item => item.id !== id));
}, []); // stable reference across renders` },
      { type: 'h2', text: 'useMemo' },
      { type: 'p', text: 'Memoizes a computed value. Use it for expensive derivations — sorting large arrays, complex filtering, or heavy calculations.' },
      { type: 'code', lang: 'tsx', text: `const sortedItems = useMemo(() =>
  [...items].sort((a, b) => b.score - a.score),
  [items] // only recomputes when items changes
);` },
      { type: 'h2', text: 'How to Profile Before Optimizing' },
      { type: 'ol', items: [
        'Open React DevTools → Profiler tab.',
        'Click Record and interact with your UI.',
        'Stop recording and inspect the flamegraph.',
        'Look for components with high "self" render time.',
        'Only then apply memoization to those specific components.',
      ]},
      { type: 'callout', variant: 'tip', text: 'The best optimization is removing unnecessary state and lifting expensive computations out of the render cycle entirely.' },
    ],
  },
  {
    id: 4,
    title: 'Designing a Scalable REST API with Express & PostgreSQL',
    excerpt: 'From schema design to middleware patterns — a step-by-step walkthrough for building production-ready REST APIs with proper authentication and error handling.',
    tags: ['Node.js', 'PostgreSQL', 'API'],
    category: 'Backend',
    date: 'Jan 2025',
    readTime: '10 min read',
    views: 960,
    likes: 77,
    icon: Code2,
    color: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    glow: 'rgba(52,211,153,0.15)',
    status: 'published',
    content: [
      { type: 'h2', text: 'Project Structure' },
      { type: 'code', lang: 'bash', text: `src/
  routes/       # Express routers
  controllers/  # Business logic
  middleware/   # Auth, validation, error handling
  services/     # DB queries (repository pattern)
  types/        # Shared TypeScript interfaces` },
      { type: 'h2', text: 'Database Schema' },
      { type: 'p', text: 'Design your PostgreSQL schema with proper indexes and foreign keys from the start. Migrations keep the schema versioned alongside your code.' },
      { type: 'code', lang: 'sql', text: `CREATE TABLE users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       TEXT UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE posts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  body        TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_posts_user_id ON posts(user_id);` },
      { type: 'h2', text: 'Auth Middleware' },
      { type: 'code', lang: 'typescript', text: `import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};` },
      { type: 'h2', text: 'Global Error Handler' },
      { type: 'code', lang: 'typescript', text: `app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
  });
});` },
      { type: 'h2', text: 'Key Best Practices' },
      { type: 'ul', items: [
        'Always validate request bodies with Zod or Joi before hitting the DB.',
        'Use parameterized queries — never string-interpolate user input into SQL.',
        'Return consistent error shapes: { error: string, code?: string }.',
        'Use HTTP status codes correctly — 201 for creates, 204 for deletes.',
        'Rate-limit public endpoints to prevent abuse.',
      ]},
    ],
  },
  {
    id: 5,
    title: 'Vector Databases Explained: Faiss vs Pinecone vs ChromaDB',
    excerpt: 'A practical guide to understanding vector databases — comparing the top options for embedding storage and similarity search in production AI systems.',
    tags: ['Gen AI', 'Vector DB', 'Machine Learning'],
    category: 'Gen AI',
    date: 'Dec 2024',
    readTime: '9 min read',
    views: 2100,
    likes: 158,
    icon: Cpu,
    color: 'from-violet-600/20 to-indigo-600/20',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    glow: 'rgba(139,92,246,0.15)',
    status: 'published',
    content: [
      { type: 'h2', text: 'Why Vector Databases?' },
      { type: 'p', text: 'Traditional databases search by exact match or range. Vector databases search by semantic similarity — finding the most conceptually related items based on their embedding representations. This is the backbone of RAG systems, recommendation engines, and semantic search.' },
      { type: 'h2', text: 'Faiss (Meta)' },
      { type: 'p', text: 'An open-source library for efficient similarity search. Runs in-process, no server required. Best for research or when you need maximum control.' },
      { type: 'ul', items: [
        '✅ Extremely fast — optimized C++ with GPU support.',
        '✅ Free, runs locally, no network overhead.',
        '❌ No persistence out of the box — you save/load indexes manually.',
        '❌ No metadata filtering — you must implement this yourself.',
      ]},
      { type: 'h2', text: 'Pinecone' },
      { type: 'p', text: 'A fully managed cloud vector database. You send vectors via API, it handles indexing, replication, and scaling.' },
      { type: 'ul', items: [
        '✅ Production-ready with zero ops overhead.',
        '✅ Supports metadata filtering alongside vector search.',
        '✅ Real-time upserts with immediate consistency.',
        '❌ Paid service — costs scale with index size and query volume.',
      ]},
      { type: 'h2', text: 'ChromaDB' },
      { type: 'p', text: 'An open-source, developer-friendly vector DB that runs locally or as a server. The easiest way to get started with vector search in Python.' },
      { type: 'code', lang: 'python', text: `import chromadb

client = chromadb.Client()
collection = client.create_collection("my_docs")

collection.add(
    documents=["RAG is powerful", "Vectors enable semantic search"],
    ids=["doc1", "doc2"]
)

results = collection.query(query_texts=["how does retrieval work?"], n_results=1)
print(results)` },
      { type: 'h2', text: 'Which Should You Choose?' },
      { type: 'ul', items: [
        'Prototype / local dev → ChromaDB (zero setup, great DX).',
        'Production at scale → Pinecone (managed, reliable, filterable).',
        'Research / GPU cluster → Faiss (raw speed, full control).',
      ]},
      { type: 'callout', variant: 'tip', text: 'Start with ChromaDB locally. Swap to Pinecone when you need persistence, filtering, and scale — the LangChain interface is nearly identical.' },
    ],
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox: A Complete Visual Guide',
    excerpt: 'Stop guessing which layout model to use. A visual, example-driven comparison of CSS Grid and Flexbox with real-world layout patterns.',
    tags: ['CSS', 'Frontend', 'Design'],
    category: 'Frontend',
    date: 'Nov 2024',
    readTime: '5 min read',
    views: 3400,
    likes: 231,
    icon: Layers,
    color: 'from-pink-600/20 to-rose-600/20',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    glow: 'rgba(236,72,153,0.15)',
    status: 'published',
    content: [
      { type: 'h2', text: 'The Mental Model' },
      { type: 'p', text: 'Flexbox is one-dimensional — it lays items out along a single axis (row OR column). Grid is two-dimensional — it controls both rows AND columns simultaneously. This single distinction drives every design decision.' },
      { type: 'h2', text: 'Use Flexbox When…' },
      { type: 'ul', items: [
        'Aligning items in a nav bar (horizontal row).',
        'Centering a single element vertically and horizontally.',
        'Building a card\'s internal layout (icon + text side by side).',
        'Distributing space between a few items in one direction.',
      ]},
      { type: 'code', lang: 'css', text: `/* Perfect centering — the classic Flexbox use case */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}` },
      { type: 'h2', text: 'Use Grid When…' },
      { type: 'ul', items: [
        'Building page-level layouts (sidebar + main + aside).',
        'Creating responsive card grids that reflow automatically.',
        'Overlapping elements (grid-area placement).',
        'You need precise row heights AND column widths together.',
      ]},
      { type: 'code', lang: 'css', text: `/* Responsive card grid — no media queries needed */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Page layout */
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}` },
      { type: 'h2', text: 'They Work Together' },
      { type: 'p', text: 'Use Grid for the macro layout (where sections live on the page) and Flexbox for the micro layout (how items inside each section are arranged). This combination covers virtually every UI pattern you will encounter.' },
      { type: 'callout', variant: 'info', text: 'When in doubt: if you\'re thinking about rows AND columns at the same time, reach for Grid. If you\'re only thinking about one direction, use Flexbox.' },
    ],
  },
];
