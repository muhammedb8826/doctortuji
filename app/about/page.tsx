import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Doctor Tuji Orthopedic Clinic [City] | Mission, Facilities & Team",
  description:
    "Learn about Doctor Tuji Orthopedic Clinic in [City]: our mission, vision, orthopedic facilities, digital imaging, physiotherapy gym and patient-centered team culture.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7FAFB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        <section className="grid gap-8 lg:grid-cols-2 items-center rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
              Message from Dr. Tuji
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
              A clinic built around your movement and comfort.
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              “Every patient deserves orthopedic care that feels personal, coordinated and hopeful.
              My team and I created Doctor Tuji Orthopedic Clinic to combine modern diagnostics,
              surgical excellence and thoughtful rehabilitation under one roof. We listen first, then craft
              plans that respect your goals—whether it’s walking without pain, returning to sport or caring
              for a loved one.”
            </p>
            <p className="text-sm font-semibold text-slate-900">Dr. Tuji • Consultant Orthopedic Surgeon</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services"
                className="inline-flex items-center rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
              >
                Explore our services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Book a visit
              </a>
            </div>
          </div>
          <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/img/IMG_3847.JPG"
              alt="Doctor Tuji consulting with a patient"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-teal-700">
              Mission
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Our purpose</h2>
            <p className="mt-3 text-sm text-slate-600">
              To relieve pain, restore movement and return people to the activities that matter most to them—through
              expert orthopedic care delivered with compassion, clarity and respect.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-teal-700">
              Vision
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">What guides us</h2>
            <p className="mt-3 text-sm text-slate-600">
              To be the most trusted orthopedic clinic in [City], known for careful diagnosis, transparent communication
              and measurable results that patients can feel in their everyday lives.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


