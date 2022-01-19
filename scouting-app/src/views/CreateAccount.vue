<template>
  <div class="img">
    <div class="container">
      <div class="row text-center">
        <div class="col-md">
          <div class="card text-light mx-auto py-5">
            <h1 class = "mb-5 text-dark">Create Your Account!</h1>
            <form @submit.prevent="register">
              <div class="mb-5">
                <input
                  v-model="name"
                  type="username"
                  class="form-control mx-auto auth"
                  id="username"
                  placeholder="New Username"
                />
              </div>
              <div class="mb-5">
                <input
                  v-model="password"
                  type="password"
                  class="form-control mx-auto auth"
                  id="password"
                  placeholder="New Password"
                />
                <i id = "showIMG" v-on:click = "showPassword()" class = "bi bi-eye-slash-fill"></i>
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control mx-auto auth"
                  id="repeat-password"
                  placeholder="Confirm Password"
                />
                <i id = "showIMG-repeat" v-on:click = "showPasswordRepeat()" class = "bi bi-eye-slash-fill"></i>
              </div>
              <br>
              <router-link id="link" class="h6" to="/"
                >Back to Login</router-link
              >
              <div>
                <button
                  id="create"
                  type="submit"
                  class="btn my-4 btn-lg"
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

   data () {
        return {
          name: '',
          email: '',
          password: ''
        }
      },
  methods: {
    showPassword() {
      let img = document.querySelector('#showIMG');
      let password = document.querySelector('#password');

      if (img.className == 'bi bi-eye-fill'){
        password.type = 'password'
        img.className = 'bi bi-eye-slash-fill'
      } else if (img.className == 'bi bi-eye-slash-fill'){
        password.type = 'text'
        img.className = 'bi bi-eye-fill'
      }
    },
    showPasswordRepeat() {
      let img = document.querySelector('#showIMG-repeat');
      let password = document.querySelector('#repeat-password');

      if (img.className == 'bi bi-eye-fill'){
        password.type = 'password'
        img.className = 'bi bi-eye-slash-fill'
      } else if (img.className == 'bi bi-eye-slash-fill'){
        password.type = 'text'
        img.className = 'bi bi-eye-fill'
      }
    },
    register () {
      
        this.$store.dispatch('register', {
              name: this.name,
              password: this.password
            })
        }
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  background-image: white;
  width: 35%;
  margin-right:0%;
  margin-left:0%;
}
.auth {
  width: 75%;
}
.btn {
  width: 75%
}
#create:hover {
  background-color: white;
  color: black;
  border: 4px solid black;
}
#create {
  border-radius: 8px;
  transition-duration: 0.1s;
  background-color: black;
  border: 4px solid black;
  color: white;
}
.form-check-label {
  margin-left: 5px;
}
i {
  cursor: pointer;
  float: right;
  margin-left: -1.5em;
  margin-top: -1.5em;
  margin-right: 3.7em;
  position:relative;
  color: black;
}
#link {
  text-decoration: none;
  transition-duration: 0.1s;
  color: black;
}
#link:hover {
  color: rgb(77, 77, 77);
}
.box-text {
  margin-top: 4px;
}
#username {
  border-bottom: 2px solid #adadad;
  border-right: white;
  border-left: white;
  border-top: white;
}
#password {
  border-bottom: 2px solid #adadad;
  border-right: white;
  border-left: white;
  border-top: white;
}
#repeat-password {
  border-bottom: 2px solid #adadad;
  border-right: white;
  border-left: white;
  border-top: white;
}
</style>
<style>
.img {
  background-image: linear-gradient(315deg, #7d77FF 0%, #FF9482 100%);
  padding: 7.5em;
  height: 100%;
}
</style>
