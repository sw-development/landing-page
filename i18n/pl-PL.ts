export default {
  components: {
    menu: {
      labels: {
        home: 'Home',
        aboutUs: 'About Us',
        services: 'Services',
        ourWork: 'Our Work',
        contactUs: 'Contact us',
      },
    },
    hero: {
      subTitle: 'our goal',
      title: 'Better products for your users',
      description:
        'We help our clients realize their most important business goals. It’s a team, working together with you.',
      button: 'Get in touch',
    },
    develop: {
      title: 'Develop powerful apps for your business',
      description:
        'We help our clients make realize their most Important business goals. Read what our team has published on the internet.Good newspaper Is a Nation talking to itself.',
      button: 'KNOW MORE',
    },
    design: {
      title: 'Design solutions to improve products',
      description:
        'We help our clients make realize their most Important business goals. Read what our team has published on the internet.Good newspaper Is a Nation talking to itself.',
    },
    services: {
      main: {
        subTitle: 'We help with',
        title: 'Building better solutions',
        button: 'Our Services',
      },
      cards: {},
    },
    contact: {
      title: "Let's start with your dream project",
      subtitle: 'Get in touch',
      description: 'We help our clients make realize their most',
    },
  },
  common: {
    buttons: {
      knowMore: 'KNOW MORE',
      submit: 'Submit',
    },
  },
  forms: {
    mainContactForm: {
      fields: {
        email: {
          label: 'Email',
          name: 'email',
          validationError: "Please provide email in correct format"
        },
        fullName: {
          label: 'Full name',
          name: 'fullName',
          validationError: 'Please provide a full name'
        },
        message: {
          label: 'Message',
          name: 'message',
          validationError: 'Please provide a message'
        },
      },
    },
    common: {
      fieldRequired: "This field is required"
    }
  },
};
