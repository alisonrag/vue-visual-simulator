<template>
  <div>
    <img
      class="mx-1 min_turn"
      v-lazy="{ src: turn_left_src, delay: 250 }"
      @click="turnHeadLeft($event)"
    />
    <img
      class="mx-1 min_turn"
      v-lazy="{ src: turn_right_src, delay: 250 }"
      @click="turnHeadRight($event)"
    />
  </div>
  <div>
    <img class="mx-1" v-lazy="{ src: turn_left_src, delay: 250 }" @click="turnLeft($event)" />
    <img class="mx-1" v-lazy="{ src: turn_right_src, delay: 250 }" @click="turnRight($event)" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TurnCharacter",
  data() {
    return {
      turn_left_src: require("../../assets/img/interface/bt_leftturn_normal.png"),
      turn_right_src: require("../../assets/img/interface/bt_rightturn_normal.png"),
    };
  },
  methods: {
    ...mapMutations(["SAVE_CHARACTER_POSITION", "SAVE_CHARACTER_HEAD"]),
    turnLeft: function (event) {
      this.turn_left_src = require("../../assets/img/interface/bt_leftturn_press.png");
      setTimeout(() => {
        this.turn_left_src = require("../../assets/img/interface/bt_leftturn_normal.png");
      }, 250);
      this.SAVE_CHARACTER_POSITION("left");
    },
    turnRight: function (event) {
      this.turn_right_src = require("../../assets/img/interface/bt_rightturn_press.png");
      setTimeout(() => {
        this.turn_right_src = require("../../assets/img/interface/bt_rightturn_normal.png");
      }, 250);
      this.SAVE_CHARACTER_POSITION("right");
    },
    turnHeadLeft: function (event) {
      this.SAVE_CHARACTER_HEAD("left");
    },
    turnHeadRight: function (event) {
      this.SAVE_CHARACTER_HEAD("right");
    },
  },
};
</script>

<style scoped>
.min_turn {
  width: 15px;
}
</style>
