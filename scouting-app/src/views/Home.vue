<template>
  <div class="home">
    <Password/>
  </div>
</template>

<script>
// @ is an alias to /src
import Password from '@/components/Password.vue'

export default {
  name: 'Home',
  components: {
    Password
  }
}
</script>
