<template>
    <div>
        We're in the Auto now
    <!-- Match Number input -->
  <div class="form-group">
    <label>Match Number</label>
    <input type="number" class="form-control" id="match-number" />
  </div>

    <!-- Team Name input -->
  <div class="form-group">
    <label>Team Name</label>
    <input type="text" class="form-control" id="team-name" />
  </div>
    <!-- Team Number input -->
  <div class="form-group">
    <label>Team Number</label>
    <input type="number" class="form-control" id="team-number" />
  </div>



<!-- Match Type input-->
<div class="form-check form-switch">
  <!--I CANNOT FIGURE OUT HOW TO PUT TEXT INSIDE A SWITCH -- for styling either do that or just do a label saying Qualification or Playoff-->
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked >
  <label class="form-check-label" for="flexSwitchCheckChecked">Qualification or Playoff</label>
</div>
    
  <div class="form-group">
    <button v-on:click="$emit('flip')">Flip</button>
    </div>
    </div>
</template>

<script>

export default ({
data(){
    return{
  }
},
    methods:{
      changeHatch(num){
      }
    }
})
</script>