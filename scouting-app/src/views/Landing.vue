<template>
<div id = "page">
    <section id="showcase" class="text-light text-center text-small-center">
      <div class="container">
        <div class="d-sm-flex text-center" style = "display: flex; justify-content: center;">
          <div id = "text-div">
            <h1 id = "showcase-title">Welcome to FRC Scouting App!</h1>
            <p class="lead my-4">
              This app is designed to give you and your team every possible tactical advantage over your opponents. Scout, analyze, prepare and dominate the competition! Good luck engineers!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 pt-5">
        <div class="row text-center">
          <div class="col-md">
            <div class="card bg-dark text-light mx-auto">
              <div class="card-body text-center">
                <h2 class="card-title">Grid</h2>
                <h5 class="card-text px-2 mb-3">
                  The grid is a map of the playing field, where you can test, replay and analyze your strategies. 
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light mx-auto">
              <div class="card-body text-center">
                <h2 class="card-title">
                  Matches
                </h2>
                <h5 class="card-text px-2">
                  Get live feeds of the matches of your competitors. Learn who'll pose a challenge to your team. 
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light mx-auto">
              <div class="card-body text-center">
                <h2 class="card-title">
                  Scout
                </h2>
                <h5 class="card-text">
                  Learn your opponent's strategies and techniques. Nullify their game plan and secure the win. 
                </h5>
              </div>
            </div>
          </div>
        </div>
    </section>
</div>
    
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
#showcase {
  height: 55%;
}
#text-div {
  padding: 150px 0;
  width: 60%;
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
#page {
  background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);
  height: 100%;
}
.card-text {
  line-height: 1.3;
}
</style>


