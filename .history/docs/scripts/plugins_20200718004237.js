export function edit (hook, vm) {
      hook.beforeEach(function(html) {
        var url =
          'https://github.com/ModernJavaScriptDevelopment/ModernJavaScriptDevelopment/tree/master/docs/' +
          vm.route.file;
        var editHtml = '[Edit on *GitHub*](' + url + ')\n';

        return (
          editHtml +
          html +
          '\n----\n' +
          'Last modified  {docsify-updated}  ' +
          editHtml
        );
      });
    }
export const darklightTheme: {
            siteFont : "PT Sans",
            defaultTheme : 'dark',
            codeFontFamily : 'Roboto Mono, Monaco, courier, monospace',
            bodyFontSize : '17px',
            dark: {
                accent: '#42b983',
                toogleBackground : '#ffffff',
                background: '#091a28',
                textColor: '#b4b4b4',
                codeTextColor : '#ffffff',
                codeBackgroudColor : '#0e2233',
                borderColor : '#0d2538',
                blockQuoteColour : '#858585',
                highlightColor : '#d22778',
                sidebarSublink : '#b4b4b4',
                codeTypeColor : '#ffffff',
                coverBackground : 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
                toogleImage : 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
            },
            light: {
                accent: '#42b983',
                toogleBackground : '#091a28',
                background: '#ffffff',
                textColor: '#34495e',
                codeTextColor : '#525252',
                codeBackgroudColor : '#f8f8f8',
                borderColor : 'rgba(0, 0, 0, 0.07)',
                blockQuoteColor : '#858585',
                highlightColor : '#d22778',
                sidebarSublink : '#b4b4b4',
                codeTypeColor : '#091a28',
                coverBackground : 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
                toogleImage : 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)'
            }
        }
