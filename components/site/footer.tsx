import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold text-gray-900">
            <img src="/logo.svg" alt="Doctor Tuji" className="h-8 w-8" />
            <span>Doctor Tuji</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">We provide orthopedic care you can count on.</p>
          <p className="mt-2 text-sm text-gray-600">Open: Mon - Sat, 8:00am - 5:00pm</p>
          <p className="mt-2 text-sm text-gray-600">Phone: +251115500079 / +251946904290</p>
          <p className="mt-1 text-sm text-gray-600">Email: liyanadream06@gmail.com</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>General Orthopedic</li>
            <li>Advanced Trauma Care</li>
            <li>Joint Replacement</li>
            <li>Arthroscopic Surgery</li>
            <li>Sport Injury Treatment</li>
            <li>Physiotherapy & Rehabilitation</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
          <p className="mt-4 text-sm text-gray-600">Subscribe to get our updates in your inbox.</p>
          <form className="mt-4 flex gap-2">
            <input className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Your email" />
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        © 2024 Doctor Tuji. All rights reserved. Website inspired by <a className="underline" href="https://www.dreamorthospine.com/" target="_blank" rel="noreferrer">dreamorthospine.com</a>.
      </div>
    </footer>
  );
}


