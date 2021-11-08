const path = require('path')

module.exports = {
    i18n: {
      locales: ['en-US', 'pl'],
      defaultLocale: 'pl'
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
    env: {
      EMAIL_TEMPLATE_ID: 'template_uel1aqp',
      EMAIL_SERVICE_ID: 'service_2bbpdwl',
      EMAIL_USER_ID: 'user_2m5hBmdNWFtGobfUqpRU7',
      SITE_KEY: '6Lf3teUcAAAAAIZc10fWV-Y5Dyb9xyfrSZq-57gH'
    }
  }