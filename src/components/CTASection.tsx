const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
          Step Into Confidence
        </h2>
        <div className="w-16 h-[1px] bg-accent mx-auto mb-6" />
        <p className="text-primary-foreground/70 text-lg font-sans leading-relaxed mb-10">
          Your next favorite outfit is waiting. Discover curated thrift fashion that celebrates 
          elegance, modesty, and your unique style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#collection"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground text-sm tracking-widest uppercase font-sans hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-primary-foreground/40 text-primary-foreground text-sm tracking-widest uppercase font-sans hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Book a Styling Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
