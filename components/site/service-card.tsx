import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const content = (
    <Card className="h-full transition-transform hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
            {icon ?? <span className="text-lg">🏥</span>}
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-sm font-medium text-teal-700">Learn more →</span>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a href={href} aria-label={title} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}


