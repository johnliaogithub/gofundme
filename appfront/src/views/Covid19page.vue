<template>
  <div class="covid19page">
    <div style="width: 90%;left: 5%;position: absolute;padding-top: 50px;">
      <div style="float: left;text-align: left;">
        <h1>How to Help Those<br /> Affected by COVID-19</h1>
        <p>On March 11, the World Health Organization declared the<br />outbreak of COVID-19 a global pandemic, reaching more than<br />118 countries and affecting hundreds of thousands of people. </p>
        <p>In response, communities across the globe are coming together<br />by fundraising for coronavirus affected regions to provide urgent<br />aid and support. Each of us can do our part against the ongoing<br />health emergency caused by the Covid-19 virus.</p>
        <a href="/fund/1"><button class="donatebutton" style="background-color: green;border-radius: 5px;font-size: 18px;padding: 3% 7% 3% 7%;margin-top: 5%;">Donate now</button></a>
      </div>
      <div style="float: right;width: 60%;">
        <img style="width: 100%;" src="https://d25oniaj7o2jcw.cloudfront.net/outbreak-coronavirus-world.png"/>
      </div>
    </div>
    <div style="background-color: #fbf8f6;width: 100%;left: 0px;position: absolute;margin-top: 35%;">
      <h2 style="margin-top: 50px;margin-bottom: 40px;">Here's how you can help</h2>
      <div style="padding: 0px 17% 0px 17%;">
        <div style="float: left;margin-right: 10%;">
          <div class="circle">1</div>
          <div class="howtohelp"><h3>Donate to coronavirus<br />fundraisers</h3></div>
        </div>
        <div style="float: left;margin-right: 10%;">
          <div class="circle">2</div>
          <div class="howtohelp"><h3>Share with your social<br />networks</h3></div>
        </div>
        <div style="float: left;">
          <div class="circle">3</div>
          <div class="howtohelp"><h3>Start a fundraiser to<br />support someone in need</h3></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'covid19page',
  created() {
    this.$parent.transnav = false
  },
}
</script>
<style>
.donatebutton:hover {
  background-color: darkgreen;
}
.circle {
  border-radius: 50%;
  font-size: 20px;
  color: green;
  border: 1px green solid;
  padding-top: 10px;
  width: 35px;
  height: 28px;
}
.howtohelp {
  text-align: left;
  color: green;
  font-size: 20px;
}
</style>
