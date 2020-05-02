<template>
  <div class="signup">
    <div id="nav">
      <h1 style="float: left;margin: 20px;">GoFundMe</h1>
      <span style="float: right;margin: 20px;">
        <p v-if="page == 'su'">Already have an account? <a @click="page = 'si'" >Sign in</a></p> 
        <p v-if="page == 'si'">Don't have an account? <a @click="page = 'su'" >Sign up</a></p> 
      </span>
    </div>
    <div id="content" style="margin-top: 100px;">
      <div v-if="page == 'su'">
        <div class="signbox">
          <h1 style="margin: 5%;">Sign up</h1>
          <hr />
          <div class="sign">
            <ShortInput style="float: left" placeholder="First Name" />
            <ShortInput placeholder="Last Name"/>
            <LongInput style="margin-top: 50px;float: left;" placeholder="Email Address"/>
            <LongInput style="margin-top: 100px;float: left;" placeholder="Confirm Email Address"/>
            <LongInput style="margin-top: 150px;float: left;" placeholder="Password"/>
            <span><input id="learn" style="margin-top: 220px;float: left;" type="checkbox" v-model="learn"><label for="learn">Receive coaching tips from GoFundMe about your fundraiser. Change your preferences anytime.</label></span>
            <button style="border-radius: 5px;height: 45px;width: 105px;margin-top: 5%;background-color: #00B964;" >Next</button>
          </div>
          <hr />
          <p style="padding: 5px;text-align: center;">By continuing, you agree to the GoFundMe <a>terms</a> and acknowledge receipt of our <a>privacy policy</a></p>
        </div>
      </div>
      <div v-if="page == 'si'">
        <div class="signbox">
          <h1 style="margin: 5%;">Sign in</h1>
          <hr />
          <div class="signt">
            <button style="background-color: #3B579D;color: white;padding: 10px 16px 10px 16px;font-size: 16px;margin-bottom: 30px;"><strong id="facebookbutton">Continue with facebook</strong></button>
            <div style="margin-left: 10%;position:absolute;width: 14%;z-index: 10;background-color: white;text-align: center;"><strong>or</strong></div>
            <hr style="margin-top: 6.5px;margin-bottom: 30px;"/>
            <ShortInput style="float: left;" placeholder="Email Address"/><br />
            <ShortInput style="float: left;margin-top: 40px;" placeholder="Password"/><br />
            <ShortInput style="float: left;margin-top: 100px;" type="submit" value="Sign in to GoFundMe" sty="padding: 5%;width: 160%;background-color: white;border: 2px blue solid;color: blue;border-radius: 5px;"/>
            <a style="margin-left: 8%;float: left;margin-top: 30px;text-align: center;">Forgot your password?</a>
          </div>
          <hr />
          <br>
          <a>Looking for GoFundMe Charity? Click here to sign in</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LongInput from '../components/LongInput.vue'
import ShortInput from '../components/ShortInput.vue'
export default {
  name: 'signup',
  created() {
    this.$parent.nav = false
  },
  data() {
    return {
      page: 'su',
      learn: false
    }  
  },
  components: {
    LongInput,
    ShortInput
  }
}
</script>
<style>
.signbox {
  width: 50%;
  height: 78%;
  position: absolute;
  left: 25%;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 8px 8px 8px #888888;
}
#nav {
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 10;
  margin: 0px;
  padding: 0px;
}
.sign {
  padding: 5% 14% 5% 14%;
}
.signt {
  padding: 5% 31.5% 5% 33.5%;
  height:auto;
  overflow: hidden;
}
.signup a {
  text-decoration: none;
  color: blue;
}
label {
  display: inline-block;
}
#facebookbutton::before {
  background-image: url('https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg');
  background-size: 18px 18px;
  display: inline-block;
  width: 18px;
  height: 18px;
  content: "";
}
</style>
