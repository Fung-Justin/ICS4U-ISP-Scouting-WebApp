<template>
  <div class="about">
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

