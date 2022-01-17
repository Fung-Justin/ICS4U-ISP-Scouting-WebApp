<template>
<!-- When making router links to this component, YOU MUST USE ?id={{matchID}} as part of the routerlink to get to that specific match-->
    <div>
        <h5>Team {{match.teamNumber}}</h5>
        <h5>Match {{match.matchNumber}}</h5>
        <Timer @getTime='timeChange($event)' :paused='paused' :sliderTime='time' @resetSlider='time=0'/>
        <Grid :flipped='match.flipped'  :playbackPos='currentPos'/>
        <input type="range" v-model="time" min="0" max="150">
        <div>{{time}}</div>
        <button v-on:click='paused=true'>Pause</button>
        <button v-on:click='paused=false'>play</button>
    </div>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Timer from '@/components/Timer.vue'

import PostService from '../PostService'

export default ({
    components: {
        Timer,
        Grid
    }, data(){
        return{
            time: 0,
            paused: true,
            match: Object,
            events: Array,
            currentPos: Number
        }
    }, methods:{
        timeChange(newTime){
            this.time = newTime
            this.setPos()
        },
        setPos(){
            //Checks what the time is and sets the position to the current position
            this.currentPos = (this.events.find(action => action.time<=this.time && action.event==='')).position
        }
        },
        async mounted(){
            const res = await PostService.getPost(this.$route.query.id)
            this.match = res.data
            this.events = this.match.events.reverse(),
                        console.log(this.match)
            console.log(this.match.scoutName)

            this.setPos()
    }

})
//THINGS TO DO IN THIS VIEW
// 1 - see if you can get the timer component to follow the scroll (done)
// 2 - get match from id from url (done)
// 3 - display movements 
// 4 - display movements based off time
// repeat 3-4 with actions
</script>
