import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant woman in curated thrift fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up font-sans">
            House of Eunice Atelier
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Curated Thrift Fashion for Women Who Want to Stand Out
          </h1>
          <p className="text-cream-dark text-lg md:text-xl font-light leading-relaxed mb-10 animate-fade-up font-sans" style={{ animationDelay: "0.4s" }}>
            Intentional styling. Thoughtfully curated pieces. Confidence in every look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="#collection"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground text-sm tracking-widest uppercase font-sans hover:bg-gold-light transition-colors duration-300 text-center"
            >
              Shop the Collection
            </a>
            <a
              href="#services"
              className="inline-block px-8 py-4 border border-cream-dark text-cream-dark text-sm tracking-widest uppercase font-sans hover:bg-cream-dark/10 transition-colors duration-300 text-center"
            >
              Book a Styling Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
