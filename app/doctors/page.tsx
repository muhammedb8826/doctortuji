import type { Metadata } from "next";
import { DoctorCard } from "@/components/site/doctor-card";

export const metadata: Metadata = {
  title: "Orthopedic Doctors | Meet the Specialists at Doctor Tuji Orthopedic Clinic [City]",
  description:
    "Meet the orthopedic surgeons and specialists at Doctor Tuji Orthopedic Clinic in [City]. Learn about their experience, specialties and languages, and book an appointment.",
};

const doctors = [
  {
    name: "Dr. Tuji",
    title: "Consultant Orthopedic & Joint Replacement Surgeon",
    specialties: ["Knee", "Hip", "Joint Replacement"],
    experienceYears: 15,
    languages: ["English", "Amharic"],
    bio: "Dr Tuji specializes in complex knee and hip replacement surgeries with a focus on faster, safer recovery and long-term joint function.",
    photoUrl:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Sara Bekele",
    title: "Spine & Trauma Surgeon",
    specialties: ["Spine", "Trauma"],
    experienceYears: 12,
    languages: ["English", "Amharic"],
    bio: "Dr Sara manages neck and back conditions including slipped discs, spinal fractures and deformity correction using modern techniques.",
    photoUrl:
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Daniel M.",
    title: "Sports Injury & Arthroscopy Specialist",
    specialties: ["Sports Injuries", "Arthroscopy"],
    experienceYears: 10,
    languages: ["English"],
    bio: "Dr Daniel treats ligament tears, cartilage injuries and sports-related joint problems, helping athletes safely return to their sport.",
    photoUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Meet the orthopedic team behind your recovery.
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-600">
          Our fellowship-trained orthopedic surgeons and specialists work together to
          provide safe, effective treatment for your bones, joints and spine.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3 text-xs text-slate-600">
          <div>
            <p className="font-semibold text-slate-900">Key specialties</p>
            <p className="mt-1">Knee & hip, spine, sports injuries, pediatric orthopedics.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Communication</p>
            <p className="mt-1">Clear explanations, shared decisions and written plans.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Team approach</p>
            <p className="mt-1">Complex cases are discussed as a team so you get the best plan.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Our orthopedic specialists
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="search"
              placeholder="Search by doctor or condition"
              className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-label="Search doctors"
            />
            <select
              className="rounded-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-label="Filter by specialty"
              defaultValue=""
            >
              <option value="">All specialties</option>
              <option value="knee">Knee & hip</option>
              <option value="spine">Spine</option>
              <option value="sports">Sports injuries</option>
              <option value="pediatric">Pediatric orthopedics</option>
            </select>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
      </section>
    </div>
  );
}


