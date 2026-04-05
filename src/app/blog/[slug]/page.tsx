import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "@/components/mdx-remote";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Ariel Meshorer`,
    description: post.meta.summary,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="container">
      <article className="blog-post">
        <Link href="/blog" className="back-link">
          &larr; Back to blog
        </Link>
        <div className="post-header">
          <h1>{post.meta.title}</h1>
          <div className="post-meta">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.meta.readingTime}
          </div>
        </div>
        <div className="post-content">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
