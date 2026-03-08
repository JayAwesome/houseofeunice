import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="section-padding bg-foreground text-primary-foreground/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-primary-foreground mb-4">
              House of Eunice <span className="text-accent">Atelier</span>
            </h3>
            <p className="font-sans text-sm leading-relaxed max-w-md">
              Curating confidence through intentional, elegant, and sustainable thrift fashion 
              for women who dare to stand out.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 font-sans text-sm">
              <a href="#collection" className="block hover:text-accent transition-colors">Shop</a>
              <a href="#services" className="block hover:text-accent transition-colors">Styling Services</a>
              <a href="#about" className="block hover:text-accent transition-colors">About</a>
              <a href="#lookbook" className="block hover:text-accent transition-colors">Lookbook</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-primary-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 font-sans text-sm">
              <a href="mailto:hello@houseofeunice.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> hello@houseofeunice.com
              </a>
              <a href="tel:+2348136183274" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> +234 813 618 3274
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Lagos, Nigeria
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" /> @houseofeuniceatelier
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center font-sans text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} House of Eunice Atelier. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
