<template>
  <div class="search">
    <a href="/"><button >&lt;Home</button></a>
    <h1>Results for "{{ searched }}"</h1>
    <ul>
    <div id="debug"></div>
      <li v-for="item in filtered" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'search',
  data() {
    return {
    }  
  },
  computed: {
    searched: function() {
      return this.$route.params.searched
    },
    filtered: function() {
      var keywords = this.searched.toLowerCase().split(' ');
      var da = this.$parent.projects
      var tbr = [];
      if (this.searched == ' ' || this.searched == ''){
        return null
      }
      var i;
      for (i=0;i<da.length;i++){
        var count = 0;
        
        var name = da[i].name.toLowerCase();
        name = name.split(' ')
        var owner = da[i].owner.toLowerCase();
        owner = owner.split(' ')
        var location = da[i].location.toLowerCase();
        location = location.split(' ')
        var j;
        for (j=0;j<name.length;j++) {
          var k;
          for (k=0;k<keywords.length;k++){
            if (keywords[k] == name[j]) {
              count++
            }
          }
        }
        var l;
        for (l=0;l<owner.length;l++) {
          var m;
          for (m=0;m<keywords.length;m++){
            if (keywords[m] == owner[l]) {
              count++
            }
          }
        }
        var n;
        for (n=0;n<location.length;n++) {
          var o;
          for (o=0;o<keywords.length;o++){
            if (keywords[o] == location[n]) {
              count++
            }
          }
        }
        var percent = (count / keywords.length) * 100
        if (percent > 70) {
          tbr.push(da[i]);
        }
      }
      return tbr;
    }
  },
  created() {
    this.$parent.transnav = false
  }
}
</script>
