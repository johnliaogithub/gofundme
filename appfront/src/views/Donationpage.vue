<template>
  <div class="donatepage">
    <div class="navagationbar" style="border-bottom: 1px solid black;padding: 10px;width: 100%;box-shadow:0px 5px lightgrey;border-top: 5px solid #73A600;background-color: white;height: 50px;">
      <div style="float: left;margin-left: 10%;">
        <h3 style="margin-top: 15px;float: left;">gofundme</h3><p style="float: left;margin-left: 10px;">| <a style="color: #B5B5B5;">Help</a></p>
      </div>
    </div>
    <div :class="{ ninehundred : next, small : next == false }" style="margin-top: 70px;width: 70%;left: 15%;position: absolute;border-top: 5px solid #73A600;border-radius: 5px;border-left: 2px solid lightgrey;border-right: 2px solid lightgrey;border-bottom: 2px solid lightgrey;" id="content">
      <div v-if="next" class="leftside" style="float: left;height: 100%;width: 60%;padding: 30px 5%;">
        <h1 style="float: left;text-align: left;margin-bottom: 20px;">Enter your donation</h1>
        <div style="width: 10%;width: 100%;clear: both;text-align: left;color: #5E7F08;">
          <h1 style="float: left;font-size: 100px;margin: 0px;">$<br /><p style="font-size: 15px;margin: 0px 5px 0px;width: 20px;">USD</p></h1>
          <input type="input" v-model="amount" style="margin-top: -12px;width: 55%;border: none;color: #5E7F08;font-size: 100px;float: left;direction: rtl;" maxlength="5" pattern="[0-9]{0,}" title="Invalid input" autofocus/>
          <h1 style="float: left;font-size: 100px;margin: 0px;">.00</h1>
          <div v-if="nolessthanfiveerror" class="error" style="text-align: center;padding: 10px 20px;background-color: #D87F7F;color: white;clear: both;width: 55%;float: right;position: static;margin-right: 15%;font-weight: bold;">Donation amount must be at least $5</div>
          <div v-if="noemptyamounterror" class="error" style="text-align: center;padding: 10px 20px;background-color: #D87F7F;color: white;clear: both;width: 55%;float: right;position: static;margin-right: 15%;font-weight: bold;">Please enter a donation amount</div>
        </div>
        <p style="width: 100%;clear: both;text-align: left;float: left;">GoFundMe has a 0% platform fee for organizers and relies on the<br />generosity of donors like you to operate our service. </p>
        <div style="clear: both;width: 100%;">
          <p style="float: left;">Thank you for including a tip of:</p>
          <div style="float: right;width: 40%;height: 68px;margin-top: 5px;">
            <div class="select-wrapper" style="position: relative;">
              <select style="width: 90%;float: right;background-color: white;border: 2px #999 solid;border-radius: 5px;height: 40px;font-size: 18px;" v-model="chosentip">
                <option value="10" >10% {{ findpercent(10) }}</option>
                <option value="15" selected>15% {{ findpercent(15) }}</option>
                <option value="20" >20% {{ findpercent(20) }}</option>
                <option value="other" >Other</option>
              </select>
            </div>
            <div v-if="chosentip == 'other'" >
              <p style="float: left;margin-top: 58px;margin-left: 4%;z-index: 0;position: absolute;font-size: 18px;">$</p>
              <input @blur="checkdots()" pattern="[0-9.]{0,}" title="Invalid input" v-model="othervalue" class="smallinput" type="text" style="float: right;width: 86%;direction: rtl;" maxlength="8" />
            </div>
            <p style="float: right;clear: both;">Total charge: {{ totalcharge }}</p>
          </div>
        </div>
        <div style="clear: both;width: 100%;position: absolute;margin-top: 136px;width: 57.7%;">
          <h3 style="float: left;width: 100%;margin: 0px;text-align: left;">Your Name</h3>
          <div style="margin-bottom: 5px;">  
            <input @blur="capitalize('firstname')" v-model="firstname" style="float: left;" placeholder="FirstName" />
            <input @blur="capitalize('lastname')" v-model="lastname" style="margin-left: 23%;" placeholder="LastName" />
            <div v-if="noemptyfirstnameerror" class="fnerror" style="margin-left: 4%;margin-bottom: 20px;margin-top: 20px;text-align: center;padding: 10px 20px;background-color: #D87F7F;color: white;clear: both;width: 55%;float: left;position: static;margin-right: 30%;font-weight: bold;">Please enter your name</div>
            <div v-if="noemptylastnameerror" class="lnerror" style="margin-bottom: 20px;margin-top: 20px;text-align: center;padding: 10px 20px;background-color: #D87F7F;color: white;clear: both;width: 55%;float: right;position: static;margin-right: -20%;font-weight: bold;">Please enter your name</div>
          </div>
          <div style="margin-bottom: 30px;">
            <input style="float: left;" type="checkbox"/><label style="float: left;">Hide name and comment from everyone but the organizer.</label><br />
          </div>
          <div>
            <label style="clear: both;float: left;margin-top: 4px;font-weight: bold;font-size: 18px;" for="email">Your Email</label><br />
            <input id="email" pattern="[a-zA-Z0-9.%-_+]+@[a-zA-Z0-9-]+\.[a-z]{2,}$" style="float: left;width: 96%;"/>
          </div>
          <div class="secondselect-wrapper" style="width: 50%;height: 77px;margin-top: 35px;position: relative;float: left;">
            <label style="font-size: 18px;float: left;font-weight: bold;">Country</label>
            <select v-model="country" style="clear: both;float: left;width: 85%;border: 1px solid grey;border-radius: 5px;font-size: 18px;padding: 6px 2%;">
              <option>Canada</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Mexico</option>
              <option>France</option>
            </select>
          </div>
          <div style="float: right;width: 38%;margin-top: 35px;">
            <label style="font-size: 18px;font-weight: bold;float: left;">Zip Code</label>
            <input style="clear: both;font-size: 18px;width:86%;padding: 8px 2%;"/>
          </div>
          <div style="clear: both;">
            <input type="checkbox" style="float: left;"/><label style="float: right;">receive occasional updates from GoFundMe about how to help others. Change your preferences anytime</label>
          </div>
          <button @click="check()" style="background-color: #F2A52F;border-radius: 5px;font-size: 25px;padding: 13px 50px;margin-top: 28px;">next</button>
        </div>
      </div>
      <div v-if="next == false" class="leftside" style="float: left;height: 100%;width: 60%;padding: 30px 5%;">
        <h1 style="float: left;text-align: left;margin-bottom: 20px;">Total Charge: ${{ totalcharge }}</h1>
        <div style="clear: both;position: absolute;margin-top: 90px;width: 57.7%;">
          <div style="margin-bottom: 5px;">  
            <input class="smallinput" style="float: left;width: 96%;margin-bottom: 5px;" placeholder="FullName" :value="firstname + ' ' + lastname" />
          </div>
          <div>
            <input class="smallinput" placeholder="Card Number" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" style="float: left;width: 96%;"/>
          </div>
          <div>
            <input pattern="[0-9]{2}" placeholder='MM' class="smallinput" max-length="2" style="font-size: 18px;float: left;width: 8%;padding: 5px 7px;"/>
            <p style="float: left;font-size: 36px;margin-top: 30px;">/</p>
            <input pattern="[0-9]{2}" placeholder='YY' class="smallinput" max-length="2" style="float: left;width: 8%;padding: 5px 7px;"/>
            <input pattern="[0-9]{4}" max-length="4" placeholder="CVV" class="smallinput" style="float: right;width: 10%;padding: 5px 7px;margin-right: 2.5;">
            <img style="float: right;width: 8%;margin-top: 37px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAB/f39paWkwMDD09PS4uLjV1dU3Nze8vLzv7+/h4eHAwMCdnZ3c3NzY2NiHh4dhYWFOTk6WlpZISEhAQEArKysbGxvKysqqqqoWFhZ5eXkhISGNjY35+flaWloODg6amppDQ0Ovr69nZ2dxcXH8ydyzAAAEUElEQVR4nO3d2WKiMBgFYLCyY8Udq0ar4/u/4pREIEAsCj+Y4vnuhjSYI0jYkjEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCorXIx0swgtsnzh0tTTMiTJF6xeHeQXq6B9QO/VIWp4bQPar05Qy24XcJquZz370MtsnTZt2irhXqwk8tt9UZ3wI9G4fZuVTMQ6PqkaRexTNG/SYhUbvgaC41VHAt6+TfMVxHwFW7oWkdvyFsaN6x+S6l+EDaL3lTTx0Lj6PKm+I2wPvV3SxHnj6uOk+oWwPfQuSRPHjavzhK1PGjrlIeHvkFADFAlprsG6EhIkjDxbX15EkPAPQEIk1F/LhGtXZ2uChMPvLYbf4yPhayFhDSTUABLWQEINIGGNNzlrm0wdfU0nBAn/ACREQv0hYU1Cm1n6YjZBwuH3+Ej4WkhYAwk1gIQ1kFADSFgDCTWAhDWQUANIWOONE7LgR+H9/cqCnnSS0J8sT/z2yP7DY3zB9shfRjY3M5tutNVjOkgYfMj3gE4Lw98V7gpF/WakT7go3+dalxe0HabzHOqE7KFxen2++06ckG0eCWiaM4KmP4g4oXtLML98MsOKF+m/zfPW+VngTNIF/W1F2oSjW5xsGNS3WODmY1bCTc+/RdKEjmh8lBWLUUfmVa7CjmJhX0dU0oRn3nRpBM5RuUceS99DtygTimFex7xUbEK3XIl99bkRKRNeecOlMzM+7ksxNpE/Wu9rMBFlQr5pRlLpprRNi9VUBR0gTCj2SScvtMxSX5IRI0/lJX7VE8XWL8WECb1ys53yXpsRw6PzkaeO6knrMqvpzxXF67wH2imKT+mwT8KEk/JhJa5sqZTYutkQa3ZSNFEaNHhUFpvMkD64yukmoTyUka/7pKwnNyHrNisKf303gjFTF393k3AlFYZ3E7JiQkvdxGyQuasuT/fig7o4JE9oF753I91LVb9DMYg8/x2q52XIuhn1Ns56G3ZWFacHdcKE5WYbPl+gGkZ9KX8ZTPG6llxB8V6ZfMIQVIuzL5YwodjXFlIpX3BVVOPHxnPjT30KZY8vDnksLx3d2U1FZ9FmooMnUCYMC/u/kXaI1avd1d0faAdIry3ELCDSld9KubHEfBz/Gn/oc0gTeqWD3O1oWop4m3Ckr7k0aK/xbycf1+y3eLvon+V7ZHC7VfXd+DOfRJvQSk+/In4w98PsdGMXJyH9OL2X2tOFhUF+J0rqm8fu3ixYu/mdU5fdXycx6vulgfokumTZX0D6e97WnQsBWV+3aLgOnluExb1z5sfFM+d5v1MudfLsKb6macYHfhR1dunOu4/6nlKqq+eHQezZXiydHft8wQseIOIZcA0k1AAS1niThIOe62v487UNf8694c+bOPy5L99g/tLhz0H7BvMID38u6DeYz/sN5mQ3hj+vfsLX8v9G0PEADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/3HzJYTdwRT/FFAAAAAElFTkSuQmCC">
          </div>
          <div style="position: relative;clear: both;">
            <select style="clear: both;float: left;width: 50%;border: 1px solid grey;border-radius: 5px;font-size: 18px;padding: 6px 2%;">
              <option>Canada</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div style="float: right;width: 38%;margin-top: 0px;">
            <input class="smallinput" placeholder="Billing Address" style="clear: both;font-size: 18px;width:86%;padding: 3px 2%;margin-top: 0px;"/>
          </div>
          <div style="clear: both;">
            <input class="smallinput" type="text" style="width: 35%;float: left;" placeholder="City">
            <select style="float: left;margin-left: 4%;margin-top: 25px;font-size: 18px;padding: 3px 5px;border-radius: 5px;border: 2px solid #999;width: 30%;">
              <option v-for="object in pl" :key="object.province">{{ object.province }}</option>
            </select>
            <input style="float: left;width: 22%;margin-left: 4%;" class="smallinput" type="text" placeholder="Postcode">
          </div>
          <button @click="next = false" style="background-color: #F2A52F;border-radius: 5px;font-size: 25px;padding: 13px 50px;margin-top: 28px;">next</button>
        </div>
      </div>
      <div class="rightside" style="float: right;width: 30%;">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'donationpage',
  created() {
    this.$parent.nav = false
  },
  data() {
    return {
      amount: '',
      nolessthanfiveerror: false,
      chosentip: 15,
      othervalue: '',
      noemptyamounterror: false,
      noemptyfirstnameerror: false,
      noemptylastnameerror: false,
      next: true,
      country: 'Canada',
      firstname: '',
      lastname: '',
      pl: [{province:'AB'},{province:'BC'},{province:"ON"},{province:'QC'},{province:'YT'}],
    }
  },
  watch: {
    amount: function(val) {
      val = val.replace(/[^0-9]/i, '');
      this.noemptyamounterror = false
      this.amount = val
      var number = parseInt(val)
      if (number < 5) {
        this.nolessthanfiveerror = true
      } else {
        this.nolessthanfiveerror = false
      }
    },
    othervalue: function(val) {
      val = val.replace(/[^0-9^\\.]/i, '');
      if (val.charAt(val.length - 1) == '.' && val.replace(/[^\\.]/g, '').length > 1) {
        val = val.substring(0, val.length - 1);
      }
      if (val.charAt(0) == '.') { 
        val = '0' + val
      }
      if (val.charAt(val.length - 4) == '.') {
        val = val.substring(0, val.length - 1)
      }
      this.othervalue = val
    },
    firstname: function(val) {
      if (val !== '') {
        this.noemptyfirstnameerror = false
      }
      val = val.replace(/[^a-z^A-Z]/i, '');
      this.firstname = val
    },
    lastname: function(val) {
      if (val !== '') {
        this.noemptylastnameerror = false
      }
      val = val.replace(/[^a-z^A-Z]/i, '');
      this.last = val
    }
  },
  methods: {
    findpercent(value) {
      var amount = this.amount
      if (this.amount == '') return ''
      var percent = (value / 100) * parseInt(amount)
      return '($' + percent.toFixed(2) + ')'
    },
    capitalize(value) {
      this[value] = this[value].slice(0,1).toUpperCase() + this[value].slice(1,)
    },
    check() {
      console.log('function called')
      if (this.amount == '') {
        window.scrollTo(0,140);
        this.noemptyamounterror = true
        return;
      }
      if (parseInt(this.amount) < 5) {
        window.scrollTo(0,140);
        return;
      }
      if (this.firstname == '') {
        this.noemptyfirstnameerror = true
        return;
      }
      if (this.lastname == '') {
        this.noemptylastnameerror = true
        return;
      }
      this.next = false
      window.scrollTo(0,0)
    },
    checkdots() {
      if (this.othervalue.indexOf('.') === -1) {
        this.othervalue = this.othervalue + '.00'
      }
    }
  },
  computed: {
    totalcharge: function() {
      if (this.amount == '') return ''
      if (this.chosentip == 'other') {
        othervalue = this.othervalue
        if (othervalue.slice(-3,-2) == '.') {
          var amount = parseFloat(this.amount)
          var othervalue = parseFloat(othervalue)
          var sum = Number(amount) + Number(othervalue)
          return sum.toFixed(2)
        } else if (othervalue.toString().includes('.')) {
          return 'Invalid amount. Usually there are two decimals or none!'
        } else if (othervalue.toString() == '' ) {
          return this.amount + '.00'
        } else if (othervalue.toString().includes('.') == false) {
          amount = parseInt(this.amount)
          othervalue = parseInt(this.othervalue)
          return (amount + othervalue).toString() + '.00'
        }
      } else if (this.chosentip == '15') {
        amount = parseFloat(this.amount)
        var tip = Number(this.findpercent(15).slice(2,-1))
        return parseFloat(tip + amount).toFixed(2)
      } else if (this.chosentip == '10') {
        amount = parseFloat(this.amount)
        tip = Number(this.findpercent(10).slice(2,-1))
        return parseFloat(tip + amount).toFixed(2)
      } else if (this.chosentip == '20') {
        amount = parseFloat(this.amount)
        tip = Number(this.findpercent(20).slice(2,-1))
        return parseFloat(tip + amount).toFixed(2)
      }
      return ''
    }
  }
}
</script>
<style>
.error:before {
  content: '';
  position: absolute;
  border: 10px solid #D87F7F;
  border-color: transparent transparent #D87F7F;
  width: 0px;
  height: 0px;
  top: 206px;
  left: 28%;
}
.fnerror:before {
  content: '';
  position: absolute;
  border: 10px solid #D87F7F;
  border-color: transparent transparent #D87F7F;
  width: 0px;
  height: 0px;
  top: 61px;
  left: 10%;
}
.lnerror:before {
  content: '';
  position: absolute;
  border: 10px solid #D87F7F;
  border-color: transparent transparent #D87F7F;
  width: 0px;
  height: 0px;
  top: 61px;
  left: 60%;
}
select {
  -moz-appearance: none;
}
.select-wrapper::after {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TriangleArrow-Down.svg/1200px-TriangleArrow-Down.svg.png');
  background-size: 10px 10px;
  position: absolute;
  width: 10px;
  height: 10px;
  content: '';
  top: 15px;
  left: 88%;
}
.smallinput {
  border: 2px #999 solid;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 5%;
  height: 30px;
}
.ninehundred {
  height: 900px;
}
.small {
  height: 650px;
}
</style>
