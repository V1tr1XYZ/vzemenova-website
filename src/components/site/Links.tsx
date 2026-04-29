import { Instagram, Facebook, Linkedin, Globe, Mail, Phone } from "lucide-react";

const items = [
  { icon: Globe, label: "Benefit Investment", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Napsat e-mail", href: "#kontakt" },
  { icon: Phone, label: "Zavolat mi", href: "#kontakt" },
];

export function Links() {
  return (
    <section id="odkazy" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
            Odkazy
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Najdete mě <span className="text-gradient">tady</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <a
                key={it.label}
                href={it.href}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-0.5"
              >
                <div className="h-11 w-11 rounded-xl bg-surface-elevated grid place-items-center group-hover:bg-gradient-primary group-hover:shadow-glow transition">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <span className="font-medium">{it.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
