<template>
    <div class = "container text-center mt-2 mb-1">
        <button class = "btn btn-lg" v-on:click="onClick">{{timeString}}</button>
    </div>
</template>

<script>
export default {
    props: ['paused', 'sliderTime', 'run', 'speed'],
    data() {
        return {
            time: 0,
            timeString: '2:30',
            timer: Number,
        };
    },
    methods: {
        //Emits the time to parent component
        getTime() {
            this.$emit('getTime', Math.round(this.time * 10) / 10);
            this.$emit('getTS', this.timeString)
        },
        //Sets timer
        setTimer() {
            this.timer = setInterval(this.updateTimer, 100 / this.speed)
        },
        //Starts timer if run conditions are met
        onClick() {
            if (this.run)
                this.setTimer()
        },
        //Updates the timer
        updateTimer() {
            if (this.sliderTime)
                this.time = Number(this.sliderTime)
            if (this.time > 149.9)
                this.timeString = "Match Finished"
            else {
                if (!this.paused) {
                    this.time += 0.1
                }
                this.createTS()
            }
        },
        //Creates a String in M:SS format for the current time
        createTS() {
            this.timeString = Math.floor((150 - Math.round(this.time)) / 60) + ":"
            if ((150 - Math.round(this.time)) % 60 < 10)
                this.timeString += "0"
            this.timeString += Math.round((150 - Math.round(this.time)) % 60)
        }
    },
    watch: {
        //Sends new time to parent component on change
        time(newTime) {
            this.getTime()
        },
        //sets timer with new speed when speed changes
        speed(newSpeed) {
            clearInterval(this.timer)
            this.setTimer()
        }
    },
    mounted() {
        //Has timer automatically started but paused if in playback mode
        if (this.sliderTime != null)
            this.setTimer()
    }
}
</script>

<style scoped>
.btn {
    background-image: linear-gradient(to left, #7d77FF 0%, #FF9482 100%);
    border: white;
    color: white;
}
</style>