import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog — Philipp Widenfels",
  description: "Thoughts on AI, engineering, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
          Blog
        </p>
        <h1 className="font-heading text-5xl md:text-6xl tracking-tight text-foreground">
          Thoughts &{" "}
          <span className="italic text-gradient">writing</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-lg">
          On AI, engineering, and the things I learn along the way.
        </p>

        {posts.length === 0 ? (
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="mt-16 space-y-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 -mx-6 rounded-xl hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
