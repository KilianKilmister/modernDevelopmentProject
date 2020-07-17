export function edit (hook, vm) {
      hook.beforeEach(function(html) {
        var url =
          'https://github.com/ModernJavaScriptDevelopment/ModernJavaScriptDevelopment/tree/master/docs/' +
          vm.route.file;
        var editHtml = '[📝 EDIT DOCUMENT](' + url + ')\n';

        return (
          editHtml +
          html +
          '\n----\n' +
          'Last modified  {docsify-updated}  ' +
          editHtml
        );
      });
