<template>
<!-- When making router links to this component, YOU MUST USE ?id={{matchID}} as part of the routerlink to get to that specific match-->
    <!-- Displays Loading Wheel -->
    <Loading v-if="!completed"/>
    <!-- Displays page once loaded -->
    <section id = "top" v-else>
        <h2 class = "fw-bold text-center">Team {{match.teamNumber}}</h2>
        <h2 class = "fw-bold text-center mb-3">Match {{match.matchNumber}}</h2>
        <Timer class = "mb-2" @getTime='timeChange($event)' :paused='paused' :sliderTime='time' :speed='speed' @resetSlider='time=0'/>
        <section v-if="time!==150">
            <Grid :flipped='match.flipped'  :playbackPos='currentPos'/>
            
        </section>
        <!-- Endgame Data -->
        <div class="container">
            <section class = "text-center card bg-dark text-light mx-auto my-4" v-if="time===150">
                <div class="card-body">
                    <div class="container">
                        <h2 class = "card-title mb-3">Replay Report:</h2>
                        <h5>Hang Level {{match.climb}}</h5>
                        <h5>Defence Level {{match.defense}}</h5>
                        <br>
                        <h3>Comments: </h3>
                        <h5>{{match.comments}}</h5>
                        <br> 
                        <h5 class = "fw-bold">Scouted by {{match.scoutName}}</h5>
                    </div>
                </div>
            </section>
        </div>
        <!-- Playback Controls -->
        <section>
            <div id = "playback" style = "display: flex; justify-content: center;">
                <i id = "img" class = "bi bi-play-fill h4 mt-2" v-on:click='paused=!paused; playButton()'></i>
                <input type="range" class = "playback-bar" v-model="time" min="0" max="150">
            </div>
            <div id = "btns">
                <button class = "btn" v-on:click='speed=1' :style="[speed === 1 ? 'background: #d0ddf7' : '']">1x</button>
                <button class = "btn" v-on:click='speed=2' :style="[speed === 2 ? 'background: #d0ddf7' : '']">2x</button>
                <button class = "btn" v-on:click='speed=5' :style="[speed === 5 ? 'background: #d0ddf7' : '']">5x</button>
                <div>
                <h5 style = "display:inline-block">Non-movement actions: &nbsp</h5>
                <h5 style = "display:inline-block" v-if="currentAction !== undefined">{{currentAction.TS}} - {{currentAction.event}}</h5>
                </div>
            </div>

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
            speed: 1
        }
    }, 
    methods:{
        timeChange(newTime){
            this.time = newTime
            this.setPos()
            this.setAction()
        },
        //Sets the current Position of the bot at the current time
        setPos(){
            this.currentPos = (this.events.find(action => action.time<=this.time && action.event==='')).position
        },
        //sets the currentAction based on the time 
        setAction(){
            this.currentAction = this.events.find(action => action.time <= this.time && action.event!=='' && Math.abs(this.time-action.time) <= 5)
        },
        playButton(){
            let button = document.querySelector('#img');

            if (button.className == 'bi bi-play-fill h4 mt-2'){
                button.className = 'bi bi-pause-fill h4 mt-2'
            }else if (button.className == 'bi bi-pause-fill h4 mt-2'){
                button.className = 'bi bi-play-fill h4 mt-2'
            }
        }
    },
    async mounted(){
        const res = await PostService.getPost(this.$route.query.id)
        this.match = res.data
        this.events = this.match.events.reverse()
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
#top {
    margin-top: 4em;
}
.btn {
    border-radius: 4px;
}
#btns {
    text-align: center;
    padding-bottom: 1em;
}
#img {
    cursor: pointer;
}
.playback-bar {
    width: 26em;
}
.card{
    width: 50%;
    border-radius: 8px;
}
input[type=range]{
    -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background-image: linear-gradient(to right, #7d77FF 0%, #FF9482 100%);
    border: none;
    border-radius: 3px;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #343a40;
    margin-top: -4px;
}
input[type=range]:focus {
    outline: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
    background-image: linear-gradient(to right, #7d77FF 0%, #FF9482 100%);
}
</style>