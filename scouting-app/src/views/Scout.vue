<template>
  <div>
  <section>
    <button v-on:click="gameState = 'pregame'" :style="[gameState === 'pregame' ? 'background: #d0ddf7' : '']">Pregame</button>
    <button v-on:click="gameState = 'midgame'" :style="[gameState === 'midgame' ? 'background: #d0ddf7' : '']">Midgame</button>
    <button v-on:click="gameState = 'endgame'" :style="[gameState === 'endgame' ? 'background: #d0ddf7' : '']">Endgame</button>
    <div>{{gameState}} 00ga</div>
  </section>
    <Timer v-show="gameState === 'midgame'" @getTime='getTime($event)'/>
    <Grid :s1='s1' :s2='s2' :mode='"scout"' v-if="gameState !== 'endgame'" :gameState="gameState"/>
    <Pregame v-show="gameState === 'pregame'" @flip="flip()"/>
    <Midgame v-show="gameState === 'midgame'"/>
    <Endgame v-show="gameState === 'endgame'"/>

  </div>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Pregame from '@/components/Pregame.vue'
import Midgame from '@/components/Midgame.vue'
import Endgame from '@/components/Endgame.vue'
import Timer from '@/components/Timer.vue'


export default{
  components: {
    Grid,
    Pregame,
    Midgame,
    Endgame,
    Timer
  }, data() {
    return {
      gameState: "pregame",
      s1: "#c0d8ed",
      s2: "#edc0c8",
      currTime: 0.0,
      Events: []
    }
}, 
methods:{
      flip(){
      console.log('gseiogs')
      this.s1 = this.s1 === "#c0d8ed" ? "#edc0c8" : "#c0d8ed"
      this.s2 = this.s2 === "#c0d8ed" ? "#edc0c8" : "#c0d8ed"
    },
getTime(e){
  this.currTime = e
},
createEvent(event){
  console.log(this.currTime)
 // console.log(time)
  //get time 
  //add event to events array
}, removeEvent(event){
  //searches through event array, deletes the last recorded type of that event
}
},
mounted() {
    let i = 0;
    while(i < 100){
       setTimeout(() => {
         console.log(this.gameState)
       } , 1000)
       i++
    }
}}
</script>

