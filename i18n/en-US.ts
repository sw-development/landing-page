export default {
  components: {
    menu: {
      labels: {
        home: 'Home',
        aboutUs: 'About Us',
        services: 'Services',
        ourGoal: 'Our Goal',
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
      title: 'Get solutions for your problems',
      description:
        'Are you facing issues with planning your business? Let our specialists solve your problems and be successful together.',
      button: 'KNOW MORE',
    },
    design: {
      title: 'Design solutions to improve products',
      description:
        'We deliver easy to use and user friendly products for your customers. Develop powerful apps for your business with our knowledge and experience.',
    },
    services: {
      main: {
        subTitle: 'We help with',
        title: 'Building better solutions',
        button: 'Our Services',
      },
      cards: {},
    },
    subscribe: {
      title: 'Subscribe Company newsletter',
      description: 'Newsletter',
    },
    contact: {
      title: "Let's start with your dream project",
      subtitle: 'Get in touch',
      description: 'Do you have any questions? Contact us!',
    },
    business: {
      mainCard: {
        title: 'Helping your business grow',
        subtitle: 'Digital agency',
      },
      goalCard: {
        title: 'Our Goal',
        description:
          'We help our clients realize their most important business goals.',
      },
      visionCard: {
        title: 'Our Vision',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat volutpat arcu, sed imperdiet leo.',
      },
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
          validationError: 'Please provide email in correct format',
        },
        fullName: {
          label: 'Full name',
          name: 'fullName',
          validationError: 'Please provide a full name',
        },
        message: {
          label: 'Message',
          name: 'message',
          validationError: 'Please provide a message',
        },
      },
      subscribeForm: {
        fields: {
          name: {
            label: 'Your name',
            name: 'name',
            validationError: 'Please provide your name',
          },
          email: {
            label: 'Email',
            name: 'email',
            validationError: 'Please provide email in correct format',
          },
        },
      },
    },
    common: {
      fieldRequired: 'This field is required',
    },
  },
};
