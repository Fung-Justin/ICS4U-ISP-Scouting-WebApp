<template>
  <div>
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
          <th scope="col">R Climb Total</th>
          <th scope="col">B Climb Total</th>
          <th scope="col">Red RP</th>
          <th scope="col">Blue RP</th>
          <th scope="col">Winner</th>
        </tr>
      </thead>
      <tbody v-for="data in matchData" :key="data">
        <td>
          <h6>{{ data.matchNumber }}</h6>
        </td>
        <td>
          <h6>{{ data.r1 }}</h6>
        </td>
         <td>
          <h6>{{ data.r2 }}</h6>
        </td>
         <td>
          <h6>{{ data.r3 }}</h6>
        </td>
         <td>
          <h6>{{ data.b1 }}</h6>
        </td>
         <td>
          <h6>{{ data.b2 }}</h6>
        </td>
         <td>
          <h6>{{ data.b3 }}</h6>
        </td>
         <td>
          <h6>{{ data.redClimb }}</h6>
        </td>
         <td>
          <h6>{{ data.blueClimb }}</h6>
        </td>
        <td>
          <h6>{{ data.rRp }}</h6>
        </td>
        <td>
          <h6>{{ data.bRp }}</h6>
        </td>
        <td>
          <h6>{{ data.win }}</h6>
        </td>
      </tbody>
    </table>
    <button @click=" test()">TEST</button>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  components: {},
  data() {
    return {
      matches: Array,
      matchData: Array,
    };
  },

  methods: {
      test(){
          this.getMatches();
      },
      getMatches(){
          let num = [];
          this.matches.forEach(match => {
              if(!num.includes(match.matchNumber)){
                  this.matchData.push(this.getMatchData(match.matchNumber));
                  num.push(match.matchNumber);
              }
          });
      },
    getMatchData(matchNum) {
      let teamBlue = [];
      let teamRed = [];
      let winner = null;
      let bRP = 0;
      let rRP = 0;
      let bCl = 0;
      let rCl = 0;
      let incomplete ={matchNumber:"Incomplete Data", teamNumber:"Incomplete Data", climb:0}
  
         this.matches.forEach((team) => {
        if (team.matchNumber == matchNum && team.team === "blue" ) {
          teamBlue.push(team);
        } else if (team.matchNumber === matchNum) {
          teamRed.push(team);
        }
      });
    
        while(teamBlue.length < 3){
            teamBlue.push(incomplete);
        }
         while(teamRed.length < 3){
            teamRed.push(incomplete);
        }
  
        
   
      let r1 = teamRed[0].teamNumber;
      let r2 = teamRed[1].teamNumber;
      let r3 = teamRed[2].teamNumber;

      let b1 = teamBlue[0].teamNumber;
      let b2 = teamBlue[1].teamNumber;
      let b3 = teamBlue[2].teamNumber;
  if(teamRed[0].win){
        winner = "red";
        rRP += 2;
     }else if(teamBlue[0].win){
         winner = "blue";
         bRP +=2;
     }else{
         winner = "tie";
         bRP += 1;
         rRP += 1;
     }

     teamBlue.forEach(team =>{
        
         if(team.climb == 3){
             bCl +=12
         }else{
             bCl+= (3*team.climb);
         }
     });

     teamRed.forEach(team =>{
        
         if(team.climb == 3){
             rCl +=12
         }else{
             rCl+= (3*team.climb);
         }
     });
      if(bCl>=15)bRP++;
     if(rCl >=15)rRP++;
     

        let Match ={matchNumber:teamBlue[0].matchNumber, r1:r1, r2:r2, r3:r3, b1:b1, b2:b2, b3:b3, bRp:bRP, rRp:rRP, win:winner, blueClimb:bCl,redClimb:rCl}
        return Match;
    }
    },

  async created() {
    this.matches = await PostService.getPosts()
    this.matchData = [];
    console.log(this.matches);
   await PostService.getPosts().then(this.getMatches());
    
  },
};
</script>
