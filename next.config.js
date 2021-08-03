const path = require('path')

module.exports = {
    i18n: {
      locales: ['en-US', 'pl-PL'],
      defaultLocale: 'pl-PL'
    },
    // domains: [
    //   {
    //     domain: 'test.pl',
    //     defaultLocale: 'pl-PL'
    //   },
    //   {
    //     domain: 'test.en',
    //     defaultLocale: 'en-US'
    //   }
    // ],
    sassOptions: {
      includePaths: [path.join(__dirname, 'src', 'styles')],
      prependData: `@import "@/../../styles/main.scss";`
    },
  }