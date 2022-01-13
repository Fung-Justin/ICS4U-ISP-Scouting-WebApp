<template>
    <div>
        <!-- Climb -->
        <section>
            <label>Climb</label>
            <button v-on:click="climb=0"  :style="[climb === 0 ? 'background: #d0ddf7' : 'background: #FFF']">On Field</button>
            <button v-on:click="climb=1"  :style="[climb === 1 ? 'background: #d0ddf7' : 'background: #FFF']">In Hab</button>
            <button v-on:click="climb=2"  :style="[climb === 2 ? 'background: #d0ddf7' : 'background: #FFF']">Low Level</button>
            <button v-on:click="climb=3"  :style="[climb === 3 ? 'background: #d0ddf7' : 'background: #FFF']">High Level</button>
        </section>

        <!-- Defense -->
        <section>
            <label>Defense</label>
            <button v-on:click="defense=0"  :style="[defense === 0 ? 'background: #d0ddf7' : 'background: #FFF']">Didn't Play (0)</button>
            <button v-on:click="defense=1"  :style="[defense === 1 ? 'background: #d0ddf7' : 'background: #FFF']">Negligible (1)</button>
            <button v-on:click="defense=2"  :style="[defense === 2 ? 'background: #d0ddf7' : 'background: #FFF']">Weak (2)</button>
            <button v-on:click="defense=3"  :style="[defense === 3 ? 'background: #d0ddf7' : 'background: #FFF']">Effective (3)</button>
            <button v-on:click="defense=4"  :style="[defense === 4 ? 'background: #d0ddf7' : 'background: #FFF']">Unbreakable (4)</button>
        </section>

        <!-- Misc -->
        <section>
            <label>Scout Name: </label>
            <input textarea>
            <label>Comments: </label>
            <input textarea>
        </section>

    <!-- Submit -->
        <section>
            <!--Probably a v-if on an error message here or something -->
            <button>Submit</button>
        </section>
    </div>
</template>

<script>

export default ({
data(){
    return{
        climb: 0,
        defense: 0
}
},
    methods:{
    }
})
</script>