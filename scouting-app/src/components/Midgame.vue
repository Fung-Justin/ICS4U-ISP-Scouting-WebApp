<template>
  <div class="container pb-3">
    <div class="row text-center">
      <div class="col-md">
        <!-- Hatch Panels -->
        <section>
          <!-- intake hatch -->
          <div class="card bg-dark text-light mx-auto">
            <div class="text-center my-3">
              <button
                class="btn btn-lg bigbtn"
                v-on:click="changeStat('intakeHatch', 0)"
              >
                Intake Hatch
              </button>
            </div>

            <!-- hatches placed in cargo bay-->
            <div class="text-center mt-2 mb-3">
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchCB', -1)"
              >
                -
              </button>
              <button class="btn bigbtn mx-2">
                {{ hatchCB }} hatches on Cargo Bay
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchCB', 1)"
              >
                +
              </button>
            </div>

            <div class="text-center mt-2 mb-3">
              <!-- hatches placed in lowest level of rocket-->
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchRocketL', -1)"
              >
                -
              </button>
              <button class="btn bigbtn mx-2">
                {{ hatchRocketL }} hatches on bottom rocket
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchRocketL', 1)"
              >
                +
              </button>
            </div>

            <div class="text-center mt-2 mb-3">
              <!-- hatches placed in middle level of rocket-->
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchRocketM', -1)"
              >
                -
              </button>
              <button class="btn bigbtn mx-2">
                {{ hatchRocketM }} hatches on middle rocket
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchRocketM', 1)"
              >
                +
              </button>
            </div>

            <div class="text-center mt-2 mb-3">
              <!-- hatches placed in highest level of rocket-->
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchRocketH', -1)"
              >
                -
              </button>
              <button class="btn bigbtn mx-2">
                {{ hatchRocketH }} hatches on high rocket
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('hatchRocketH', 1)"
              >
                +
              </button>
            </div>
          </div>
        </section>
      </div>

      <!-- Cargo -->
      <div class="col-md">
        <section>
          <div class="card bg-dark text-light mx-auto">
            <!-- intake cargo -->
            <div class="text-center my-3">
              <button
                class="btn btn-lg bigbtn"
                v-on:click="changeStat('intakeCargo', 0)"
              >
                Intake Cargo
              </button>
            </div>

            <!-- cargo placed in cargo bay-->
            <div class="text-center mt-2 mb-3">
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoCB', -1)"
              >
                -
              </button>
              <button class="btn bigbtn">
                {{ cargoCB }} cargo on Cargo Bay
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoCB', 1)"
              >
                +
              </button>
            </div>

            <!-- cargo placed in lowest level of rocket-->
            <div class="text-center mt-2 mb-3">
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoRocketL', -1)"
              >
                -
              </button>
              <button class="btn bigbtn">
                {{ cargoRocketL }} cargo on bottom rocket
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoRocketL', 1)"
              >
                +
              </button>
            </div>
            <!-- cargo placed in middle level of rocket-->
            <div class="text-center mt-2 mb-3">
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoRocketM', -1)"
              >
                -
              </button>
              <button class="btn bigbtn">
                {{ cargoRocketM }} cargo on middle rocket
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoRocketM', 1)"
              >
                +
              </button>
            </div>
            <!-- cargo placed in highest level of rocket-->
            <div class="text-center mt-2 mb-3">
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoRocketH', -1)"
              >
                -
              </button>
              <button class="btn bigbtn">
                {{ cargoRocketH }} cargo on high rocket
              </button>
              <button
                class="btn btn-lg btnsm"
                v-on:click="changeStat('cargoRocketH', 1)"
              >
                +
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hatchCB: 0,
      hatchRocketL: 0,
      hatchRocketM: 0,
      hatchRocketH: 0,
      cargoCB: 0,
      cargoRocketL: 0,
      cargoRocketM: 0,
      cargoRocketH: 0,
    };
  },
  props: ["currTime"],
  methods: {
    //Changes a given statistic
    changeStat(stat, change) {
      if (this.currTime != 0.0 && this.currTime != 150.0) {
        if (change === 1) {
          this[stat] += 1;
        }
        if (change >= 0) {
          this.$emit("createEvent", stat);
        } else if (this[stat] !== 0) {
          this[stat] -= 1;
          this.$emit("removeEvent", stat);
        }
      }
    },
  },
};
</script>

<style scoped>
.bigbtn {
  background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);
  color: white;
}
.btnsm {
  color: white;
}
.row.display-flex {
  display: flex;
  flex-wrap: wrap;
}
.card {
  height: 100%;
  width: 80%; 
}
.col {
  align-items: center;
}
</style>