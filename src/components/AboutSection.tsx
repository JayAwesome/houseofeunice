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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Why House of Eunice Exists
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-4 font-sans">
            House of Eunice Atelier was born from a simple belief: <span className="text-foreground font-medium">every woman deserves to look extraordinary without paying extraordinary prices.</span>
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-4 font-sans">
            We curate beautiful thrift pieces — blending African elegance with international style — and transform them into stunning, ready-to-wear looks. Each piece is handpicked, styled with intention, and made for women who refuse to blend in.
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            From Lagos to the world, we're building a fashion brand rooted in sustainability, confidence, and bold self-expression.
          </p>
        </div>

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
