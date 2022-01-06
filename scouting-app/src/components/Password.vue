<template>
  <div class="img p-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-md">
          <div class="card text-light mx-auto">
            <form>
              <div class="mb-3">
                <h2 class="form-label fw-bold my-4">Username</h2>
                <input
                  type="username"
                  class="form-control mx-auto auth"
                  id="username"
                  placeholder="Enter Username"
                />
              </div>
              <div class="mb-3">
                <h2 class="form-label fw-bold my-4">Password</h2>
                <input
                  type="password"
                  class="form-control mx-auto auth"
                  id="password"
                  placeholder="Enter Password"
                />
                <input
                  class="ml-3 form-check-input"
                  type="checkbox"
                  value=""
                  id="checkbox"
                  v-on:click="checkValue()"
                />
                <label class="form-check-label box-text" for="flexCheckDefault">
                  Show Password
                </label>
              </div>
              <router-link id="link" class="h5" to="/create-account"
                >Create a new account</router-link
              >
              <div>
                <button
                  id="login"
                  type="button"
                  class="btn px-3 mt-3 mb-4 btn-lg"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    checkValue() {
      let check = document.querySelector("#checkbox");
      let password = document.querySelector("#password");

      if (check.checked == true) {
        password.type = "textbox";
      } else if (check.checked == false) {
        password.type = "password";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  border-radius: 10px;
  background-color: #422d53;
  width: 50%;
}
.auth {
  width: 75%;
}
/** .img {
  background-image: url("../image.jpg");
}
*/
#link {
  text-decoration: none;
  color: white;
  transition-duration: 0.4s;
}
#link:hover {
  color: rgb(199, 199, 199);
}
#login:hover {
  background-color: white;
  color: black;
  border: 4px solid #201f41;
}
#login {
  border-radius: 8px;
  transition-duration: 0.4s;
  background-color: #201f41;
  border: 4px solid #201f41;
  color: white;
}
.form-check-label {
  margin-left: 5px;
}
#checkbox {
  margin-top: 7px;
  background-color: #201f41;
  border: 1px solid white;
}
.box-text {
  margin-top: 4px;
}
</style>
