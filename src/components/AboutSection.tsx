import { Gem, Palette, MessageCircle } from "lucide-react";

const pillars = [
  {
    icon: Gem,
    title: "Curated Pieces",
    description: "Every item is hand-selected for quality, style, and timelessness. No mass production — only intentional fashion.",
  },
  {
    icon: Palette,
    title: "Personal Styling",
    description: "We help you discover your unique style and build outfits that make you feel confident and beautiful.",
  },
  {
    icon: MessageCircle,
    title: "Fashion Consulting",
    description: "From wardrobe audits to event styling, we provide expert guidance tailored to your lifestyle.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans">About the Atelier</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          More Than a Thrift Shop
        </h2>
        <div className="gold-divider mb-8" />
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-16 font-sans">
          House of Eunice Atelier is a fashion atelier that curates, styles, and consults. 
          We believe every woman deserves to look and feel extraordinary — sustainably, 
          elegantly, and affordably.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <pillar.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
