'use strict';

var $ = window.$;
function onLogin(response) {
  if ('connected' === response.status) {
    FB.ui({
      method  : 'apprequests',
      message : 'A request especially for one person.', 
      to: '1234', 
      max_recipients:1,
      data: 'tracking information for the user'
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
    }, {scope: 'user_friends, email, publish_actions'});
  }
});
