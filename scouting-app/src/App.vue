<template>

<!-- Navbar -->
  <transition name="fade" mode="out-in">
    <nav id = 'nav' class="bg-dark pt-2 fixed-top" v-if="this.$route.path !== '/' && this.$route.path !== '/create-account'">
      <div class="container">
        <div>
          <router-link to="/">
            <button id="logout-btn" class="btn mb-2 py-2 text-white" type="submit" @click="logout()">Logout
            </button>
          </router-link>
          <div class = "home">
            <router-link class = "h5 text-white" to="/home"><i class = "bi bi-house"></i>Home</router-link>
          </div>
          <div class = "links">
            <router-link class = "h6 text-white dir" to="/grid">Grid</router-link>
            <router-link class = "h6 text-white dir" to="/teams">Teams</router-link>
            <router-link class = "h6 text-white dir" to="/matches">Matches</router-link>
            <router-link class = "h6 text-white" to="/scout">Scout</router-link>
          </div>
        </div>
      </div>
    </nav>
  </transition>

  <!-- Router view -->
  <router-view v-slot="{ Component }" class="h-100" :style="[this.$route.path !== '/' && this.$route.path !== '/create-account' ? 'margin: 0 0 0 0' : '']">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
          </transition>
  </router-view>

</template>

<style>
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
.bi-house{
  text-decoration: none;

}
#nav a {
  color: white;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  background: -webkit-linear-gradient(315deg, #7d77ff 0%, #ff9482 100%) !important;
  -webkit-background-clip: text !important; 
  -webkit-text-fill-color: transparent !important;
}
.img {
  background-image: linear-gradient(315deg, #7d77FF 0%, #FF9482 100%);
  padding: 7.5em;
  height: 100%;
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