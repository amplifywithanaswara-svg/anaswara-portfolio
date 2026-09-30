import Link from "next/link";
import { site, awards } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-blush via-cream to-peach">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div className="hero-rise">
            <p className="inline-block rounded-full bg-lilac px-4 py-1 text-sm font-semibold text-purple">{site.location}</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">{site.name}</h1>
            <p className="mt-2 font-display text-2xl font-bold text-pink sm:text-3xl">{site.title}</p>
            <p className="mt-6 max-w-xl text-lg">
              I run SEO, Google Ads and Meta Ads for a healthcare brand in Kannur, turning search and social attention into enquiries.
            </p>
            <p className="mt-3 max-w-xl text-ink/75">
              Day to day: keyword research, on-page and technical SEO, lead-focused ad campaigns, social media and performance reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-pink">View my work</Link>
              <a href={site.resume} download className="btn btn-ink">Download resume</a>
              <Link href="/contact" className="btn btn-line">Contact me</Link>
            </div>
          </div>

          {/* A search-result style card: how a recruiter would find me */}
          <div className="hero-rise [animation-delay:.15s]" aria-hidden="true">
            <div className="rotate-1 rounded-3xl border-2 border-ink bg-white p-6 shadow-[10px_10px_0_#E23D7A] sm:p-8">
              <div className="flex items-center gap-3 rounded-full border-2 border-ink/20 px-5 py-3 text-ink/70">
                <span className="h-3 w-3 rounded-full bg-orange" /> digital marketing executive kannur
              </div>
              <p className="mt-6 text-sm text-ink/60">anaswarakc.com</p>
              <p className="mt-1 text-xl font-semibold text-purple">Anaswara KC | Digital Marketing Executive</p>
              <p className="mt-1 text-sm text-ink/75">SEO, Google Ads, Meta Ads and social media work from Kannur, Kerala.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-blush px-3 py-1">SEO</span>
                <span className="rounded-full bg-lilac px-3 py-1">Google Ads</span>
                <span className="rounded-full bg-peach px-3 py-1">Meta Ads</span>
                <span className="rounded-full bg-blush px-3 py-1">Social media</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Recognised at Opentutor Academy</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {awards.map((a, i) => (
            <div key={a.name} className={`rounded-3xl p-6 ${["bg-blush", "bg-lilac", "bg-peach"][i]}`}>
              <p className="font-display text-xl font-bold">{a.name}</p>
              <p className="mt-1 text-sm text-ink/75">{a.org}, {a.date}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
