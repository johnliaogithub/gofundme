<template>
  <div class="home">
    <div id="carousel" style="height: 100%;width: 100%;left: 0px;position: absolute;overflow: hidden;">
      <img id="img1" style="left: 0px;width: 100%;display: none;float: left;position: absolute;" src="https://picsum.photos/1024/480/?image=52">
      <img id="img2" style="left: 0px;width: 100%;display: none;float: left;position: absolute;" src="https://picsum.photos/1024/480/?image=58">
      <img id="img3" style="left: 0px;width: 100%;display: none;float: left;position: absolute;" src="https://picsum.photos/1024/480/?image=52">
      <img id="img4" style="left: 0px;width: 100%;display: none;float: left;position: absolute;" src="https://picsum.photos/1024/480/?image=58">
    </div>
    <div style="z-index: 30;position: absolute;margin-left: 4%;margin-top: 12%;color: white;">
      <h1 style="float: left;text-align: left;">Free fundraising for the people<br />and causes you care about</h1><br />
      <span style="float: left;">
        starting is easy.0% platform fee*.<br /> 
        <a href="/sign-up"><button style="width: 50%;height: 50%;font-size: 18px;margin-top: 9%;left: 0px;position: absolute;background-color: #00B964;color: white;border-radius: 5px;">Start a GoFundMe</button></a>
      </span>
    </div>
    <div style="overflow: hidden;margin-top: 38%;z-index: 30;position: absolute;margin-left: 4%;width: 92%;height: 220px;background-color: white;box-shadow: 0px 5px 5px;border-radius: 5px;">
      <img style="left: -5%;position: absolute;width: 35%;height: 100%;float: left;" src='https://d25oniaj7o2jcw.cloudfront.net/outbreak-coronavirus-world.png' /> 
      <a href="/Covid19page"><button style="border: 3px green solid;background-color: white;float: right;color: green;border-radius: 5px;font-size: 17px;padding: 1% 4% 1% 4%;margin-right: 8%;margin-top: 8%;">Donate now</button></a>
      <span style="float: left;margin-left: 31%;text-align: left;">
        <h4 style="margin: 10% 0px 0px 0px;">URGENT CAUSE</h4><br />
        <h3 style="margin: 0px;">How to Help Those Affected by COVID-19</h3><br />
        <p >Communities across the globe are coming together  by<br />fundraising for coronavirus affected regions to provide urgent<br />aid and support</p>
      </span>
    </div >
    <div style="position: absolute;margin-top: 60%;width: 100%;background-color: white;">
      <div style="margin-left: 15%;width: 70%;">
        <h1 style="float: left;margin-bottom: 9%;">Top fundraisers</h1><br />
        <div style="position: absolute;width: 70%;">
          <div style="margin-right: 5%;border-radius: 5px;overflow: hidden;margin-top: 5%;float: left;width: 28.3%;text-align: left;height: 380px;box-shadow: 0px 0px 4px lightgrey;" v-for="object in topfundraisers" :key="object.id">
            <img :src="object.picture" style="width: 100%;height: 40%;"/>
            <div style="padding: 5px;">
              <a style="font-size: 18px;color: green;margin: 0px;">{{ object.location }}</a><br />
              <p style="font-size: 18px;margin: 0px;">{{ object.name }}</p><br />
              <p style="margin: -6px 0px 0px 0px;font-size: 16px;" v-html="object.description.substring(0,50) + '...'"></p><br />
              <div style="bottom: 5%;position: absolute;">
                <div style="height: 5px;bottom: 18%;width: 100%;position: relative;left: 0%;border-radius: 20px;background-color: lightgreen;">
                  <div :id="'percentbar' + object.id" style="border-radius: 2px;left: 0px;position: absolute;background-color: green;height: 100%;top: 0px;"></div>
                </div>
                <p ><strong>{{ money(object.id) }} raised</strong> of {{ object.goal }}</p>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 55%;float: right;margin-right: 15%;">
          <a style="float: right;position: absolute;">See more <strong>&gt;</strong></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  created() {
    this.$parent.transnav = true
    var i = 1;
    window.setInterval(function() {
      if (i == 4) {
        i = 1
        document.getElementById('img1').style.display = 'inline';
        document.getElementById('img4').style.display = 'none';
      } else if (i == 1) {
        i = 2
        document.getElementById('img2').style.display = 'inline';
        document.getElementById('img1').style.display = 'none';
      } else if (i == 2) {
        i = 3
        document.getElementById('img3').style.display = 'inline';
        document.getElementById('img2').style.display = 'none';
      } else if (i == 3) {
        i = 4
        document.getElementById('img4').style.display = 'inline';
        document.getElementById('img3').style.display = 'none';
      } 
    }, 3000)
  },
  data() {
    return {
    }
  },
  mounted() {
    var q;
    for (q=0;q<3;q++) {
      var object = this.$parent.projects[q]
      document.getElementById('percentbar' + object.id ).style.width = ((this.money(q + 1) / parseInt(object.goal.slice(1).slice(0,-3))) * 100).toString() + '%';
    }
  },
  computed: {
    topfundraisers() {
      return this.$parent.projects.slice(0,3)
    },
  },
  methods: {
    money(param) {
      var don = this.$parent.donations
      var i;
      var ret = 0;
      var result = don.filter(obj => {
        return obj.donationid === param
      })
      for (i=0;i<result.length;i++) {
        ret = ret + parseInt(result[i].amount.slice(1).slice(0,-3))
      }
      return ret
    }
  }

}
</script>
