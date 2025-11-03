import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  "General Orthopedic",
  "Advanced trauma care",
  "Joint replacement",
  "Arthroscopic surgery",
  "Sport injury treatment",
  "Physiotherapy and rehabilitation",
  "Pediatric orthopedic surgeries",
  "Oncology and reconstructive surgeries",
  "Brain and spine surgery",
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Our Services</h1>
      <p className="mt-4 text-gray-600 max-w-3xl">Comprehensive orthopedic services tailored to enhance your health and well-being.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <Card key={svc}>
            <CardHeader>
              <CardTitle>{svc}</CardTitle>
              <CardDescription>Learn how we can help with {svc.toLowerCase()}.</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}


