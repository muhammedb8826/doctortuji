import type { Metadata } from "next";
import Image from "next/image";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = {
  title: "Orthopedic Services | Knee, Hip, Spine & Sports Injury Care in [City]",
  description:
    "Explore orthopedic services at Doctor Tuji Orthopedic Clinic in [City]: knee and hip pain treatment, spine care, sports injury management, pediatric orthopedics and joint replacement.",
};

type Service = {
  id: string;
  title: string;
  icon: string;
  image: string;
  overview: string;
  highlights: string[];
};

const services: Service[] = [
  {
    id: "general-orthopedic",
    title: "General Orthopedic",
    icon: "🩺",
    image:
      "https://images.unsplash.com/photo-1518977956815-dee00686a5d4?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Comprehensive orthopedic care for bones, joints, muscles and ligaments—covering everything from fractures to chronic pain.",
    highlights: ["Full-body assessments", "Evidence-based treatment", "Function-first plans"],
  },
  {
    id: "advanced-trauma",
    title: "Advanced trauma care",
    icon: "🚑",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Specialized management for severe injuries with rapid imaging, surgical readiness and coordinated rehabilitation.",
    highlights: ["Emergency stabilization", "Complex fracture repair", "24/7 orthopedic call"],
  },
  {
    id: "joint-replacement",
    title: "Joint replacement",
    icon: "⚙️",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Innovative knee, hip and shoulder replacement using digital templating, enhanced recovery protocols and dedicated rehab.",
    highlights: ["Knee & hip replacement", "Revision surgeries", "Prehab & post-op roadmaps"],
  },
  {
    id: "arthroscopic",
    title: "Arthroscopic surgery",
    icon: "🔍",
    image:
      "https://images.unsplash.com/photo-1580281780460-82d277b0ee82?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Minimally invasive procedures that diagnose and treat joint issues through tiny incisions for faster healing.",
    highlights: ["Shoulder & knee scopes", "Cartilage repair", "Day-surgery pathways"],
  },
  {
    id: "sports-injury",
    title: "Sport injury treatment",
    icon: "🏃",
    image:
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Expert care for sprains, tendon tears and performance setbacks—helping athletes return stronger than before.",
    highlights: ["On-field assessment", "Return-to-play testing", "Performance rehab"],
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & rehabilitation",
    icon: "💪",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Personalized therapy programs to rebuild strength, flexibility and confidence with ongoing coaching between visits.",
    highlights: ["Goal-based protocols", "Home exercise plans", "Manual therapy"],
  },
  {
    id: "pediatric",
    title: "Pediatric orthopedic surgeries",
    icon: "🧒",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Specialized surgical care for children and adolescents, from growth plate injuries to congenital conditions.",
    highlights: ["Clubfoot programs", "Limb deformity correction", "Family-centered education"],
  },
  {
    id: "oncology",
    title: "Oncology & reconstructive surgeries",
    icon: "🎗️",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Advanced orthopedic tumor management with reconstructive techniques that restore form and function.",
    highlights: ["Limb-sparing surgery", "Multidisciplinary care", "Post-op surveillance"],
  },
  {
    id: "brain-spine",
    title: "Brain & spine surgery",
    icon: "🧠",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Expert neurosurgical care for conditions affecting the brain and spine, blending precision techniques with holistic recovery plans.",
    highlights: ["Microsurgery", "Spinal decompression & fusion", "Neurorehabilitation"],
  },
];

const faqItems = [
  {
    question: "Do I need a referral to book?",
    answer:
      "Referrals help but aren’t required. Book directly online or by phone, and we’ll match you with the right orthopedic specialist.",
  },
  {
    question: "Which insurance plans do you accept?",
    answer:
      "We partner with major insurers in [Country] and can verify coverage beforehand. Flexible payment plans are available for self-pay patients.",
  },
  {
    question: "Is surgery my only option?",
    answer:
      "No. We prioritize conservative care such as physiotherapy, injections and lifestyle changes. Surgery is only suggested if it clearly delivers better outcomes.",
  },
  {
    question: "How soon can I be seen?",
    answer:
      "Urgent injuries receive same-week slots. Routine consultations are typically scheduled within 7 days, with telehealth follow-ups when appropriate.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F7FAFB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* HERO */}
        <section className="space-y-6 max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            Specialized orthopedic services
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            Comprehensive orthopedic care that keeps you moving.
          </h1>
          <p className="text-base text-slate-600">
            Accurate diagnosis, conservative-first treatment, and transparent guidance if surgery becomes the best path.
            Browse each specialty below or book a consultation to build a plan around your lifestyle.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-teal-700 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Book an appointment
            </a>
            <a
              href="/contact#faq"
              className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Ask our care team
            </a>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                What we treat
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 mt-1">
                Full musculoskeletal expertise under one roof.
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-2xl">
              Select a service to jump to its overview. Each card highlights symptoms, treatment options and recovery expectations.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-center gap-4 px-5 pt-5">
                  <div className="h-12 w-12 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-xs text-slate-500">{service.highlights[0]}</p>
                  </div>
                </div>
                <p className="mt-3 px-5 text-sm text-slate-600 line-clamp-3">
                  {service.overview}
                </p>
                <div className="mt-3 px-5 pb-5 flex flex-wrap gap-2">
                  {service.highlights.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </a>
            ))}
            
          </div>
        </section>
        
        {/* FAQ */}
        <section
          id="faq"
          className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(0,3fr)] items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                FAQs
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Answers to common orthopedic questions.
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                Unsure which service matches your symptoms? Browse these quick answers or call our
                scheduling team—guidance is just a tap away.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
                <Tag>Insurance support</Tag>
                <Tag>Same-week consults</Tag>
                <Tag>Rehab coordination</Tag>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 md:p-6">
              <FaqAccordion items={faqItems} />
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-teal-700 px-3 py-1 font-semibold text-white"
                >
                  Contact our care team
                </a>
                <a
                  href="tel:+251946904290"
                  className="inline-flex items-center rounded-full border border-teal-700 px-3 py-1 font-semibold text-teal-700"
                >
                  Call +251937525119
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
      <span className="h-2 w-2 rounded-full bg-teal-600" />
      {children}
    </div>
  );
}


  