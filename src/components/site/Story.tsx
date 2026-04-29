export function Story() {
  return (
    <section id="pribeh" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-elegant">
              <img
                src="https://framerusercontent.com/images/YytEh88o9UtSU5TNU5a0qcmE0U.png?width=691&height=852"
                alt="Veronika při práci"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Mojí motivací jsou lidé
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Našla jsem <span className="text-gradient">svobodu</span> a vnitřní klid
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Klíčem k úspěchu je pro mě cílevědomost. Z vlastní zkušenosti vím, že pokud
              stavíme svou motivaci pouze na materiálních věcech, příliš daleko se nedostaneme.
              Důležité je naučit se klientům naslouchat, upřímně se o ně zajímat a budovat s
              nimi vztah založený na důvěře.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Během mé praxe jsem dosáhla finanční i časové nezávislosti. Můžu dělat radost
              svým blízkým a dopřát si i několik dovolených za rok. Největší radost jsem však
              udělala sama sobě – zlepšila jsem se v komunikaci a začala svět vnímat jinýma
              očima.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Můj příběh
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Entuziasmus mám ve&nbsp;všem, <br />
              co <span className="text-gradient">dělám</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Pro rozeného introverta nebyly začátky snadné. Každodenní setkávání s klienty,
              které jsem viděla poprvé, a sdílení důvěrných informací pro mě byly výzvou. Když
              už jsem měla pocit, že tato práce pro mou povahu není vhodná, život mi změnila
              kniha Škola úspěchu.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Od té doby se na každé setkání s klienty těším a ještě v prvním roce jsem se
              dostala mezi <span className="text-foreground font-medium">deset
              nejúspěšnějších finančních specialistů</span>.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-elegant">
              <img
                src="https://framerusercontent.com/images/Go2x8GjBwYX8jJgcFFn4nH9M0Q.png?width=630&height=822"
                alt="Veronika"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
