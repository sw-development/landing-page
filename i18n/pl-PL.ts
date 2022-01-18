export default {
  components: {
    menu: {
      labels: {
        home: 'Strona główna',
        aboutUs: 'O nas',
        services: 'Usługi',
        ourGoal: 'Nasz cel',
        contactUs: 'Kontakt',
      },
    },
    hero: {
      subTitle: 'nasz cel',
      title: 'Lepsze produkty dla Twoich użytkowników',
      description:
        'Pomagamy naszym klientom realizować najważniejsze cele biznesowe. To zespół, który będzie pracować razem z Tobą.',
      button: 'Usługi',
    },
    develop: {
      title: 'Uzyskaj rozwiązania swoich problemów',
      description:
        'Masz problemy z planowaniem swojego biznesu? Pozwól naszym specjalistom rozwiązać Twoje problemy i wspólnie odnieść sukces.',
      button: 'Więcej',
    },
    design: {
      title: 'Projektuj rozwiązania w celu ulepszania produktów',
      description:
        'Dostarczamy Twoim klientom łatwe w użyciu i przyjazne dla użytkownika produkty. Twórz zaawansowane aplikacje dla swojej firmy dzięki naszej wiedzy i doświadczeniu.',
    },
    services: {
      main: {
        subTitle: 'Usługi',
        title: 'Budowanie lepszych rozwiązań',
        button: 'Porozmawiajmy',
      },
      cards: {
        webApp:
          'Tworzenie aplikacji internetowych w oparciu o najnowsze trendy graficzne oraz najbardziej wydajne technologie dostępne na rynku.',
        design:
          'Projektowanie stron internetowych i aplikacji od strony graficznej, aby korzystanie z nich było intuicyjne i przyjemne.',
        maintenance:
          'Utrzymywanie aplikacji to stałe aktualizowanie, monitorowanie oraz modyfikowanie oprogramowania w celu poprawy błędów oraz wydajności.',
        seo: 'Pozycjonowanie stron internetowych to szereg działań pozwalających umieścić stronę internetową wyżej w wynikach wyszukiwania.',
      },
      cards_titles: {
        webApp: 'Aplikacje Internetowe',
        design: 'Projekty Graficzne',
        maintenance: 'Wsparcie',
        seo: 'Seo',
      },
    },
    subscribe: {
      title: 'Subskrybuj firmowy newsletter',
      description: 'Newsletter',
    },
    contact: {
      title: 'Zacznijmy od Twojego wymarzonego projektu',
      subtitle: 'Kontakt',
      description: 'Masz pytania? Napisz do nas!',
    },
    business: {
      mainCard: {
        title: 'Pomoc w rozwoju Twojej firmy',
        subtitle: 'Agencja cyfrowa',
      },
      goalCard: {
        title: 'Nasz cel',
        description:
          'Pomagamy naszym klientom realizować najważniejsze cele biznesowe. To zespół, który będzie pracował razem z Tobą.',
      },
      visionCard: {
        title: 'Nasza wizja',
        description:
          'Naszą wizją jest tworzenie produktów dopasowanych idealnie do Twoich potrzeb oraz wymagań. Spełnijmy ją razem.',
      },
    },
    blog: {
      description: "Blog",
      title: "Sprawdź co piszą nasi eksperci!"
    }
  },
  common: {
    buttons: {
      knowMore: 'Sprawdź więcej',
      readMore: 'Czytaj więcej',
      submit: 'Wyślij',
      subscribe: 'Subskrybuj',
    },
  },
  forms: {
    mainContactForm: {
      fields: {
        email: {
          label: 'E-mail',
          name: 'email',
          validationError: 'Podaj e-mail w prawidłowym formacie',
        },
        fullName: {
          label: 'Imię i nazwisko',
          name: 'fullName',
          validationError: 'Podaj imię i nazwisko',
        },
        message: {
          label: 'Wiadomość',
          name: 'message',
          validationError: 'Podaj wiadomość',
        },
      },
      subscribeForm: {
        fields: {
          name: {
            label: 'Twoje imię',
            name: 'name',
            validationError: 'Podaj swoje imię',
          },
          email: {
            label: 'Email',
            name: 'email',
            validationError: 'Podaj email w prawidłowym formacie',
          },
        },
      },
    },
    common: {
      fieldRequired: 'To pole jest wymagane',
    },
  },
  siteTitle: 'SW Devs',
  siteDescription:
    'SW Development to firma zajmująca się tworzeniem stron internetowych, blogów, projektów graficznych, sklepów internetowych oraz wszelkiego rodzaju oprogramowania. Jeżeli zaistnieje taka potrzeba to zajmiejmy się pozycjonowaniem Twojej strony oraz jej utrzymaniem.',
  socialMediaTitle: 'Tworzenie stron i aplikacji internetowych | SWD',
  socialMediaDescription:
    'Jesteśmy firmą zajmująca się tworzeniem stron internetowych, blogów, projektów graficznych, sklepów internetowych oraz wszelkiego rodzaju oprogramowania. Jeżeli zaistnieje taka potrzeba to zajmiejmy się pozycjonowaniem Twojej strony oraz jej utrzymaniem.',
  facebookImage: '/assets/fb.jpg',
  twitterImage: '/assets/twitter.jpg',
};
