<template>
    <div class = "container pb-4">
      <div class="card bg-dark text-light mx-auto">
    <!-- Match Number input -->
      <div class="form-group text-center mt-3">
        <h5>Match Number</h5>
        <input v-model="matchNumber" type="number" class="form-control mx-auto" id="match-number">
      </div>

    <!-- Team Number input -->
      <div class="form-group text-center mt-4">
        <h5>Team Number</h5>
        <input v-model="teamNumber" type="number" class="form-control mx-auto" id="team-number"/>
      </div>

      <div class="form-group text-center mt-4 pb-4">
        <button type="button" class="btn btn-lg btn-block" v-on:click="flipped=!flipped">Flip</button>
      </div>
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

<style scoped>
#match-number{
  width: 50%;
  
}
#team-number{
  width: 50%;
}
.btn{
  background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);
  width: 50%;
}
.card{
  border-radius: 8px;
  width: 50%;
}
</style>