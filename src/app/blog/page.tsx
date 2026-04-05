import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Ariel Meshorer",
  description: "Articles on software engineering, systems design, and development.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="container">
      <section className="section">
        <h1 style={{ marginBottom: "0.5rem" }}>Blog</h1>
        <p style={{ color: "var(--gray)", marginBottom: "2rem" }}>
          Thoughts on software engineering, distributed systems, and tools.
        </p>

        {posts.length === 0 ? (
          <p style={{ color: "var(--gray)" }}>No posts yet. Check back soon.</p>
        ) : (
          <div className="blog-list">
            {posts.map((post) => (
              <div key={post.slug} className="blog-entry">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                <span className="meta">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {post.readingTime}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
