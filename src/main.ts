import { edit, darklightTheme } from './plugins.js'
// @ts-ignore
import './docsify/docsify.js'
import { install } from './fixed/docsifyShare/index.js'
const exports = {}
namespace window {
  export declare var $docsify: any
}

declare const mermaid: any

var num = 0
mermaid.initialize({ startOnLoad: false })
window.$docsify = {
  [Symbol('sadwa')]: exports,
  share: {
    reddit: 'https://www.reddit.com/r/ModernJSDevelopment/'
    // linkedin: true,
    // facebook: true,
    // twitter: true,
    // whatsapp: true,
    // telegram: true,
  },
  darklightTheme,
  themeColor: '#0FF8ff',
  search: 'auto', // default,
  loadSidebar: true,
  subMaxLevel: 3,
  loadNavbar: true,
  onlyCover: true,
  coverpage: '/_coverpage.md',
  notFoundPage: true,
  formatUpdated: '{MM}/{DD} {HH}:{mm}',
  name: 'Modern JavaScript Development Project',
  repo: 'ModernJavaScriptDevelopment/ModernJavaScriptDevelopment',
  plugins: [
    edit, (a, b) => { console.log('instal!!!!!!!'); install(a, b) }
  ],
  markdown: {
    renderer: {
      code: function (code, lang) {
        if (lang === 'mermaid') {
          return (
            '<div class="mermaid">' + mermaid.render('mermaid-svg-' + num++, code) + '</div>'
          )
        }
        return this.origin.code.apply(this, arguments)
      }
    }
  }
}
if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('scripts/sw.js')
}
