import type { Metadata } from "next";
import { ContactPageContent } from "@/components/site/contact-page-content";

export const metadata: Metadata = {
  title: "Contact Doctor Tuji Orthopedic Clinic [City] | Book Orthopedic Appointment",
  description:
    "Contact Doctor Tuji Orthopedic Clinic in [City] to book an orthopedic appointment, ask a question or get directions. Call, WhatsApp or use our secure online booking form.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}

