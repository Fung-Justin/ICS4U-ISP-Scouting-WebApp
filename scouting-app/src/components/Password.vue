<template>
  <div class="img">
    <div class="container">
      <div class="row text-center">
        <div class="col-md">
          <div class="card text-dark mx-auto pt-5 pb-4">
            <h1 class = "mb-5">Welcome!</h1>
            <form @submit.prevent="login">
              <div class="mb-3">
                <input
                v-model="name"
                  type="username"
                  class="form-control mx-auto auth mb-5"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div class="mb-3">
                <input
                v-model="password"
                  type="password"
                  class="form-control mx-auto auth"
                  id="password"
                  placeholder="Password"
                />
                <i id = "showIMG" v-on:click = "showPassword()" class = "bi bi-eye-slash-fill"></i>
              </div>
              <br>
              <router-link id="link" class="h6 p-0" to="/create-account"
                >Create your account</router-link
              >
              <div>
                <button
                  id="login"
                  class="btn my-4 btn-md"
                  type="submit"
                >
                  Login
                </button>
              </div>
                <p class="text-danger font-weight-bold h6" :key="key">{{this.$store.state.errorMsg}}</p>
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

  data () {
        return {
          name: '',
          password: '',
        key: 0,
       
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
   
    
    login() {
      this.$store.commit('errorMsg', null)
          this.$store
            .dispatch('login', {
              name: this.name,
              password: this.password
            })
            .then(() => { this.forceRerender(),this.$router.push({ name: 'Landing' }) })

        },
        
        forceRerender(){
          this.key +=1;
        }


  },
  async created(){
     this.$store.commit('errorMsg', null)
     this.forceRerender();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  border-radius: 10px;
  background-image: white;
  width: 30%;
  margin-right:0%;
  margin-left:0%;
}
.auth {
  width: 75%;
}
.btn {
  width: 75%;
}
/** .img {
  background-image: url("../image.jpg");
}
*/
#link {
  text-decoration: none;
  transition-duration: 0.1s;
  color: black;
  padding-top:100px;
}
#link:hover {
  color: rgb(77, 77, 77);
}
#login:hover {
  background-color: white;
  color: black;
  border: 4px solid black;
}
#login {
  border-radius: 8px;
  transition-duration: 0.1s;
  background-color: black;
  border: 4px solid black;
  color: white;
}
.img {
  background-image: linear-gradient(315deg, #7d77FF 0%, #FF9482 100%);
  padding: 7.5em;
  height: 100%;
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
i {
  cursor: pointer;
  float: right;
  margin-left: -1.5em;
  margin-top: -1.5em;
  margin-right: 3.3em;
  position:relative;
}
</style>
