<template>
    <div>
        <img class="mx-1" :src="turn_left_src" @click="turnLeft($event)" />
        <img class="mx-1" :src="turn_right_src" @click="turnRight($event)" />
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: "TurnCharacter",
    data() {
        return {
            turn_left_src: require('../../assets/img/interface/bt_leftturn_normal.png'),
            turn_right_src: require('../../assets/img/interface/bt_rightturn_normal.png')
        }
    },
    methods: {
        ...mapMutations(['SAVE_CHARACTER_POSITION']),
        turnLeft: function (event) {
            this.turn_left_src = require('../../assets/img/interface/bt_leftturn_press.png')
            setTimeout(() => { this.turn_left_src = require('../../assets/img/interface/bt_leftturn_normal.png') }, 250)
            this.SAVE_CHARACTER_POSITION("left")
        },
        turnRight: function (event) {
            this.turn_right_src = require('../../assets/img/interface/bt_rightturn_press.png')
            setTimeout(() => { this.turn_right_src = require('../../assets/img/interface/bt_rightturn_normal.png') }, 250)
            this.SAVE_CHARACTER_POSITION("right")
        }
    }
}
</script>

<style>
</style>