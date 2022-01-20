<template>
    <div class = "container">
        <div class="row text-center">
        <!-- Climb -->
        <div class="col-md">
            <div class="card bg-dark text-light py-3 mx-auto">
        <section>
            <div>
                <h3>Climb</h3>
            </div>
            <div>
                <button class = "btn mb-2 mt-3" v-on:click="climb=0"  :style="[climb === 0 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">On Field</button>
            </div>
            <div>
                <button class = "btn my-2" v-on:click="climb=1"  :style="[climb === 1 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">In Hab</button>
            </div>
            <div>
                <button class = "btn my-2" v-on:click="climb=2"  :style="[climb === 2 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">Low Level</button>
            </div>
            <div>
                <button class = "btn my-2" v-on:click="climb=3"  :style="[climb === 3 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">High Level</button>
            </div>
        </section>
        </div>
        </div>
        <div class="col-md">
            <div class = "card mx-auto bg-light text-dark py-3 mx-auto">
        <!-- Misc -->
        <section>
            <h2>Report</h2>
            <div>
                <input v-model="scoutName" class = "bg-light mt-5 mb-4" type = textarea id = 'scoutName' placeholder="Scout Name">
            </div>
            <textarea v-model="comments" class = "bg-light mt-4 mb-1" id = 'comments' placeholder="Comments"/>

            <!-- Win -->
            <div class = "mb-4">
                <input class="form-check-input mx-auto" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="win" checked>
                <label class="form-check-label mx-auto" for="flexSwitchCheckChecked">{{win ? 'Win' : 'Loss'}}</label>
            </div>
        </section>

    <!-- Submit -->
        <section>
            <!--Probably a v-if on an error message here or something -->
            <button id = "submit" class = "btn my-2 text-white" v-on:click="this.$emit('submit')">Submit</button>
        </section>
        </div>
        </div>
        <div class="col-md">
            <div class="card bg-dark text-light py-3 mx-auto">
        <!-- Defense -->
        <section>
            <div>
                <h3>Defense</h3>
            </div>
            <div>
                <button class = "btn mb-2 mt-3" v-on:click="defense=0"  :style="[defense === 0 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">Didn't Play (0)</button>
            </div>
            <div>
                <button class = "btn my-2" v-on:click="defense=1"  :style="[defense === 1 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">Negligible (1)</button>
            </div>
            <div>
                <button class = "btn my-2" v-on:click="defense=2"  :style="[defense === 2 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">Weak (2)</button>
            </div>
            <div>
                <button class = "btn my-2" v-on:click="defense=3"  :style="[defense === 3 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">Effective (3)</button>
            </div>
            <div>
                <button class = "btn my-2" v-on:click="defense=4"  :style="[defense === 4 ? 'border-image: linear-gradient(315deg, #7d77ff, #ff9482) 1; border-style: solid; border-width: 3px; background-color: white; font-weight: bold;' : 'background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%); color: white;']">Unbreakable (4)</button>
            </div>
        </section>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import { watchEffect, ref, defineComponent } from "vue";

export default ({
data(){
    return{
        climb: 0,
        defense: 0,
        scoutName: '',
        comments: '',
        win: false
}
},
  created(){
watchEffect(() => {
  this.$emit('sendData',  {climb: this.climb, defense: this.defense, scoutName: this.scoutName, comments: this.comments, win: this.win})
  })
}

})
</script>

<style scoped>
.card{
    width: 85%;
    height: 100%;
}
.row.display-flex {
  display: flex;
  flex-wrap: wrap;
}
.col{
  align-items: center;
}
#scoutName{
  border-bottom: 2px solid black;
  border-right: white;
  border-left: white;
  border-top: white;
  width: 62.5%
}
#comments{
  border-bottom: 2px solid black;
  border-right: white;
  border-left: white;
  border-top: white;
  width: 62.5%
}
.form-check-label{
  padding-left: 0.3em;
}
#flexSwitchCheckChecked{
    background-color: black;
}
#submit {
    background-image: linear-gradient(315deg, #7d77ff 0%, #ff9482 100%);
}
</style>