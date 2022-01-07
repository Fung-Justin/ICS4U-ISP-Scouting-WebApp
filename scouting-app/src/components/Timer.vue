<template>
    <div>
        <button v-on:click="onClick">{{timeString}}</button>
    </div>
</template>

<script>

export default {
data(){
    return{
        time: 0,
        timeString: '2:30',
        active: false,
        timer: Number
    };
},
methods: {
    startTimer(){
        this.active = true
        this.time = 0
        this.timer = setInterval(this.updateTimer, 1000)
    },
    resetTimer(){
        this.active = false
        this.time = 0
        this.timeString = "2:30"
        clearInterval(this.timer)
    },
    onClick(){
        if(!this.active){
            this.startTimer()
        }else if(this.time<=15){
            this.resetTimer()
        }
    },
    updateTimer(){
        if(this.time<150){
            this.time+=1
            this.timeString=Math.floor((150-this.time)/60)+":"
            if((150-this.time)%60<10)
                this.timeString+="0"
            this.timeString+=(150-this.time)%60
        }
    }
}
}
</script>