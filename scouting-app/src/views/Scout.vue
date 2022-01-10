<template>
  <div>
  <section>
    <button v-on:click="gameState = 'pregame'">Pregame</button>
    <button v-on:click="gameState = 'teleop'">Teleop</button>
    <button v-on:click="gameState = 'endgame'">Endgame</button>
    <div>{{gameState}} 00ga</div>
  </section>
    <Timer v-if="gameState === 'teleop'"/>
    <Grid :s1='s1' :s2='s2' :mode='"scout"' v-if="gameState !== 'endgame'" :gameState="gameState"/>
    <Pregame v-show="gameState === 'pregame'" @flip="flip()"/>
    <Teleop v-show="gameState === 'teleop'"/>
    <Endgame v-show="gameState === 'endgame'"/>

  </div>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Pregame from '@/components/Pregame.vue'
import Teleop from '@/components/Teleop.vue'
import Endgame from '@/components/Endgame.vue'
import Timer from '@/components/Timer.vue'


export default{
  components: {
    Grid,
    Pregame,
    Teleop,
    Endgame,
    Timer
  }, data() {
    return {
      gameState: "pregame",
      s1: "#c0d8ed",
      s2: "#edc0c8"
    }
}, 
methods:{
      flip(){
      console.log('gseiogs')
      this.s1 = this.s1 === "#c0d8ed" ? "#edc0c8" : "#c0d8ed"
      this.s2 = this.s2 === "#c0d8ed" ? "#edc0c8" : "#c0d8ed"
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

