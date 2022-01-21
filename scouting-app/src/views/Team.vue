<template>
    <div>
        <!-- Loading screen -->
        <Loading v-if="!completed"/>

        <!-- main page -->
        <div class = "py-5" style = "background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); height: 100%; padding-top: 6.5em !important;" v-else>
            <div class="container text-center">
                <div class="card bg-dark text-light mx-auto pb-4 px-4" style = "border-radius: 8px; width: 95%;">
                    <h1 class = "fw-bold mt-3">{{team}}</h1>

        <!-- Auto vs Teleop switch -->
                    <div>
                        <div class = "mt-3" style = "display: inline-block; float: right;">
                            <input class="form-check-input" style = "margin-right: 0.2em; display: inline-block" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="auto" checked :style="[auto ? 'background: #7d77FF' : 'background: #FF9482']">
                            <h5 class="form-check-label" style = "display: inline-block" for="flexSwitchCheckChecked">{{auto ? 'Auto' : 'Teleop'}}</h5>
                        </div>
                    </div>
                
                <!-- Table of Stats -->
                    <div class="table-responsive mt-4">
                        <table class="table table-bordered table-hover table-dark" style = "border-radius: 4px;">
                            <thread>
                                <!-- Headers -->
                                <tr>
                                    <th v-on:click="sort('matchNumber')" title="Number in given comp">Match Number</th>
                                    <th class='playback' title="A playback of the match in real time!">Playback<div class="playback-hide bg-light text-dark">Playback of all actions during a match</div></th>
                                    <th v-on:click="sort(letter + 'CargoRocket')" title="Total Cargo scored in rocket from top to bottom">Cargo Rocket</th>
                                    <th v-on:click="sort(letter + 'CargoCB')" title="Total Cargo scored in Cargo Bay">Cargo CB</th>
                                    <th v-on:click="sort(letter + 'HatchRocket')" title="Total Hatch Panels scored in rocket from top to bottom">HP Rocket</th>
                                    <th v-on:click="sort(letter + 'HatchCB')" title="Total Hatch Panels scored in Cargo Bay">{{letter}}HP CB</th>
                                    <th v-on:click="sort('climb')" title="Level of Engame climb. 1 - on field, 2 - in hab, 3 - low climb, 4 - high climb">Climb</th>
                                    <th v-on:click="sort('defense')" title="Level of defence on a scale from 1-4, with 0 meaning not played">Defense</th>
                                    <th v-on:click="sort('score')" title="Approximate score this bot got for it's alliance">Score</th>
                                    <th title="Scout recorded comments of bot's performance in match">Comments</th>
                                </tr>
                                <!-- Table data -->
                                <tr v-for:each='stat in data'>
                                    <td>{{stat.matchNumber}}</td>
                                    <br style="line-height: 10px" />
                                    <router-link id='play-button' class="bi bi-play-fill h4 text-white" :to="`/playback?id=${stat.id}`">
                                    </router-link>
                                    <td>
                                        {{auto ? stat.ACargoRocketH : stat.TCargoRocketH}}
                                        <br>
                                        {{auto ? stat.ACargoRocketM : stat.TCargoRocketM}}
                                        <br>
                                        {{auto ? stat.ACargoRocketL : stat.TCargoRocketL}}
                                    </td>
                                    <td>
                                        {{auto ? stat.ACargoCB : stat.TCargoCB}}
                                    </td>
                                    <td>
                                        {{auto ? stat.AHatchRocketH : stat.THatchRocketH}}
                                        <br>
                                        {{auto ? stat.AHatchRocketM : stat.THatchRocketM}}
                                        <br>
                                        {{auto ? stat.AHatchRocketL : stat.THatchRocketL}}
                                    </td>
                                    <td>
                                        {{auto ? stat.AHatchCB : stat.THatchCB}}
                                    </td>
                                    <td>
                                        {{stat.climb}}
                                    </td>
                                    <td>
                                        {{stat.defense}}
                                    </td>
                                    <td>
                                        {{stat.score}}
                                    </td>
                                    <td>
                                        {{stat.comments}}
                                    </td>
                                    </tr>
                            </thread>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostService from '../PostService'

import Loading from '@/components/Loading.vue'

export default({
    components:{
        Loading
    },
    data(){
        return{
            completed: false,
            matches: Array,
            allData: [],
            data: [],
            auto: true,
            team: this.$route.query.team,
            high: true,
            currentSortField: 'MatchNumber',
            letter: 'A',
            filterValue: ''    //Filters the teams based on input in text box
            }
    },
    methods:{
        //Resets match statistics for a given match
        resetStat(match){
            return{
                matchNumber: match.matchNumber,
                id: match._id,
                ACargoRocketL : 0,
                ACargoRocketM : 0,
                ACargoRocketH : 0,
                ACargoCB : 0,
                AHatchRocketL :  0,
                AHatchRocketM :  0,
                AHatchRocketH :  0,
                AHatchCB :  0,
                TCargoRocketL :  0,
                TCargoRocketM :  0,
                TCargoRocketH :  0,
                TCargoCB :  0,
                THatchRocketL :  0,
                THatchRocketM :  0,
                THatchRocketH :  0,
                THatchCB : 0,
                climb: match.climb,
                defense: match.defense,
                comments: match.comments,
                score: 0
            }
        },
        //Calculates data for each of the matches to be displayed
        setData(){
            this.matches.forEach(match =>{
             let stats = this.resetStat(match)
                match.events.forEach(action =>{
                if(action.event !== '' && action.event.search('intake') < 0){
                    let state = action.time <= 15 ? 'A' : 'T'
                    let piece = action.event.search(/cargo/i) > -1 ? 'Cargo' : 'Hatch'
                    let index = action.event.search('Rocket')
                    let location = index > -1 ? action.event.slice(index) : 'CB'
                    if(piece === 'Cargo') stats.score+=3
                    else stats.score +=2
                    stats[state+piece+location] +=1 
                    console.log(state+piece+location)
                    }
                })
                stats.score += stats.climb < 3 ? stats.climb*3 : 12
                this.data.push(stats)
            })
            this.allData = this.data
        },
        //Sorts the data by column heading
        sort(field){
            console.log(this.high)
            console.log(field)
            if (field === this.currentSortField) this.high = !this.high
            else this.high = false
            //Filter by:
            //Total rocket score
            if(field.search('Rocket') > -1) {
                this.data = this.data.sort((a, b) => (a[field+'L'] + a[field+'M'] + a[field+'H']) - (b[field+'L'] + b[field+'M'] + b[field+'H']))
                console.log("ROCKET")
            }
            //Other
            else{ 
                this.data = this.data.sort((a, b) => a[field] -  b[field]);
                }
            //Checks for Ascending or Descending 
            if(!this.high) this.data.reverse()
            this.currentSortField = field
        }
        },
    watch:{
        //Sets the current position to the playback position whenever there is a change in the playback position
        auto(newAuto){
            this.letter = newAuto ? 'A' : 'T'
        } 
    },
    async created(){
        const all = await PostService.getPosts()
        this.matches = all.filter(match => match.teamNumber == this.team)
        this.completed = true
        this.setData()
}
})
</script>

<style scoped>
#filter{
    width: 20%;
    border-radius: 6px;
    float: left;
    border: none;
    border-bottom: 2px solid white;
}
#play-button{
    margin-bottom: 10px;
}
tbody:nth-child(even) {
 background-color: #2d3034 !important;
}
.playback-hide{
    display: none;
}
.playback:hover .playback-hide{
  display: block;
}
</style>