import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Shield, Award, Users, MapPin, GraduationCap, Briefcase, DollarSign, Clock, Phone, Mail, Flag } from "lucide-react";
import trainingImage from "@/assets/training-facility.jpg";

const Index = () => {
  const whyMlsFeatures = [
    { icon: Award, text: "32+ Years of Industry Experience" },
    { icon: MapPin, text: "Nationwide Training Locations" },
    { icon: Shield, text: "Modern Equipment & Training Grounds" },
    { icon: Users, text: "Computer Labs & Professional Classrooms" },
    { icon: CheckCircle2, text: "Automatic Transmission Training Available" },
    { icon: Briefcase, text: "Job Placement Before Graduation" },
    { icon: DollarSign, text: "Financial Assistance Programs" },
  ];

  const trainingFeatures = [
    "Hands-on Behind-The-Wheel (BTW) Training",
    "Comprehensive Pre-Trip Inspection Training",
    "Backing, Turning & Maneuvering Practice",
    "Coupling & Uncoupling Procedures",
    "Real On-Road Driving Experience",
    "Modern Tractor-Trailers Fleet",
    "CDL Permit Test Guidance",
    "DOT Physical Assistance",
  ];

  const benefits = [
    { icon: Shield, title: "Job Security", desc: "High demand for qualified drivers nationwide" },
    { icon: DollarSign, title: "Competitive Pay", desc: "Earn $45,000-$75,000+ annually" },
    { icon: TrendingUp, title: "Independent Work Style", desc: "Be your own boss on the road" },
    { icon: Award, title: "Full Benefits", desc: "Health insurance & retirement plans" },
    { icon: MapPin, title: "Travel Opportunities", desc: "See the country while you work" },
    { icon: GraduationCap, title: "Tuition Reimbursement", desc: "Many carriers offer repayment programs" },
  ];

  const careerPaths = [
    { title: "Over-The-Road (OTR)", pay: "$55,000 - $75,000+/year", desc: "Long-haul interstate driving" },
    { title: "Local Delivery", pay: "$45,000 - $65,000/year", desc: "Home daily routes" },
    { title: "Team Driving", pay: "$70,000 - $100,000+/year", desc: "Shared driving with partner" },
    { title: "Tanker/Hazmat", pay: "$60,000 - $80,000+/year", desc: "Specialized cargo transport" },
    { title: "Dedicated Routes", pay: "$50,000 - $70,000/year", desc: "Regular customer deliveries" },
    { title: "CDL Instructor", pay: "$45,000 - $60,000/year", desc: "Train the next generation" },
  ];

  const fundingOptions = [
    {
      icon: DollarSign,
      title: "Private Student Financing",
      desc: "MLS partners can finance up to 100% of tuition for qualified students, mirroring the DOCX funding overview.",
    },
    {
      icon: Briefcase,
      title: "Carrier Tuition Reimbursement",
      desc: "Earn $100-$250 monthly reimbursements (80-100% total) once you hire on with a preferred carrier.",
    },
    {
      icon: MapPin,
      title: "State Workforce Grants",
      desc: "Admissions advisors walk you through workforce board applications, just like the MLS content describes.",
    },
    {
      icon: Shield,
      title: "Tribal & Community Support",
      desc: "Native American students can access tribal council grants with guided assistance from MLS staff.",
    },
    {
      icon: Users,
      title: "Out-of-Pocket Planning",
      desc: "Plan housing, meals, DOT physicals, drug screens, and travel with transparent checklists from the brief.",
    },
    {
      icon: TrendingUp,
      title: "Fuel Rebates & Incentives",
      desc: "PFJ rebates and surcharge programs offset weekly expenses, keeping more settlement in your pocket.",
    },
  ];

  const veteranHighlights = [
    {
      icon: Shield,
      title: "VA & Post 9/11 Approved",
      desc: "MLS is cleared for Veteran (BTW) Training, so GI Bill benefits can cover tuition and housing needs.",
    },
    {
      icon: Flag,
      title: "Mission-Ready Curriculum",
      desc: "Structure, safety, and accountability mirror the values outlined for transitioning service members.",
    },
    {
      icon: Briefcase,
      title: "Career Placement Network",
      desc: "International Recruiter Agency Partners secure pre-hire offers—even instructor pathways back home nightly.",
    },
    {
      icon: Users,
      title: "Transferable Skills",
      desc: "Situational awareness, logistics, and leadership from the doc are celebrated and sharpened on the pad.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

      {/* Why MLS Companies Section */}
      <section id="why-mls" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Trusted Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose MLS Companies?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              America's premier CDL training provider with an unmatched track record of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyMlsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border">
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <p className="text-lg font-semibold text-foreground">{feature.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Class A CDL Section */}
      <section id="programs" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">CDL Training</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  What is a Class A CDL?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A <strong>Class A Commercial Driver's License (CDL)</strong> is the highest level of commercial driving certification in the United States. It qualifies you to operate combination vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">What Can You Drive?</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Tractor-trailers and semi-trucks",
                    "Flatbed trucks and tanker vehicles",
                    "Livestock carriers and refrigerated trucks",
                    "Truck and trailer combinations",
                    "Large passenger buses with endorsements",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Career Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  With a Class A CDL, you can pursue diverse career paths including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Long Haul", "Local Routes", "Tanker Transport", "Team Driving", "Dedicated Freight", "Passenger Bus"].map((path) => (
                    <Badge key={path} variant="outline" className="border-secondary text-secondary">
                      {path}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img 
                  src={trainingImage}
                  alt="Professional CDL Training Facility"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
                  <p className="text-4xl font-bold">$45K-$75K+</p>
                  <p className="text-sm">Average Annual Salary</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Steps to Obtain Your CDL</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Complete ELDT Training</h4>
                    <p className="text-sm text-muted-foreground">Enroll in FMCSA-approved Entry Level Driver Training</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Pass Knowledge Tests</h4>
                    <p className="text-sm text-muted-foreground">Complete written exams for CDL permit and endorsements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Pass Skills Test</h4>
                    <p className="text-sm text-muted-foreground">Demonstrate driving proficiency in pre-trip, backing, and road tests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Features Section */}
      <section id="training" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Comprehensive Program</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Training Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to become a professional, confident commercial driver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trainingFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border">
                <CheckCircle2 className="w-10 h-10 text-secondary mb-4" />
                <p className="text-foreground font-medium">{feature}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Your Advantages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Career Benefits & Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build a rewarding career with excellent compensation and lifestyle flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-border">
                  <Icon className="w-14 h-14 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-muted p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Free Choice School - No Contracts</h3>
            <p className="text-lg text-muted-foreground">
              MLS Companies believes in your freedom to choose. We don't require you to sign employment contracts or commit to specific carriers. Get trained, get certified, and choose your own path.
            </p>
          </div>
        </div>
      </section>

      {/* Career Outcomes Section */}
      <section id="careers" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Career Paths</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Career Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple career paths with competitive salaries and growth potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {careerPaths.map((career, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">{career.title}</h3>
                <p className="text-2xl font-bold text-secondary mb-2">{career.pay}</p>
                <p className="text-muted-foreground">{career.desc}</p>
              </Card>
            ))}
          </div>

          <div className="bg-background p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Success Partners</h3>
            <p className="text-center text-muted-foreground mb-6">
              We work with hundreds of hiring partner carriers nationwide, offering:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Pre-hire job offers before graduation",
                "Veteran-friendly employment programs",
                "Sign-on bonuses and incentives",
                "Tuition reimbursement options",
                "Immediate placement assistance",
                "Ongoing career support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ELDT Requirements Section */}
      <section id="eldt" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-primary-foreground">Federal Requirement</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                ELDT Requirements (Entry Level Driver Training)
              </h2>
            </div>

            <Card className="p-8 border-border mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-12 h-12 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Federal Mandate Effective February 7, 2022</h3>
                  <p className="text-muted-foreground">
                    The Federal Motor Carrier Safety Administration (FMCSA) now requires all first-time CDL applicants and those adding certain endorsements to complete Entry Level Driver Training from an FMCSA-approved provider.
                  </p>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <h4 className="font-bold text-foreground mb-4">Who Needs ELDT?</h4>
                <ul className="space-y-2">
                  {[
                    "First-time Class A or Class B CDL applicants",
                    "Drivers upgrading from Class B to Class A",
                    "Those obtaining School Bus (S), Passenger (P), or Hazardous Materials (H) endorsements for the first time",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Award className="w-6 h-6 text-secondary" />
                  MLS Companies is an FMCSA-Approved ELDT Provider
                </h4>
                <p className="text-muted-foreground">
                  Our training program meets all federal ELDT requirements, ensuring you receive compliant, high-quality instruction that prepares you for success in your CDL career.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding & Financial Support Section */}
      <section id="funding" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Financial Clarity</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Funding Options Straight from the MLS Brief
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Use private financing, state or tribal support, and carrier reimbursement programs exactly as outlined in the official MLS Website content document.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fundingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-6 border-border hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Support Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">We Support You</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Student Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From enrollment to employment, we're with you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="p-8 border-border">
              <GraduationCap className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Admissions Assistance</h3>
              <p className="text-muted-foreground">
                Our enrollment team guides you through every step of the application process, from initial inquiry to your first day of class.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <DollarSign className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Financing Options</h3>
              <p className="text-muted-foreground">
                Multiple financial assistance programs available, including payment plans and potential tuition reimbursement through carrier partnerships.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <Briefcase className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Career Choice Program</h3>
              <p className="text-muted-foreground">
                Access our network of hiring partners and choose the driving career that fits your lifestyle and goals.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Job Placement Assistance</h3>
              <p className="text-muted-foreground">
                We work to secure job placement opportunities before you graduate, ensuring a smooth transition to your new career.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-background border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What Our Students Say</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <p className="text-muted-foreground italic mb-2">
                  "MLS Companies changed my life. In just one month, I went from unemployed to earning $65,000 a year driving for a major carrier. The instructors were patient, professional, and genuinely cared about my success."
                </p>
                <p className="font-semibold text-foreground">- James M., Class of 2023</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <p className="text-muted-foreground italic mb-2">
                  "The job placement assistance was incredible. I had three job offers before I even graduated. The training was thorough and prepared me for real-world driving situations."
                </p>
                <p className="font-semibold text-foreground">- Maria L., Class of 2023</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <p className="text-muted-foreground italic mb-2">
                  "As a veteran, I appreciated the structured approach and discipline. MLS Companies' modern equipment and experienced instructors made the transition smooth and rewarding."
                </p>
                <p className="font-semibold text-foreground">- Robert T., Class of 2024</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Veterans & Apprenticeships Section */}
      <section id="veterans" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Veterans & Under 21 Drivers</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Built for Service Members and SDAP Candidates
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The MLS Website document highlights VA-approved training, Post 9/11 GI Bill eligibility, and the Safe Driver Apprenticeship Pilot (SDAP) Program so veterans and drivers under 21 can launch interstate careers with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {veteranHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 border-border hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 bg-muted p-8 rounded-lg max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Veterans Thrive Here</h3>
            <p className="text-muted-foreground">
              Dependability, attention to detail, logistics know-how, and leadership—every attribute the DOCX listed—are embedded into daily training. Veterans can leverage VA benefits, keep family time with home-weekly carrier partners, and even transition into instructor or admissions careers when it is time to park the truck.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Become a Professional Truck Driver in Just 1 Month
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Don't wait to start your new career. Join thousands of successful graduates who chose MLS Companies for their CDL training.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-6 shadow-accent-glow"
              >
                Apply Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-primary-foreground border-2 border-primary-foreground/50 text-lg px-10 py-6"
              >
                Schedule a Tour
              </Button>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Contact Us Today</h3>
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
                  href="mailto:info@mlscompanies.com" 
                  className="flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-sm text-primary-foreground/70">Email Us</p>
                    <p className="text-xl font-bold">info@mlscompanies.com</p>
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
