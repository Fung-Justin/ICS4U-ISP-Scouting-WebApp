<template>
    <div class = "container text-center mt-2 mb-1">
        <button class = "btn btn-lg" v-on:click="onClick">{{timeString}}</button>
    </div>
</template>

<script>
export default {
    props:['paused', 'sliderTime', 'run', 'speed'],
data(){
    return{
        time: 0,
        timeString: '2:30',
        timer: Number,
    };
},
methods: {
    //Emits the time to parent component
    getTime(){
        this.$emit('getTime', Math.round(this.time*10)/10);
        this.$emit('getTS', this.timeString)
    },
    startTimer(){
        this.timer = setInterval(this.updateTimer, 100/this.speed)
    },
    resetTimer(){
        //RIGHT NOW NOT IN USE, if we don't make a reset stats function delete this and $emit('resetSlider)
        this.time = 0
        this.timeString = "2:30"
        if(this.sliderTime === null){
        clearInterval(this.timer)
        }
    },
    onClick(){
        if(this.run)
            this.startTimer()
    },
    updateTimer(){
        if(this.sliderTime)
            this.time=Number(this.sliderTime)
        if(this.time>149.9)
            this.timeString="Match Finished"
        else{
            if(!this.paused){
            this.time+=0.1
        }
            this.createTS()
        }
    }, createTS(){
        this.timeString=Math.floor((150-Math.round(this.time))/60)+":"
        if((150-Math.round(this.time))%60<10)
            this.timeString+="0"
        this.timeString+=Math.round((150-Math.round(this.time))%60)
    }
}, watch:{
        time(newTime){
            this.getTime()
        },
        speed(newSpeed){
            clearInterval(this.timer)
            this.startTimer()
        }
},
mounted(){
    if(this.sliderTime != null)
        this.startTimer()
}
}
</script>

<style scoped>
.btn {
    background-image: linear-gradient(315deg, #7d77FF 0%, #FF9482 100%);
    border: white;
    color: white;
}
</style>