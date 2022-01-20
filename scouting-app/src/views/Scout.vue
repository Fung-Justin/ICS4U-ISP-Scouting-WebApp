<template>
  <div id = 'page'>
        <p v-if="errors.length">
    <b>Missing:</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <section class = "text-center mt-2">
    <button class = "btn bg-dark text-light mx-2" v-on:click="gameState = 'pregame'" :style="[gameState === 'pregame' ? 'background-color: white !important; border: 2px solid black; color: black !important;' : '']">Pregame</button>
    <button class = "btn bg-dark text-light mx-2" v-on:click="gameState = 'midgame'" :style="[gameState === 'midgame' ? 'background-color: white !important; border: 2px solid black; color: black !important;' : '']">Midgame</button>
    <button class = "btn bg-dark text-light mx-2" v-on:click="gameState = 'endgame'" :style="[gameState === 'endgame' ? 'background-color: white !important; border: 2px solid black; color: black !important;' : '']">Endgame</button>
  </section>
    <Timer id = 'timer' v-show="gameState === 'midgame'" @getTime='this.currTime=$event' @getTS='this.timeString=$event' :paused='false' :run='events.length!==0' :speed='1'/>
    <Grid id = 'grid' :flipped='flipped' v-if="gameState !== 'endgame'" :time="currTime" @getPosition='getPosition($event)'/>
    <Pregame id = 'pregame' v-show="gameState === 'pregame'" @sendData="setPreGame($event)"/>
    <Midgame id = 'midgame' v-show="gameState === 'midgame'" :currTime='currTime' @createEvent='createEvent' @removeEvent='removeEvent'/>
    <Endgame id = 'endgame' v-show="gameState === 'endgame'" @sendData="setEndGame($event)" @submit="submit"/>

  </div>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Pregame from '@/components/Pregame.vue'
import Midgame from '@/components/Midgame.vue'
import Endgame from '@/components/Endgame.vue'
import Timer from '@/components/Timer.vue'

import PostService from '../PostService'


export default{
  components: {
    Grid,
    Pregame,
    Midgame,
    Endgame,
    Timer
  }, data() {
    return {
    //  reset: 0,
      errors: [],
      gameState: "pregame",
      currTime: 0.0,
      timeString: '2:30',
      currPos: Number,
      events: [], 
      matchNumber: Number,
      teamNumber: Number,
      flipped: Boolean,
      climb: Number,
      defense: Number,
      scoutName: '',
      comments: '',
      win: false
    }
}, 
methods:{
setPreGame({matchNumber, teamNumber, flipped}){
 this.matchNumber = matchNumber
 this.teamNumber = teamNumber
 this.flipped= flipped
},
setEndGame({climb, defense, scoutName, comments, win}){
  this.climb = climb
  this.defense = defense
  this.scoutName = scoutName
  this.comments = comments
  this.win = win
},
//Creates a movement event if position of bot changes
getPosition(e){
  if(this.currPos !== e){
    this.currPos = e
    if(this.currTime == 0.0 && this.events.length > 0)
      this.removeEvent('')
    this.createEvent('')
}
},
createEvent(event){
  if(this.currTime !== 150){
    console.log(typeof this.currTime)
  this.events.push({
    time: this.currTime, 
    position: this.currPos, 
    event: event,
    TS: this.timeString
    })
    }
    console.log(this.events)
  //get time 
  //add event to events array
}, removeEvent(event){
  let index = this.events.length-1
  while(this.events[index].event !== event){
    index --
  }
  this.events.splice(index, 1)
  //searches through event array, deletes the last recorded type of that event
}, async submit(){
  //Should we just do one error for incomplete input and match ongoing? (also for styling possibly do red boxes around the inputs that are incomplete)
  this.errors=[];
  /*if(this.currTime !== 150)
    this.errors.push('Completed Match Data')
  if(typeof this.matchNumber !== 'number')
    this.errors.push('Match Number Required')
  if(typeof this.teamNumber !== 'number')
    this.errors.push('Team Number Required')
  if(this.scoutName === '')
    this.errors.push('Scout Name')
  if(this.comments === '')
    this.errors.push('Comments')*/


  //TODO: error handling (only check for teamNumber, matchNumber and starting pos)
    //console.log(this.reset)
    //Object.assign(this.$data, this.$options.data.apply(this))
       // this.reset +=1
  //console.log(this.reset)
    //Changes the variable reset so that child components re-render
   // console.log(this.reset)
   if(this.errors.length === 0){
  let match = {
    compID: this.$route.query.compID,
    matchNumber: this.matchNumber,
    teamNumber: this.teamNumber,
    flipped: this.flipped,
    events: this.events,
    climb: this.climb,
    defense: this.defense,
    comments: this.comments,
    scoutName: this.scoutName,
    win: this.win
  }
  console.log(match)

  //SEND TO DB
  await PostService.insertPost(match)
  //console.log(match)
  }
}
}}
</script>

<style scoped>
div{
  padding-top: 5em
}
#grid{
  margin-top: -3.5em;
}
#pregame{
  margin-top: -3.5em;
}
#timer{
  margin-top: -4em !important;
  margin-bottom: -4.3em !important;
}
#midgame{
  margin-top: -2em;
}
.btn{
  margin-top: -4em;
}
#endgame{
  margin-top: -2em;
}
#page{
  height:100%;
}
</style>