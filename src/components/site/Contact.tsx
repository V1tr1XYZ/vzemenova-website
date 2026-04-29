import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[800px] bg-primary/15 blur-[140px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Kontakt
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Pojďme si <span className="text-gradient">popovídat</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              První konzultace je nezávazná a bezplatná. Stačí se ozvat — domluvíme termín
              osobní schůzky nebo videohovoru.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "+420 774 294 436", href: "tel:+420774294436" },
                { icon: Mail, label: "veronika.zemenova@benefitas.cz", href: "mailto:veronika.zemenova@benefitas.cz" },
                { icon: MapPin, label: "Na Strži 1702/65, Prague, Czech Republic 140 00", href: "https://maps.google.com/?q=Na+Strži+1702/65,+Prague,+Czech+Republic+140+00" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-11 w-11 rounded-xl bg-surface-elevated border border-border grid place-items-center group-hover:bg-gradient-primary group-hover:border-transparent transition">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-foreground group-hover:text-primary-glow transition">
                      {c.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <form className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-elegant space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  Jméno
                </label>
                <input
                  type="text"
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary outline-none transition"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary outline-none transition"
                  placeholder="+420"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                E-mail
              </label>
              <input
                type="email"
                className="mt-2 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary outline-none transition"
                placeholder="vas@email.cz"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Zpráva
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary outline-none transition resize-none"
                placeholder="S čím vám můžu pomoci?"
              />
            </div>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
            >
              Odeslat zprávu
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
