'use strict';

window.fbAsyncInit = function() {
    FB.init({
      appId: '888195151232497',
      xfbml: true,
      version: 'v2.2'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE
  };

(function(d, s, id){
  var js;
  var fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Place following code after FB.init call.

function onLogin(response) {
  if ('connected' === response.status) {
    FB.api('/me?fields=first_name', function(data) {
      var welcomeBlock = document.getElementById('fb-welcome');
      welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
    });
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
    }, {scope: 'user_friends, email'});
  }
});