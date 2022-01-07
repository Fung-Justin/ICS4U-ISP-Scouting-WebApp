<template>
  <div>
  <section>
    <button v-on:click="gameState = auto">Auto</button>
    <button v-on:click="gameState = teleop">Teleop</button>
    <button v-on:click="gameState = endgame">Endgame</button>
    <div>{{gameState}}</div>
  </section>
    <Grid v-if="gameState !== 'endgame'"/>
    <Auto v-if="gameState === 'auto'"/>
    <Teleop v-if="gameState === 'teleop'"/>
    <Endgame v-if="gameState === 'endgame'"/>
  </div>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Auto from '@/components/Auto.vue'
import Teleop from '@/components/Teleop.vue'
import Endgame from '@/components/Endgame.vue'

export default{
  components: {
    Grid,
    Auto,
    Teleop,
    Endgame
  }, data() {
    return {
      gameState: String
    }
}, 
mounted() {
    this.gameState = 'endgame'
    let i = 0;
    while(i < 100){
       setTimeout(() => {
         console.log(this.gameState)
       } , 1000)
       i++
    }
}}
</script>

