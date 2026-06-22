import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="hem" className="bg-[var(--background)] py-28 text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-8 h-px w-24 bg-[var(--secondary)]" />
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]/60">Est. 1996</p>
        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-5xl font-light italic leading-tight sm:text-6xl">
          Salong & boutique
        </h1>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl text-[var(--secondary)]">sedan 1996 i city</h2>
        <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-[var(--foreground)]/75">{business.description}</p>
        <span className="mt-10 inline-block text-5xl" aria-hidden>💇</span>
        <div className="mt-12 flex justify-center gap-6">
          <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
            className="border border-[var(--primary)] px-10 py-3 text-sm uppercase tracking-widest transition hover:bg-[var(--primary)] hover:text-white">
            Boka tid
          </a>
          <a href="#om-oss" className="px-10 py-3 text-sm uppercase tracking-widest text-[var(--primary)]/60 underline-offset-4 hover:underline">
            Upptäck salongen
          </a>
        </div>
      </div>
    </section>
  );
}
