<template>
<div>
<Loading v-if="!completed"/>
  <div v-else id = 'page'>
  <div class = "container text-center mx-auto pt-4">
    <div class="card bg-dark text-white mx-auto mt-3 pt-2 pb-3 px-4" style = "width: 95%; border-radius: 8px;">
    <h1 class="title m-3 mb-4">Matches</h1>
    <table class="table table-bordered text-white table-hover">
      <thead>
        <tr>
          <th title="Match ID" scope="col" id="match">Match</th>
          <th title = "Red Alliance Robot #1" scope="col">R1</th>
          <th title = "Red Alliance Robot #2" scope="col">R2</th>
          <th title = "Red Alliance Robot #3" scope="col">R3</th>
          <th title = "Blue Alliance Robot #1" scope="col">B1</th>
          <th title = "Blue Alliance Robot #2"  scope="col">B2</th>
          <th title = "Blue Alliance Robot #3"  scope="col">B3</th>
          <th title = "Red Alliance Total Hab Climb Points"  scope="col">Red Climb Points</th>
          <th title = "Blue Alliance Total Hab Climb Points" scope="col">Blue Climb Points</th>
          <th title = "Red Alliance Total Ranking Points Earned" scope="col">Red RP</th>
          <th title="Blue Alliance Total Ranking Points Earned" scope="col">Blue RP</th>
          <th title="Which Alliance Won the Match" scope="col">Winner</th>
        </tr>
      </thead>
      <tbody class = "bg-dark text-white" v-for="data in matchData" :key="data">
        <td>
          <h6>{{ data.matchNumber }}</h6>
        </td>
        <td class="R-red-start">
          <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.r1}`)">{{ data.r1 }}</h6>
        </td>
         <td class="R-red-mid">
          <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.r2}`)">{{ data.r2 }}</h6>
        </td>
         <td class="R-red-end">
          <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.r3}`)">{{ data.r3 }}</h6>
        </td>
         <td class="B-blue-start">
          <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.b1}`)">{{ data.b1 }}</h6>
        </td>
         <td class="B-blue-mid">
          <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.b2}`)">{{ data.b2 }}</h6>
        </td>
         <td class="B-blue-end">
          <h6 class="underline" v-on:click="this.$router.push(`team?team=${data.r1}`)">{{ data.b3 }}</h6>
        </td>
         <td class="R-red">
          <h6>{{ data.redClimb }}</h6>
        </td>
         <td class="B-blue">
          <h6>{{ data.blueClimb }}</h6>
        </td>
        <td class="R-red">
          <h6>{{ data.rRp }}</h6>
        </td>
        <td class="B-blue">
          <h6>{{ data.bRp }}</h6>
        </td>
        <td>
          <h6>{{ data.win }}</h6>s
        </td>
      </tbody>
    </table>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import PostService from "../PostService";
import Loading from "@/components/Loading"

export default {
  components: {Loading},
  data() {
    return {
      matches: Array,
      matchData: Array,
      completed: false
    };
  },

  methods: {
    /**
     iterates through the array of scout reports and finds matches to be made into a match object
     the match number is passed through getMatchData() and the new match objects are pushed into the MatchData array
    */
   

      getMatches(){
          let num = [];
          this.matches.forEach(match => {
              if(!num.includes(match.matchNumber)){
                  this.matchData.push(this.getMatchData(match.matchNumber));
                  num.push(match.matchNumber);
              }
          });
      },
  /**
   gets individual match reports on each team in a match and compiles the data into a match object
   the method accounts for missing scout data by filling missing scout reports with an object called "incomplete"
  */
     
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
        winner = "Red";
        rRP += 2;
     }else if(teamBlue[0].win){
         winner = "Blue";
         bRP +=2;
     }else{
         winner = "Tie";
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
    this.completed = true
  },
};
</script>

<style scoped>
#page{
  background-image: linear-gradient(315deg, #7d77FF 0%, #FF9482 100%);
  height: 100%;
  padding-top: 4em !important;
}
tbody:nth-child(even) {
 background-color: #2d3034 !important;
}
.R-red{
  background-image: linear-gradient(to right, #9E1711 0%, #C34632 100%);
}
.R-red-start{
  background-image: linear-gradient(to right, #8B0001 0%, #9E1711 100%);
}
.R-red-mid{
  background-image: linear-gradient(to right, #9E1711 0%, #B12E21 100%);
}
.R-red-end{
  background-image: linear-gradient(to right, #B12E21 0%, #C34632 100%);
}
.B-blue{
  background-image: linear-gradient(to right, #061993 0%, #0C3BAA 100%);
}
.B-blue-start{
  background-image: linear-gradient(to right, #010280 0%, #061993 100%);
}
.B-blue-mid{
  background-image: linear-gradient(to right, #061993 0%, #0C3BAA 100%);
}
.B-blue-end{
  background-image: linear-gradient(to right, #0C3BAA 0%, #135CC5 100%); 
}
.underline:hover{
    text-decoration: underline;
    cursor: pointer;
}
</style>