<template>
  <div class="grid">
    <grid/>
      <router-link id="link" class="h5" to="/scout?compID=humber"
                >TEST</router-link>
  </div>
</template>

<script>
import grid from '@/components/Gridbox.vue'

export default{
  components: {
    grid
  }
}
</script>

<style scoped>
.grid{
  margin-top: 5em;
}

</style>

