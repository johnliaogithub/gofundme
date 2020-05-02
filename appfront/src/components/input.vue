<template>
  <div class="covid19page">
    <input style="margin: 0px;" id="input" @focus="inputfocus()" type='text' @blur="inputunfocus()" > 
    <label style="z-index: 5;position: absolute;margin-left: -13.5%;margin-top: 0.5%;font-size: 18px;" id="label" @click="inputfocus()">
      email
    </label>
  </div>
</template>

<script>
export default{
  name: 'covid19page',
  created() {
    this.$parent.transnav = false
  },
  methods: {
    inputfocus: function() {
      document.getElementById('input').focus();
      document.getElementById('label').classList.add('labelmoveout');
      if (document.getElementById('label').classList.contains('labelmovein')){
        document.getElementById('label').classList.remove('labelmovein');
      }
    },
    inputunfocus: function() {
      if (document.getElementById('label').classList.contains('labelmoveout')) {
        document.getElementById('label').classList.remove('labelmoveout');
      }
      if (document.getElementById('input').value == '') {
        document.getElementById('label').classList.add('labelmovein');
      }
    }
  }
}
</script>
<style>
.labelmoveout {
   animation-name: placeholdermoveout;
   animation-duration: 1s;
   animation-fill-mode: forwards;
 }
 @keyframes placeholdermoveout {
   from {margin-top: 0.5%;margin-left: -13.5%;font-size: 18px;}
   to {margin-top: 0%;margin-left: -14%;font-size: 13px;}
 }
.labelmovein {
   animation-name: placeholdermovein;
   animation-duration: 1s;
 }
 @keyframes placeholdermovein {
   from {margin-top: 0%;margin-left: -14%;font-size: 13px;}
   to {margin-top: 0.5%;margin-left: -13.5%;font-size: 18px;}
}
</style>
