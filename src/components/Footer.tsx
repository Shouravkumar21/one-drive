import { Mail, MapPin, Shield, Users, Building2 } from "lucide-react";

const services = [
  "Residential Real Estate Services",
  "Commercial Real Estate Listings",
  "Multifamily & Investment Properties",
  "Vacant Land & Development Support",
  "APS-LEADS-DFLX Marketing System",
  "CYPS Smart Yard Sign Technology",
];

const agentPrograms = [
  "100% Commission Plan",
  "Full Sponsorship Program",
  "Affiliate Membership",
  "Referral Fee Program",
  "Build-to-Suit Services",
];

const connect = [
  "Schedule a Consultation",
  "Join Our Team",
  "Partner With Us",
  "Follow Us on Social Media",
];

const compliance = [
  "Licensed Real Estate Brokerage",
  "Ethical Standards & NAR Compliance",
  "Equal Opportunity Housing",
  "Virtual Brokerage – Work From Anywhere",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-12 lg:grid-cols-4">

        {/* ABOUT ODR */}
        <div>
          <p className="text-xs uppercase tracking-[0.4em] opacity-70">
            One Drive Realty
          </p>

          <h2 className="text-2xl font-semibold mb-4">Digital Boutique Firm</h2>

          <p className="text-sm opacity-80 mb-6">
            A modern virtual real estate brokerage based in Bellevue, WA, 
            offering residential, commercial, multifamily, and global real estate 
            solutions. Powered by advanced technology, innovative marketing systems, 
            and a full Agent Virtual Back Office.
          </p>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> 
              Licensed & Compliant Across Multiple States
            </p>
            <p className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              CYPS Patent Smart Yard Sign System
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-3">Real Estate Services</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* AGENT PROGRAMS */}
        <div>
          <h3 className="font-semibold mb-3">Agent Programs</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {agentPrograms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <h3 className="font-semibold">Connect With Us</h3>

          <a
            href="mailto:info@onedriverealty.com"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <Mail className="w-4 h-4" /> info@onedriverealty.com
          </a>

          <div className="text-sm opacity-80 space-y-2">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bellevue, Washington (Headquarters)
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {connect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs opacity-80">
            © {new Date().getFullYear()} OneDriveRealty — All Rights Reserved.
          </p>

          <div className="text-xs opacity-80 flex flex-wrap gap-3">
            {compliance.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
