module.exports = {
  title: 'Heisann',
  description: 'Dette er brukerveiledningen for Heisann.no',
  themeConfig: {
  	docsDir: 'docs',
    nav: [
      { text: 'Hjem', link: '/' },
      { text: 'Blogg', link: '/blog/'},
      { text: 'Heisann.no', link: 'https://heisann.no' },
    ],
    sidebar: { 
     '/guide/': [
     {
        title: 'Brukerveiledning',
        collapsable: false,
        children: [
        '',
        'settings',
        'uploadform',
        'FAQ'
        ]
      }],
      '/blog/': [
     {
        title: 'Blogg',
        collapsable: false,
        children: [
        '',
        'samtykke',
        'epost'
        ]
      }]
    }
  
  
  }
}
