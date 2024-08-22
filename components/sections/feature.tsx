// Layout
import * as Craft from "@/components/craft/layout";

// Icons
import { HeartIcon } from "@radix-ui/react-icons";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Inteligentne dopasowania",
    description:
      "Nasze zaawansowane algorytmy analizują profile użytkowników, aby znaleźć najbardziej kompatybilne pary. Zwiększ swoje szanse na znalezienie idealnego partnera.",
  },
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Bezpieczeństwo i prywatność",
    description:
      "Dbamy o Twoją prywatność. Wszystkie portale randkowe w naszym rankingu są weryfikowane pod kątem bezpieczeństwa danych i ochrony użytkowników.",
  },
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Różnorodność opcji",
    description:
      "Od szybkich randek online po długoterminowe związki - prezentujemy portale randkowe dla każdego typu relacji i preferencji.",
  },
];

const Feature = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            Czy znalezienie miłości online może być tak proste jak 1, 2, 3?
          </h3>
          <h4 className="text-2xl font-thin opacity-70">
            Nasz ranking portali randkowych został stworzony, aby ułatwić Ci
            znalezienie idealnego miejsca do poznania drugiej połówki.
          </h4>

          <div className="grid md:grid-cols-3 mt-6 gap-6 md:mt-12">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="grid gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary-500">{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature;
