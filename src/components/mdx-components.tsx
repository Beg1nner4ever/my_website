import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl sm:text-4xl font-bold tracking-tight mt-12 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-bold tracking-tight mt-10 mb-3 text-gradient"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-8 mb-2" {...props} />
  ),
  p: (props) => (
    <p
      className="text-muted-foreground leading-relaxed mb-4"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-muted-foreground" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-muted-foreground" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-primary pl-4 italic text-muted-foreground my-4"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-card border border-border rounded-xl p-4 overflow-x-auto mb-4 text-sm"
      {...props}
    />
  ),
  hr: () => (
    <hr className="my-8 border-border" />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-xl border border-border my-6" alt="" {...props} />
  ),
};
