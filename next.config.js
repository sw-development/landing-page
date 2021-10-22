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
      emailTemplateId: 'template_uel1aqp',
      emailServiceId: 'service_2bbpdwl',
      emailUserId: 'user_2m5hBmdNWFtGobfUqpRU7',
      siteKey: '6Lf3teUcAAAAAIZc10fWV-Y5Dyb9xyfrSZq-57gH'
    }
  }