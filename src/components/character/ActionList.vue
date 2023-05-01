<template>
  <div>
    <ul class="ul-action-list">
      <li
        v-for="action in actions"
        :key="action.id"
        class="simicon"
        :class="[
          action.class,
          parseInt($store.state.character.action) -
            ($store.state.character.action % 8) ==
          action.id
            ? 'action-selected'
            : '',
        ]"
        :id="action.id"
        @click="clickAction($event)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ActionList",
  data() {
    return {
      actions: [
        { id: 0, name: "idle", class: "sim_a00" },
        { id: 8, name: "walk", class: "sim_a01" },
        { id: 16, name: "sitting", class: "sim_a02" },
        { id: 24, name: "picking", class: "sim_a03" },
        { id: 32, name: "standby", class: "sim_a04" },
        { id: 40, name: "attacking", class: "sim_a10" },
        { id: 48, name: "damage", class: "sim_a06" },
        { id: 64, name: "dead", class: "sim_a08" },
        { id: 80, name: "attack", class: "sim_a11" },
        { id: 88, name: "attack", class: "sim_a12" },
        { id: 96, name: "casting", class: "sim_a12" },
      ],
      active: false,
    };
  },
  methods: {
    ...mapMutations(["SAVE_ACTION"]),
    clickAction: function (event) {
      if (this.active) this.active.target.classList.remove("action-selected");

      this.active = event;
      this.active.target.classList.add("action-selected");
      this.SAVE_ACTION(parseInt(event.target.id));
    },
  },
};
</script>

<style scoped>
.ul-action-list {
  list-style: none;
}

.simicon {
  background-image: url("~@/assets/img/interface/icons.png");
  background-color: #f6feff;
  background-position: center;
  background-repeat: no-repeat;
  border: solid 1px lightblue;
  border-radius: 5px;
  margin: 2px;
  float: left;
  width: 28px;
  height: 28px;
}

.action-selected {
  background-color: #3baae3;
}
.sim_a00 {
  background-position: 0 0;
}
.sim_a01 {
  background-position: -24px 0;
}
.sim_a02 {
  background-position: -48px 0;
}
.sim_a03 {
  background-position: -72px 0;
}
.sim_a04 {
  background-position: -96px 0;
}
.sim_a05 {
  background-position: -120px 0;
}
.sim_a06 {
  background-position: -144px 0;
}
.sim_a08 {
  background-position: -168px 0;
}
.sim_a10 {
  background-position: -192px 0;
}
.sim_a11 {
  background-position: -216px 0;
}
.sim_a12 {
  background-position: -240px 0;
}
.sim_sex {
  background-position: -264px 0;
}
.sim_mnt {
  background-position: -288px 0;
}
.sim_hc {
  background-position: -312px 0;
}
.sim_hf {
  background-position: -336px 0;
}
.sim_hrb {
  background-position: -360px 0;
}
.sim_hv {
  background-position: -384px 0;
}
.sim_hwa {
  background-position: -408px 0;
}
</style>
