<template>
  <div>
  <section>
    <button v-on:click="gameState = 'pregame'" :style="[gameState === 'pregame' ? 'background: #d0ddf7' : '']">Pregame</button>
    <button v-on:click="gameState = 'midgame'" :style="[gameState === 'midgame' ? 'background: #d0ddf7' : '']">Midgame</button>
    <button v-on:click="gameState = 'endgame'" :style="[gameState === 'endgame' ? 'background: #d0ddf7' : '']">Endgame</button>
    <button v-on:click="createEvent">test</button>
    <div>{{gameState}} 00ga</div>
  </section>
    <Timer v-show="gameState === 'midgame'" @getTime='getTime($event)'/>
    <Grid :flipped='flipped' :mode='"scout"' v-if="gameState !== 'endgame'" :time="currTime" @getPosition='getPosition($event)'/>
    <Pregame v-show="gameState === 'pregame'" @flip="flip()"/>
    <Midgame v-show="gameState === 'midgame'" :currTime='currTime' @createEvent='createEvent' @removeEvent='removeEvent'/>
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
      flipped: false,
      currTime: 0.0,
      currPos: Number,
      events: []
    }
}, 
methods:{
flip(){
  this.flipped = !this.flipped
  //console.log("flip flop")
  console.log(this.flipped)
  console.log(typeof this.flipped)
},
getTime(e){
  this.currTime = e
},
getPosition(e){
  if(this.currPos !== e)
    this.createEvent('')
  this.currPos = e

},
createEvent(event){
  this.events.push({
    time: this.currTime, 
    position: this.currPos, 
    event: event})
  console.log(this.events)
 // console.log(time)
  //get time 
  //add event to events array
}, removeEvent(event){
  let index = this.events.length-1
  //MAYBE REMOVE this.events[index] cause never let this function run if the thing won't be found??
  while(this.events[index] && this.events[index].event !== event){
    console.log(this.events[index].event)
    index --
  }
  this.events.splice(index, 1)
  //searches through event array, deletes the last recorded type of that event
}
}}
</script>

