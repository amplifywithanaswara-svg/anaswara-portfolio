import { site } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. {site.title}, {site.location}.</p>
        <p className="flex gap-5">
          <a className="underline underline-offset-4" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>Email</a>
          <a className="underline underline-offset-4" href={site.resume} download>Resume</a>
        </p>
      </div>
    </footer>
  );
}
