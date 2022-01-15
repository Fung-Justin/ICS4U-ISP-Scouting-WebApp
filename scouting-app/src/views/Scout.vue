<template>
  <div>
        <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <section>
    <button v-on:click="gameState = 'pregame'" :style="[gameState === 'pregame' ? 'background: #d0ddf7' : '']">Pregame</button>
    <button v-on:click="gameState = 'midgame'" :style="[gameState === 'midgame' ? 'background: #d0ddf7' : '']">Midgame</button>
    <button v-on:click="gameState = 'endgame'" :style="[gameState === 'endgame' ? 'background: #d0ddf7' : '']">Endgame</button>
  </section>
    <Timer v-show="gameState === 'midgame'" @getTime='getTime($event)'/>
    <Grid :flipped='flipped' :mode='"scout"' v-if="gameState !== 'endgame'" :time="currTime" @getPosition='getPosition($event)'/>
    <Pregame v-show="gameState === 'pregame'" @sendData="setPreGame($event)"/>
    <Midgame v-show="gameState === 'midgame'" :currTime='currTime' @createEvent='createEvent' @removeEvent='removeEvent'/>
    <Endgame v-show="gameState === 'endgame'" @sendData="setEndGame($event)" @submit="submit"/>

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
      errors: [],
      gameState: "pregame",
      currTime: 0.0,
      currPos: Number,
      events: [], 
      matchNumber: Number,
      teamNumber: Number,
      playoff: Boolean,
      flipped: Boolean,
      climb: Number,
      defense: Number,
      scoutName: String,
      comments: String
    }
}, 
methods:{
setPreGame({matchNumber, teamNumber, playoff, flipped}){
 this.matchNumber = matchNumber
 this.teamNumber = teamNumber
 this.playoff = playoff
 this.flipped= flipped
},
setEndGame({climb, defense, scoutName, comments}){
  this.climb = climb
  this.defense = defense
  this.scoutName = scoutName
  this.comments = comments
},
getTime(e){
  this.currTime = e
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
  this.events.push({
    time: this.currTime, 
    position: this.currPos, 
    event: event})
    }
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
  /*this.errors=[];
  if(!this.matchNumber)
    this.errors.push('Match Number Required')
  if(!this.teamNumber)
    this.errors.push('Team Number Required')
  if(this.currTime != 0.0)
    this.errors.push('Match Still Ongoing')
  if(!this.scoutName)*/

  //TODO: error handling (only check for teamNumber, matchNumber and starting pos)
  let match = {
    compID: this.$route.query.compID,
    matchNumber: this.matchNumber,
    teamNumber: this.teamNumber,
    playoff: this.playoff,
    flipped: this.flipped,
    events: this.events,
    climb: this.climb,
    defense: this.defense,
    comments: this.comments,
    scoutName: this.scoutName
  }
  await PostService.insertPost(match)
  //console.log(match)
  //SEND TO DB
}
}}
</script>