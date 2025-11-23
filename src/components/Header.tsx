import { groupedSections } from "@/data/odrStructure";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Mail, Menu, Phone } from "lucide-react";

const navItems = groupedSections;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex flex-wrap items-center gap-4 px-4 py-4">
        <a href="#top" className="flex items-center" aria-label="One Drive Realty">
          <img
            src="/assets/logos/logomain.png"
            alt="One Drive Realty"
            className="h-12 w-auto object-contain"
            loading="lazy"
          />
        </a>

        <nav className="hidden flex-1 flex-wrap justify-center gap-x-6 gap-y-2 text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground lg:flex">
          {navItems.map((group) => (
            <div key={group.main.number} className="group relative">
              <a href={`#${group.main.slug}`} className="transition hover:text-foreground">
                {group.main.title}
              </a>
              {group.subSections.length > 0 && (
                <div className="invisible absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-2xl border border-border/70 bg-background/95 p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  <p className="text-[0.45rem] uppercase tracking-[0.35em] text-muted-foreground">{group.main.number} outline</p>
                  <ScrollArea className="mt-2 max-h-64 pr-2">
                    <ul className="space-y-1">
                      {group.subSections.map((section) => (
                        <li key={section.number}>
                          <a
                            href={`#${section.slug}`}
                            className="flex items-center justify-between rounded-lg px-2 py-1 text-[0.6rem] font-medium text-foreground transition hover:bg-muted/60"
                          >
                            <span className="text-left leading-tight">{section.title}</span>
                            <span className="text-[0.5rem] text-muted-foreground">{section.number}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 text-sm font-semibold text-foreground lg:flex">
          <Button size="lg" asChild>
            <a href="#connect-with-us">Start Brief</a>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Button size="sm" variant="secondary" asChild>
            <a href="tel:1-206-788-7190">Call Broker</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[320px] flex-col p-0">
              <SheetHeader className="border-b border-border bg-muted/40 px-6 py-4 text-left">
                <SheetTitle className="text-base">One Drive Realty</SheetTitle>
                <p className="text-sm text-muted-foreground">Simple outline pulled from the doc navigation.</p>
              </SheetHeader>
              <ScrollArea className="flex-1 px-6 py-4">
                <div className="space-y-6">
                  {groupedSections.map((group) => (
                    <div key={group.main.number}>
                      <p className="text-sm font-semibold text-foreground">{group.main.title}</p>
                      <ul className="mt-2 space-y-1">
                        {group.subSections.map((section) => (
                          <li key={section.number}>
                            <a
                              href={`#${section.slug}`}
                              className="block rounded-md px-2 py-1 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                            >
                              {section.number}. {section.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="border-t border-border px-6 py-4 text-sm">
                <p className="font-semibold">Connect</p>
                <a href="mailto:info@onedriverealty.com" className="mt-1 flex items-center gap-2">
                  <Mail className="h-4 w-4" /> info@onedriverealty.com
                </a>
                <a href="tel:1-206-788-7190" className="mt-1 flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 1-206-788-7190
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="border-t border-border bg-background/95">
        <div className="container mx-auto hidden items-center justify-between px-4 py-2 text-xs text-muted-foreground lg:flex">
          <div className="flex items-center gap-4">
            <a href="mailto:info@onedriverealty.com" className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> info@onedriverealty.com
            </a>
            <a href="tel:1-206-788-7190" className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" /> 1-206-788-7190
            </a>
          </div>
          <p className="text-right text-[0.65rem] uppercase tracking-[0.35em]">Bellevue HQ • Remote desk</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
