import type { Metadata } from "next";
import fjord from "@/fjord.config";
import DatingSitesPage from "@/components/ui/datingsitespage";

export const metadata: Metadata = {
  title: `Ranking serwisów randkowych | ${fjord.site_name}`,
  description: `Porównaj najlepsze serwisy randkowe. ${fjord.site_description}`,
};

export default function Page() {
  return <DatingSitesPage />;
}
