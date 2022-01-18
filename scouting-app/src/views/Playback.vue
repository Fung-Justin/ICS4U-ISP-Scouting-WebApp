<template>
<!-- When making router links to this component, YOU MUST USE ?id={{matchID}} as part of the routerlink to get to that specific match-->
    <!-- Displays Loading Wheel -->
    <Loading v-if="!completed"/>
    <!-- Displays page once loaded -->
    <section v-else>
        <h5>Team {{match.teamNumber}}</h5>
        <h5>Match {{match.matchNumber}}</h5>
        <Timer @getTime='timeChange($event)' :paused='paused' :sliderTime='time' @resetSlider='time=0'/>
        <section v-if="time!==150">
            <Grid :flipped='match.flipped'  :playbackPos='currentPos'/>
            <div v-if="currentAction !== undefined">{{currentAction.time}} - {{currentAction.event}}</div>
        </section>
        <!-- Endgame Data -->
        <section v-if="time===150">
            <p>Hang Level {{match.climb}}</p>
            <p>Defence level {{match.defense}}</p>
            <h4>Comments: </h4>
            <p>{{match.comments}}</p>
            <p>Scouted by {{match.scoutName}}</p>
        </section>
        <!-- Playback Controls -->
        <section>
            <input type="range" v-model="time" min="0" max="150">
            <button v-on:click='paused=!paused'>{{paused ? 'play' : 'pause'}}</button>
        </section>
    </section>
</template>

<script>
import Grid from '@/components/Gridbox.vue'
import Timer from '@/components/Timer.vue'
import Loading from '@/components/Loading.vue'
import PostService from '../PostService'

export default ({
    components: {
        Timer,
        Grid,
        Loading
    }, data(){
        return{
            time: 0.0,
            paused: true,
            match: Object,
            events: Array,
            currentPos: Number,
            currentAction: Object,
            completed: false,
            revEvents: Array,
            e1: Object,
            e2: Object,
            e3: Object,
            e4: Object,
            e5: Object
        }
    }, 
    methods:{
        timeChange(newTime){
            this.time = newTime
            this.setPos()
            this.setAction()
        },
        setPos(){
            //Checks what the time is and sets the position to the current position
           //console.log(this.revEvents)
            this.currentPos = (this.revEvents.find(action => action.time<=this.time && action.event==='')).position
            console.log((this.revEvents.find(action => action.time<=this.time && action.event==='')))
            console.log(this.time)
        }, 
        setAction(){
            console.log('im running')
           // this.currentAction = this.revEvents[1]
            this.currentAction = this.revEvents.find(action => action.time <= this.time && action.event!=='' && Math.abs(this.time-action.time) <= 5)
        }
    },
    async mounted(){
        const res = await PostService.getPost(this.$route.query.id)
        this.match = res.data
        /*this.revEvents = this.match.events
        console.log(this.match.events)
        console.log(this.revEvents)
        console.log(this.revEvents.reverse())*/
        this.events = this.match.events
        console.log(this.match)
        this.revEvents = [...this.events].reverse()
        this.setPos()
        this.setAction()
        this.completed = true
    }
})
//THINGS TO DO IN THIS VIEW
// 1 - see if you can get the timer component to follow the scroll (done)
// 2 - get match from id from url (done)
// 3 - display movements 
// 4 - display movements based off time
// repeat 3-4 with actions
</script>
<style scoped>
.img {
  background-image: linear-gradient(315deg, #7d77FF 0%, #FF9482 100%);
  padding: 7.5em;
  height: 100%;
}
</style>