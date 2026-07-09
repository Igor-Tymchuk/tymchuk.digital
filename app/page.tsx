import { AnimatedBackground } from "@/components/animated-background";
import { FloatingCta } from "@/components/floating-cta";
import { SectionDivider } from "@/components/section-divider";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <SiteHeader />
      <Hero />
      <Features />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      {/* <Reviews />
      <SectionDivider /> */}
      <Faq />
      <SectionDivider />
      <Contact />
      <SiteFooter />
      {/* <FloatingCta /> */}
    </main>
  );
}
