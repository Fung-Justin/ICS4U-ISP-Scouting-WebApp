<template>
  <div class="img p-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-md">
          <div class="card text-light mx-auto">
            <form>
              <div class="mb-3">
                <h2 class="form-label fw-bold my-4">
                  Username
                </h2>
                <input
                  type="email"
                  class="form-control mx-auto auth"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username"
                />
              </div>
              <div class="mb-3">
                <h2 class="form-label fw-bold my-4">
                  Password
                </h2>
                <input
                  type="password"
                  class="form-control mx-auto auth"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <button type="button" class="btn text-light px-3 mt-3 mb-4 btn-lg">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
  background-color:#422d53;
  width: 50%;
}
.auth {
  width: 75%;
}
/** .img {
  background-image: url("../image.jpg");
}
*/
.btn {
  background-color:#201f41 ;
}
</style>
