<template>
  <div class="container">
    <!-- Grid formation -->
    <div class="cols">
      <div class="bor" :style="{'background': s1}">1</div>
      <div class="bor" :style="{'background': s1}">2</div>
      <div class="bor" :style="{'background': s2}">3</div>
      <div class="bor" :style="{'background': s2}">4</div>
      <div class="bor-mid" :style="{'background': s1}">5</div>
      <div class="bor-mid" :style="{'background': s1}">6</div>
      <div class="bor-mid" :style="{'background': s2}">7</div>
      <div class="bor-mid" :style="{'background': s2}">8</div>
      <div class="bor" :style="{'background': s1}">9</div>
      <div class="bor" :style="{'background': s1}">10</div>
      <div class="bor" :style="{'background': s2}">11</div>
      <div class="bor" :style="{'background': s2}">12</div>
    </div>
    <button v-on:click=switchSides>Switch</button>
  </div>
</template>

<script>
export default {
  name: "Grid",
  data(){
    return{
      s1 : "",
      s2 : ""
    }
  },
  methods: {
    switchSides(){
      this.s1 = this.s1 === "#c0d8ed" ? "#edc0c8" : "#c0d8ed"
      this.s2 = this.s2 === "#c0d8ed" ? "#edc0c8" : "#c0d8ed"
    }
  },
  created(){
    this.s1 = "#c0d8ed"
    this.s2 = "#edc0c8"
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card {
  border-radius: 10px;
 /* background-color: #422d53;*/
  width: 50%;
}
.auth {
  width: 75%;
}
.cols {
  display: grid;
  grid-template-columns: 12.5% 37% 37% 12.5%;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  background-color: black;
}
/** .img {
  background-image: url("../image.jpg");
}
*/
.bor {
  border: 1px solid white;
  padding-bottom: 4em;
  padding-top: 4em;
}
.bor-mid {
  border: 1px solid white;
  padding-bottom: 8.5em;
  padding-top: 8.5em;
}
.btn {
  background-color: #201f41;
}
</style>
