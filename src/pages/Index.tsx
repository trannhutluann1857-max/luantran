import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Coffee, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 opacity-0 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-mono text-sm text-primary">Welcome to Luân blog</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight opacity-0 animate-slide-up stagger-1 md:text-6xl">
              Chia sẻ kiến thức
              <span className="text-gradient"> Java </span>
              &
              <span className="text-gradient-accent"> JavaScript</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground opacity-0 animate-slide-up stagger-2 md:text-xl">
              Khám phá các bài viết về lập trình, từ cơ bản đến nâng cao.
              Học hỏi, thực hành và phát triển kỹ năng lập trình của bạn.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-slide-up stagger-3 sm:flex-row">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:gap-3 hover:shadow-lg hover:shadow-primary/20"
              >
                Xem Blog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/profile"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Về tôi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-orange-500/30 hover:bg-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                <Coffee className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Java</h3>
              <p className="text-muted-foreground">
                OOP, Collections, Streams, Multithreading, Exception Handling và nhiều hơn nữa.
              </p>
            </div>

            <div className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-yellow-500/30 hover:bg-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                <Code2 className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">JavaScript</h3>
              <p className="text-muted-foreground">
                ES6+, Async/Await, Closures, DOM Manipulation, và các tính năng hiện đại.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Bài viết mới nhất</h2>
              <p className="mt-2 text-muted-foreground">Cập nhật kiến thức mỗi ngày</p>
            </div>
            <Link
              to="/blog"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2 sm:inline-flex"
            >
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              Xem tất cả bài viết
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
