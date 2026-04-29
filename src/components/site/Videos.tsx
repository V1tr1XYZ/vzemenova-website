import { Play } from "lucide-react";

const videos = [
  {
    title: "Dětský den s Benefitem",
    thumb: "https://framerusercontent.com/images/YytEh88o9UtSU5TNU5a0qcmE0U.png?width=691&height=852",
  },
  {
    title: "Jak začít s investováním",
    thumb: "https://framerusercontent.com/images/Go2x8GjBwYX8jJgcFFn4nH9M0Q.png?width=630&height=822",
  },
];

export function Videos() {
  return (
    <section id="videa" className="relative py-32 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
            Videa
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Pojďte se mnou <span className="text-gradient">za kameru</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div
              key={v.title}
              className="group relative aspect-video rounded-2xl overflow-hidden border border-border shadow-elegant cursor-pointer"
            >
              <img
                src={v.thumb}
                alt={v.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-20 w-20 rounded-full bg-gradient-primary grid place-items-center shadow-glow group-hover:scale-110 transition">
                  <Play className="h-7 w-7 text-primary-foreground fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
