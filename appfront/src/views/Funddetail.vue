<template>
  <div class="funddetail">
    <div id="detailnavbar" style="overflow-x: auto;width: 90%;position: absolute;left:5%;top: 0px;padding-top: 20px;z-index: 100;background-color: white;">
      <div style="color: black !important;left: 0px;z-index: 10;position: absolute;padding-left: 50px;width: 96.09%;background-color: white;top: 0px;padding-top: 35px;height: 75px;" v-if="searchbar">
        <a class="pointer left" @click="focussearch('search')"><i class="mdi mdi-magnify"></i>SEARCH GOFUNDME</a><br />
        <a @click="searchbar = false" class="pointer" style="position: absolute;right: 90px;"><i class="mdi mdi-close"></i></a>
        <input @keyup.enter="submit()" style="left: 50px;position: absolute;width: 500px;border: none;font-size: 25px;" type="text" id="search" v-model="searchvalue" placeholder="Try searching people,titles or locations"/>
      </div>
      <div class="leftdiv left" >
        <a id="searchbutton" class="pointer left" @click="search()"><i class="mdi mdi-magnify"></i>search</a><p style="margin: 0px 20px;float:left;">|</p>
        <p style="margin-top: 0px;float: left;" class="hov pointer drop" @mouseover="hide1 = true" @mouseleave="hide1 = false">How it works <span class="left" :class="{ turn : hide1 }"><i class="mdi mdi-arrow-down"></i></span></p><p style="margin: 0px 20px;float:left;">|</p>
        <div v-if="hide1" @mouseover="hide1 = true" @mouseleave="hide1 = false" style="background-color: white;border-radius: 5px;box-shadow: 0px 2px lightgrey;position: absolute;z-index: 5;margin-top: 1%;margin-left: 10%;"><table><th>bla</th><th>bla</th><th>bla</th></table></div>
        <a style="margin-top: 0px;" class="pointer left" >Start a GoFundMe</a>
      </div>
      <h1 id="h1" style="margin-left: 12%;font-size: 25px;margin-top: 0px;margin-bottom: 0px;float: left;text-align: center;" >gofundme</h1>
      <div style="float: right;">
        <a id="searchbutton" class="pointer left" @click="search()"><i class="mdi mdi-magnify"></i>search</a><p style="margin: 0px 20px;float:left;">|</p>
        <button class="coloredbutton" style="background-color: #FDB933;border: 3px #FDB933 solid;">donate</button>
        <button @click="share = true" class="coloredbutton" style="border: 3px #FDB933 solid;">share</button>
      </div>
      <hr style="border-color: lightgrey;margin-top: 50px;">
    </div>
    <div id="detailcontent" style="margin-top: 100px;width: 70%;left: 5%;float: left;position: absolute;">
      <h1 style="float: left;margin-bottom: 5px;">{{ fundinfo.name }}</h1><br /><br /><br />
      <img :src="fundinfo.picture" style="left: 0px;width: 60%;height:270px;position: absolute;border-radius: 5px;">
      <div style="margin-top: 300px;position: relative;text-align: left;padding-left: 10%;">
        <img style="float: left;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAD0klEQVRYhcWZTWgbRxSAB+JDMetDiA9x8CmH5FrQpTf7okvi7tkphBpTRME+BAdBb6pwDxsw2CjFRKBt2iKLgKEuuu1pAwaFZEbUDrZIMOQ9KUJEtIeZrSNyez3YK1vVKvsnWwPvsKOZ2U/vvXlv5i1jEdt+pzlddWBBKCwKiU2hkHpEYlMo+LXqwMJ+pzkd9T2hGpf1m1zhY67gbR+Qj5zMgY0LgRXUGhcSjLBQnqASO1zhT4Ja48OBU3iXS2gMA64XFBpC4d3oYE5rkiv8fdhg/QK/Cac1GQWOXzyc65/IA0MCwRdC4YvLgjsHWbGJxvy1J/GPy4Y780v8xQcOvh8VnCtVBxY84V46zWtcgjNqQC5Befojd+BJnIVX7AIlzCVKmEv0TdmgckNEh3TgSQ/cq2O4ziV2oi54a3ORNEOne+VHlLJylDCXacLQKX9gRfXFjviIU2e+p2AjKlzKypFm6GS3az39c9sZurE+H93cEgzGGGNEdIUr/CeO9lJWrq/fbteIZZNxtPjOJhpj/F+YjeN7mqHTWnXH87c4gEIhVRV8xbiCH+MAJsxlmtvO9PVvHe0SyyZjbZaqggdMKPgzDmD+wCKWTdLD54UeuNubizRTTEf3QYXEFTxjXMGbOIsIhZSplEgzdGLZJN1YnyeWTdJMMd23cUKLhD3GFXyICygUUrkhaK26Q5lKibaOdmOvd6rBD0wo+BRnka2jXcofWj3aKjcE5Q+trv/Z7RrlD60I4PApMuCKXeiak2WTlKmUSCike+VH3T6WTdJsMd33HAowrIntdo0S5hJphk4pK9ezS9eqO6SdyyD5A4s0Q6cVu9DV9vnnYCaWsBcGMGEu063NRc/w4aa5z80PMqYrEvZChRk3rQ2KbSkr55veZoppz7g5QIPPmJDwQ1DTThh619cGjdEMnb4eADC3nSHN0ANvlqqCB4FTnRvr/Ma5fjb7vzgYFk4opL+O4UtmE41xie/8Bs9tZwJnBhfy9uYi2e1aJDghoU5EV06PW7jqNyFhLlPCXKKUlfOVh88LtHW0S1Pr8zRh6OHhTmT17Dz4Eaf8Dqzu7gsirqbtdo1miunQcFxi59UxXO898iv8OeQ/vECBjf4bndOa5BLU6OHw75dO85r3tdOpfztqQK7q9z3hzu4n9acjg5NofhaOsZPSB1dYGQHgi0ClD8YYey3rVy+7ePRa1q8GguuamlrjQmHpEgBLsYqZXOEdLvH9Bfjbe67wTmSwPm0OqQR8KqtDKwGfb3GL6FzhYy7rN4cO5tX2O81p4eB3YuBnCMBhfIb4D5T4uO24483XAAAAAElFTkSuQmCC">
        <h3 style="margin-top: 1.5%;position: absolute;margin-left: 5%;">{{ fundinfo.owner.charAt(0).toUpperCase() + fundinfo.owner.slice(1) }} is organizing this fundraiser.</h3>
        <p>{{ fundinfo.description }}</p>
      </div>
    </div>
    <div style="position: sticky;float: right;width: 350px;height: 550px;box-shadow: 0px 0px 5px;margin: 155px 40px 0px 0px;padding: 40px;">
      <span><h1 style="float: left;">${{ totalmoney }}</h1><h3 style="float: left;margin: 10px 0px 0px 20px;">raised of {{ fundinfo.goal }} goal</h3></span>
      <div style="background-color: lightgreen;border-radius: 20px;height: 5px;width: 100%;margin-top: 50px;"><div id="percentbar" style="height: 5px;border-radius: 20px;background-color: green;"></div></div>
      <p style="float: left;text-align: left;"><span style="text-decoration: underline;font-size: 18px;">{{ donors }}</span><br />donors</p>
      <button class="coloredbutton" style="width: 100%;float: left;background-color: #FDB933;border: 3px #FDB933 solid;">donate</button>
      <button class="coloredbutton" style="width: 100%;margin-top: 5px;margin-bottom: 50px;float: left;border: 3px #FDB933 solid;">share</button>
      <div v-for="object in lastfivedonations" :key="object.id" style="clear: both;">
        <hr style="margin: 60px 0px 10px;border-color: #DDDDDD;">
        <img style="float: left;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAD0klEQVRYhcWZTWgbRxSAB+JDMetDiA9x8CmH5FrQpTf7okvi7tkphBpTRME+BAdBb6pwDxsw2CjFRKBt2iKLgKEuuu1pAwaFZEbUDrZIMOQ9KUJEtIeZrSNyez3YK1vVKvsnWwPvsKOZ2U/vvXlv5i1jEdt+pzlddWBBKCwKiU2hkHpEYlMo+LXqwMJ+pzkd9T2hGpf1m1zhY67gbR+Qj5zMgY0LgRXUGhcSjLBQnqASO1zhT4Ja48OBU3iXS2gMA64XFBpC4d3oYE5rkiv8fdhg/QK/Cac1GQWOXzyc65/IA0MCwRdC4YvLgjsHWbGJxvy1J/GPy4Y780v8xQcOvh8VnCtVBxY84V46zWtcgjNqQC5Befojd+BJnIVX7AIlzCVKmEv0TdmgckNEh3TgSQ/cq2O4ziV2oi54a3ORNEOne+VHlLJylDCXacLQKX9gRfXFjviIU2e+p2AjKlzKypFm6GS3az39c9sZurE+H93cEgzGGGNEdIUr/CeO9lJWrq/fbteIZZNxtPjOJhpj/F+YjeN7mqHTWnXH87c4gEIhVRV8xbiCH+MAJsxlmtvO9PVvHe0SyyZjbZaqggdMKPgzDmD+wCKWTdLD54UeuNubizRTTEf3QYXEFTxjXMGbOIsIhZSplEgzdGLZJN1YnyeWTdJMMd23cUKLhD3GFXyICygUUrkhaK26Q5lKibaOdmOvd6rBD0wo+BRnka2jXcofWj3aKjcE5Q+trv/Z7RrlD60I4PApMuCKXeiak2WTlKmUSCike+VH3T6WTdJsMd33HAowrIntdo0S5hJphk4pK9ezS9eqO6SdyyD5A4s0Q6cVu9DV9vnnYCaWsBcGMGEu063NRc/w4aa5z80PMqYrEvZChRk3rQ2KbSkr55veZoppz7g5QIPPmJDwQ1DTThh619cGjdEMnb4eADC3nSHN0ANvlqqCB4FTnRvr/Ma5fjb7vzgYFk4opL+O4UtmE41xie/8Bs9tZwJnBhfy9uYi2e1aJDghoU5EV06PW7jqNyFhLlPCXKKUlfOVh88LtHW0S1Pr8zRh6OHhTmT17Dz4Eaf8Dqzu7gsirqbtdo1miunQcFxi59UxXO898iv8OeQ/vECBjf4bndOa5BLU6OHw75dO85r3tdOpfztqQK7q9z3hzu4n9acjg5NofhaOsZPSB1dYGQHgi0ClD8YYey3rVy+7ePRa1q8GguuamlrjQmHpEgBLsYqZXOEdLvH9Bfjbe67wTmSwPm0OqQR8KqtDKwGfb3GL6FzhYy7rN4cO5tX2O81p4eB3YuBnCMBhfIb4D5T4uO24483XAAAAAElFTkSuQmCC">
        <div style="float: left;text-align: left;margin: 0px 2px 0px 15px;">
          <h4 style="margin:0px;">{{ object.donator }}</h4>
          <p style="margin: 0px;"><span style="float: left;">{{ object.amount }}</span><ul style="float: left;margin: 0px;color: #A7A7A7;"><li>{{ object.time }}</li></ul></p>
        </div>
      </div>
      <div style="margin-top: 80px;">
        <button @click="seeall = true" style="border-radius: 5px;border: 2px green solid;background-color: white;color: green;padding: 5px 15px;font-size: 14px;font-weight: bold;">See all</button>
      </div>
    </div >
    <div @click="share = false;seeall = false" v-if="share || seeall" style="background: rgba(0,0,0, 0.5);width: 100%;position: fixed;height: 100%;z-index: 1001;left: 0px;top: 0px;">
    </div>
    <div v-if="seeall" class="popup">
      <div v-if="alldonations">
        <h3 style="margin-top: 0px;float: left;font-weight: bold;">Donations ({{ donors }})</h3>
        <div style="float: right;">
          <button style="border-radius: 20px;color: black;background-color: white;box-shadow: 0px 0px 10px lightgrey;padding: 5px;"><i class="mdi mdi-toggle-switch"></i>See top donations</button>
        </div>
      </div>
        <div v-if="alldonations == false">
          <h1 style="float: left;font-weight: bold;">TOP DONATIONS</h1>
        <div style="float: right;">
        <button style="border-radius: 20px;color: black;background-color: white;box-shadow: 0px 0px 10px lightgrey;padding: 5px 10px;"><i class="mdi mdi-menu"></i>See all donations</button>
      </div>
      </div>
      <div v-if="topdonations">
        
      </div>
    </div>
    <div v-if="share" class="popup">
      <a @click="share = false" class="pointer" style="position: absolute;float: right;right: 20px;top: 20px"><i class="mdi mdi-close"></i></a><br />
      <h1>Help by sharing</h1><br />
      <p>Fundraisers shared on social network raise up to 5x more!</p>
      <hr>
      <a @click="sendgmail()" style="float: left;">
        <img style='width: 50px;' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNj1VKAD7d13lKSLwwSYjoXvGmPeduSPo2BUzaNTt4WYl-myED&usqp=CAU"><br />
        <p style="margin: 0px 0px 0px 4px;">email</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'funddetail',
  data() {
    return {
      searchbar: false,
      searchvalue: '',
      hide1: false,
      share: false,
      seeall: false,
      alldonations: true
    }  
  },
  computed: {
    donations: function() {
      var fundid = this.$route.params.id
      var don = this.$parent.donations
      var result = don.filter(obj => {
        return obj.donationid === parseInt(fundid)
      })
      result.sort(function(a, b) {
        var dateA = new Date(a.time), dateB = new Date(b.time);
        return dateB - dateA;
      })
      return result
    },
    donors: function() {
      var length = this.donations.length
      if (length >= 1000) {
        return (length / 1000).toString() + 'K';
      } else {
        return length
      }
    },
    fundinfo: function() {
      var fundid = this.$route.params.id
      var fund = this.$parent.projects.filter(obj => {
        return obj.id === parseInt(fundid)
      })
      return fund[0]
    },
    totalmoney: function() {
      var i;
      var ret = 0;
      for (i=0;i<this.donations.length;i++) {
        ret = ret + parseInt(this.donations[i].amount.slice(1).slice(0,-3))
      }
      return ret
    },
    lastfivedonations: function() {
      return this.donations.slice(0,5)
    }
  },
  created() {
    this.$parent.nav = false
  },
  methods: {
    focussearch: function(id) {
      document.getElementById(id).focus();
    },
    search: function() {
      this.searchbar = true
    },
    submit: function() {
      var path = '/search/' + this.searchvalue
      this.$router.push(path)
    },
    sendgmail: function() {
      var defaultmessage = "Hello <br/> <br/> I found a cool fundraiser that i want to share with you, it's called ''" + this.fundinfo.name + "''. Here's a link: " + window.location.href + " <br/> <br/> Thanks."
      var defaulttitle = "Help this fundraiser to donate or/and share it to your friends"
      defaulttitle = defaulttitle.replace(/\s+/g, '+').replace("'", '%27')
      defaultmessage = defaultmessage.replace(/\s+/g, '+').replace("'", '%27').replace('<br/>', '%0A');
      window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=" + defaulttitle + "&body=" + defaultmessage)
    },
  },
  mounted() {
    var object = this.fundinfo
    document.getElementById('percentbar').style.width = ((this.totalmoney / parseInt(object.goal.slice(1).slice(0,-3))) * 100).toString() + '%';
  }
}
</script>
<style>
.turn {
  animation-name: arrowturn;
  animation-duration: 1s;
  animation-fill-mode: forward;
}
@keyframes arrowturn {
  from {margin-top: 0px;transform: rotate(0deg);}
  to {margin-top: -4px;transform: rotate(180deg);}
}
.left {
  float: left;
}
.pointer {
  cursor: pointer;
}
.coloredbutton {
  float:right;
  color: black;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px;
  margin-top: -8px;
  margin-right: 5px;
  font-weight: bold;
}
.popup {
  text-align: left;
  padding: 20px 10px;
  width: 45%;
  position: fixed;
  left: 25%;
  height: 70%;
  top: 15%;
  background-color: white;
  z-index: 1002;
  border-radius: 5px;
  overflow: auto;
}
</style>
