import * as Craft from "@/components/craft/layout";
import Image from "next/image";
import Placeholder from "@/public/placeholder-2.jpg";

const About = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
        <div className="not-prose flex flex-col gap-6">
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:rounded-xl md:h-[480px]">
            <Image
              className="h-full w-full object-cover object-center"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="Zdjęcie szczęśliwej pary"
              placeholder="blur"
            />
          </div>
          <h3 className="text-3xl">
            Portale-randkowe.com - Twoja droga do miłości
          </h3>
          <h4 className="text-xl opacity-70">
            Odkryj nowe możliwości randkowania online z naszym innowacyjnym
            portalem
          </h4>
          <p className="font-light opacity-70 md:w-3/5 mt-6 md:mt-12">
            Portale-randkowe.com to miejsce, gdzie marzenia o prawdziwej miłości
            stają się rzeczywistością. Nasza platforma łączy ludzi o podobnych
            zainteresowaniach i wartościach, umożliwiając im nawiązanie
            głębokich i trwałych relacji. Dzięki zaawansowanym algorytmom
            dopasowań i przyjaznej dla użytkownika funkcjonalności, sprawiamy,
            że znalezienie idealnego partnera jest łatwiejsze niż kiedykolwiek.
            Dołącz do nas już dziś i rozpocznij swoją podróż ku szczęściu!
          </p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default About;
