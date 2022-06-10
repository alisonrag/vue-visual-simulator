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
                    <i class="fa fa-user-circle" aria-hidden="true"></i> {{ $t('visualSimulator') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="row g-0">
              <div class="col-md-6 p-3">
                <div class="col-md-12">
                  <div class="card card-job-shadow">
                    <div class="card p-1">
                      <div class="card-job-inner p-2">
                        <JobList />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="card card-job-shadow">
                    <div class="card p-1">
                      <div class="card-job-inner">
                        <div class="row">
                          <div class="col-md-12">
                            <form class="form">
                              <div class="input-group py-2 px-1">
                                <div class="input-group-text">
                                  <i class="fas fa-search"></i>
                                </div>
                                <input type="text" class="form-control" :placeholder="$t('searchItem')"
                                  v-model="searchItemQuery" />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="d-flex align-items-start">
                          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                              data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                              aria-selected="true">
                              <img :src="item_top_src" alt="Item Top Tab" />
                              <br />{{ $t('top') }}
                            </button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                              data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                              aria-selected="false">
                              <img :src="item_mid_src" alt="Item Mid Tab" />
                              <br />{{ $t('mid') }}
                            </button>
                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                              data-bs-target="#v-pills-messages" type="button" role="tab"
                              aria-controls="v-pills-messages" aria-selected="false">
                              <img :src="item_bot_src" alt="Item Bot Tab" />
                              <br />{{ $t('bot') }}
                            </button>
                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                              data-bs-target="#v-pills-settings" type="button" role="tab"
                              aria-controls="v-pills-settings" aria-selected="false">
                              <img :src="item_garmet_src" alt="Item Garmet Tab" />
                              <br />{{ $t('garment') }}
                            </button>
                          </div>
                          <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane tab-pane-items fade show active" id="v-pills-home" role="tabpanel"
                              aria-labelledby="v-pills-home-tab">
                              <ItemListHeadTop :item_filter="searchItemQuery" />
                            </div>
                            <div class="tab-pane tab-pane-items fade" id="v-pills-profile" role="tabpanel"
                              aria-labelledby="v-pills-profile-tab">
                              <ItemListHeadMid :item_filter="searchItemQuery" />
                            </div>
                            <div class="tab-pane tab-pane-items fade" id="v-pills-messages" role="tabpanel"
                              aria-labelledby="v-pills-messages-tab">
                              <ItemListHeadBottom :item_filter="searchItemQuery" />
                            </div>
                            <div class="tab-pane tab-pane-items fade" id="v-pills-settings" role="tabpanel"
                              aria-labelledby="v-pills-settings-tab">
                              <ItemListGarmet :item_filter="searchItemQuery" />
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
                            <GenderList />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="character-box d-flex flex-column justify-content-center align-items-center">
                            <Character />
                          </div>
                          <div class="mb-3 d-flex flex-column align-items-center">
                            <TurnCharacter />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="d-flex justify-content-center">
                            <BodyPallete />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12">
                          <h6>{{ $t('hairStyle') }}</h6>
                          <HeadList />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <h6>{{ $t('hairColor') }}</h6>
                          <div class="card px-2 py-1">
                            <HairColorList />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row py-2 px-2">
                  <h6>{{ $t('actions') }}</h6>
                  <ActionList />
                </div>
                <div class="row py-2 px-2">
                  <div class="col-md-6">
                    <h6>{{ $t('costume') }}</h6>
                    <OutfitCheckbox />
                  </div>
                  <div class="col-md-6">
                    <h6>{{ $t('reset') }}</h6>
                    <ClearCharacterButton />
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
import { mapMutations } from "vuex"
import GenderList from "@/components/character/GenderList.vue"
import HairColorList from "@/components/character/HairColorList.vue"
import HeadList from "@/components/character/HeadList.vue"
import BodyPallete from "@/components/character/BodyPallete.vue"
import JobList from "@/components/character/JobList.vue"
import ItemListHeadTop from "@/components/character/ItemListHeadTop.vue"
import ItemListHeadMid from "@/components/character/ItemListHeadMid.vue"
import ItemListGarmet from "@/components/character/ItemListGarmet.vue"
import ItemListHeadBottom from "@/components/character/ItemListHeadBottom.vue"
import Character from "@/components/character/Character.vue"
import TurnCharacter from "@/components/character/TurnCharacter.vue"
import ActionList from "@/components/character/ActionList.vue"
import ClearCharacterButton from "@/components/character/ClearCharacterButton.vue"
import OutfitCheckbox from "@/components/character/OutfitCheckbox.vue"
import { Tooltip } from "bootstrap"

export default {
  data() {
    return {
      item_top_src: 'https://static.divine-pride.net/images/items/item/19547.png',
      item_mid_src: 'https://static.divine-pride.net/images/items/item/19735.png',
      item_bot_src: 'https://static.divine-pride.net/images/items/item/19783.png',
      item_garmet_src: 'https://static.divine-pride.net/images/items/item/20571.png',
      searchItemQuery: ''
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
    ActionList,
    ClearCharacterButton,
    OutfitCheckbox
  },
  mounted() {
    document.title = 'Ragnarok Online Visual Simulator'
    this.loadLocalStorage()
    this.activeTooltip()
  },
  methods: {
    ...mapMutations(['SAVE_CHARACTER', 'RESET_CHARACTER']),
    activeTooltip: function () {
      let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
      })
    },
    loadLocalStorage: function () {
      let character = localStorage.getItem('character')

      if (character != null) {
        this.SAVE_CHARACTER(JSON.parse(character))
      } else {
        this.RESET_CHARACTER();
      }
    }
  },
  watch: {
    '$store.state.headgear_top_id': {
      deep: true,
      handler(newValue, oldValue) {
        this.item_top_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`
      }
    },
    '$store.state.headgear_mid_id': {
      deep: true,
      handler(newValue, oldValue) {
        this.item_mid_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`
      }
    },
    '$store.state.headgear_bottom_id': {
      deep: true,
      handler(newValue, oldValue) {
        this.item_bot_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`
      }
    },
    '$store.state.garment_id': {
      deep: true,
      handler(newValue, oldValue) {
        this.item_garmet_src = `https://static.divine-pride.net/images/items/item/${newValue}.png`
      }
    },
  },
}
</script>
<style scoped>
.item-list {
  padding: 10px;
}

.bg-gradient-ragnarok {
  background-image: linear-gradient(135deg,
      rgba(231, 231, 255, 1) 0%,
      rgba(255, 231, 231, 1) 35%,
      rgba(225, 255, 254, 1) 100%);
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