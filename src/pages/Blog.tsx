import { useState } from 'react';
import { Search } from 'lucide-react';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'java' | 'javascript';

const Blog = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesFilter = filter === 'all' || post.category === filter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const filterButtons: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Tất cả' },
    { value: 'java', label: 'Java' },
    { value: 'javascript', label: 'JavaScript' },
  ];

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Blog</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Khám phá các bài viết về Java và JavaScript. Từ kiến thức cơ bản đến các kỹ thuật nâng cao.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary/50 py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {filterButtons.map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    filter === btn.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  )}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">
                Không tìm thấy bài viết nào phù hợp.
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Hiển thị {filteredPosts.length} / {blogPosts.length} bài viết
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
