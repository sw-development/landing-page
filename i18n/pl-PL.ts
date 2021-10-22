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
      button: 'Kontakt',
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
        subTitle: 'Pomagamy z',
        title: 'Budowanie lepszych rozwiązań',
        button: 'Nasze Usługi',
      },
      cards: {},
    },
    subscribe: {
      title: 'Subskrybuj firmowy newsletter',
      description: 'Newsletter',
    },
    contact: {
      title: 'Zacznijmy od Twojego wymarzonego projektu',
      subtitle: 'Kontakt',
      description: 'We help our clients make realize their most',
    },
    business: {
      mainCard: {
        title: 'Pomoc w rozwoju Twojej firmy',
        subtitle: 'Agencja cyfrowa',
      },
      goalCard: {
        title: 'Nasz cel',
        description:
          'We help our clients realize their most important business goals.',
      },
      visionCard: {
        title: 'Nasza wizja',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat volutpat arcu, sed imperdiet leo.',
      },
    },
  },
  common: {
    buttons: {
      knowMore: 'Więcej',
      submit: 'Wyślij',
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
};
