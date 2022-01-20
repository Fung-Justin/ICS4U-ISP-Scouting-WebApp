<template>
    
</template>

<script>
import PostService from '../PostService'

export default({
    data(){
        return{matches: Array}
    },
    async created(){
        this.matches = await PostService.getPosts()
        console.log(this.matches)
}
})
</script>
