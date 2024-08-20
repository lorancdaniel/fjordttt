import * as Craft from "@/components/craft/layout";
import Placeholder from "@/public/hero.webp";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { badgeVariants } from "../ui/badge";

const Hero = () => {
  return (
    <Craft.Section className="border-b m-0">
      <Craft.Container>
        <div className="not-prose flex flex-col gap-6 text-center">
          <h1 className="text-primary-500 text-4xl md:text-6xl">
            Bezpłatne portale randkowe w Polsce - znajdź miłość w sieci
          </h1>
          <p className="text-sm">
            Szukasz miłości w internecie, ale nie wiesz, od czego zacząć? Nasza
            strona portale-randkowe.com to kompletny przewodnik po świecie
            randek online. Porównujemy i prezentujemy najlepsze darmowe portale
            randkowe, pomagając Ci znaleźć idealnego partnera bez wydawania
            fortuny. Oszczędź czas i pieniądze, korzystając z naszych ekspertyz!
            Niezależnie od tego, czy jesteś singielką szukającą poważnego
            związku, czy singlem chcącym po prostu poznać nowych ludzi, mamy dla
            Ciebie odpowiednie rozwiązania.
          </p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Hero;
