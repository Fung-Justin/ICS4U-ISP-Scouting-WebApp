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
    <input v-model="teamNumber" type="number" class="form-control" id="team-number" />
  </div>



<!-- Match Type input-->
<div class="form-check form-switch">
  <!--I CANNOT FIGURE OUT HOW TO PUT TEXT INSIDE A SWITCH -- for styling either do that or just do a label saying Qualification or Playoff-->
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="playoff" checked >
  <label class="form-check-label" for="flexSwitchCheckChecked">Qualification or Playoff</label>
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
      playoff: false,
      flipped: false
  }
},
  created(){
watchEffect(() => {
  this.$emit('sendData',  {matchNumber: this.matchNumber, teamNumber: this.teamNumber, playoff: this.playoff, flipped: this.flipped})
  })
}
})
</script>