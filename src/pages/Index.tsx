import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  CheckCircle2,
  TrendingUp,
  Shield,
  Award,
  Users,
  MapPin,
  GraduationCap,
  Briefcase,
  DollarSign,
  Clock,
  Phone,
  Mail,
  Flag,
} from "lucide-react";

import trainingImage from "@/assets/training-facility.jpg";

const Index = () => {
  // SECTION 1 — WHY ONE DRIVE REALTY
  const whyODRFeatures = [
    { icon: Award, text: "100% Commission Plans Available" },
    { icon: Users, text: "Full Agent Sponsorship & Mentorship" },
    { icon: MapPin, text: "Nationwide & Global Property Coverage" },
    { icon: Shield, text: "NWMLS Access, Contracts & Compliance" },
    { icon: TrendingUp, text: "Halal, Kosher & Usury-Free Funding" },
    { icon: Briefcase, text: "Powerful Agent Virtual Back Office" },
  ];

  // SECTION 2 — REAL ESTATE CATEGORIES
  // Using Unsplash Source queries for open-license images (randomized per query)
  const propertyCategories = [
    { title: "Residential Homes", img: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg" },
    { title: "Commercial Properties", img: "https://images.pexels.com/photos/998499/pexels-photo-998499.jpeg?cs=srgb&dl=pexels-jimbear-998499.jpg&fm=jpg" },
    { title: "Multifamily Units", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGD-aFfyNRLa0kxZm7qtakQ7qbPCbJXCLcw&s" },
    { title: "Vacant Land & Development", img: "data:image/jpeg;base64,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" },
    { title: "Agricultural & Dairy Farming", img: "data:image/jpeg;base64,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" },
    { title: "Business Listings", img: "https://businessdeals.in/upload/category/202501301835services-(1).webp" },
    { title: "Halal-Compliant Investments", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aWB6LCXPskCBRNI4Z9-MCxLsvIHr7egnKw&s" },
    { title: "Build-2-Suit Projects", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjbqDF_4-E2dyhIhzmctFHfzC23W0c-VUlA&s" },
  ];

  // SECTION 3 — BENEFITS
  const benefits = [
    {
      icon: Shield,
      title: "Paperless Online Brokerage",
      desc: "Work anywhere globally using our virtual back-office tools.",
    },
    {
      icon: DollarSign,
      title: "Keep More Earnings",
      desc: "100% commission plan + minimal transaction fees.",
    },
    {
      icon: TrendingUp,
      title: "Unlimited Growth",
      desc: "List, sell, invest, sponsor, or build your own agent team.",
    },
    {
      icon: Award,
      title: "Agent-Driven Firm",
      desc: "No corporate ladder, no office managers, direct broker access.",
    },
    {
      icon: MapPin,
      title: "International Reach",
      desc: "Showcase listings in the USA and global emerging markets.",
    },
    {
      icon: Users,
      title: "Training & Mentorship",
      desc: "Broker mentorship, learning programs & resource library.",
    },
  ];

  // SECTION 4 — AGENT PROGRAMS
  const agentPrograms = [
    {
      title: "Plan 01 – 100% Commission",
      pay: "$0 Commission Split",
      desc: "Keep 100% of your commission. Only a simple flat fee per transaction.",
    },
    {
      title: "Plan 02 – Enhanced Resources",
      pay: "Low Monthly Access Fee",
      desc: "Access advanced tools, marketing, support & premium features.",
    },
    {
      title: "Park Your License",
      pay: "Earn 85% Per Deal",
      desc: "Avoid MLS/Board fees and keep your license active affordably.",
    },
    {
      title: "Affiliate Membership",
      pay: "Earn Referral Income",
      desc: "Earn referral fees without holding a real estate license.",
    },
    {
      title: "Build-2-Suit Program",
      pay: "Custom Development",
      desc: "Serve clients building custom homes, commercial units & warehouses.",
    },
    {
      title: "List-2-Last Agent Program",
      pay: "Listing Growth System",
      desc: "A complete listing success blueprint with tools & top-level support.",
    },
  ];

  // SECTION 5 — FUNDING OPTIONS (HALAL / ETHICAL / USURY-FREE)
  const fundingOptions = [
    {
      icon: DollarSign,
      title: "Halal Mortgage Referrals",
      desc: "Murabaha, Ijarah & Musharakah models with vetted Islamic-finance partners.",
    },
    {
      icon: Briefcase,
      title: "Development Funding",
      desc: "Ethical, non-interest financing for residential & commercial projects.",
    },
    {
      icon: MapPin,
      title: "Global Investor Access",
      desc: "International funding sources for large-scale property acquisitions.",
    },
    {
      icon: Shield,
      title: "Usury-Free Programs",
      desc: "Options for those who avoid traditional interest-based loans.",
    },
    {
      icon: Users,
      title: "Partner-Backed Financing",
      desc: "Banks, builders & legal partners offering flexible solutions.",
    },
    {
      icon: TrendingUp,
      title: "Investor-Level Tools",
      desc: "Pro-forma builder, ROI visuals & cash-flow analysis tools.",
    },
  ];

  // SECTION 6 — HIGHLIGHTS FOR INTERNATIONAL / ETHICAL BUYERS
  const globalHighlights = [
    {
      icon: Shield,
      title: "Halal-Compliant Real Estate",
      desc: "Structured transactions honoring Islamic principles.",
    },
    {
      icon: Flag,
      title: "Global Listings Network",
      desc: "Access international markets through our digital marketplace.",
    },
    {
      icon: Briefcase,
      title: "Legal & Compliance Partners",
      desc: "Work with attorneys specializing in global transactions.",
    },
    {
      icon: Users,
      title: "Worldwide Buyer Support",
      desc: "Consultations available for investors & expatriates.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <Hero />

        {/* WHY ONE DRIVE REALTY */}
        <section id="why-odr" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                Trusted Digital Brokerage
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose One Drive Realty?
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A modern real-estate boutique firm offering global listings, 100% commission, 
                agent sponsorship, Halal financing, and a robust virtual back-office.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyODRFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow border-border"
                  >
                    <Icon className="w-12 h-12 text-secondary mb-4" />
                    <p className="text-lg font-semibold text-foreground">
                      {feature.text}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROPERTY CATEGORIES */}
        <section id="categories" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Explore Properties
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Search Through All Major Property Types
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse residential, commercial, multifamily, land, business properties 
                and investment opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {propertyCategories.map((category, index) => (
                <Card
                  key={index}
                  className="overflow-hidden rounded-lg border-border transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="w-full h-40 md:h-44 lg:h-36 relative bg-muted">
                    <img
                      src={category.img}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6 text-center">
                    <p className="text-foreground font-semibold">{category.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section id="benefits" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Agent Advantages
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Benefits of Joining One Drive Realty
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A flexible, agent-driven brokerage with no corporate restrictions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-xl transition-shadow border-border"
                  >
                    <Icon className="w-14 h-14 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center bg-background p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                No Contracts — No Office Requirements
              </h3>
              <p className="text-lg text-muted-foreground">
                Work part-time or full-time, from anywhere. No previews, no floor time, 
                no office politics — full freedom.
              </p>
            </div>
          </div>
        </section>

        {/* AGENT PROGRAMS */}
        <section id="programs" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                Agent Programs
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Agent Plans & Programs
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexible plans designed for new agents, experienced brokers, 
                investors, and global partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {agentPrograms.map((career, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow border-border"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {career.title}
                  </h3>
                  <p className="text-2xl font-bold text-secondary mb-2">
                    {career.pay}
                  </p>
                  <p className="text-muted-foreground">{career.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FUNDING OPTIONS */}
        <section id="funding" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                Ethical Financing
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Halal, Kosher & Usury-Free Funding Options
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized financing models for buyers, builders, investors, 
                and developers across global markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {fundingOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-border hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-10 h-10 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{option.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* GLOBAL SECTION */}
        <section id="global" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Global Marketplace
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Built for Global Buyers & Ethical Investors
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our platform supports worldwide listings, investor tools, Halal financing, 
                and international legal compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {globalHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-border hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-10 h-10 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="py-20 bg-hero-gradient relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Clock className="w-16 h-16 text-secondary mx-auto mb-6" />

              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Start Your Real Estate Journey Today
              </h2>

              <p className="text-xl text-primary-foreground/90 mb-8">
                Whether you're an agent, investor, buyer, or developer — 
                One Drive Realty gives you tools to grow globally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-6 shadow-accent-glow"
                >
                  Explore Listings
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-primary-foreground border-2 border-primary-foreground/50 text-lg px-10 py-6"
                >
                  Join as Agent
                </Button>
              </div>

              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                  Contact Us Today
                </h3>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a
                    href="tel:1-206-788-7190"
                    className="flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    <div className="text-left">
                      <p className="text-sm text-primary-foreground/70">Call Us</p>
                      <p className="text-xl font-bold">1-206-788-7190</p>
                    </div>
                  </a>

                  <div className="hidden md:block w-px h-12 bg-primary-foreground/30" />

                  <a
                    href="mailto:info@onedriverealty.com"
                    className="flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    <div className="text-left">
                      <p className="text-sm text-primary-foreground/70">
                        Email Us
                      </p>
                      <p className="text-xl font-bold">info@onedriverealty.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
