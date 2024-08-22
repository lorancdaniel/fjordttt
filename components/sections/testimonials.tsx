// Layout
import * as Craft from "@/components/craft/layout";
import Logo from "@/public/logo.svg";
import fjord from "@/fjord.config";

type TestimonialsText = {
  logo: string;
  name: string;
  quote: string;
  title: string;
};

const testimonialsText: TestimonialsText[] = [
  {
    logo: Logo,
    name: "Anna Kowalska",
    title: "Użytkowniczka MatchMaker",
    quote:
      "Dzięki rankingom na tej stronie znalazłam idealny portal randkowy dla siebie. Poznałam wspaniałego mężczyznę i jesteśmy razem już od roku. Polecam wszystkim singlom!",
  },
  {
    logo: Logo,
    name: "Piotr Nowak",
    title: "Użytkownik LoveConnect",
    quote:
      "Porównanie różnych portali randkowych na tej stronie pomogło mi wybrać najlepszą opcję. Zaoszczędziłem czas i pieniądze, a co najważniejsze - znalazłem miłość swojego życia.",
  },
];

const Testimonials = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Historie sukcesu naszych czytelników</h3>
          <h4 className="text-2xl font-thin opacity-70">
            Zobacz, jak {fjord.site_name} pomaga singlom znaleźć miłość online
          </h4>

          <div className="grid md:grid-cols-2 mt-6 gap-6 md:mt-12">
            {testimonialsText.map(({ logo, name, quote, title }, index) => (
              <div className="grid gap-4" key={index}>
                <h5 className="text-lg font-thin">&quot;{quote}&quot;</h5>
                <div>
                  <h4 className="text-xl text-primary-500">{name}</h4>
                  <p className="font-light opacity-70">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Testimonials;
