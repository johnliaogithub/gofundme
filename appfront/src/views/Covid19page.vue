<template>
  <div class="covid19page">
    <div style="width: 90%;left: 5%;position: absolute;padding-top: 50px;">
      <div style="float: left;text-align: left;">
        <h1>How to Help Those<br /> Affected by COVID-19</h1>
        <p>On March 11, the World Health Organization declared the<br />outbreak of COVID-19 a global pandemic, reaching more than<br />118 countries and affecting hundreds of thousands of people. </p>
        <p>In response, communities across the globe are coming together<br />by fundraising for coronavirus affected regions to provide urgent<br />aid and support. Each of us can do our part against the ongoing<br />health emergency caused by the Covid-19 virus.</p>
        <a href="/fund/donation-for-john"><button class="donatebutton" style="background-color: green;border-radius: 5px;font-size: 18px;padding: 3% 7% 3% 7%;margin-top: 5%;">Donate now</button></a>
      </div>
      <div style="float: right;width: 60%;">
        <img style="width: 100%;" src="https://d25oniaj7o2jcw.cloudfront.net/outbreak-coronavirus-world.png"/>
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
</style>
