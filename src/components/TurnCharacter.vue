<template>
    <div>
        <img class="mx-1" :src="turn_left_src" @click="turnLeft($event)" />
        <img class="mx-1" :src="turn_right_src" @click="turnRight($event)" />
    </div>
</template>

<script>
export default {
    name: "TurnCharacter",
    data() {
        return {
            turn_left_src: require('../assets/interface/bt_leftturn_normal.png'),
            turn_right_src: require('../assets/interface/bt_rightturn_normal.png')
        }
    },
    methods: {
        turnLeft: function (event) {
            this.turn_left_src = require('../assets/interface/bt_leftturn_press.png')
            setTimeout(() => { this.turn_left_src = require('../assets/interface/bt_leftturn_normal.png') }, 250)
            this.$emit("turnCharacter", "left")
        },
        turnRight: function (event) {
            this.turn_right_src = require('../assets/interface/bt_rightturn_press.png')
            setTimeout(() => { this.turn_right_src = require('../assets/interface/bt_rightturn_normal.png') }, 250)
            this.$emit("turnCharacter", "right")
        }
    }
}
</script>

<style>
</style>