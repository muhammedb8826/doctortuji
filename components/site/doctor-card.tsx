import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  name: string;
  title: string;
  specialties: string[];
  experienceYears: number;
  languages: string[];
  bio: string;
  photoUrl: string;
}

export function DoctorCard({
  name,
  title,
  specialties,
  experienceYears,
  languages,
  bio,
  photoUrl,
}: DoctorCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={photoUrl}
          alt={`Portrait of ${name}, ${title}`}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-teal-700 font-medium">{title}</p>
        </div>
        <p className="text-xs text-gray-600 line-clamp-3">{bio}</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {specialties.map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center px-2 py-0.5 rounded-full bg-teal-50 text-[10px] font-medium text-teal-800"
            >
              {spec}
            </span>
          ))}
        </div>
        <div className="mt-2 flex justify-between items-center text-[11px] text-gray-500">
          <span>{experienceYears}+ years experience</span>
          <span>Languages: {languages.join(", ")}</span>
        </div>
        <Button className="mt-3 w-full" size="sm">
          Book with Dr. {name.split(" ").slice(-1)}
        </Button>
      </div>
    </article>
  );
}


