module.exports = {
  title: 'Heisann',
  description: 'Dette er brukerveiledningen for Heisann.no',
  themeConfig: {
  	docsDir: 'docs',
    nav: [
      { text: 'Hjem', link: '/' },
      { text: 'Heisann.no', link: 'https://heisann.no' },
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Brukerveiledning')
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'settings',
        'uploadform',
        'FAQ',
         ]
    }
  ]
}