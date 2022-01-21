<template>
    <div>
        <tr>
            <td><h6 v-on:click="this.$router.push(`team?team=${this.stats.teamNumber}`)">{{this.stats.teamNumber}}</h6></td>
            <td><h6>{{stats.score/stats.matchesPlayed}}</h6></td>
            <td><h6>{{stats.wins}}</h6></td>
            <td><h6>{{stats.matchesPlayed-stats.wins}}</h6></td>
            <td><h6>{{stats.rp}}</h6></td>
            <td><h6>{{stats.CargoRocketH/stats.matchesPlayed}}<br>{{stats.CargoRocketM/stats.matchesPlayed}}<br>{{stats.CargoRocketL/stats.matchesPlayed}}</h6></td>
            <td><h6>{{stats.CargoCB/stats.matchesPlayed}}</h6></td>
            <td><h6>{{stats.HatchRocketH/stats.matchesPlayed}}<br>{{stats.HatchRocketM/stats.matchesPlayed}}<br>{{stats.HatchRocketL/stats.matchesPlayed}}</h6></td>
            <td><h6>{{stats.HatchCB/stats.matchesPlayed}}</h6></td>
            <td><h6>{{stats.climb/stats.matchesPlayed}}</h6></td>
            <td><h6>{{stats.defense/stats.matchesPlayed}}</h6></td>
        </tr>
    </div>
</template>

<script>
    export default {
        name: "TeamRow",
        props: {
            stats: Object
        },
    }
</script>