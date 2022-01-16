<template>
    <div>
        <Timer @getTime='time = $event' :paused='paused' :sliderTime='time' @resetSlider='time=0'/>
        <Grid/>
        <input type="range" v-model="time" min="0" max="150">
        <div>{{time}}</div>
        <button v-on:click='paused=true'>Pause</button>
        <button v-on:click='paused=false'>play</button>
    </div>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Timer from '@/components/Timer.vue'


export default ({
    components: {
        Timer,
        Grid
    }, data(){
        return{
            time: 0,
            paused: false
        }
    }

})
//THINGS TO DO IN THIS VIEW
// 1 - see if you can get the timer component to follow the scroll (done)
// 2 - get match from id from url
// 3 - display movements 
// 4 - display movements based off time
// repeat 3-4 with actions
</script>
