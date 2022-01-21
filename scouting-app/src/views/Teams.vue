<template>
  <div>
    <Loading v-if="!completed" />
    <div
      class="py-5"
      v-else
      style="
        background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);
      "
    >
      <div class="container text-center">
        <div
          class="card bg-dark text-light mx-auto pb-4 px-4"
          style="border-radius: 8px; width: 80%"
        >
          <h1 class="my-4">Teams</h1>
          <table
            id="main-table"
            class="table table-bordered table-hover table-dark table-striped"
            style="border-radius: 4px"
          >
            <thead id="col-heading">
              <tr>
                <th v-on:click="sort('teamNumber')">Team Number</th>
                <th v-on:click="sort('score')">Avg Score</th>
                <th v-on:click="sort('wins')">Wins</th>
                <th v-on:click="sort('losses')">Losses</th>
                <th title="Ranking Points" v-on:click="sort('rp')">RP</th>
                <th
                  title="Total cargo scored in rocket from top to bottom"
                  v-on:click="sort('CargoRocket')"
                >
                  Avg Rocket Cargo
                </th>
                <th
                  title="Total cargo scored in Cargo Bay"
                  v-on:click="sort('CargoCB')"
                >
                  Avg CB Cargo
                </th>
                <th
                  title="Total Hatch Panels scored in rocket from top to bottom"
                  v-on:click="sort('HatchRocket')"
                >
                  Avg Rocket HP
                </th>
                <th
                  title="Total Hatch Panels scored in Cargo Bay"
                  v-on:click="sort('HatchCB')"
                >
                  Avg CB HP
                </th>
                <th
                  title="Level of endgame climb. 0 - on field, 1 - in hab, 2 - low climb, 3 - high climb"
                  v-on:click="sort('climb')"
                >
                  Avg Climb
                </th>
                <th
                  title="Level of defense on a scale from 1-4, with 0 meaning not played"
                  v-on:click="sort('defense')"
                >
                  Avg Defense
                </th>
              </tr>
            </thead>
            <tbody>
              <tr id="tr-striped" v-for="stats in teams">
                <td>
                  <h4
                    class="underline"
                    v-on:click="
                      this.$router.push(`team?team=${stats.teamNumber}`)
                    "
                  >
                    {{ stats.teamNumber }}
                  </h4>
                </td>
                <td>
                  <h6>{{ stats.score / stats.matchesPlayed }}</h6>
                </td>
                <td>
                  <h6>{{ stats.wins }}</h6>
                </td>
                <td>
                  <h6>{{ stats.matchesPlayed - stats.wins }}</h6>
                </td>
                <td>
                  <h6>{{ stats.rp }}</h6>
                </td>
                <td>
                  <h6>
                    {{ stats.CargoRocketH / stats.matchesPlayed }}<br />{{
                      stats.CargoRocketM / stats.matchesPlayed
                    }}<br />{{ stats.CargoRocketL / stats.matchesPlayed }}
                  </h6>
                </td>
                <td>
                  <h6>{{ stats.CargoCB / stats.matchesPlayed }}</h6>
                </td>
                <td>
                  <h6>
                    {{ stats.HatchRocketH / stats.matchesPlayed }}<br />{{
                      stats.HatchRocketM / stats.matchesPlayed
                    }}<br />{{ stats.HatchRocketL / stats.matchesPlayed }}
                  </h6>
                </td>
                <td>
                  <h6>{{ stats.HatchCB / stats.matchesPlayed }}</h6>
                </td>
                <td>
                  <h6>{{ stats.climb / stats.matchesPlayed }}</h6>
                </td>
                <td>
                  <h6>{{ stats.defense / stats.matchesPlayed }}</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamRow from "@/components/TeamRow.vue";
import PostService from "../PostService";
import Loading from "@/components/Loading.vue";

export default {
  name: "Teams",
  components: {
    TeamRow,
    Loading,
  },
  data() {
    return {
      completed: false,
      teams: [],
      currentSortField: "teamNumber",
      sortAsc: true,
    };
  },
  methods: {
    // Uses match data to create stats for each team
    initTeamStats(matches) {
      for (let i = 0; i < matches.length; i++) {
        let match = matches[i];
        let teamFound = false;
        for (let j = 0; j < this.teams.length; j++) {
          if (this.teams[j].teamNumber == match.teamNumber) teamFound = true;
        }
        // If the team in the match report does not already exist in the array, create it
        if (!teamFound) {
          this.teams.push({
            teamNumber: match.teamNumber,
            matchesPlayed: 0,
            wins: 0,
            losses: 0,
            rp: 0,
            line: 0,
            CargoRocketL: 0,
            CargoRocketM: 0,
            CargoRocketH: 0,
            CargoCB: 0,
            HatchRocketL: 0,
            HatchRocketM: 0,
            HatchRocketH: 0,
            HatchCB: 0,
            climb: 0,
            defense: 0,
            score: 0,
          });
        }
        // Update team stats with match stats
        for (let j = 0; j < this.teams.length; j++) {
          if (this.teams[j].teamNumber == match.teamNumber) {
            let team = this.teams[j];
            team.matchesPlayed++;
            let climbTotal = 0;
            for (let k = 0; k < matches.length; k++) {
              if (matches[k].matchNumber == match.matchNumber&&matches[k].team==match.team) {
                if (matches[k].climb == 1) climbTotal += 3;
                else if (matches[k].climb == 2) climbTotal += 6;
                else if (matches[k].climb == 3) climbTotal += 12;
              }
            }
            if (climbTotal >= 15) team.rp++;
            if (match.win) team.rp += 2;
            if (match.rocket) team.rp++;
            team.climb += match.climb;
            team.defense += match.defense;
            if (match.climb == 1) team.score += 3;
            else if (match.climb == 2) team.score += 6;
            else if (match.climb == 3) team.score += 12;
            if (match.win) team.wins++;
            else team.losses++;
            // Goes through events for stats
            for (let k = 0; k < match.events.length; k++) {
              let action = match.events[k];
              if (action.event !== "" && action.event.search("intake") < 0) {
                let piece =
                  action.event.search(/cargo/i) > -1 ? "Cargo" : "Hatch";
                let index = action.event.search("Rocket");
                let location = index > -1 ? action.event.slice(index) : "CB";
                team[piece + location]++;
              }
            }
          }
        }
      }
      this.teams.sort((a, b) => a.teamNumber - b.teamNumber);
      for (let i = 0; i < this.teams.length; i++) {
        let team = this.teams[i];
        team.score +=
          (team.CargoRocketL +
            team.CargoRocketM +
            team.CargoRocketH +
            team.CargoCB) *
            3 +
          (team.HatchRocketL +
            team.HatchRocketM +
            team.HatchRocketH +
            team.HatchCB) *
            2;
      }
    },
    // Controls the table sorting
    sort(field) {
      if (field === this.currentSortField) this.sortAsc = !this.sortAsc;
      else this.sortAsc = true;
      if (field.search("CargoRocket") > -1)
        this.teams = this.teams.sort(
          (a, b) =>
            a[field + "L"] +
            a[field + "M"] +
            a[field + "H"] -
            (b[field + "L"] + b[field + "M"] + b[field + "H"])
        );
      else if (field.search("HatchRocket") > -1)
        this.teams = this.teams.sort(
          (a, b) =>
            a[field + "L"] +
            a[field + "M"] +
            a[field + "H"] -
            (b[field + "L"] + b[field + "M"] + b[field + "H"])
        );
      else this.teams = this.teams.sort((a, b) => b[field] - a[field]);
      if (!field.search("losses") > -1) this.teams.reverse();

      if (!this.sortAsc) this.teams.reverse();
      this.currentSortField = field;
    },
  },
  async created() {
    const matches = await PostService.getPosts();
    this.initTeamStats(matches);
    this.completed = true;
  },
};
</script>

<style scoped>
.table-bordered {
  border: 1px solid white !important;
}

#col-heading:hover {
  cursor: pointer;
}

.underline:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
