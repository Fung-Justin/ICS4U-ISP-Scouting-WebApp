<template>
  <div id = 'page'>
  <!-- Change state buttons-->
    <section class = "text-center mt-2">
      <button class = "btn bg-dark text-light mx-2" v-on:click="gameState = 'pregame'" :style="[gameState === 'pregame' ? 'background-color: white !important; border: 2px solid black; color: black !important;' : '']">Pregame</button>
      <button class = "btn bg-dark text-light mx-2" v-on:click="gameState = 'midgame'" :style="[gameState === 'midgame' ? 'background-color: white !important; border: 2px solid black; color: black !important;' : '']">Midgame</button>
      <button class = "btn bg-dark text-light mx-2" v-on:click="gameState = 'endgame'" :style="[gameState === 'endgame' ? 'background-color: white !important; border: 2px solid black; color: black !important;' : '']">Endgame</button>
    </section>
    <!-- Main scouting inputs -->
    <Timer id = 'timer' v-show="gameState === 'midgame'" @getTime='this.currTime=$event' @getTS='this.timeString=$event' :paused='false' :run='events.length!==0' :speed='1'/>
    <Grid id = 'grid' :flipped='flipped' v-show="gameState !== 'endgame'" :time="currTime" @getPosition='getPosition($event)'/>
    <Pregame id = 'pregame' v-show="gameState === 'pregame'" @sendData="setPreGame($event)"/>
    <Midgame v-show="gameState === 'midgame'" :currTime='currTime' @createEvent='createEvent' @removeEvent='removeEvent'/>
    <Endgame v-show="gameState === 'endgame'" @sendData="setEndGame($event)" @submit="submit"/>

    <!-- Error messages -->
    <div class="container pb-3">
      <p class = "text-danger fw-bold" style = " width: 100%; text-align: center" v-if="errors.length">
        <h2>Information Missing!</h2>
        <h5 id = 'error-list' v-for="error in errors">{{ error }}</h5>
      </p>
  </div>
  </div>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Pregame from '@/components/Pregame.vue'
import Midgame from '@/components/Midgame.vue'
import Endgame from '@/components/Endgame.vue'
import Timer from '@/components/Timer.vue'

import PostService from '../PostService'


export default {
  components: {
    Grid,
    Pregame,
    Midgame,
    Endgame,
    Timer
  },
  data() {
    return {
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
  methods: {
    //Sets the preGame data from preGame component
    setPreGame({matchNumber, teamNumber,flipped}) {
      this.matchNumber = matchNumber
      this.teamNumber = teamNumber
      this.flipped = flipped
    },
    //Sets the endGame data from endGame component
    setEndGame({climb, defense, scoutName, comments, win, rocket}) {
      this.climb = climb
      this.defense = defense
      this.scoutName = scoutName
      this.comments = comments
      this.win = win,
      this.rocket = rocket
    },
    //Creates a movement action if position of bot changes
    getPosition(e) {
      if (this.currPos !== e) {
        this.currPos = e
        if (this.currTime == 0.0 && this.events.length > 0)
          this.removeEvent('')
        this.createEvent('')
      }
    },
    /*Creates a new action consisting of time (as seconds and in 0:00 format), 
    position of robot and event*/
    createEvent(event) {
      if (this.currTime !== 150) {
        console.log(typeof this.currTime)
        this.events.push({
          time: this.currTime,
          position: this.currPos,
          event: event,
          TS: this.timeString
        })
      }
    },
    //Removes the last recorded type of a given event from the bots actions
    removeEvent(event) {
      let index = this.events.length - 1
      while (this.events[index].event !== event) {
        index--
      }
      this.events.splice(index, 1)
    },
    //Checks for errors and submits data if there aren't any
    async submit() {
      this.errors = [];
      if (this.currTime !== 150)
        this.errors.push('Completed Match Data')
      if (typeof this.matchNumber !== 'number')
        this.errors.push('Match Number Required')
      if (typeof this.teamNumber !== 'number')
        this.errors.push('Team Number Required')
      if (this.scoutName === '')
        this.errors.push('Scout Name')
      if (this.comments === '')
        this.errors.push('Comments')

      if (this.errors.length === 0) {
        let match = {
          matchNumber: this.matchNumber,
          teamNumber: this.teamNumber,
          flipped: this.flipped,
          events: this.events,
          climb: this.climb,
          defense: this.defense,
          comments: this.comments,
          scoutName: this.scoutName,
          win: this.win,
          colour: this.flipped && this.events[0].position === 3 || !this.flipped && this.events[0].position === 8 ? 'red' : 'blue',
          rocket: this.rocket
        }

        //SEND TO DB
        const res = await PostService.insertPost(match)

        //Go to match playback
        this.$router.push(`playback?id=${res.data}`)
      }
    }
  }
}
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
  padding-top: 7em;
}
#error-list{
  line-height: 0.9;
}
.container{
  margin-top: -3em;
}
</style>