import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Layout from '@/components/Layout';
import { getPostById, blogPosts } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const isJava = post.category === 'java';

  // Parse markdown-like content
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code block start/end
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3) || 'code';
          codeContent = '';
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={key++} className="code-block group relative my-4 overflow-hidden rounded-lg border border-border/50">
              <div className="flex items-center justify-between border-b border-border/50 bg-secondary/30 px-4 py-2">
                <span className="font-mono text-xs text-muted-foreground">{codeLanguage}</span>
              </div>
              <pre className="overflow-x-auto p-4">
                <code className="text-sm leading-relaxed text-foreground/90">{codeContent}</code>
              </pre>
            </div>
          );
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent += (codeContent ? '\n' : '') + line;
        continue;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="mb-6 mt-8 text-3xl font-bold first:mt-0">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="mb-4 mt-8 text-2xl font-semibold text-foreground">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="mb-3 mt-6 text-xl font-semibold text-foreground">
            {line.slice(4)}
          </h3>
        );
      }
      // Lists
      else if (line.startsWith('- ') || /^\d+\.\s/.test(line)) {
        const listItem = line.startsWith('- ') ? line.slice(2) : line.replace(/^\d+\.\s/, '');
        elements.push(
          <li key={key++} className="ml-6 list-disc text-foreground/80">
            {listItem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
          </li>
        );
      }
      // Regular paragraphs
      else if (line.trim()) {
        const formattedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
          .replace(/`([^`]+)`/g, '<code class="rounded bg-secondary/50 px-1.5 py-0.5 font-mono text-sm text-primary">$1</code>');
        elements.push(
          <p
            key={key++}
            className="mb-4 leading-relaxed text-foreground/80"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />
        );
      }
    }

    return elements;
  };

  // Related posts
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <Layout>
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Back Link */}
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    'rounded-full px-3 py-1 font-mono text-xs font-medium',
                    isJava
                      ? 'bg-orange-500/10 text-orange-400'
                      : 'bg-yellow-500/10 text-yellow-400'
                  )}
                >
                  {isJava ? 'Java' : 'JavaScript'}
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>

              <p className="text-lg text-muted-foreground">{post.excerpt}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-md bg-secondary/50 px-2 py-1 text-xs text-muted-foreground"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Content */}
            <div className="prose-custom">{renderContent(post.content)}</div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-12 border-t border-border/50 pt-8">
                <h2 className="mb-6 text-xl font-semibold">Bài viết liên quan</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="group rounded-lg border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-card"
                    >
                      <h3 className="mb-2 font-medium text-foreground transition-colors group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
