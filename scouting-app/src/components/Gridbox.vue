<template>
  <div class="container">
    <!-- Grid formation -->
    <div class="cols">
      <div class="bor" :style="{background: [flipped ? [currentPos === 1 ? 'linear-gradient(to right, #8B0001 0%, #9E1711 100%)' : '#edc0c8']: [currentPos === 1 ? 'linear-gradient(to right, #010280 0%, #061993 100%)' : '#c0d8ed']]}" v-on:click="setPosition(1)">1</div>
      <div class="bor" :style="{background: [flipped ? [currentPos === 2 ? 'linear-gradient(to right, #9E1711 0%, #C34632 100%)' : '#edc0c8']: [currentPos === 2 ? 'linear-gradient(to right, #061993 0%, #1973D1 100%)' : '#c0d8ed']]}" v-on:click="setPosition(2)">2</div>
      <div class="bor" :style="{background: [!flipped ? [currentPos === 3 ? 'linear-gradient(to left, #9E1711 0%, #C34632 100%)' : '#edc0c8']: [currentPos === 3 ? 'linear-gradient(to left, #061993 0%, #1973D1 100%)' : '#c0d8ed']]}" v-on:click="setPosition(3)">3</div>
      <div class="bor" :style="{background: [!flipped ? [currentPos === 4 ? 'linear-gradient(to left, #8B0001 0%, #9E1711 100%)' : '#edc0c8']: [currentPos === 4 ? 'linear-gradient(to right, #010280 0%, #061993 100%)' : '#c0d8ed']]}" v-on:click="setPosition(4)">4</div>
      <div class="bor-mid" :style="{background: [flipped ? [currentPos === 5 ? 'linear-gradient(to right, #8B0001 0%, #9E1711 100%)' : '#edc0c8']: [currentPos === 5 ? 'linear-gradient(to right, #010280 0%, #061993 100%)' : '#c0d8ed']]}" v-on:click="setPosition(5)">5</div>
      <div class="bor-mid" :style="{background: [flipped ? [currentPos === 6 ? 'linear-gradient(to right, #9E1711 0%, #C34632 100%)' : '#edc0c8']: [currentPos === 6 ? 'linear-gradient(to right, #061993 0%, #1973D1 100%)' : '#c0d8ed']]}" v-on:click="setPosition(6)">6</div>
      <div class="bor-mid" :style="{background: [!flipped ? [currentPos === 7 ? 'linear-gradient(to left, #9E1711 0%, #C34632 100%)' : '#edc0c8']: [currentPos === 7 ? 'linear-gradient(to left, #061993 0%, #1973D1 100%)' : '#c0d8ed']]}" v-on:click="setPosition(7)">7</div>
      <div class="bor-mid" :style="{background: [!flipped ? [currentPos === 8 ? 'linear-gradient(to left, #8B0001 0%, #9E1711 100%)' : '#edc0c8']: [currentPos === 8 ? 'linear-gradient(to right, #010280 0%, #061993 100%)' : '#c0d8ed']]}" v-on:click="setPosition(8)">8</div>
      <div class="bor" :style="{background: [flipped ? [currentPos === 9 ? 'linear-gradient(to left, #8B0001 0%, #9E1711 100%)' : '#edc0c8']: [currentPos === 9 ? 'linear-gradient(to right, #010280 0%, #061993 100%)' : '#c0d8ed']]}" v-on:click="setPosition(9)">9</div>
      <div class="bor" :style="{background: [flipped ? [currentPos === 10 ? 'linear-gradient(to right, #9E1711 0%, #C34632 100%)' : '#edc0c8']: [currentPos === 10 ? 'linear-gradient(to right, #061993 0%, #1973D1 100%)' : '#c0d8ed']]}" v-on:click="setPosition(10)">10</div>
      <div class="bor" :style="{background: [!flipped ? [currentPos === 11 ? 'linear-gradient(to left, #9E1711 0%, #C34632 100%)' : '#edc0c8']: [currentPos === 11 ? 'linear-gradient(to left, #061993 0%, #1973D1 100%)' : '#c0d8ed']]}" v-on:click="setPosition(11)">11</div>
      <div class="bor" :style="{background: [!flipped ? [currentPos === 12 ? 'linear-gradient(to left, #8B0001 0%, #9E1711 100%)' : '#edc0c8']: [currentPos === 12 ? 'linear-gradient(to right, #010280 0%, #061993 100%)' : '#c0d8ed']]}" v-on:click="setPosition(12)">12</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Grid",
    props: ['flipped', 'playbackPos', 'time'],
    data(){
      return{
        currentPos: Number
      }
      },
    methods: {
    //Sets the current position of the bot
    setPosition(position){
      if(this.playbackPos === undefined && (this.time !== 0.0 || position === 5 || position === 8)){
      this.currentPos = position
      this.$emit('getPosition', this.currentPos);
        }
    }
  },
  watch:{
    //Sets the current position to the playback position whenever there is a change in the playback position
    playbackPos(newVal){
      this.currentPos = newVal
    }
  }, created(){
    if(this.playbackPos !== undefined)
      this.currentPos = this.playbackPos
  }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cols {
  display: grid;
  grid-template-columns: 12.5% 37% 37% 12.5%;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
}
/** .img {
  background-image: url("../image.jpg");
}
*/
.bor {
  border: 1px solid white;
  padding-bottom: 4em;
  padding-top: 4em;
  color: white;
  background-color: black;
}
.bor-mid {
  border: 1px solid white;
  padding-bottom: 8.5em;
  padding-top: 8.5em;
  color: white;
  background-color: black;
}
</style>