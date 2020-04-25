<template>
  <div id="app">
    <Navbar v-if="nav" :transparent="transnav" style="position: fixed;z-index: 10;width: 100%;" titlecolor="blue" />
    <router-view :class="{ pad: transnav == false && nav }" />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  data() {
    return{
      transnav: true,
      nav: true,
      projects: [
        {id:1,name:'donation for john',money:'$500.00',goal:'$1000.00',owner:'john',location:'newyork'},
        {id:2,name:'donation for john liao',money:'$700.00',goal:'$1200.00',owner:'donald trump',location:'new york'},
        {id:3,name:'donation for johnny',money:'$350.00',goal:'$500.00',owner:'johnny',location:'berlin'}
      ]
	}
  },
  components: {
    Navbar,
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: blue;
}
.pointer {
  cursor: pointer;
}
#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
h1 {
  margin: 0px;
}
button {
  border: none;
  background-color: transparent;
  color: white;
}
input {
  margin: 0.5% 0.5% 0.5% 0.5%;
}
.left {
  float: left;
}
.pad {
  padding-top: 120px;
}
</style>
