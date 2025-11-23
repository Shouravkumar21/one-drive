import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Start Your CDL Career in Just 1 Month
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            Get Licensed, Get Hired, Get on the Road with MLS Companies
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            With 32+ years of experience, MLS Companies provides comprehensive Class A CDL training with job placement before graduation. Join our nationwide network of successful truck drivers and start earning competitive pay with excellent benefits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-accent-glow"
            >
              Start Your CDL Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-primary-foreground border-2 border-primary-foreground/50 text-lg px-8 py-6"
            >
              Get Free Consultation
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/90">
            <a href="tel:1-206-788-7190" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">1-206-788-7190</span>
            </a>
            <a href="mailto:info@mlscompanies.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">info@mlscompanies.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
