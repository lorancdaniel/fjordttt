import SecondaryHero from "@/components/sections/secondary-hero";
import * as Craft from "@/components/craft/layout";
import ContatctForm from "@/components/forms/contact-form";
import type { Metadata } from "next";
import fjord from "@/fjord.config";

export const metadata: Metadata = {
  title: `Skontaktuj się z nami | ${fjord.site_name}`,
  description: `Skontaktuj się z ${fjord.site_name} już dziś. ${fjord.site_description}`,
};

export default function Page() {
  return (
    <Craft.Main>
      <SecondaryHero
        title="Skontaktuj się z nami"
        subtitle="Wypełnij formularz, aby się z nami skontaktować"
      ></SecondaryHero>
      <Craft.Section>
        <Craft.Container>
          <ContatctForm />
        </Craft.Container>
      </Craft.Section>{" "}
    </Craft.Main>
  );
}
