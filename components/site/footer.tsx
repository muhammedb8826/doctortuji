import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Knee & hip pain",
  "Spine & back care",
  "Sports injuries",
  "Pediatric orthopedics",
  "Joint replacement",
  "Rehabilitation",
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-teal-600 text-white font-semibold flex items-center justify-center">
              DT
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Doctor Tuji Orthopedic Clinic</p>
              <p className="text-xs text-slate-400">Movement-focused care</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Comprehensive orthopedic, spine and sports injury care with modern diagnostics and dedicated rehabilitation.
          </p>
          <p className="text-sm text-slate-300">
            Open: Mon – Fri 8:00am – 5:30pm • Sat 9:00am – 1:00pm
          </p>
          <p className="text-sm text-slate-300">
            Phone: <a href="tel:+251937525119" className="text-white font-semibold">+251937525119</a>
          </p>
          <p className="text-sm text-slate-300">
            Email: <a href="mailto:arasoalisho2@gmail.com" className="text-white font-semibold">arasoalisho2@gmail.com</a>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal-300 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Key services</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Stay connected</h4>
          <p className="mt-4 text-sm text-slate-300">
            Subscribe for orthopedic tips, recovery guides and clinic updates.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              className="flex-1 rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-teal-500 focus:outline-none"
              placeholder="Your email"
            />
            <button className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500">
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex gap-3 text-slate-400 text-sm">
            <a href="https://wa.me/251946904290" target="_blank" rel="noreferrer" className="hover:text-teal-300">
              WhatsApp
            </a>
            <a href="tel:+251946904290" className="hover:text-teal-300">
              Call
            </a>
            <a href="mailto:arasoalisho2@gmail.com" className="hover:text-teal-300">
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Doctor Tuji Orthopedic Clinic. Built by{" "}
        <a className="text-white underline" href="https://www.daminaa.org" target="_blank" rel="noreferrer">
          Damina Tech
        </a>
        .
      </div>
    </footer>
  );
}