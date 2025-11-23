import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://source.unsplash.com/1600x900/?real-estate,house"
          alt="Real estate hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Global Real Estate Opportunities
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            Buy, Sell, Invest, or List Your Property Worldwide with One Drive Realty
          </p>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            One Drive Realty is a digital real estate boutique firm offering 
            100% commission plans, agent sponsorship, global listings, Halal 
            financing options, and a powerful virtual back office. Explore 
            residential, commercial, multifamily, vacant land, and development 
            properties in one seamless platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-accent-glow"
            >
              Explore Listings
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-primary-foreground border-2 border-primary-foreground/50 text-lg px-8 py-6"
            >
              Join as an Agent
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/90">
            <a
              href="tel:1-206-788-7190"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">1-206-788-7190</span>
            </a>

            <a
              href="mailto:info@onedriverealty.com"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">info@onedriverealty.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
