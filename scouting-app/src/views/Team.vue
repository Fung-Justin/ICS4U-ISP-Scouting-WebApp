<template>
    <Loading v-if="!completed"/>
    <section v-else>
    <h1>{{team}}</h1>
    <table class="table table-bordered table-hover">
        <thread>
        <tr>
            <th>Match Number</th>
            <th>Playback</th>
            <th>Auto Cargo Rocket</th>
            <th>Auto Cargo CB</th>
            <th>Auto HP Rocket</th>
            <th>Auto HP CB</th>
            <th>Teleop Cargo Rocket</th>
            <th>Teleop Cargo CB</th>
            <th>Teleop HP Rocket</th>
            <th>Teleop HP CB</th>
            <th>Hang</th>
            <th>Defense</th>
            <th>Comments</th>
        </tr>
           <tr v-for:each='match in matches'>
           <td>{{match.matchNumber}}</td>
           <!-- araad can you put a play button here-->
            <router-link :to="`/playback?id=${match._id}`">PLAY BUTTOn</router-link>
            <td>
                <div v-for:each='action in match.events'>
                    
                </div>
            </td>
           </tr>
            <!--
        </tr>-->

        </thread>
        </table>
    </section>
        <!-- INSERT MATCH DATA :) -->
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
            team: this.$route.query.team,
            }
    },
    async created(){
        const all = await PostService.getPosts()
        this.matches = all.filter(match => match.teamNumber == this.team)
        this.completed = true
        console.log(this.matches[0].id)
}
})
</script>