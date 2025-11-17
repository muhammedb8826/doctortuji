import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts-data";

export const metadata: Metadata = {
  title: "Orthopedic Blog | Knee, Hip & Spine Advice from Doctor Tuji Clinic [City]",
  description:
    "Read orthopedic articles from Doctor Tuji Orthopedic Clinic in [City] on knee pain, hip and spine problems, sports injuries, home rehab and surgery recovery.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#F7FAFB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
        <section className="space-y-4 max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            Doctor Tuji Orthopedic Blog
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Orthopedic insights in simple language.
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            Our team shares practical advice on injury prevention, home rehab and surgery recovery—so you can better understand
            your condition and take the right next step. Click any article to dive into the full story.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex flex-wrap gap-2 text-xs">
            {["All", "Injury prevention", "Rehab at home", "Surgery recovery", "Sports injuries"].map((cat) => (
              <button
                key={cat}
                type="button"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-teal-600"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <span className="text-xs uppercase tracking-wide text-teal-700 font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
                    <p className="text-sm text-slate-600 flex-1">{post.excerpt}</p>
                    <span className="text-sm font-semibold text-teal-700">
                      Read article →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


