import * as Craft from "@/components/craft/layout";
import {
  QuestionMarkCircledIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content: faqProps[] = [
  {
    question: "Jak wybieramy portale randkowe do naszych recenzji?",
    answer:
      "Wybieramy portale randkowe na podstawie ich popularności, funkcjonalności, opinii użytkowników oraz innowacyjności. Nasz zespół ekspertów regularnie przegląda rynek, aby zapewnić aktualne i rzetelne informacje o najlepszych dostępnych opcjach.",
    link: "#nasza-metodologia",
  },
  {
    question: "Czy Wasze recenzje są obiektywne?",
    answer:
      "Dążymy do maksymalnej obiektywności w naszych recenzjach. Każdy portal oceniamy według ściśle określonych kryteriów, uwzględniając zarówno pozytywne, jak i negatywne aspekty. Nasze opinie są niezależne i nie są sponsorowane przez żaden z opisywanych portali.",
  },
  {
    question: "Jak często aktualizujecie informacje o portalach randkowych?",
    answer:
      "Nasze recenzje i porównania są aktualizowane co najmniej raz na kwartał. Jednakże, w przypadku znaczących zmian w funkcjonalności portalu lub ważnych wydarzeń branżowych, aktualizujemy informacje na bieżąco.",
  },
  {
    question: "Czy mogę zasugerować portal randkowy do recenzji?",
    answer:
      "Oczywiście! Cenimy opinie naszych czytelników. Jeśli znasz portal randkowy, który Twoim zdaniem zasługuje na recenzję, możesz skontaktować się z nami przez formularz na naszej stronie. Rozważymy każdą sugestię.",
  },
];

const FAQ = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col not-prose gap-6">
          <h3 className="text-4xl">Często Zadawane Pytania</h3>
          <h4 className="text-2xl font-thin opacity-70">
            Dowiedz się więcej o naszym portalu i jak pomagamy w wyborze
            idealnej platformy randkowej!
          </h4>
          <div className="mt-6 md:mt-12 flex flex-col gap-6">
            {content.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}{" "}
                    {item.link && (
                      <a
                        href={item.link}
                        className="opacity-60 mt-2 hover:opacity-100 transition-all flex items-center"
                      >
                        Dowiedz się więcej{" "}
                        <ArrowTopRightIcon className="ml-1" />
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FAQ;
