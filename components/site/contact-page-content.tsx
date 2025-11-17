"use client";

import { useState } from "react";
import { BookingForm, type BookingFormValues } from "@/components/site/booking-form";
import { Toast, type ToastType } from "@/components/ui/toast";

export function ContactPageContent() {
  const [toast, setToast] = useState<{ type: ToastType; message: string } | null>(null);

  async function handleSubmit(values: BookingFormValues) {
    // Replace with real API call to /api/appointments
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Appointment payload", values);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          We&apos;re ready to help you move with less pain.
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-600">
          Use the secure form to request an appointment, or contact our team directly by
          phone or WhatsApp. For emergencies after a serious injury or fall, please call
          our emergency number or go to the nearest hospital.
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,7fr),minmax(0,5fr)] items-start">
        <BookingForm
          onSubmit={handleSubmit}
          onError={(message) => setToast({ type: "error", message })}
          onSuccess={(message) => setToast({ type: "success", message })}
        />

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Clinic contact
                </p>
                <h2 className="text-lg font-semibold text-slate-900">Talk to our care team</h2>
              </div>
              <p className="text-sm text-slate-600 space-y-1">
                <span className="block">
                  Phone: <a href="tel:+251937525119" className="text-teal-700 font-semibold">+251 937 525 119</a>
                </span>
                <span className="block">
                  Phone: <a href="tel:+251115500079" className="text-teal-700 font-semibold">+251 115 500 079</a>
                </span>
                <span className="block">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/251937525119"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-700 font-semibold underline-offset-4 hover:underline"
                  >
                    Chat with us
                  </a>
                </span>
                <span className="block">
                  Email:{" "}
                  <a href="mailto:arasoalisho2@gmail.com" className="text-teal-700 font-semibold">
                    arasoalisho2@gmail.com
                  </a>
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Address & hours
                </p>
                <h2 className="text-lg font-semibold text-slate-900">Visit the clinic</h2>
              </div>
              <p className="text-sm text-slate-600">
                Doctor Tuji Orthopedic Clinic
                <br />
                Chiro City, Oromia, Ethiopia
              </p>
              <p className="text-sm text-slate-600">
                Monday – Saturday: 8:00am – 5:30pm
              </p>
              <p className="text-sm text-slate-600">
                Emergency line:{" "}
                <a href="tel:+251937525119" className="text-teal-700 font-semibold">
                  +251 937 525 119
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="aspect-video w-full rounded-xl bg-slate-200">
              {/* Replace iframe src with real map */}
              <iframe
                title="Doctor Tuji Orthopedic Clinic map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d0!2d38.7578!3d8.9806"
                className="h-full w-full rounded-xl border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


