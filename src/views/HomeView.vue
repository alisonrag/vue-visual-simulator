<template>
  <div class="row">
    <div class="col-md-12">
      <Character :char="char" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <GenderList v-on:changeSex="updateSex" />
      <BodyPallete v-on:changeBodyPallete="updateBodyPallete" />
      <HairColorList v-on:changeHairColor="updateHairColor" />
      <HeadList v-on:changeHead="updateHead" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <JobList v-on:changeJob="updateJob" />
    </div>
  </div>
  <div class="row g-0">
    <div class="col-3 item-list">
      <ItemListHeadTop v-on:changeHeadTop="updateHeadTop" />
    </div>
    <div class="col-3 item-list">
      <ItemListHeadMid v-on:changeHeadMid="updateHeadMid" />
    </div>
    <div class="col-3 item-list">
      <ItemListHeadBottom v-on:changeHeadBottom="updateHeadBottom" />
    </div>
    <div class="col-3 item-list">
      <ItemListGarmet v-on:changeGarmet="updateGarmet" />
    </div>
  </div>
</template>

<script>
import GenderList from "@/components/GenderList.vue"
import HairColorList from "@/components/HairColorList.vue"
import HeadList from "@/components/HeadList.vue"
import BodyPallete from "@/components/BodyPallete.vue"
import JobList from "@/components/JobList.vue"
import ItemListHeadTop from "@/components/ItemListHeadTop.vue"
import ItemListHeadMid from "@/components/ItemListHeadMid.vue"
import ItemListGarmet from "@/components/ItemListGarmet.vue"
import ItemListHeadBottom from "@/components/ItemListHeadBottom.vue"
import Character from "@/components/Character.vue"

export default {
  data() {
    return {
      gender: 0,
      char: {
        "gender": 1,
        "job": ["0"],
        "head": 1,
        "headPalette": 1,
        "headdir": 0,
        "headgear": [0, 0, 0],
        "garment": 0,
        "bodyPalette": 0,
        "action": 0,
      }
    }
  },
  components: {
    GenderList,
    HairColorList,
    HeadList,
    BodyPallete,
    JobList,
    ItemListHeadTop,
    ItemListHeadMid,
    ItemListHeadBottom,
    ItemListGarmet,
    Character
  },
  mounted() {
    document.title = 'Ragnarok Online Visual Simulator'
  },
  methods: {
    updateSex: function (gender) {
      this.char.gender = gender
    },
    updateHairColor: function (id) {
      this.char.headPalette = id - 1
    },
    updateHead: function (id) {
      this.char.head = id
    },
    updateBodyPallete: function (id) {
      this.char.bodyPalette = id
    },
    updateJob: function (id) {
      this.char.job[0] = id.toString()
    },
    updateHeadTop: function (viewID) {
      this.char.headgear[0] = viewID
    },
    updateHeadMid: function (viewID) {
      this.char.headgear[1] = viewID
    },
    updateHeadBottom: function (viewID) {
      this.char.headgear[2] = viewID
    },
    updateGarmet: function (viewID) {
      this.char.garment = viewID
    },
  }
}
</script>
<style scoped>
.item-list {
  padding: 10px;
}
</style>
