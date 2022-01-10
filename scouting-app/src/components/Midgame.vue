<template>
    <div>
<!-- Hatch Panels -->
<section>
<!-- intake hatch -->
<button>Intake Hatch</button>

<!-- hatches placed in cargo bay-->
<button v-on:click="hatchCB-=(hatchCB===0?0:1)">-</button>
<button>{{hatchCB}} hatches on Cargo Bay</button>
<button v-on:click="hatchCB+=1">+</button>

<!-- hatches placed in lowest level of rocket-->
<button v-on:click="hatchRocketL-=(hatchRocketL===0?0:1)">-</button>
<button>{{hatchRocketL}} hatches on bottom rocket</button>
<button v-on:click="hatchRocketL+=1">+</button>

<!-- hatches placed in middle level of rocket-->
<button v-on:click="hatchRocketM-=(hatchRocketM===0?0:1)">-</button>
<button>{{hatchRocketM}} hatches on middle rocket</button>
<button v-on:click="hatchRocketM+=1">+</button>

<!-- hatches placed in highest level of rocket-->
<button v-on:click="hatchRocketH-=(hatchRocketH===0?0:1)">-</button>
<button>{{hatchRocketH}} hatches on high rocket</button>
<button v-on:click="hatchRocketH+=1">+</button>
</section>

<!-- Cargo -->
<section>

    <!-- intake cargo -->
    <button>Intake cargo</button>

    <!-- cargo placed in cargo bay-->
    <button v-on:click="cargoCB-=(cargoCB===0?0:1)">-</button>
    <button>{{cargoCB}} cargo on Cargo Bay</button>
    <button v-on:click="cargoCB+=1">+</button>

    <!-- cargo placed in lowest level of rocket-->
    <button v-on:click="cargoRocketL-=(cargoRocketL===0?0:1)">-</button>
    <button>{{cargoRocketL}} cargo on bottom rocket</button>
    <button v-on:click="cargoRocketL+=1">+</button>

    <!-- cargo placed in middle level of rocket-->
    <button v-on:click="cargoRocketM-=(cargoRocketM===0?0:1)">-</button>
    <button>{{cargoRocketM}} cargo on middle rocket</button>
    <button v-on:click="cargoRocketM+=1">+</button>

    <!-- cargo placed in highest level of rocket-->
    <button v-on:click="cargoRocketH-=(cargoRocketH===0?0:1)">-</button>
    <button>{{cargoRocketH}} cargo on high rocket</button>
    <button v-on:click="cargoRocketH+=1">+</button>
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
  }
})
</script>
