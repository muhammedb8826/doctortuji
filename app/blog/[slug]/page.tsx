import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, posts } from "../posts-data";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Blog post not found",
    };
  }
  return {
    title: `${post.title} | Doctor Tuji Orthopedic Blog`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <div className="bg-[#F7FAFB] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Link href="/blog" className="text-teal-700 font-semibold hover:underline">
            Blog
          </Link>
          <span aria-hidden="true">/</span>
          <span>{post.category}</span>
        </div>

        <article className="space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">{post.title}</h1>
            <p className="text-base text-slate-600">{post.excerpt}</p>
          </div>

          <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-4">
            {post.body
              .trim()
              .split("\n\n")
              .map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="text-base leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
          </div>
        </article>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Book an appointment
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-white"
          >
            View orthopedic services
          </Link>
        </div>
      </div>
    </div>
  );
}

