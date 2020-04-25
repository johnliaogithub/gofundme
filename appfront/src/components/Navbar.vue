<template>
  <div class="navbar" id="navbar" :class="{ backgroundcolorchange: top == false,nav: transparent == false }" style="padding-top: 40px;padding-left: 50px;height: 70px;">
    <!--<h1 style="width: 100px;" v-bind:style="{ color: titlecolor }">gofundme</h1>-->
    <div style="color: black !important;left: 0px;z-index: 10;position: absolute;padding-left: 50px;width: 96.09%;background-color: white;top: 0px;padding-top: 35px;height: 75px;" v-if="searchbar">
      <a class="pointer left" @click="focussearch('search')"><i class="mdi mdi-magnify"></i>SEARCH GOFUNDME</a><br />
      <a @click="togglesearch()" class="pointer" style="position: absolute;right: 90px;"><i class="mdi mdi-close"></i></a>
      <input @keyup.enter="submit()" style="left: 50px;position: absolute;width: 500px;border: none;font-size: 25px;" type="text" id="search" v-model="searchvalue" placeholder="Try searching people,titles or locations"/>
    </div>
    <div class="leftdiv left" >
        <a id="searchbutton" class="pointer left" @click="search()"><i class="mdi mdi-magnify"></i>search</a><p style="margin-left: 20px;margin-right: 20px;float:left;">|</p>
        <p class="hov pointer drop" @mouseover="hide1 = true" @mouseleave="hide1 = false">For individuals <span class="left" :class="{ turn : hide1 }"><i class="mdi mdi-arrow-down"></i></span></p><p style="margin-left: 20px;margin-right: 20px;float:left;">|</p>
        <p class="hov pointer drop" @mouseover="hide2 = true" @mouseleave="hide2 = false">non profits <span class="left" :class="{ turn : hide2 }"><i class="mdi mdi-arrow-down"></i></span></p><br />
        <div v-if="hide1" class="dropdown"><table><th>bla</th><th>bla</th><th>bla</th></table></div>
        <div v-if="hide2" class="dropdown"><table><th>bla</th></table></div>
    </div>
    <h1 id="h1" style="margin-left: 12%;font-size: 25px;margin-top: 0px;margin-bottom: 0px;float: left;text-align: center;" >gofundme</h1>
    <div>
      <a style="position: absolute;right: 26%;">how it works</a>
      <p style="right: 23.5%;position: absolute;">|</p>
      <a style="position: absolute;right: 18%;">sign in</a>
      <a style="position: absolute;right: 5.5%;top:37px;" href="/sign-up"><button id="button" >start a go fund me</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      colour: 'green',
      searchbar: false,
      searchvalue: "",
      hide1: false,
      hide2: false,
      top: true
    };
  },
  props: {
    transparent: Boolean
  },
  methods: {
    search: function() {
      this.searchbar = true
    },
    togglesearch: function() {
      this.searchbar = !this.searchbar
      this.searchvalue = ""
    },
    focussearch: function(id) {
      document.getElementById(id).focus();
    },
    submit: function() {
      var path = '/search/' + this.searchvalue
      this.$router.push(path)
    }
  },
  mounted: function() {
    window.setInterval(() => {
      if (this.transparent == false) {
        document.getElementById('navbar').classList.add('non-transparent');
        document.getElementById('h1').classList.add('headersty');
        document.getElementById('button').classList.add('buttonsty');
      } else {
        var i = window.pageYOffset
        if (i <= 10 || i == 0 ) {
          this.top = true
        } else if (i > 10) {
          this.top = false
        }
      }
    }, 1000)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.non-transparent {
  background-color: white !important;
  color: black !important;
  box-shadow: 5px 10px;
}
.navbar {
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  margin: 0px;
  padding: 0px;
}
a,a:visited,a:hover {
  text-decoration: none;
}
.backgroundcolorchange button:hover {
  background-color: darkgreen;
  border-radius: 5px;
}
.backgroundcolorchange {
  animation-name: changebackground;
  animation-duration: 0.60s;
  animation-fill-mode: forwards;
  box-shadow: 5px 10px;
}
@keyframes changebackground {
  from {background-color: transparent;color:white;}
  to {background-color: white;color:black;}
}
.turn {
  animation-name: animation;
  animation-duration: 0.60s;
  animation-fill-mode: forwards;
}
@keyframes animation {
  from {margin-top: 0px;transform: rotate(0deg);}
  to {margin-top: -4px;transform: rotate(180deg);}
}
.dropdown{
  position: absolute;
  left: 50px;
  float: left;
}
.leftdiv .drop {
  float: left;
  margin-left: 5px;
}
.backgroundcolorchange h1 {
  color: #30C681;
}
.headersty {
  color: #30C681;
}
.buttonsty {
  background-color: #30c681;
  border: 3px #30c681 solid;
  border-radius: 5px;
}
.buttonsty:hover {
  background-color: darkgreen;
  border-radius: 5px;
}
button {
  border: 3px white solid;
  border-radius: 5px;
}
.backgroundcolorchange button {
  background-color: #30c681;
  border: 3px #30c681 solid;
  border-radius: 5px;
}

.nav {
  z-index: 100;
}
</style>
