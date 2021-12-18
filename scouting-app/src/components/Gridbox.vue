<template>
  <div class="container">
    <div class="cols">
      <div class="bor">1</div>
      <div class="bor">2</div>
      <div class="bor">3</div>
      <div class="bor">4</div>
      <div class="bor-mid">5</div>
      <div class="bor-mid">6</div>
      <div class="bor-mid">7</div>
      <div class="bor-mid">8</div>
      <div class="bor">9</div>
      <div class="bor">10</div>
      <div class="bor">11</div>
      <div class="bor">12</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
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
  background-color: #422d53;
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
