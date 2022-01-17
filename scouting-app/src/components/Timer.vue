<template>
    <div>
        <button v-on:click="onClick">{{timeString}}</button>
        <div>{{sliderTime}}</div>
    </div>
</template>

<script>
export default {
    props:['paused', 'sliderTime'],
data(){
    return{
        time: 0,
        timeString: '2:30',
        active: false,
        timer: Number,
    };
},
methods: {
    //Emits the time to parent component in seconds to one decimal place
    getTime(){
        this.$emit('getTime', Math.round(this.time*10)/10);
    },
    startTimer(){
        this.active = true
        this.time = 0
        this.timer = setInterval(this.updateTimer, 100)
    },
    resetTimer(){
        this.time = 0
        this.timeString = "2:30"
        if(this.sliderTime === null){
        this.active = false
        clearInterval(this.timer)
        }
    },
    onClick(){
        if(!this.active){
            this.startTimer()
        }else{
            this.resetTimer()
            this.$emit('resetSlider')
        }
    },
    updateTimer(){
        if(this.sliderTime)
            this.time=Number(this.sliderTime)
        if(this.time>149.9)
            this.timeString="Match Finished"
        else{
            if(!this.paused){
            this.time+=0.1
            this.getTime()
        }
            this.createTS()
        }
    }, createTS(){
        this.timeString=Math.floor((150-Math.round(this.time))/60)+":"
        if((150-Math.round(this.time))%60<10)
            this.timeString+="0"
        this.timeString+=Math.round((150-Math.round(this.time))%60)
    }
},
mounted(){
    if(this.sliderTime != null)
        this.startTimer()
}
}
</script>