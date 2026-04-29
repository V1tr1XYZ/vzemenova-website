import { Shield, TrendingUp, PiggyBank, HeartHandshake, Home, Briefcase } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Životní pojištění",
    desc: "Ochrana příjmu pro vás a vaši rodinu — nastavená přesně na míru životní situace.",
  },
  {
    icon: Home,
    title: "Pojištění majetku",
    desc: "Domov, auto, odpovědnost. Pomohu vybrat smysluplné krytí bez zbytečných výluk.",
  },
  {
    icon: TrendingUp,
    title: "Investice",
    desc: "Pravidelné i jednorázové investice — od konzervativních po dynamické portfolio.",
  },
  {
    icon: PiggyBank,
    title: "Spoření a renta",
    desc: "Důchodové strategie, dětské spoření, finanční rezerva pro klidné spaní.",
  },
  {
    icon: Briefcase,
    title: "Hypotéky a úvěry",
    desc: "Refinancování, nová hypotéka nebo konsolidace — najdu nejvýhodnější řešení.",
  },
  {
    icon: HeartHandshake,
    title: "Finanční plán",
    desc: "Komplexní pohled na vaši finanční situaci a dlouhodobá strategie.",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="relative py-32 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
            S čím vám pomůžu
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Pojištění &amp; <span className="text-gradient">finance</span> pod jednou střechou
          </h2>
          <p className="mt-6 text-muted-foreground">
            Nejsem prodejce produktů — jsem váš dlouhodobý průvodce. Společně si projdeme vaši
            situaci a najdeme řešení, které dává smysl právě vám.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 shadow-card"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-[0.06] transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-6">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
