"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface BookingFormValues {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  doctor: string;
  message: string;
}

interface BookingFormProps {
  onSubmit: (values: BookingFormValues) => Promise<void>;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
}

export function BookingForm({ onSubmit, onError, onSuccess }: BookingFormProps) {
  const [values, setValues] = useState<BookingFormValues>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    doctor: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<BookingFormValues>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Partial<BookingFormValues> = {};
    if (!values.name.trim()) newErrors.name = "Please enter your full name.";
    if (!values.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!values.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Please enter a valid email address.";
    if (!values.date) newErrors.date = "Select a preferred date.";
    if (!values.time) newErrors.time = "Select a preferred time.";
    if (!values.service) newErrors.service = "Select a service.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      onError("Please correct the highlighted fields.");
      return;
    }
    setLoading(true);
    try {
      await onSubmit(values);
      onSuccess("Thank you. Your appointment request has been sent.");
      setValues({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        service: "",
        doctor: "",
        message: "",
      });
      setErrors({});
    } catch {
      onError(
        "We could not submit your request. Please try again or call the clinic."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600";

  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-5 md:p-6 space-y-4"
      aria-label="Appointment booking form"
    >
      <h1 className="text-lg font-semibold text-gray-900">
        Book an Orthopedic Appointment
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-gray-700" htmlFor="name">
            Full name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClass}
            value={values.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label className="text-xs font-medium text-gray-700" htmlFor="phone">
            Phone number*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={values.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-gray-700" htmlFor="email">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700" htmlFor="date">
              Preferred date*
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className={inputClass}
              value={values.date}
              onChange={handleChange}
              aria-invalid={!!errors.date}
            />
            {errors.date && <p className={errorClass}>{errors.date}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700" htmlFor="time">
              Preferred time*
            </label>
            <input
              id="time"
              name="time"
              type="time"
              className={inputClass}
              value={values.time}
              onChange={handleChange}
              aria-invalid={!!errors.time}
            />
            {errors.time && <p className={errorClass}>{errors.time}</p>}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            className="text-xs font-medium text-gray-700"
            htmlFor="service"
          >
            Service*
          </label>
          <select
            id="service"
            name="service"
            className={inputClass}
            value={values.service}
            onChange={handleChange}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service</option>
            <option value="knee">Knee & leg pain</option>
            <option value="hip">Hip pain</option>
            <option value="spine">Back & spine</option>
            <option value="sports">Sports injury</option>
            <option value="pediatric">Pediatric orthopedics</option>
            <option value="joint-replacement">Joint replacement</option>
            <option value="other">Other orthopedic concern</option>
          </select>
          {errors.service && <p className={errorClass}>{errors.service}</p>}
        </div>
        <div>
          <label
            className="text-xs font-medium text-gray-700"
            htmlFor="doctor"
          >
            Preferred doctor (optional)
          </label>
          <select
            id="doctor"
            name="doctor"
            className={inputClass}
            value={values.doctor}
            onChange={handleChange}
          >
            <option value="">Any available specialist</option>
            <option value="dr-tuji">Dr. Tuji</option>
          </select>
        </div>
      </div>

      <div>
        <label
          className="text-xs font-medium text-gray-700"
          htmlFor="message"
        >
          Briefly describe your concern (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={inputClass}
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-700 hover:bg-teal-800"
      >
        {loading ? "Submitting..." : "Submit appointment request"}
      </Button>

      <p className="text-[11px] text-gray-500 text-center">
        We will call or email you to confirm your appointment time.
      </p>
    </form>
  );
}


