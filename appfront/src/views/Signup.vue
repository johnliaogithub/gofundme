<template>
  <div class="signup">
    <div id="my-signin2" class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js?onload=onLoadCallback"></script>
<script>
export default {
  name: 'signup',
  mounted: function() {
    gapi.signin2.render('my-signin2', {
      'theme':'dark',
      'onsuccess': this.Success,
      'onfailure': this.Fail
    })
  },
  methods: {
    Success: function(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
    Fail: function(error) {
      console.log(error);
    }
  }
}
</script>
