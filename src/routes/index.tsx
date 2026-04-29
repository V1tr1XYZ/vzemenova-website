import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Services } from "@/components/site/Services";
import { Links } from "@/components/site/Links";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veronika Zemenová — pojištění a finance | Praha" },
      {
        name: "description",
        content:
          "Osobní finanční poradkyně v Praze. Pojištění, investice, hypotéky a finanční plán na míru. Sjednejte si nezávaznou konzultaci.",
      },
      { property: "og:title", content: "Veronika Zemenová — pojištění a finance" },
      {
        property: "og:description",
        content: "Pojištění, investice a finanční plán s důrazem na důvěru a dlouhodobý vztah.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Story />
      <Services />
      <Links />
      <Contact />
      <Footer />
    </main>
  );
}
