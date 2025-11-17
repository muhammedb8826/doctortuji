import type { Metadata } from "next";
import { HomePageContent } from "@/components/site/home-page-content";

export const metadata: Metadata = {
  title: "Doctor Tuji Orthopedic Clinic | Knee, Hip & Spine Specialists in [City]",
  description:
    "Orthopedic clinic in [City] for knee pain, hip and spine problems, sports injuries and joint replacement. Book an appointment with Dr Tuji and team today.",
};

export default function Home() {
  return <HomePageContent />;
}

