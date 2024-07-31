const fjord: FjordProps = {
  site_name: "Portale randkowe", // site name: used in the header and footer
  site_domain: "https://portale-randkowe.com", // site domain: used in the sitemap
  site_title: "Portale-randkowe | Twój przewodnik po świecie randek online",
  site_description:
    "Portale-randkowe.com to najlepsze miejsce, aby rozpocząć swoją przygodę z randkami online. Znajdź swoją drugą połówkę już dziś!",
  keywords: [
    "randki online",
    "portal randkowy",
    "miłość",
    "związek",
    "portale randkowe",
  ],
  authors: [{ name: "Amorek", url: "https://portale-randkowe.com/o-nas" }],
  posts_per_page: 9,
  wordpress_url: " https://h22.seohost.pl/~srv40338/headlesswp/",
  google_analytics_id: "G-7VM8KZENP7",

  logo: "../logo.svg",

  // change the font using `next/font` in `layout.tsx` in the app directory.
  // check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts

  menu: {
    main: {
      home: "/", // Don't Change
      blog: "/posty", // default is `/posts`
      about: "/o-nas", // you can remove this if you don't want an about page
      contact: "/kontakt", // you can remove this if you don't want a contact page
    },
    content: {
      authors: "/posty/autorzy", // default is `/posts/authors`
      categories: "/posty/kategorie", // default is `/posts/categories`
      tags: "/posty/tagi", // default is `/posts/tags`
      pages: "/all", // default is `/all`
    },
    legal: {
      privacy_policy: "/polityka-prywatnosci", // default is `/privacy-policy`
      privacy_policy_text: "Polityka Prywatności", // default is `Privacy Policy`
      terms_of_service: "/regulamin", // default is `/terms-of-service`
      terms_of_service_text: "Regulamin", // default is `Terms of Service`
    },
    cta: "https://github.com/lorancdan", // Link to CTA
  },

  nav_menu: {
    title: "Strony",
    items: [
      {
        title: "O nas",
        href: "/o-nas",
        description:
          "Poznaj naszą historię, misję i zespół. Dowiedz się, jak możemy Ci pomóc w znalezieniu miłości.",
      },
      {
        title: "Kontakt",
        href: "/kontakt",
        description:
          "Masz pytania lub sugestie? Skontaktuj się z nami! Chętnie pomożemy i odpowiemy na Twoje wiadomości.",
      },
      {
        title: "Wszystkie strony",
        href: "/wszystkie-strony",
        description:
          "Przeglądaj wszystkie strony naszego portalu i znajdź dokładnie to, czego szukasz.",
      },
      {
        title: "Autorzy",
        href: "/posty/autorzy",
        description:
          "Poznaj naszych ekspertów ds. randek i związków. Czytaj artykuły i poradniki, które pomogą Ci znaleźć miłość.",
      },
    ],
  },

  directory_menu: {
    title: "Zacznij tutaj",
    items: [
      {
        title: "Darmowe portale randkowe",
        href: "/darmowe-portale-randkowe",
        description:
          "Znajdź miłość bez wydawania ani grosza! Odkryj najlepsze darmowe portale randkowe i poznaj tysiące singli online.",
      },
      {
        title: "Ranking portali randkowych",
        href: "/ranking-portali-randkowych",
        description:
          "Nie wiesz, który portal wybrać? Sprawdź nasz ranking najlepszych portali randkowych i znajdź idealne miejsce dla siebie.",
      },
      {
        title: "Portale randkowe dla dorosłych",
        href: "/portale-randkowe-dla-doroslych",
        description:
          "Szukasz dojrzałych randek i poważnych związków? Poznaj najlepsze portale randkowe dla dorosłych i ciesz się intymnością.",
      },
      {
        title: "Ranking darmowych serwisów randkowych",
        href: "/ranking-darmowych-serwisow-randkowych",
        description:
          "Które darmowe serwisy randkowe są warte uwagi? Sprawdź nasz ranking i znajdź miłość bez płacenia abonamentu.",
      },
      {
        title: "Serwisy randkowe - opinie",
        href: "/serwisy-randkowe-opinie",
        description:
          "Zanim się zarejestrujesz, sprawdź opinie innych użytkowników! Poznaj wady i zalety popularnych serwisów randkowych.",
      },
    ],
  },
};

export default fjord;
