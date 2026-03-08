import stylingImg from "@/assets/styling-session.jpg";
import { Sparkles, Calendar, ShoppingBag, Users } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Personal Styling", description: "Discover your signature look with one-on-one styling sessions tailored to your taste and lifestyle." },
  { icon: Calendar, title: "Event Styling", description: "Look unforgettable at every occasion — from weddings to galas, we style you for the moment." },
  { icon: ShoppingBag, title: "Capsule Wardrobe Creation", description: "Build a versatile, elegant wardrobe with fewer but better pieces that work together beautifully." },
  { icon: Users, title: "Fashion Consulting", description: "Expert guidance on color palettes, body types, and wardrobe strategy for lasting confidence." },
];

const StylingServices = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={stylingImg}
              alt="Personal styling session"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans">Our Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Styling That Speaks to You
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-8" />

            <div className="space-y-8">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-sans hover:bg-foreground transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylingServices;
