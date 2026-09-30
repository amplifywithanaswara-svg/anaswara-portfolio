import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { skillGroups, tools } from "@/lib/data";

export const metadata: Metadata = { title: "Skills", description: "Digital marketing skills and tools of Anaswara KC, grouped by how they were used." };
const tone: Record<string, string> = { pink: "bg-blush", purple: "bg-lilac", orange: "bg-peach", ink: "bg-white border-2 border-ink" };

export default function Skills() {
  return (
    <>
      <PageHead tint="bg-lilac" title="Skills, grouped by how I have used them" intro="Work experience, training projects and certifications are kept separate so you can see what is what." />
      <div className="mx-auto max-w-6xl px-5 pt-14">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g) => (
            <section key={g.name} className={`rounded-3xl p-7 ${tone[g.tone]}`}>
              <h2 className="text-xl font-bold">{g.name}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => <li key={i} className="rounded-full bg-white px-4 py-2 text-sm font-medium">{i}</li>)}
              </ul>
            </section>
          ))}
        </div>
        <h2 className="mt-16 text-3xl font-extrabold">Tools and platforms</h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tools.map((t) => (
            <li key={t.name} className="rounded-2xl border-2 border-ink bg-white p-4">
              <p className="font-display font-bold">{t.name}</p><p className="text-sm text-ink/65">{t.use}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
