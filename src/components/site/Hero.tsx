import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 pb-24 bg-gradient-hero noise overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary-glow/15 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur text-xs uppercase tracking-[0.2em] text-primary-glow mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
            </span>
            Aktuálně přijímám nové klienty v Praze
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="text-gradient">Veronika</span>
            <br />
            <span className="text-foreground">Zemenová</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Pomáhám lidem najít cestu k finanční svobodě. Nabízím poradenství v oblasti{" "}
            <span className="text-foreground font-medium">pojištění</span> a{" "}
            <span className="text-foreground font-medium">osobních financí</span> s důrazem na
            důvěru, autenticitu a dlouhodobý vztah.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition"
            >
              Sjednat schůzku
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pribeh"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border text-foreground hover:border-primary hover:bg-surface transition"
            >
              Můj příběh
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
            {[
              { num: "8+", label: "let zkušeností" },
              { num: "500+", label: "spokojených klientů" },
              { num: "TOP 10", label: "specialistů v ČR" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold text-gradient">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto lg:mx-0 max-w-md w-full">
          <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border shadow-elegant">
            <img
              src="https://framerusercontent.com/images/E256AMOO7jmeC16Pt034c9hN4HQ.png?width=535&height=852"
              alt="Veronika Zemenová – finanční specialistka"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
