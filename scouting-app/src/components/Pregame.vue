<template>
    <div>
    <!-- Match Number input -->
  <div class="form-group">
    <label>Match Number</label>
    <input v-model="matchNumber" type="number" class="form-control" id="match-number">
  </div>

    <!-- Team Number input -->
  <div class="form-group">
    <label>Team Number</label>
    <input v-model="teamNumber" type="number" class="form-control" id="team-number"/>
  </div>

    
  <div class="form-group">
    <button v-on:click="flipped=!flipped">Flip</button>
    </div>
    </div>
</template>

<script>
import { watchEffect, ref, defineComponent } from "vue";

export default ({
data(){
    return{
      matchNumber: Number,
      teamNumber: Number,
      flipped: false
  }
},
  created(){
watchEffect(() => {
  this.$emit('sendData',  {matchNumber: this.matchNumber, teamNumber: this.teamNumber, flipped: this.flipped})
  })
}
})
</script>