<template>
    <transition name="fade" mode="out-in">
  <nav class="bg-dark pt-2 fixed-top" v-if="this.$route.path !== '/'">
    <div class="container">
      <div>
        <router-link to="/"><button id="logout-btn" class="btn mb-2 py-2 text-white" type="submit" @click="logout()">Logout
              </button></router-link>
        <div class = "home">
          <router-link to="/"><i class = "bi bi-house text-white"></i></router-link>
          <router-link class = "h5 text-white" to="/home">Home</router-link>
        </div>
        <div class = "links">
          <router-link class = "h6 text-white dir" to="/grid">Grid</router-link>
          <router-link class = "h6 text-white dir" to="/matches">Matches</router-link>
          <router-link class = "h6 text-white" to="/scout">Scout</router-link>
        </div>
      </div>
    </div>
  </nav>
    </transition>

  <router-view v-slot="{ Component }" :style="[this.$route.path !== '/' ? 'margin: 56px 0 0 0' : '']">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
          </transition>
  </router-view>

</template>

Check if home button actually takes you home. 

<style scoped>
#logout-btn {
  float:right;
  background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);
  border-radius: 25px;
  padding-right: 20px;
  padding-left: 20px;
}
.text-white{
  text-decoration: none;
}
.home {
  padding: 7px 0;
  display: inline-block;
}
.links {
  padding: 7px 0;
  display: inline-block;
  float:right;
  margin-left: 25px;
  margin-right: 30px;
}
.bi-house{
  margin-right: 5px;
  cursor: pointer;
}
.dir {
  margin-right: 25px;
}

/* Transitions */
.fade-enter-from,
.fade-leave-to {
opacity:0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

</style>

<script>
export default {
  methods: {
    logout (){
      localStorage.removeItem('user');
       location.reload()
    }
  }
}
</script>