<template>
  <div class="p-3">
    <h2 class="title m-3">Matches</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Match</th>
          <th scope="col">R1</th>
          <th scope="col">R2</th>
          <th scope="col">R3</th>
          <th scope="col">B1</th>
          <th scope="col">B2</th>
          <th scope="col">B3</th>
          <th scope="col">Red RP</th>
          <th scope="col">Blue RP</th>
          <th scope="col">Winner</th>
        </tr>
      </thead>
        <tbody v-for="data in matches" :key = 'data'>
        
          <td> <h6>{{data.matchNumber}}</h6></td>
          <td> <h6>{{data.teamNumber}}</h6></td>
          <td> <h6>{{data.scoutName}}</h6></td>
          <td> <h6>{{data.comments}}</h6></td>
          <td> <h6>{{data.defense}}</h6></td>
          <td> <h6>{{data.win}}</h6></td> 
   </tbody>
    </table>
  </div>
</template>

<script>
import PostService from "../PostService";
import matchTable from "../components/MatchesTable.vue"

export default {
     components: {
    matchTable
  },
  data() {
    return { matches: Array };
  },
  async created() {
    this.matches = await PostService.getPosts();
    console.log(this.matches);
  },
};
</script>
