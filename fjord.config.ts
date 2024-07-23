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
      categories: "/posts/kategorie", // default is `/posts/categories`
      tags: "/posts/tagi", // default is `/posts/tags`
      pages: "/all", // default is `/all`
    },
    legal: {
      privacy_policy: "/polityka-prywatnosci", // default is `/privacy-policy`
      privacy_policy_text: "Polityka Prywatności", // default is `Privacy Policy`
      terms_of_service: "/regulamin", // default is `/terms-of-service`
      terms_of_service_text: "Regulamin", // default is `Terms of Service`
    },
    cta: "https://github.com/9d8dev/fjord", // Link to CTA
  },

  nav_menu: {
    title: "Pages",
    items: [
      {
        title: "About",
        href: "/about",
        description:
          "Learn more about Fjord and how to use it for your next project.",
      },
      {
        title: "Contact",
        href: "/contact",
        description:
          "Get in touch with us if you have any questions or feedback. We would love to hear from you.",
      },
      {
        title: "All Pages",
        href: "/all",
        description: "A list of all the pages on this site.",
      },
      {
        title: "Authors",
        href: "/posts/authors",
        description: "A list of all the authors on this site.",
      },
    ],
  },

  directory_menu: {
    title: "Learn Fjord",
    items: [
      {
        title: "Documentation",
        href: "https://github.com/9d8dev/fjord",
        description:
          "Styles for headings, paragraphs, lists, and other inline elements.",
      },
      {
        title: "Layout Components",
        href: "https://github.com/9d8dev/fjord",
        description:
          "Components that help you lay out your content, like Main, Craft.Section, and Craft.Container.",
      },
      {
        title: "Navigation",
        href: "https://github.com/9d8dev/craft/wiki/components#nav-component",
        description:
          "A Navigation component that helps you build accessible navigation menus.",
      },
    ],
  },
};

export default fjord;
