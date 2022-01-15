<template>
  <div class="img p-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-md">
          <div class="card text-light mx-auto">
            <form>
              <div class="mb-3">
                <h3 class="form-label fw-bold my-4">New Username</h3>
                <input
                  type="username"
                  class="form-control mx-auto auth"
                  id="username"
                  placeholder="Enter New Username"
                />
              </div>
              <div class="mb-3">
                <h3 class="form-label fw-bold my-4">New Password</h3>
                <input
                  type="password"
                  class="form-control mx-auto auth"
                  id="password"
                  placeholder="Enter New Password"
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
              <div class="mb-3">
                <h3 class="form-label fw-bold my-4">Confirm New Password</h3>
                <input
                  type="password"
                  class="form-control mx-auto auth"
                  id="repeat-password"
                  placeholder="Confirm Password"
                />
                <input
                  class="ml-3 form-check-input"
                  type="checkbox"
                  value=""
                  id="repeat-checkbox"
                  v-on:click="checkValue()"
                />
                <label class="form-check-label box-text" for="flexCheckDefault">
                  Show Password
                </label>
              </div>
              <div>
                <button
                  id="create"
                  type="button"
                  class="btn px-3 mt-3 mb-4 btn-lg"
                >
                  Create
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
  name: "Create Account",
  methods: {
    checkValue() {
      let check = document.querySelector("#checkbox");
      let password = document.querySelector("#password");
      let confirmCheck = document.querySelector("#repeat-checkbox");
      let confirmPassword = document.querySelector("#repeat-password");

      if (check.checked == true) {
        password.type = "textbox";
      } else if (check.checked == false) {
        password.type = "password";
      }

      if (confirmCheck.checked == true) {
        confirmPassword.type = "textbox";
      } else if (confirmCheck.checked == false) {
        confirmPassword.type = "password";
      }
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  background-image: linear-gradient(to top, #9E1711 0%, #061993 100%);
  width: 50%;
}
.auth {
  width: 75%;
}

#create:hover {
  background-color: white;
  color: black;
  border: 4px solid #201f41;
}
#create {
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
#repeat-checkbox {
  margin-top: 7px;
  background-color: #201f41;
  border: 1px solid white;
}
</style>
