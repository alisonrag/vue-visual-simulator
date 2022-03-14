<template>
  <div class="container-character">
    <div class="container">
      <div class="row">
        <div class="col-md-12 bg-gradient-ragnarok bg-gradient-ragnarok-border my-5">
          <div class="col-md-12 card ragnarok-card">
            <div class="row">
              <div class="col-md-12">
                <div class="row g-0">
                  <div class="col-md-12 content">
                    <i class="fa fa-user-circle" aria-hidden="true"></i> Visual Simulator
                  </div>
                </div>
              </div>
            </div>
            <div class="row g-0">
              <div class="col-md-6 p-3">
                <div class="col-md-12">
                  <div class="card card-job-shadow">
                    <div class="card p-1">
                      <div class="card-job-inner py-1">
                        <JobList v-on:changeJob="updateJob" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="card card-job-shadow">
                    <div class="card p-1">
                      <div class="card-job-inner">
                        <div class="d-flex align-items-start">
                          <div
                            class="nav flex-column nav-pills me-3"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <button
                              class="nav-link active"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected="true"
                            >
                              <img
                                src="https://static.divine-pride.net/images/items/item/19547.png"
                                alt="Item Top Tab"
                              />
                              <br />Top
                            </button>
                            <button
                              class="nav-link"
                              id="v-pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-profile"
                              aria-selected="false"
                            >
                              <img
                                src="https://static.divine-pride.net/images/items/item/19735.png"
                                alt="Item Mid Tab"
                              />
                              <br />Mid
                            </button>
                            <button
                              class="nav-link"
                              id="v-pills-messages-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-messages"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-messages"
                              aria-selected="false"
                            >
                              <img
                                src="https://static.divine-pride.net/images/items/item/19783.png"
                                alt="Item Mid Tab"
                              />
                              <br />Bot
                            </button>
                            <button
                              class="nav-link"
                              id="v-pills-settings-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-settings"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-settings"
                              aria-selected="false"
                            >
                              <img
                                src="https://static.divine-pride.net/images/items/item/20571.png"
                                alt="Item Mid Tab"
                              />
                              <br />Garmet
                            </button>
                          </div>
                          <div class="tab-content" id="v-pills-tabContent">
                            <div
                              class="tab-pane tab-pane-items fade show active"
                              id="v-pills-home"
                              role="tabpanel"
                              aria-labelledby="v-pills-home-tab"
                            >
                              <ItemListHeadTop v-on:changeHeadTop="updateHeadTop" />
                            </div>
                            <div
                              class="tab-pane tab-pane-items fade"
                              id="v-pills-profile"
                              role="tabpanel"
                              aria-labelledby="v-pills-profile-tab"
                            >
                              <ItemListHeadMid v-on:changeHeadMid="updateHeadMid" />
                            </div>
                            <div
                              class="tab-pane tab-pane-items fade"
                              id="v-pills-messages"
                              role="tabpanel"
                              aria-labelledby="v-pills-messages-tab"
                            >
                              <ItemListHeadBottom v-on:changeHeadBottom="updateHeadBottom" />
                            </div>
                            <div
                              class="tab-pane tab-pane-items fade"
                              id="v-pills-settings"
                              role="tabpanel"
                              aria-labelledby="v-pills-settings-tab"
                            >
                              <ItemListGarmet v-on:changeGarmet="updateGarmet" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 py-2">
                <div class="bg-gradient-ragnarok bg-gradient-ragnarok-border">
                  <div class="row g-0">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="d-flex justify-content-center">
                            <GenderList v-on:changeSex="updateSex" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div
                            class="character-box d-flex flex-column justify-content-center align-items-center"
                          >
                            <Character :char="char" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="d-flex justify-content-center">
                            <BodyPallete v-on:changeBodyPallete="updateBodyPallete" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12">
                          <h6>Hair Style</h6>
                          <HeadList v-on:changeHead="updateHead" :char="char" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <h6>Hair Color</h6>
                          <div class="card px-2 py-1">
                            <HairColorList v-on:changeHairColor="updateHairColor" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

.bg-gradient-ragnarok {
  background-image: linear-gradient(
    135deg,
    rgba(231, 231, 255, 1) 0%,
    rgba(255, 231, 231, 1) 35%,
    rgba(225, 255, 254, 1) 100%
  );
  padding: 5px;
}

.bg-gradient-ragnarok-border {
  border: solid 1px #dddddd;
  border-radius: 5px;
}
.ragnarok-card {
  padding: 10px;
}

.card-job-shadow {
  -webkit-box-shadow: 0px 0px 2px 5px #cddefb;
  box-shadow: 0px 0px 2px 5px #cddefb;
}
.card-job-inner {
  border: 1px dashed #4bb1f5;
  border-radius: 6px;
}

.tab-pane-items {
  max-height: 250px;
  overflow-y: scroll;
}

.character-box {
  width: 100%;
  height: 200px;
}

.container-character {
  height: 90vh;
}
</style>
