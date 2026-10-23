import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      
  
{/* BEAT 1: HERO */}
<section className="relative isolate overflow-hidden bg-[#08090b] px-3 py-4 text-white sm:px-6 sm:py-6 lg:px-8 border-b border-white/15">
  {/* 3D framed hero panel */}
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#191a1e] via-[#101114] to-[#08090b] shadow-[0_2px_0_rgba(255,255,255,0.08),0_12px_0_rgba(0,0,0,0.45),0_24px_70px_rgba(0,0,0,0.65)] sm:rounded-3xl">
    {/* Ambient lighting */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-28 -top-28 -z-0 h-72 w-72 rounded-full bg-[#25D366]/10 blur-[90px] sm:h-[480px] sm:w-[480px]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 -left-20 -z-0 h-64 w-64 rounded-full bg-[#e8a32d]/10 blur-[90px] sm:h-96 sm:w-96"
    />

    {/* Fine inner border */}
    <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/[0.045] sm:inset-3 sm:rounded-2xl" />

    <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      {/* WhatsApp training badge */}
      <div className="flex items-center">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-2.5 text-[11px] font-extrabold uppercase tracking-wide text-[#4ade80] sm:px-4 sm:text-sm">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
          </span>
          FREE 3-DAY TRAINING ON WHATSAPP
        </span>
      </div>

      {/* Hero copy */}
      <div className="mt-10 max-w-5xl sm:mt-16">
        <h1 className="text-[2.75rem] leading-[1.02] font-black tracking-[-0.045em] sm:text-6xl sm:leading-[1.04] lg:text-7xl xl:text-[5.25rem]">
          Learn How to Use Paid Ads to Attract{" "}
          <span className="text-[#F3F4F6]">
            Serious Buyers.
          </span>
        </h1>

  <p className="mt-6 max-w-3xl text-lg leading-8 font-medium text-white/75 sm:mt-8 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
  Learn the exact system to pin down serious buyers who have cash in hand,
  create ads that encourage people to order, and{" "}
  <span className="font-black text-[#e8a32d]">
    know to the exact kobo
  </span>{" "}
  if your ads are making a profit or losing money—even if you are a complete
  beginner.
</p>
        {/* CTA */}
        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
          <a
            href="#register"
            className="group flex min-h-16 w-full items-center justify-center gap-3 rounded-xl border border-[#86efac]/40 bg-[#25D366] px-5 py-4 text-center text-base leading-6 font-black text-[#062b14] shadow-[0_5px_0_#137b3b,0_12px_30px_rgba(37,211,102,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#39e477] hover:shadow-[0_6px_0_#137b3b,0_16px_35px_rgba(37,211,102,0.24)] active:translate-y-1 active:shadow-none sm:w-auto sm:min-w-72 sm:px-8 sm:text-lg"
          >
            RESERVE MY FREE SPOT
            <span
              aria-hidden="true"
              className="text-xl transition-transform duration-200 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>

          <p className="max-w-xs text-sm leading-6 font-medium text-white/55 sm:text-base">
            3 days of practical training on WhatsApp. Completely free to join.
          </p>
        </div>

        {/* Audience fit */}
        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-14 sm:pt-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/45 sm:text-sm">
            Created for
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {[
              "E-commerce sellers",
              "Network marketers",
              "Aspiring online sellers",
            ].map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-white/15 bg-white/[0.045] px-3.5 py-2.5 text-sm leading-5 font-bold text-white/85 sm:px-4 sm:text-base"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* BEAT 2: THE PROBLEM */}
<section className="relative overflow-hidden bg-[#f5f3ee] px-5 py-16 text-[#111111] sm:px-8 sm:py-24 border-b border-white/15">
  <div className="mx-auto max-w-6xl">
    {/* Section label */}
    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#16803d] sm:text-sm">
      The Customer Acquisition Problem
    </p>

    {/* Main headline */}
    <h2 className="mt-5 max-w-5xl text-[2.5rem] leading-[1.04] font-black tracking-[-0.04em] sm:text-5xl sm:leading-[1.08] lg:text-6xl">
      You're Trying to Make Sales.
      <span className="mt-2 block text-[#77736b]">
        But Are the Right People Even Seeing Your Offer?
      </span>
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-8 font-medium text-black/65 sm:mt-8 sm:text-xl sm:leading-9 lg:text-2xl">
      If you're selling a product or building a business online, you may
      recognise one of these struggles.
    </p>

    {/* Pain-point cards */}
    <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          number: "01",
          title: "Posting, But Barely Getting Enquiries",
          description:
            "You share your products online, but the people who actually want to buy are hard to find.",
        },
        {
          number: "02",
          title: "Depending on Friends and Referrals",
          description:
            "You want to reach beyond people who already know you, but you're unsure how to find new prospects.",
        },
        {
          number: "03",
          title: "Spending on Ads Without Clarity",
          description:
            "You want to advertise, or already do, but you're not sure which audience, creative or results to focus on.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="group rounded-2xl border border-black/10 bg-white p-5 shadow-[0_3px_0_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#16803d]/30 hover:shadow-lg sm:p-7"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8a32d]/15 text-sm font-black text-[#8b5d08]">
            {item.number}
          </span>

          <h3 className="mt-5 text-xl leading-tight font-black tracking-tight sm:text-2xl">
            {item.title}
          </h3>

          <p className="mt-3 text-base leading-7 font-medium text-black/60 sm:text-lg sm:leading-8">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    {/* Transition to the solution */}
    <div className="mt-10 rounded-2xl border border-black/10 bg-[#ebe8df] p-5 sm:mt-12 sm:p-8">
      <h3 className="text-2xl leading-tight font-black tracking-tight sm:text-3xl lg:text-4xl">
        You don't have to depend on random posts and luck alone.
      </h3>

      <p className="mt-4 max-w-3xl text-base leading-7 font-medium text-black/65 sm:text-lg sm:leading-8">
        Paid advertising can help you put your offer in front of people beyond
        your existing network. The key is understanding who to reach, what to
        say, and how to assess the results.
      </p>

      
    </div>
  </div>
</section>

      
      

{/* BEAT 3: THE 3-DAY TRAINING KIT */}
<section className="relative isolate overflow-hidden bg-[#0b0c10] px-4 py-16 text-white sm:px-8 sm:py-24 border-b border-white/15">
  {/* Background lighting */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#e8a32d]/10 blur-[100px] sm:h-[500px] sm:w-[500px]"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#25D366]/[0.07] blur-[100px] sm:h-[500px] sm:w-[500px]"
  />

  <div className="mx-auto max-w-6xl">
    {/* Heading */}
    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#e8a32d]/30 bg-[#e8a32d]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f2c46f] sm:text-sm">
        INSIDE THE BOOTCAMP
      </span>

      <h2 className="mt-6 text-[2.5rem] leading-[1.04] font-black tracking-[-0.04em] sm:text-5xl sm:leading-[1.08] lg:text-6xl">
        3 Days.
        <span className="block text-[#e8a32d]">
          One Practical Skill.
        </span>
        <span className="block">Understanding Customer Acquisition.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 font-medium text-white/65 sm:text-xl sm:leading-9">
        Follow a simple learning path from understanding who to target, to
        creating ads, to knowing whether your advertising is working.
      </p>
    </div>

    {/* Digital training kit mockup */}
    <div className="relative mx-auto mt-12 max-w-5xl sm:mt-16">
      {/* Decorative backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-x-5 top-5 bottom-0 rounded-[30px] bg-[#e8a32d]/10 blur-2xl sm:inset-x-10 sm:top-8"
      />

      <div className="relative rounded-[24px] border border-white/15 bg-gradient-to-br from-[#292a30] via-[#17181d] to-[#101115] p-3 shadow-[0_2px_0_rgba(255,255,255,0.09),0_18px_0_rgba(0,0,0,0.25),0_35px_80px_rgba(0,0,0,0.55)] sm:rounded-[32px] sm:p-5">
        {/* Kit cover */}
        <div className="relative overflow-hidden rounded-[18px] border border-[#e8a32d]/25 bg-[#101114] p-5 sm:rounded-[24px] sm:p-9 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#e8a32d]/10 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#e8a32d]/10 sm:h-72 sm:w-72"
          />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1.5 text-xs font-bold text-[#4ade80]">
                100% FREE
              </span>
            </div>

            <div className="mt-9 max-w-3xl sm:mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45 sm:text-base">
                Your 3-Day Learning Kit
              </p>

              <h3 className="mt-4 text-4xl leading-[1.02] font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                CUSTOMER
                <span className="block text-[#e8a32d]">ACQUISITION</span>
                <span className="block text-white/80">BOOTCAMP</span>
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 font-medium text-white/60 sm:text-lg sm:leading-8">
                Learn the foundations of reaching potential customers with
                paid advertising — from the first idea to measuring results.
              </p>
            </div>

            {/* Module cards */}
            <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-3">
              {[
                {
                  day: "DAY 01",
                  title: "Understand the Buyer",
                  subtitle: "Offer, audience & customer intent",
                  number: "01",
                },
                {
                  day: "DAY 02",
                  title: "Create Your Ads",
                  subtitle: "Creative, campaign & budget basics",
                  number: "02",
                },
                {
                  day: "DAY 03",
                  title: "Read the Results",
                  subtitle: "Metrics, mistakes & improvements",
                  number: "03",
                },
              ].map((module) => (
                <div
                  key={module.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-200 hover:border-[#e8a32d]/50 hover:bg-white/[0.06] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-black tracking-[0.15em] text-[#e8a32d] sm:text-sm">
                      {module.day}
                    </span>
                    <span className="text-2xl font-black text-white/15 transition-colors group-hover:text-[#e8a32d]/50">
                      {module.number}
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl leading-tight font-black sm:text-2xl">
                    {module.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 font-medium text-white/55 sm:text-base sm:leading-7">
                    {module.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Kit footer */}
            <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:mt-9 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-white/50 sm:text-base">
                3 focused sessions · Beginner-friendly · Delivered on WhatsApp
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#4ade80]">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                FREE TO JOIN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-10 text-center sm:mt-12">
      <p className="mx-auto max-w-xl text-base leading-7 font-medium text-white/60 sm:text-lg">
        Start with the basics, understand the process, and leave with a clearer
        idea of what to work on in your own advertising.
      </p>

      
    </div>
  </div>
</section>


{/* BEAT 4: WHAT YOU'LL LEARN */}
<section className="bg-[#f5f3ee] px-5 py-16 text-[#111111] sm:px-8 sm:py-24 border-b border-white/15">
  <div className="mx-auto max-w-6xl">
    {/* Section heading */}
    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#16803d] sm:text-sm">
      Practical Skills. Clearer Decisions.
    </p>

    <h2 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.04] font-black tracking-[-0.04em] sm:text-5xl sm:leading-[1.08] lg:text-6xl">
      Stop Guessing.
      <span className="block text-[#77736b]">
        Understand What Makes Ads Work.
      </span>
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-8 font-medium text-black/65 sm:text-xl sm:leading-9">
      By the end of the 3 days, you'll have a clearer foundation for
      planning your ads, reaching potential buyers and evaluating your
      advertising results.
    </p>

    {/* Takeaways */}
    <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
      {[
        {
          number: "01",
          title: "Know Who You're Trying to Reach",
          description:
            "Think beyond simply boosting a post. Learn to connect your offer with the people most likely to be interested in it.",
        },
        {
          number: "02",
          title: "Understand What Makes an Ad Compelling",
          description:
            "Explore how your offer, message and creative work together to earn attention and encourage enquiries.",
        },
        {
          number: "03",
          title: "Make Better Decisions About Your Budget",
          description:
            "Understand the basics of setting an advertising budget and why spending more doesn't automatically mean better results.",
        },
        {
          number: "04",
          title: "Recognise the Numbers That Matter",
          description:
            "Get introduced to key advertising metrics so you can begin identifying what needs attention when results disappoint.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-[0_3px_0_rgba(0,0,0,0.035)] sm:gap-5 sm:p-7"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8a32d]/15 text-sm font-black text-[#8b5d08] sm:h-12 sm:w-12">
            {item.number}
          </div>

          <div>
            <h3 className="text-xl leading-tight font-black tracking-tight sm:text-2xl">
              {item.title}
            </h3>

            <p className="mt-3 text-base leading-7 font-medium text-black/60 sm:text-lg sm:leading-8">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Honest expectation */}
    <div className="mt-8 rounded-2xl border border-[#16803d]/15 bg-[#16803d]/[0.05] p-5 sm:mt-10 sm:p-7">
      <p className="text-lg leading-7 font-bold sm:text-xl sm:leading-8">
        The goal isn't to promise overnight sales.
      </p>

      <p className="mt-2 text-base leading-7 font-medium text-black/65 sm:text-lg sm:leading-8">
        It's to help you understand the fundamentals of paid customer
        acquisition, avoid some common mistakes and make more informed
        decisions as you begin or improve your advertising.
      </p>
    </div>

    {/* CTA — same green style as previous beats */}
    <div className="mt-9 sm:mt-11">
      <a
        href="#register"
        className="group flex min-h-16 w-full items-center justify-center gap-3 rounded-xl border border-[#86efac]/40 bg-[#25D366] px-5 py-4 text-center text-base leading-6 font-black text-[#062b14] shadow-[0_5px_0_#137b3b,0_12px_30px_rgba(37,211,102,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#39e477] hover:shadow-[0_6px_0_#137b3b,0_16px_35px_rgba(37,211,102,0.24)] active:translate-y-1 active:shadow-none sm:mx-auto sm:inline-flex sm:w-auto sm:px-8 sm:text-lg"
      >
        RESERVE MY FREE SPOT
        <span
          aria-hidden="true"
          className="text-xl transition-transform duration-200 group-hover:translate-y-0.5"
        >
          ↓
        </span>
      </a>
    </div>
  </div>
</section>



{/* BEAT 5: MEET YOUR TRAINER */}
<section className="relative overflow-hidden bg-[#f5f3ee] px-5 py-16 sm:px-8 sm:py-24 border-b border-white/15">
  <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">

    {/* Trainer headshot */}
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-[#e8a32d]/25" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-2xl">
        <Image
          src="https://res.cloudinary.com/doatbjjtn/image/upload/v1792662834/my_official_image_a5hdkr.jpg"
          alt="Michael Ehumadu, digital marketer and trainer"
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          className="object-cover object-[center_25%]"
        />
      </div>

      <div className="absolute -bottom-4 -right-2 rounded-xl border border-black/10 bg-white px-5 py-3 shadow-lg sm:-right-5">
        <p className="text-xs font-bold tracking-[0.18em] text-black/50">
          YOUR TRAINER
        </p>
        <p className="mt-1 text-sm font-black text-black">
          Michael Ehumadu
        </p>
      </div>
    </div>

    {/* Trainer introduction */}
    <div className="pt-4 md:pt-0">
      <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#a66c00]">
        The Person Behind The Training
      </p>

      <h2 className="max-w-xl text-4xl leading-[1.08] font-black tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
        Meet Your Trainer
      </h2>

      <div className="mt-5 h-1.5 w-16 rounded-full bg-[#e8a32d]" />

      <p className="mt-7 text-xl font-extrabold leading-snug text-[#171717] sm:text-2xl">
        Michael Ehumadu
      </p>

      <p className="mt-4 max-w-xl text-base leading-8 text-[#454545] sm:text-lg">
  In the last 3 months, I have spent over{" "}
  <mark>
    <strong>2 million naira in ads</strong>
  </mark>{" "}
  trying to sell physical products to Nigerians. This journey brought in
  brutal, fresh lessons that are critical to how you sell products around
  here. The online marketing industry is unforgiving. Every kobo you spend
  either brings a return or teaches you a hard lesson. Over the years, I have
  worked with local and international brands spending hundreds of thousands of
  dollars on ads to solve one major problem:{" "}
  <mark>
    <strong>getting more sales online</strong>
  </mark>
  . Now, I am bringing these exact battlefield lessons to you. See you on the
  inside.
</p>

      

      <p className="mt-4 text-sm text-[#666666]">
        Free to join · Training delivered on WhatsApp
      </p>
    </div>
  </div>
</section>
      <div className="border-y border-white/15">
        <div className="mx-auto max-w-6xl px-5 pt-10 text-center sm:px-8 sm:pt-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e8a32d] sm:text-sm">
            Proof of the Trainer's Work
          </p>
        </div>
        <Testimonials />
      </div>

      <RegistrationForm />

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45">
        © 2026 Mikechinem Sales Growth Bootcamp
      </footer>
    </main>
  );
}
