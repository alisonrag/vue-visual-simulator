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
                              <img :src="item_top_src" alt="Item Top Tab" />
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
                              <img :src="item_mid_src" alt="Item Mid Tab" />
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
                              <img :src="item_bot_src" alt="Item Bot Tab" />
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
                              <img :src="item_garmet_src" alt="Item Garmet Tab" />
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
                          <div class="mb-3 d-flex flex-column align-items-center">
                            <TurnCharacter v-on:turnCharacter="updateCharacterPosition" />
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
                <div class="row py-4 px-2">
                  <h6>Actions</h6>
                  <ActionList v-on:changeAction="updateAction" />
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
import TurnCharacter from "@/components/TurnCharacter.vue"
import ActionList from "@/components/ActionList.vue"
import { Tooltip } from "bootstrap"

export default {
  data() {
    return {
      gender: 0,
      item_top_src: 'https://static.divine-pride.net/images/items/item/19547.png',
      item_mid_src: 'https://static.divine-pride.net/images/items/item/19735.png',
      item_bot_src: 'https://static.divine-pride.net/images/items/item/19783.png',
      item_garmet_src: 'https://static.divine-pride.net/images/items/item/20571.png',
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
    Character,
    TurnCharacter,
    ActionList
  },
  mounted() {
    document.title = 'Ragnarok Online Visual Simulator'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    })
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
    updateHeadTop: function (item) {
      this.char.headgear[0] = item.viewID
      this.item_top_src = 'https://static.divine-pride.net/images/items/item/' + item.itemID + '.png'
    },
    updateHeadMid: function (item) {
      this.char.headgear[1] = item.viewID
      this.item_mid_src = 'https://static.divine-pride.net/images/items/item/' + item.itemID + '.png'
    },
    updateHeadBottom: function (item) {
      this.char.headgear[2] = item.viewID
      this.item_bot_src = 'https://static.divine-pride.net/images/items/item/' + item.itemID + '.png'
    },
    updateGarmet: function (item) {
      this.char.garment = item.viewID
      this.item_garmet_src = 'https://static.divine-pride.net/images/items/item/' + item.itemID + '.png'
    },
    updateCharacterPosition: function (side) {
      if (side == "left") {
        let action = (this.char.action + 1) % 8;
        if (action == 0) { this.char.action -= 7; } else { this.char.action++; }
      } else {
        let action = (this.char.action) % 8;
        if (action == 0) { this.char.action += 7; } else { this.char.action--; }
      }
    },
    updateAction: function (id) {
      let action = (this.char.action + 1) % 8;
      this.char.action = id + action - 1
      if (this.char.action < 0)
        this.char.action = 0
    }
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
  min-height: 90vh;
}
</style>