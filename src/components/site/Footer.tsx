export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-sm">
            V
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Veronika Zemenová · Pojištění &amp; finance
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          Vytvořeno s láskou v Praze
        </div>
      </div>
    </footer>
  );
}
