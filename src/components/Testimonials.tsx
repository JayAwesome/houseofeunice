import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "House of Eunice didn't just style me — they helped me discover a confidence I didn't know I had. Every piece felt like it was made for me.",
    name: "Amara K.",
    role: "Event Styling Client",
  },
  {
    quote: "I walked in looking for a dress and walked out with a whole new perspective on fashion. The curation is impeccable and the service is warm.",
    name: "Grace O.",
    role: "Capsule Wardrobe Client",
  },
  {
    quote: "Sustainable fashion never looked this good. I've gotten more compliments on my thrift finds than on brand new designer pieces!",
    name: "Chidinma E.",
    role: "Loyal Customer",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            What Our Clients Say
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 bg-card border border-border relative">
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-foreground font-sans leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm font-sans">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
