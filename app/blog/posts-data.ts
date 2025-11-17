export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  body: string;
};

export const posts: BlogPost[] = [
  {
    slug: "knee-pain-when-to-see-specialist",
    title: "Knee pain in [City]: when to rest, when to see an orthopedic specialist",
    category: "Knee pain specialist",
    excerpt:
      "Learn how to tell the difference between normal soreness and knee pain that needs specialist care, plus what to expect at your first visit.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    body: `
Knee pain can stem from simple overuse or signal something more serious. Pay attention to swelling, locking, instability or pain that wakes you at night. These symptoms suggest it’s time to see an orthopedic specialist.

During your first visit we’ll review your history, perform a functional exam and, if needed, order imaging such as X-rays or MRI. From there we outline conservative care—targeted physiotherapy, bracing, medications, injections—and only discuss surgery when the benefits outweigh the risks.

Don’t ignore knee pain that limits daily life. Early assessment often prevents larger procedures down the line.`,
  },
  {
    slug: "preparing-for-joint-replacement",
    title: "Preparing for knee or hip replacement surgery: a step-by-step guide",
    category: "Joint replacement surgeon",
    excerpt:
      "From pre-surgery tests to setting up your home, this guide explains how to prepare for joint replacement in clear, practical steps.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
    body: `
Joint replacement success starts before the operation. Expect bloodwork, imaging, medical clearance and a physiotherapy evaluation. We’ll advise which medications to pause and how to optimize nutrition.

At home, clear pathways, secure rugs, elevate essential items and arrange for help during the first weeks. Pack comfortable clothing, supportive shoes and your medication list for hospital day. After surgery you’ll begin walking with support, progress through rehab milestones and receive follow-up appointments to monitor healing.

Clear preparation reduces stress and speeds recovery—ask our team for the full checklist tailored to your lifestyle.`,
  },
  {
    slug: "back-pain-myths",
    title: "Back pain myths: what your spine specialist wants you to know",
    category: "Spine care",
    excerpt:
      "We debunk common myths about back pain, discuss warning signs and explain why staying gently active is often better than bed rest.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    body: `
Myth #1: All back pain requires surgery. In reality, most cases improve with physiotherapy, posture coaching and targeted medication or injections.

Myth #2: You should rest until the pain is gone. Gentle movement maintains blood flow, reduces stiffness and prevents muscle loss—total bed rest can slow recovery.

Seek urgent care if you experience numbness, weakness, loss of bladder/bowel control or pain that radiates down the leg. Our spine team combines conservative care with minimally invasive procedures when needed, ensuring you understand every step.`,
  },
  {
    slug: "sports-injury-sprain-strain",
    title: "Sports injuries: how to know if it’s a sprain, strain, or something more serious",
    category: "Sports injury doctor",
    excerpt:
      "Find out how to manage sports injuries in the first 48 hours and when to see a sports injury doctor for further tests.",
    image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1200&auto=format&fit=crop",
    body: `
Apply the R.I.C.E protocol (rest, ice, compression, elevation) for the first 48 hours. If you notice severe swelling, deformity, inability to bear weight or pain that worsens, book an orthopedic evaluation.

We’ll differentiate between sprains (ligaments), strains (muscles/tendons) and more serious injuries like ligament tears or fractures. Advanced imaging plus sports-specific rehab speeds the return to your sport while preventing reinjury.`,
  },
  {
    slug: "helping-older-parent-after-fall",
    title: "Helping an older parent after a fall: orthopedic tips for families",
    category: "Elderly care",
    excerpt:
      "Step-by-step guidance on what to do after a fall, when to go to hospital and how to make home safer for an older loved one.",
    image: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=1200&auto=format&fit=crop",
    body: `
Stay calm, assess for pain, deformity or confusion, and call emergency services if the person cannot stand or shows signs of head injury. Even “minor” falls deserve orthopedic assessment because hip and wrist fractures may not be obvious immediately.

After treatment, we coordinate physiotherapy, home safety modifications and bone health screening to reduce future falls. Families receive clear instructions on assisting with transfers, medication reminders and warning signs to monitor.`,
  },
  {
    slug: "rehab-at-home-exercises",
    title: "Rehab at home: simple exercises to support your orthopedic recovery",
    category: "Rehab at home",
    excerpt:
      "Simple, beginner-friendly exercises used after common orthopedic injuries and surgeries, plus tips on building a daily routine.",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
    body: `
Consistent home exercises are critical between clinic visits. Start with gentle range-of-motion drills, isometric holds and light strengthening prescribed by your therapist.

Schedule short sessions throughout the day, track reps and note pain levels. If swelling or sharp pain increases, pause and contact your care team. We provide video demonstrations and WhatsApp check-ins to keep you accountable and confident.`,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

