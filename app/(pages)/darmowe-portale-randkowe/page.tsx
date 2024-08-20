import type { Metadata } from "next";
import fjord from "@/fjord.config";
import { useState, useEffect } from "react";
import SecondaryHero from "@/components/sections/secondary-hero";
import * as Craft from "@/components/craft/layout";
import LoanCard from "@/components/ui/loancard";

export const metadata: Metadata = {
  title: `Ranking serwisów randkowych | ${fjord.site_name}`,
  description: `Porównaj najlepsze serwisy randkowe. ${fjord.site_description}`,
};

export default function Page() {
  return (
    <Craft.Main>
      <SecondaryHero
        title="Ranking serwisów randkowych"
        subtitle="Porównaj najlepsze serwisy randkowe"
      >
        Sprawdź nasz ranking serwisów randkowych i wybierz najlepszą opcję dla
        siebie.
      </SecondaryHero>
      <Craft.Section>
        <Craft.Container>
          <LoanCard key={1} productId={1} overrideRanking={1} />
          <LoanCard key={2} productId={2} overrideRanking={2} />
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
