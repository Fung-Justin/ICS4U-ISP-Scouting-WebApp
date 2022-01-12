<template>
    <div>
<!-- Hatch Panels -->
<section>
<!-- intake hatch -->
<button v-on:click="changeStat('intakeHatch', 0)">Intake Hatch</button>

<!-- hatches placed in cargo bay-->
<button v-on:click="changeStat('hatchCB', -1)">-</button>
<button>{{hatchCB}} hatches on Cargo Bay</button>
<button v-on:click="changeStat('hatchCB', 1)">+</button>

<!-- hatches placed in lowest level of rocket-->
<button v-on:click="changeStat('hatchRocketL', -1)">-</button>
<button>{{hatchRocketL}} hatches on bottom rocket</button>
<button v-on:click="changeStat('hatchRocketL', 1)">+</button>

<!-- hatches placed in middle level of rocket-->
<button v-on:click="changeStat('hatchRocketM', -1)">-</button>
<button>{{hatchRocketM}} hatches on middle rocket</button>
<button v-on:click="changeStat('hatchRocketM', 1)">+</button>

<!-- hatches placed in highest level of rocket-->
<button v-on:click="changeStat('hatchRocketH', -1)">-</button>
<button>{{hatchRocketH}} hatches on high rocket</button>
<button v-on:click="changeStat('hatchRocketH', 1)">+</button>
</section>

<!-- Cargo -->
<section>

    <!-- intake cargo -->
    <button v-on:click="changeStat('intakeCargo', 0)">Intake cargo</button>

    <!-- cargo placed in cargo bay-->
    <button v-on:click="changeStat('cargoCB', -1)">-</button>
    <button>{{cargoCB}} cargo on Cargo Bay</button>
    <button v-on:click="changeStat('cargoCB', 1)">+</button>

    <!-- cargo placed in lowest level of rocket-->
    <button v-on:click="changeStat('cargoRocketL', -1)">-</button>
    <button>{{cargoRocketL}} cargo on bottom rocket</button>
    <button v-on:click="changeStat('cargoRocketL', 1)">+</button>

    <!-- cargo placed in middle level of rocket-->
    <button v-on:click="changeStat('cargoRocketM', -1)">-</button>
    <button>{{cargoRocketM}} cargo on middle rocket</button>
    <button v-on:click="changeStat('cargoRocketM', 1)">+</button>

    <!-- cargo placed in highest level of rocket-->
    <button v-on:click="changeStat('cargoRocketH', -1)">-</button>
    <button>{{cargoRocketH}} cargo on high rocket</button>
    <button v-on:click="changeStat('cargoRocketH', 1)">+</button>
</section>

    </div>
</template>

<script>

export default ({
        data(){
    return{
    hatchCB: 0,
    hatchRocketL: 0,
    hatchRocketM: 0,
    hatchRocketH: 0,
    cargoCB: 0,
    cargoRocketL: 0,
    cargoRocketM: 0,
    cargoRocketH: 0,
  }
  }, props:['currTime'], 
  methods:{
      changeStat(stat, change){
        if(this.currTime != 0.0 && this.currTime != 150.0){
          if(change === 1){
            this[stat] +=1
          }
          if(change >= 0){
            this.$emit('createEvent', stat)
          }
          else if(this[stat] !== 0){
            this[stat] -= 1
            this.$emit('removeEvent', stat)
          }
      }
      }
  }
})
</script>