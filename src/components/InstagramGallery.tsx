import heroImg from "@/assets/hero-fashion.jpg";
import stylingImg from "@/assets/styling-session.jpg";
import dressImg from "@/assets/collection-dress.jpg";
import topsImg from "@/assets/collection-tops.jpg";
import skirtsImg from "@/assets/collection-skirts.jpg";
import statementImg from "@/assets/collection-statement.jpg";
import { Instagram } from "lucide-react";

const images = [heroImg, dressImg, topsImg, skirtsImg, statementImg, stylingImg];

const InstagramGallery = () => {
  return (
    <section id="lookbook" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans">Follow Us</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            The Lookbook
          </h2>
          <div className="gold-divider mb-4" />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-sans text-sm"
          >
            <Instagram className="w-4 h-4" />
            @houseofeuniceatelier
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div key={i} className="relative group cursor-pointer overflow-hidden aspect-square">
              <img
                src={img}
                alt={`Lookbook image ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
