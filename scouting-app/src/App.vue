<template>
  <nav class="bg-dark fixed-top pt-2">
    <div class="container">
      <div>
        <router-link to="/"><button id="logout-btn" class="btn mb-2 py-2 text-white" type="submit">Logout
              </button></router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

Change colours of navbar based on design on the landing page. Modern, simplistic, efficient design 

<style scoped>
#logout-btn {
  float:right;
  background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);
  border-radius: 25px;
  padding-right: 20px;
  padding-left: 20px;
}
</style>
