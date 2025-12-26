import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const isJava = post.category === 'java';

  return (
    <article
      className={cn(
        'card-hover group flex flex-col rounded-xl border border-border/50 bg-card/50 p-6 opacity-0 animate-slide-up',
        `stagger-${Math.min(index + 1, 5)}`
      )}
    >
      <div className="mb-4 flex items-center gap-3">
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
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {post.readTime}
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {post.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary/50 px-2 py-1 text-xs text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {new Date(post.date).toLocaleDateString('vi-VN')}
        </div>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
        >
          Đọc thêm
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
