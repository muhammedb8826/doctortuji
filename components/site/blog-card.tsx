import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
}

export function BlogCard({ slug, title, category, excerpt }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          {category}
        </p>
        <CardTitle className="mt-1 text-base">{title}</CardTitle>
        <CardDescription className="mt-2">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link
          href={`/blog/${slug}`}
          className="text-sm font-medium text-teal-700 hover:underline"
        >
          Read more →
        </Link>
      </CardContent>
    </Card>
  );
}


