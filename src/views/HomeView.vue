<template>
  <div class="home">
    <GenderList v-on:changeSex="updateSex" />
    <HairColorList v-on:changeHairColor="updateHairColor" />
    <HeadList v-on:changeHead="updateHead" />
    <BodyPallete v-on:changeBodyPallete="updateBodyPallete" />
    <JobList v-on:changeJob="updateJob" />
    <ItemListHeadTop v-on:changeHeadTop="updateHeadTop" />
    <ItemListHeadMid v-on:changeHeadMid="updateHeadMid" />
    <ItemListHeadBottom v-on:changeHeadBottom="updateHeadBottom" />
    <ItemListGarmet v-on:changeGarmet="updateGarmet" />
    <Character :char="char" />
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
        "gender": 0,
        "job": ["0"],
        "head": 1,
        "headPalette": 0,
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
