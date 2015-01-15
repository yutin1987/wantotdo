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

FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
  // already logged in, go directly to the welcome message.
  if ('connected' === response.status) {
    onLogin(response);
  } else {
    // Otherwise, show Login dialog first.
    FB.login(function(response) {
      onLogin(response);
    }, {scope: 'user_friends, user_groups, publish_actions'});
  }
});
