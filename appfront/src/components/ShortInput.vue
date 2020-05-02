<template>
  <div class="ShortInput" >
    <input v-if="os == true" :type="type" :style="sty" :value="value" :placeholder="placeholder">
    <div class="placeholder" v-if="os == false" :class="{ focused : focus == true && inputvalue == '' }">
      <input :id="inputid" @focus="focusinput()" @blur="unfocusinput()" :type="type" style="padding: 5px;font-size: 18px;width: 30%;position: absolute" v-model="inputvalue">
      <label :id="placeholderid" :class="{ open : inputvalue == '' }" @click="focusinput()" class="placeh" style="background-color: white;z-index: 12;position: absolute;margin-left: 2.5%;margin-top: 1.7%;font-size: 18px;">{{ placeholder }}</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShortInput',
  props: {
    value: String,
    placeholder: String,
    type: String,
    sty: String,
  },
  data() {
    return {
      os: false,
      focus: false,
      inputvalue: '',
    }
  },
  methods: {
    focusinput: function() {
      document.getElementById(this.inputid).focus();
      this.focus = true
      if (document.getElementById(this.placeholderid).classList.contains('placehmovein')) {
        document.getElementById(this.placeholderid).classList.remove('placehmovein')
        console.log('should remove')
      }
    },
    unfocusinput: function() {
      var element = document.getElementById(this.inputid);
      if (this.focus == true && element.value == '') {
        this.focus = false
        document.getElementById(this.placeholderid).classList.add("placehmovein");
      }
    }
  },
  computed: {
    inputid: function() {
      return this.placeholder.replace(/\s/g, '') + 'p';
    },
    placeholderid: function() {
      return this.placeholder.replace(/\s/g, '') + 'ph';
    }
  },
  mounted() {
    if (this.sty == '' || this.sty == ' ' || this.sty == undefined) {
      this.os = false
    } else {
      this.os = true
    }
  }
}
</script>
<style>
.focused .placeh {
  animation-name: placeholdermoveout;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes placeholdermoveout {
  from {margin-top: 1.7%;margin-left: 2.5%;font-size: 18px;}
  to {margin-top: -1%;margin-left: 1.2%;font-size: 13px;}
}
.placehmovein {
  animation-name: placeholdermovein;
  animation-duration: 1s;
}
@keyframes placeholdermovein {
  from {margin-top: -1%;margin-left: 1.2%;font-size: 13px;}
  to {margin-top: 1.7%;margin-left: 2.5%;font-size: 18px;}
}
.open {
  margin-top: -1%;
  margin-left: 1.2%;
  font-size:13px;
}
</style>
