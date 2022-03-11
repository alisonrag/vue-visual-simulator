<template>
  <div class="home">
    <GenderList/>
    <HairColorList/>
    <HeadList />
    <BodyPallete />
    <JobList/>
    <ItemListHeadTop />
    <ItemListHeadMid />
    <ItemListHeadBottom />
    <ItemListGarmet />
    <Character />
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
  }
}
</script>
