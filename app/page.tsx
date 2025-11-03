import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <Carousel
          slides={[
            {
              src: "https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Orthopedic consultation",
              title: "We Provide Orthopedic Care You Can Count On",
              description:
                "Your health and well-being are our top priorities. Our specialists use the latest techniques to ensure the best outcomes.",
              ctaHref: "/contact",
              ctaLabel: "Get Appointment",
            },
            {
              src: "https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Modern operating room",
              title: "Trust in Excellence: Our Orthopedic Services Are Here for You",
              description:
                "Reliable, high-quality orthopedic care with state-of-the-art techniques for your recovery.",
              ctaHref: "/services",
              ctaLabel: "Explore Services",
            },
            {
              src: "https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Rehabilitation therapy",
              title: "Personalized Rehabilitation and Recovery",
              description:
                "From diagnosis to rehabilitation, we tailor treatments to your needs to restore mobility and alleviate pain.",
              ctaHref: "/contact",
              ctaLabel: "Book Now",
            },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Emergency Cases", "Doctors Timetable", "Opening Hours"].map((title, i) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  {i === 0 && "Our experienced team is available 24/7 for urgent care including fractures and severe injuries."}
                  {i === 1 && "Plan your visit at a time that suits you. For emergencies, we are available 24/7."}
                  {i === 2 && "Monday - Saturday 8:00am - 5:00pm"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">Learn more →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">We Are Always Ready to Help You & Your Family</h2>
            <p className="mt-4 text-gray-600">
              From emergencies to routine check-ups, our dedicated team provides the highest quality care. Trust us to be your partner in health.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Emergency Help", desc: "Immediate expert orthopedic care 24/7." },
              { title: "Enriched Pharmacy", desc: "Comprehensive medication services." },
              { title: "Medical Treatment", desc: "Preventive care to specialized surgeries." },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">We Offer Different Services To Improve Your Health</h2>
            <p className="mt-4 text-gray-600">Our team is comprised of leading professionals in orthopedic, trauma, and spine surgery.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "General Orthopedic",
              "Advanced trauma care",
              "Joint replacement",
              "Arthroscopic surgery",
              "Sport injury treatment",
              "Physiotherapy and rehabilitation",
              "Pediatric orthopedic surgeries",
              "Oncology and reconstructive surgeries",
              "Brain and spine surgery",
            ].map((svc) => (
              <Card key={svc}>
                <CardHeader>
                  <CardTitle>{svc}</CardTitle>
                  <CardDescription>Learn more about our {svc.toLowerCase()} services.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0">View details →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Do you need Emergency Orthopedics Care?</h3>
            <p className="mt-2 opacity-90">Call Us 0946904290. We are available 24/7 to diagnose, treat, and support you.</p>
          </div>
          <div className="md:text-right">
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">Contact Now</Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl font-semibold">We Are Always Ready to Help You.</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Book An Appointment — Convenient booking options and personalized care awaits you.
          </p>
          <div className="mt-6">
            <Link href="/contact"><Button>Book An Appointment</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
