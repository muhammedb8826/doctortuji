"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";

const heroSlides = [
  {
    src: "/img/IMG_3848.JPG",
    alt: "Surgeon supporting a patient walking again",
    title: "Relieve orthopedic pain with specialists who listen.",
    description:
      "Personalized care for knees, hips, spine and sports injuries—with clear plans and compassionate follow-up.",
    ctaHref: "/contact",
    ctaLabel: "Book an Appointment",
  },
  {
    src: "/img/IMG_3849.JPG",
    alt: "Orthopedic doctor reviewing digital imaging",
    title: "Advanced diagnostics, from imaging to minimally invasive surgery.",
    description:
      "We combine modern technology with practical guidance so you always know your next step.",
    ctaHref: "/services",
    ctaLabel: "Explore Services",
  },
  {
    src: "/img/IMG_3847 copy.JPG",
    alt: "Physiotherapist guiding a patient through rehab",
    title: "Rehab support that keeps you moving between visits.",
    description:
      "Structured physiotherapy, home exercise plans and helpful check-ins after every treatment.",
    ctaHref: "/contact",
    ctaLabel: "Start Your Recovery",
  },
];

const serviceHighlights = [
  {
    title: "General Orthopedic",
    description: "Whole-body bone, joint and muscle care with tailored plans.",
    icon: "🩺",
  },
  {
    title: "Advanced Trauma Care",
    description: "Rapid stabilization and surgical readiness for severe injuries.",
    icon: "🚑",
  },
  {
    title: "Joint Replacement",
    description: "Digital planning, enhanced recovery and guided rehab.",
    icon: "⚙️",
  },
  {
    title: "Arthroscopic Surgery",
    description: "Minimally invasive scopes for quicker healing.",
    icon: "🔍",
  },
  {
    title: "Sports Injury Treatment",
    description: "Performance-focused rehab for athletes at every level.",
    icon: "🏃",
  },
  {
    title: "Physiotherapy & Rehab",
    description: "Personalized therapy to rebuild strength and confidence.",
    icon: "💪",
  },
  {
    title: "Pediatric Orthopedics",
    description: "Friendly surgical and non-surgical care for kids & teens.",
    icon: "🧒",
  },
  {
    title: "Oncology & Reconstruction",
    description: "Limb-sparing tumor surgery with thoughtful follow-up.",
    icon: "🎗️",
  },
  {
    title: "Brain & Spine Surgery",
    description: "Neurosurgical expertise for brain and spinal conditions.",
    icon: "🧠",
  },
];

const kpiStats = [
  { label: "Patients treated", value: 10000, suffix: "+" },
  { label: "Orthopedic surgeries", value: 2500, suffix: "+" },
  { label: "Years of experience", value: 15, suffix: "+" },
  { label: "Average rating", value: 4.9, suffix: "★", decimals: 1 },
];

const howItWorksSteps = [
  {
    title: "Consultation",
    description: "Tell us your story and goals so we can tailor the plan.",
    icon: "💬",
  },
  {
    title: "Diagnosis",
    description: "Targeted exams and imaging to pinpoint the root cause.",
    icon: "🩺",
  },
  {
    title: "Treatment Plan",
    description: "Clear options from conservative therapy to surgery.",
    icon: "📋",
  },
  {
    title: "Follow-up & Rehab",
    description: "Ongoing check-ins, exercise progressions and support.",
    icon: "✅",
  },
];

const testimonials = [
  {
    quote:
      "Dr Tuji’s team explained every step of my knee replacement and checked on me throughout recovery.",
    name: "Martha, 62 • Knee Replacement",
  },
  {
    quote:
      "My sports injury treatment combined precise arthroscopy with rehab that got me back on the field.",
    name: "Samuel, 34 • Sports Injury",
  },
  {
    quote:
      "They cared for my father after a hip fracture with compassion, clear instructions, and follow-up calls.",
    name: "Amina • Caregiver",
  },
  {
    quote:
      "Chronic back pain affected my work. The spine specialist designed a plan that finally brought relief.",
    name: "Daniel, 41 • Spine Patient",
  },
];

const blogPosts = [
  {
    title: "Get your health back with a Dr. Tuji orthopedic specialist",
    category: "Knee Care",
    excerpt:
      "Learn the red-flag symptoms that mean it’s time to book an orthopedic visit and how we diagnose knee pain.",
    href: "/blog/knee-pain-when-to-see-specialist",
    image:
      "/img/IMG_3846.JPG",
  },
  {
    title: "Preparing for knee or hip replacement surgery",
    category: "Joint Replacement",
    excerpt:
      "Step-by-step prep checklist, hospital tips, and recovery milestones to expect after your procedure.",
    href: "/blog/preparing-for-joint-replacement",
    image:
      "/img/IMG_3847.JPG",
  },
  {
    title: "Rehab at home: simple exercises after orthopedic surgery",
    category: "Rehab",
    excerpt:
      "Safe, doctor-approved movements to maintain strength and flexibility between clinic visits.",
    href: "/blog/rehab-at-home-exercises",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
];

export function HomePageContent() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTestimonialIndex((idx) => (idx + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Carousel slides={heroSlides} intervalMs={5000} />
        <div className="absolute inset-x-0 bottom-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
            {["Same-week orthopedic consults", "Digital imaging & onsite rehab", "Emergency line for urgent injuries"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-teal-800 shadow-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                Orthopedic specialties
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 mt-2">
                Targeted treatment for every joint and muscle.
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
                We combine accurate diagnosis, conservative care, and advanced surgery to
                relieve pain and restore movement across the entire musculoskeletal system.
              </p>
            </div>
            <Link href="/services">
              <Button size="sm" className="rounded-full bg-teal-700 hover:bg-teal-800">
                View all services
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <Card
                key={service.title}
                className="h-full border-slate-200 bg-white/80 backdrop-blur hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-teal-50 text-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KPI STRIP */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-4">
          {kpiStats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
              <p className="mt-2 text-xs uppercase tracking-widest text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F1F6F7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Care pathway
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 mt-2">
              Every step kept simple and transparent.
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              From your first consultation to guided rehabilitation, we make sure you know
              what to expect and how to prepare.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-lg">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-teal-700">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600 flex-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                Patient stories
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 mt-2">
                Real progress from patients like you.
              </h2>
            </div>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  setTestimonialIndex(
                    (idx) => (idx - 1 + testimonials.length) % testimonials.length,
                  )
                }
                aria-label="Previous testimonial"
              >
                ←
              </Button>
              <Button
                size="sm"
                className="bg-teal-700 hover:bg-teal-800"
                onClick={() => setTestimonialIndex((idx) => (idx + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                →
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${testimonialIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-3">
                  <Card className="h-full border-slate-200 bg-slate-50">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <p className="text-slate-700 text-base leading-relaxed">
                        “{testimonial.quote}”
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-sm font-semibold text-teal-800">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="text-sm font-semibold text-slate-900">
                          {testimonial.name}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOP BLOGS */}
      <section className="bg-[#F7FAFB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                Top blogs
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 mt-2">
                Trusted advice from our orthopedic specialists.
              </h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="rounded-full">
                View blog
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} className="h-full border-slate-200 bg-white overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">
                    {post.category}
                  </p>
                  <CardTitle className="mt-2 text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <CardDescription className="text-slate-600">{post.excerpt}</CardDescription>
                  <Link
                    href={post.href}
                    className="text-sm font-semibold text-teal-700 hover:underline"
                  >
                    Read article →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({
  value,
  duration = 2000,
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const nextValue = value * progress;
      setCurrentValue(nextValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  const formatted =
    decimals > 0
      ? currentValue.toFixed(decimals)
      : Math.round(currentValue).toLocaleString();

  return (
    <p className="text-4xl font-semibold tracking-tight text-white drop-shadow-sm">
      {formatted}
      <span className="ml-1 text-2xl">{suffix}</span>
    </p>
  );
}


