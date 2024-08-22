import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import SecondaryHero from "@/components/sections/secondary-hero";
import * as Craft from "@/components/craft/layout";
import type { Metadata } from "next";
import fjord from "@/fjord.config";

export const metadata: Metadata = {
  title: `O nas | ${fjord.site_name}`,
  description: `Dowiedz się więcej o ${fjord.site_name}. ${fjord.site_description}`,
};

export default function Page() {
  return (
    <Craft.Main>
      <SecondaryHero
        title="O nas"
        subtitle="Poznaj bliżej Portale-randkowe.com"
      >
        Witaj na stronie o nas. Tutaj możesz dowiedzieć się więcej o naszym
        portalu randkowym i naszej misji łączenia ludzi.
      </SecondaryHero>
      <About />
      <FAQ />
      <CTA />
    </Craft.Main>
  );
}
