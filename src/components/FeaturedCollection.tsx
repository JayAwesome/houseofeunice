import dressImg from "@/assets/collection-dress.jpg";
import topsImg from "@/assets/collection-tops.jpg";
import skirtsImg from "@/assets/collection-skirts.jpg";
import statementImg from "@/assets/collection-statement.jpg";

const items = [
  { image: dressImg, title: "Dresses", subtitle: "Timeless silhouettes", tag: "Limited" },
  { image: topsImg, title: "Tops", subtitle: "Refined essentials", tag: "New Arrivals" },
  { image: skirtsImg, title: "Skirts", subtitle: "Elegant movement", tag: "Curated" },
  { image: statementImg, title: "Statement Pieces", subtitle: "One-of-a-kind finds", tag: "Exclusive" },
];

const FeaturedCollection = () => {
  return (
    <section id="collection" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans">The Collection</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Curated With Intention
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent/90 text-accent-foreground text-xs tracking-widest uppercase px-3 py-1 font-sans">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-sans">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 border border-primary text-primary text-sm tracking-widest uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View All Pieces
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
