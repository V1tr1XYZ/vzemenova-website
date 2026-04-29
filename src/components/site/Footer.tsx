export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Veronika Zemenová · Pojištění &amp; finance
        </span>
        <div className="text-xs text-muted-foreground">
          Vytvořeno s láskou v Praze
        </div>
      </div>
    </footer>
  );
}
