export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h1>
      <p className="mt-4 text-gray-600">We are here to help. Reach out by phone, email, or the form below.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <form className="space-y-4">
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Full name" />
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Email" />
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Phone" />
            <textarea className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" rows={5} placeholder="How can we help?" />
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Send</button>
          </form>
        </div>
        <div className="text-sm text-gray-700">
          <p><strong>Phone:</strong> +251115500079 / +251946904290</p>
          <p className="mt-2"><strong>Email:</strong> liyanadream06@gmail.com</p>
          <p className="mt-2"><strong>Hours:</strong> Mon - Sat 8:00am - 5:00pm</p>
        </div>
      </div>
    </div>
  );
}


