import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

const links = [
  { href: "#odkazy", label: "Odkazy" },
  { href: "#pribeh", label: "Můj příběh" },
  { href: "#sluzby", label: "Služby" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Veronika Zemenová">
          {/* TODO: nahradit dodaným SVG logem (full white) */}
          <span className="font-display text-xl tracking-tight text-white">
            Veronika Zemenová
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="h-10 w-10 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#kontakt"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:opacity-90 transition"
          >
            Kontakt
          </a>
        </div>
      </div>
    </header>
  );
}
