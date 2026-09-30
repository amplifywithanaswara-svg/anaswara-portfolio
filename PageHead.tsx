export default function PageHead({ title, intro, tint = "bg-blush" }: { title: string; intro: string; tint?: string }) {
  return (
    <section className={`${tint} border-b border-ink/10`}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/80">{intro}</p>
      </div>
    </section>
  );
}
