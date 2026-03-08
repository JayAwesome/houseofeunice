import { Crown, Heart, Lock, UserCheck } from "lucide-react";

const reasons = [
  { icon: Crown, title: "Luxury-Level Curation", description: "Every piece is vetted for quality, condition, and style — only the best makes it to our collection." },
  { icon: Heart, title: "Modest & Elegant Fashion", description: "We celebrate modesty as a form of elegance, offering pieces that are stylish and tasteful." },
  { icon: Lock, title: "Limited & Exclusive", description: "Our pieces are one-of-a-kind. When it's gone, it's gone — making your wardrobe truly unique." },
  { icon: UserCheck, title: "Personalized Guidance", description: "From selecting pieces to styling outfits, we walk with you every step of the way." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans">The Difference</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Why Choose Us
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-8 bg-background border border-border hover:border-accent/50 transition-colors duration-300 group"
            >
              <reason.icon className="w-8 h-8 text-accent mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
