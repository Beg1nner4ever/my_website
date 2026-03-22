import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog — Philipp Widenfels",
  description: "Thoughts on AI, engineering, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="noise">
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Blog
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Thoughts &{" "}
            <span className="text-gradient">writing</span>
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
                  className="group block p-6 -mx-6 rounded-2xl hover:bg-card/50 transition-colors"
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

                  <h2 className="text-xl font-semibold group-hover:text-gradient transition-all">
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
                          className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
