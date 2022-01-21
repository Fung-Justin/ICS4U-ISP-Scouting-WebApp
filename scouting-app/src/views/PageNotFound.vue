<template>
<!-- Page not Found Message -->
    <div class="img d-flex justify-content-center align-items-center"> 
        <div class="card text-dark mx-auto py-5 text-center align-items-center">
            <h1>Oops! Page not found</h1>     
            <p>Sorry, the page you're looking for is no longer online or has been moved.</p>
            <button class="btn mt-2" v-on:click="$router.push('/home')">Go to Home</button>
        </div>
    </div>
</template>

<style scoped>
.btn {
    background-image: linear-gradient(to left, #7d77FF 0%, #FF9482 100%);
    border: white;
    color: white;
    width:30%
}

.img {
  background-image: linear-gradient(315deg, #7d77FF 0%, #FF9482 100%);
  padding: 7.5em;
  height: 100%;
}

.card {
  border-radius: 10px;
  background-image: white;
  width: 50%;
  margin-right:0%;
  margin-left:0%;
}

</style>