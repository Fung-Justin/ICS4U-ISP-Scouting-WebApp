<template>
    <div>
        <button v-on:click="startTimer">{{time}}</button>
    </div>
</template>

<script>

export default {
data(){
    return{
        time: Number
    };
},
methods: {
    startTimer(){
        this.time = 0
        setInterval(() => this.time += 1 , 1000)
    }
}
}
</script>