import { Phone, Mail, MapPin, Shield, Clock } from "lucide-react";

const campuses = ["Bellevue, WA", "Gulfport, MS", "Nationwide Partner Locations"];

const programs = [
  "Class A CDL (BTW) Training",
  "Entry-Level Driver Training (ELDT)",
  "Safe Driver Apprenticeship Pilot (SDAP)",
  "Veteran & Military-Friendly Pathways",
  "Corporate Fleet Upskilling",
];

const support = [
  "Admissions & Career Advisors",
  "Private Student Financing (up to 100%)",
  "State & Workforce Grant Guidance",
  "Tribal Funding Assistance",
  "Lifetime Job Placement",
];

const compliance = [
  "Drug-free and equal opportunity workplace",
  "Post 9/11 GI Bill approved",
  "Privacy-first admissions process (CCPA ready)",
  "FMCSA and ELDT compliant trainers",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] opacity-70">MLS Companies</p>
          <h2 className="text-2xl font-semibold mb-4">Drivers School</h2>
          <p className="text-sm opacity-80 mb-6">
            Content sourced from the MLS Website document: accelerated Class A CDL (BTW) training, modern equipment, and career services that pair every graduate with nationwide carriers.
          </p>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              FMCSA-approved ELDT provider
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              160-300 hour programs - finish in about 5 weeks
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Programs & Pathways</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {programs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Student Support</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {support.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Contact Admissions</h3>
          <a href="tel:1-206-788-7190" className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="w-4 h-4" />
            1-206-788-7190
          </a>
          <a href="mailto:info@mlscompanies.com" className="flex items-center gap-2 text-sm font-semibold">
            <Mail className="w-4 h-4" />
            info@mlscompanies.com
          </a>
          <div className="text-sm opacity-80 space-y-1">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {campuses.join(" | ")}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Monday through Friday - 7:30a to 5:30p classes
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs opacity-80">
            Copyright {new Date().getFullYear()} MLS Companies Drivers School. Career services provided through International Recruiter Agency Partners per official MLS brief.
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
};

export default Footer;
