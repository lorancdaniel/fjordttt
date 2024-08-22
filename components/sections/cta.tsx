import * as Craft from "@/components/craft/layout";
import { CTAForm } from "./cta-form";

const CTA = () => {
  return (
    <Craft.Section className="border-t">
      <Craft.Container>
        <h3 className="!mt-0">Zapisz się do naszego newslettera!</h3>
        <p>
          Bądź na bieżąco z najnowszymi trendami w świecie randek online.
          Otrzymuj ekskluzywne recenzje, porównania i porady prosto na swoją
          skrzynkę mailową.
        </p>
        <CTAForm />
      </Craft.Container>
    </Craft.Section>
  );
};

export default CTA;
