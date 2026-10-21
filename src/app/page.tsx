
import Testimonials from "@/components/Testimonials";

const WHATSAPP_INVITE_LINK =
  "https://chat.whatsapp.com/G6VKYjgTMZGBMo66s91cX9";

const outcomes = [
  "Identify better ways to attract people who are actually interested in what you sell.",
  "Follow up with interested prospects instead of losing them after the first conversation.",
  "Build a channel to nurture prospects and encourage repeat purchases.",
  "Create a more organised customer acquisition process instead of relying on random sales.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-14">
        <p className="mb-5 text-sm font-bold uppercase tracking-widest text-[#e8a32d] sm:text-base">
          Free 3-Day WhatsApp Training
        </p>

        <h1 className="max-w-4xl text-4xl leading-[1.12] font-black tracking-tight sm:text-6xl lg:text-7xl">
          Sell Your Products Consistently Without Spamming WhatsApp Groups, Begging Friends and Family, or Forcing Unnecessary Friendships.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
          Tired of attracting unserious enquiries, losing prospects who showed
          interest, or struggling to get consistent sales? Learn a better way
          to attract, follow up with, and build consistent sales with potential
          customers.
        </p>

        <a
          href={WHATSAPP_INVITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex min-h-16 w-full items-center justify-center rounded-xl bg-[#e8a32d] px-5 py-4 text-center text-lg font-extrabold text-black transition hover:bg-[#f4bd56] sm:inline-flex sm:w-auto sm:px-8 sm:text-xl"
        >
          JOIN THE FREE TRAINING →
        </a>

        <p className="mt-3 text-base text-white/55 sm:text-lg">
          For Nigerian product sellers and network marketers.
        </p>
      </section>
    
    <Testimonials />
      
      
      {/* Pain points */}
      <section className="bg-white px-5 py-12 text-[#111111] sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-3xl text-3xl leading-tight font-black sm:text-5xl">
            Getting attention is one thing. Turning it into sales is another.
          </h2>

          <div className="mt-7 space-y-4 text-lg leading-7 sm:text-xl sm:leading-8">
            <p>People enquire but never buy.</p>
            <p>You keep chasing new customers because old prospects go cold.</p>
            <p>Your orders, contacts, and follow-ups are scattered.</p>
            <p>You don't have a clear system for finding and nurturing buyers.</p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#e8a32d] sm:text-base">
            After 3 Days, You'll Know How To
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-black sm:text-5xl">
            Move from random selling to a more organised sales process.
          </h2>

          <ul className="mt-7 space-y-5">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8a32d] text-base font-black text-black">
                  ✓
                </span>
                <span className="text-lg leading-7 text-white/85 sm:text-xl sm:leading-8">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for / not for */}
      <section className="bg-[#f5f3ee] px-5 py-12 text-[#111111] sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 sm:gap-10">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-3 text-lg leading-7 sm:text-xl sm:leading-8">
              <li>✓ E-commerce sellers and retailers</li>
              <li>✓ Direct sellers and product entrepreneurs</li>
              <li>✓ Network marketers who want to nurture prospects</li>
              <li>✓ People ready to build a consistent customer system</li>
            </ul>
          </div>

          <div className="border-t border-black/15 pt-7 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0">
            <h2 className="text-2xl font-black sm:text-3xl">
              Who this is NOT for
            </h2>
            <ul className="mt-4 space-y-3 text-lg leading-7 text-black/70 sm:text-xl sm:leading-8">
              <li>✕ People looking for instant results without effort</li>
              <li>✕ People expecting guaranteed sales or income</li>
              <li>✕ People unwilling to learn and follow up consistently</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location and final CTA */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8a32d]/15 text-2xl">
            💬
          </div>

          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Where will the training hold?
          </h2>

          <p className="mt-4 text-xl leading-8 text-white/75 sm:text-2xl">
            Right inside WhatsApp. Join the training group to receive the
            lessons, guidance, and updates for all three days.
          </p>

          <p className="mt-4 text-lg font-bold text-[#e8a32d]">
            100% free to join.
          </p>

          <a
            href={WHATSAPP_INVITE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex min-h-16 w-full items-center justify-center rounded-xl bg-[#e8a32d] px-5 py-4 text-lg font-extrabold text-black transition hover:bg-[#f4bd56] sm:mx-auto sm:inline-flex sm:w-auto sm:px-8 sm:text-xl"
          >
            JOIN THE WHATSAPP TRAINING →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45">
        © 2026 Mikechinem Sales Growth Bootcamp
      </footer>
    </main>
  );
}
