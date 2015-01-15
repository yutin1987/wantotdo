'use strict';

var $ = window.$;

function onLogin(response) {
  if ('connected' === response.status) {
    $(".friendDialog").fSelector({
      onSubmit: function(response){
        // example response usage
        alert(response);
      }
    });
    // FB.api('/me?fields=first_name', function(data) {
    //   var welcomeBlock = document.getElementById('fb-welcome');
    //   welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
    // });
  }
}