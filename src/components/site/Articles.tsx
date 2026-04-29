import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    img: "https://framerusercontent.com/images/GNmAySSnPoS4PiGt8G1oTBuwM.png?width=1456&height=816",
    title: "Na investici do zlata stačí i malá částka",
    time: "2 minuty čtení",
    href: "#",
  },
  {
    img: "https://framerusercontent.com/images/ddDtJ59iUnN6tT1C0U2tlyFrkY.png?width=1456&height=816",
    title: "Životní pojištění: Jak předejít problémům s plněním?",
    time: "3 minuty čtení",
    href: "#",
  },
  {
    img: "https://framerusercontent.com/images/p9T4RpNlZofhIffMQsNeU9ffI.png?width=1456&height=816",
    title: "„Mysli pozitivně“ není jen obyčejnou frází",
    time: "3 minuty čtení",
    href: "#",
  },
];

export function Articles() {
  return (
    <section id="clanky" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Píšu pro vás
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              <span className="text-gradient">Články</span> z mého světa
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            Všechny články
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.href}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="h-3 w-3" />
                  {a.time}
                </div>
                <h3 className="text-lg font-bold leading-snug group-hover:text-primary-glow transition-colors">
                  {a.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
                  Číst dál
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
