<template>
<div>
    <Loading v-if="!completed"/>
    <section v-else>
    <h1>{{team}}</h1>
    <!-- Auto vs Teleop switch -->
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="auto" checked :style="[auto ? 'background: #7d77FF' : 'background: #FF9482']">
        <label class="form-check-label" for="flexSwitchCheckChecked">{{auto ? 'Auto' : 'Teleop'}}</label>
    </div>
    <input type=textarea v-model="filterValue" v-on:keyup="filterComments">
    <!-- Table of Stats NEEDS TO FILL WHOLE SCREEN-->
    <div class="table-responsive">
        <table class="table table-bordered table-hover">
            <thread>
            <tr>
                <th v-on:click="sort('matchNumber')">Match Number</th>
                <th>Playback</th>
                <th v-on:click="sort(letter + 'CargoRocket')">{{letter}}-Cargo Rocket</th>
                <th v-on:click="sort(letter + 'CargoCB')">{{letter}}-Cargo CB</th>
                <th v-on:click="sort(letter + 'HatchRocket')">{{letter}}-HP Rocket</th>
                <th v-on:click="sort(letter + 'HatchCB')">{{letter}}-HP CB</th>
                <th v-on:click="sort('climb')">Climb</th>
                <th v-on:click="sort('defense')">Defense</th>
                <th>Comments</th>
            </tr>
            <tr v-for:each='stat in data'>
            <td>{{stat.matchNumber}}</td>
            <!-- THE PLAY BUTTON NEEDS TO BE CENTERED-->
                <router-link class="bi bi-play-fill h4 mt-2" :to="`/playback?id=${stat.id}`"></router-link>
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
                        {{stat.comments}}
                    </td>           
                </tr>

            </thread>
        </table>
    </div>
    </section>
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
                comments: match.comments
            }
        },
        setData(){
            this.matches.forEach(match =>{
             let stats = this.resetStat(match)
                match.events.forEach(action =>{
                if(action.event !== '' && action.event.search('intake') < 0){
                    let state = action.time <= 15 ? 'A' : 'T'
                    let piece = action.event.search(/cargo/i) > -1 ? 'Cargo' : 'Hatch'
                    let index = action.event.search('Rocket')
                    let location = index > -1 ? action.event.slice(index) : 'CB'
                    stats[state+piece+location] +=1 
                    console.log(state+piece+location)
                    }
                })
                this.data.push(stats)
            })
        },
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
            //Comments
            else if(field === 'Comments')
                console.log('ill deal with you later')
            //Other
            else{ 
                this.data = this.data.sort((a, b) => a[field] -  b[field]);
                }
            if(!this.high) this.data.reverse()
            this.currentSortField = field
        },
        //Filters the comments based on input in text box
        filterComments() {
            this.data = []
            this.setData()
            this.currentSortField = 'team'
            this.data = this.data.filter(match => (match.comments.toLowerCase().indexOf(this.filterValue) >= 0));
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