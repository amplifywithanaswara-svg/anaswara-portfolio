import Badge from "./Badge";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col rounded-3xl border-2 border-ink bg-white p-6 transition-shadow hover:shadow-[6px_6px_0_#6A3FD1]">
      <div><Badge kind={p.kind} /></div>
      <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
      <dl className="mt-3 space-y-3 text-sm">
        <div><dt className="font-semibold">Objective</dt><dd className="text-ink/80">{p.objective}</dd></div>
        <div><dt className="font-semibold">My role</dt><dd className="text-ink/80">{p.role}</dd></div>
        <div><dt className="font-semibold">Activities</dt>
          <dd><ul className="list-disc pl-5 text-ink/80">{p.activities.map((a) => <li key={a}>{a}</li>)}</ul></dd></div>
        <div><dt className="font-semibold">Tools</dt>
          <dd className="mt-1 flex flex-wrap gap-2">{p.tools.map((t) => <span key={t} className="rounded-full bg-lilac px-3 py-1 text-xs font-medium">{t}</span>)}</dd></div>
        <div><dt className="font-semibold">Verified results</dt>
          <dd className={p.result ? "text-ink/80" : "rounded-xl border-2 border-dashed border-ink/30 px-3 py-2 text-ink/60"}>
            {p.result ?? "[Add verified result here]"}</dd></div>
      </dl>
      <p className="mt-4 rounded-xl border-2 border-dashed border-ink/20 px-3 py-6 text-center text-xs text-ink/50">
        [Screenshot placeholder: add an image to public/projects]
      </p>
    </article>
  );
}
