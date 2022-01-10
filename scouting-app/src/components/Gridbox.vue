<template>
  <div class="container">
    <!-- Grid formation -->
    <div class="cols">
      <div class="bor" :style="{background: [currentPos === 1 ? [ s1 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s1]}" v-on:click="setPosition(1)">1</div>
      <div class="bor" :style="{background: [currentPos === 2 ? [ s1 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s1]}" v-on:click="setPosition(2)">2</div>
      <div class="bor" :style="{background: [currentPos === 3 ? [ s2 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s2]}" v-on:click="setPosition(3)">3</div>
      <div class="bor" :style="{background: [currentPos === 4 ? [ s2 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s2]}" v-on:click="setPosition(4)">4</div>
      <div class="bor-mid" :style="{background: [currentPos === 5 ? [ s1 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s1]}" v-on:click="setPosition(5)">5</div>
      <div class="bor-mid" :style="{background: [currentPos === 6 ? [ s1 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s1]}" v-on:click="setPosition(6)">6</div>
      <div class="bor-mid" :style="{background: [currentPos === 7 ? [ s2 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s2]}" v-on:click="setPosition(7)">7</div>
      <div class="bor-mid" :style="{background: [currentPos === 8 ? [ s2 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s2]}" v-on:click="setPosition(8)">8</div>
      <div class="bor" :style="{background: [currentPos === 9 ? [ s1 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s1]}" v-on:click="setPosition(9)">9</div>
      <div class="bor" :style="{background: [currentPos === 10 ? [ s1 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s1]}" v-on:click="setPosition(10)">10</div>
      <div class="bor" :style="{background: [currentPos === 11 ? [ s2 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s2]}" v-on:click="setPosition(11)">11</div>
      <div class="bor" :style="{background: [currentPos === 12 ? [ s2 === '#c0d8ed' ? '#0764f0' :  '#E80028']: s2]}" v-on:click="setPosition(12)">12</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
    props: ['s1', 's2', 'mode', 'gameState'],
    data(){
      return{
        currentPos: Number
      }
    },
    methods: {
    //Sets the current position of the bot
    setPosition(position){
      if(this.mode !== 'playback' && (this.gameState !== 'pregame' || position === 5 || position === 8))
      this.currentPos = position
    }
  },
  created(){
    console.log(this.s1, this.s2, this.currentPos)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}
.card {
  border-radius: 10px;
 /* background-color: #422d53;*/
  width: 50%;
}
.auth {
  width: 75%;
}
.cols {
  display: grid;
  grid-template-columns: 12.5% 37% 37% 12.5%;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  background-color: black;
}
/** .img {
  background-image: url("../image.jpg");
}
*/
.bor {
  border: 1px solid white;
  padding-bottom: 4em;
  padding-top: 4em;
}
.bor-mid {
  border: 1px solid white;
  padding-bottom: 8.5em;
  padding-top: 8.5em;
}
.btn {
  background-color: #201f41;
}
</style>
