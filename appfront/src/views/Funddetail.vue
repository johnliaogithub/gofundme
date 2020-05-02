<template>
  <div class="search">
    <div id="detailnavbar" style="width: 100%;position: absolute;left: 0px;top: 0px;">
      <div style="color: black !important;left: 0px;z-index: 10;position: absolute;padding-left: 50px;width: 96.09%;background-color: white;top: 0px;padding-top: 35px;height: 75px;" v-if="searchbar">
        <a class="pointer left" @click="focussearch('search')"><i class="mdi mdi-magnify"></i>SEARCH GOFUNDME</a><br />
        <a @click="searchbar = false" class="pointer" style="position: absolute;right: 90px;"><i class="mdi mdi-close"></i></a>
        <input @keyup.enter="submit()" style="left: 50px;position: absolute;width: 500px;border: none;font-size: 25px;" type="text" id="search" v-model="searchvalue" placeholder="Try searching people,titles or locations"/>
      </div>
      <div class="leftdiv left" >
          <a id="searchbutton" class="pointer left" @click="search()"><i class="mdi mdi-magnify"></i>search</a><p style="margin-left: 20px;margin-right: 20px;float:left;">|</p>
          <p class="hov pointer drop" @mouseover="hide1 = true" @mouseleave="hide1 = false">How it works <span class="left" :class="{ turn : hide1 }"><i class="mdi mdi-arrow-down"></i></span></p><p style="margin-left: 20px;margin-right: 20px;float:left;">|</p>
          <div v-if="hide1" class="dropdown"><table><th>bla</th><th>bla</th><th>bla</th></table></div>
      </div>
      <h1 id="h1" style="margin-left: 12%;font-size: 25px;margin-top: 0px;margin-bottom: 0px;float: left;text-align: center;" >gofundme</h1>
      <div>
      </div>
    </div>
    <h1 style="float: left;">{{ fundname }}</h1>
    <p>{{ donations }}</p>
  </div>
</template>
<script>
export default {
  name: 'search',
  data() {
    return {
      searchbar: false,
      searchvalue: '',
      hide1: false
    }  
  },
  computed: {
    fundname: function() {
      return this.$route.params.fundname
    },
    donations: function() {
      var fund = this.$parent.projects.filter(obj => {
        return obj.name === this.fundname;
      })
      var fundid = fund[0].id
      var don = this.$parent.donations
      var result = don.filter(obj => {
        return obj.donationid === fundid
      })
      result.sort(function(a, b) {
        var dateA = new Date(a.time), dateB = new Date(b.time);
        return dateB - dateA;
      })
      return result
    },
    totalmoney: function() {
      var i;
      var ret = 0;
      for (i=0;i<this.donations.length;i++) {
        ret = ret + parseInt(this.donations[i].amount.slice(1).slice(0,-3))
      }
      return ret
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
    }
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
</style>
