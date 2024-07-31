"use client";

import { useState, useEffect } from "react";
import SecondaryHero from "@/components/sections/secondary-hero";
import * as Craft from "@/components/craft/layout";
import LoanCard from "@/components/ui/loancard";

interface DatingSite {
  id: number;
  name: string;
  logo: string;
  description: string;
  userRating: number;
  ourRating: number;
  link: string;
  ranking: number;
  portalDescription: string;
  texts: {
    expandButton: string;
    collapseButton: string;
    userRatingLabel: string;
    ourRatingLabel: string;
    goToPortalButton: string;
    portalDescriptionTitle: string;
    goToPortalButtonExpanded: string;
  };
}

interface DatingSitesPageProps {
  selectedSites?: number[];
}

export default function DatingSitesPage({
  selectedSites,
}: DatingSitesPageProps) {
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
          <LoanCard key={1} productId={1} />
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
