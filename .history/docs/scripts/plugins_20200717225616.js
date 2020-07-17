 export function edit (hook, vm) {
      hook.beforeEach(function(html) {
        var url =
          'https://github.com/docsifyjs/docsify/blob/master/docs/' +
          vm.route.file;
        var editHtml = '[📝 EDIT DOCUMENT](' + url + ')\n';

        return (
          editHtml +
          html +
          '\n----\n' +
          'Last modified 07/14 09:04 ' +
          editHtml
        );
      });
