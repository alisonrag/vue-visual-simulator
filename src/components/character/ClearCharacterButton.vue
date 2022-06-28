<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-danger btn-sm m-2"
      @click="resetCharacter()"
    >
      {{ $t("resetCharacter") }}
    </button>
  </div>
  <div>
    <button
      type="button"
      class="btn btn-outline-danger btn-sm m-2"
      @click="resetHeadgearTop()"
    >
      {{ $t("top") }}
    </button>
    <button
      type="button"
      class="btn btn-outline-danger btn-sm m-2"
      @click="resetHeadgearMid()"
    >
      {{ $t("mid") }}
    </button>
    <button
      type="button"
      class="btn btn-outline-danger btn-sm m-2"
      @click="resetHeadgearBot()"
    >
      {{ $t("bot") }}
    </button>
    <button
      type="button"
      class="btn btn-outline-danger btn-sm m-2"
      @click="resetGarment()"
    >
      {{ $t("garment") }}
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ClearCharacterButton",
  methods: {
    ...mapMutations([
      "RESET_CHARACTER",
      "SAVE_HEADGEAR_TOP",
      "SAVE_HEADGEAR_TOP_ID",
      "SAVE_HEADGEAR_TOP_NAME",
      "SAVE_HEADGEAR_MID",
      "SAVE_HEADGEAR_MID_ID",
      "SAVE_HEADGEAR_MID_NAME",
      "SAVE_HEADGEAR_BOTTOM",
      "SAVE_HEADGEAR_BOTTOM_ID",
      "SAVE_HEADGEAR_BOTTOM_NAME",
      "SAVE_GARMENT",
      "SAVE_GARMENT_ID",
      "SAVE_GARMENT_NAME",
    ]),
    resetCharacter: function () {
      this.RESET_CHARACTER(null);
      this.resetHeadgearTop();
      this.resetHeadgearMid();
      this.resetHeadgearBot();
      this.resetGarment();
    },
    resetHeadgearTop: function () {
      this.SAVE_HEADGEAR_TOP(0);
      this.SAVE_HEADGEAR_TOP_ID(19547);
      this.SAVE_HEADGEAR_TOP_NAME(null);
    },
    resetHeadgearMid: function () {
      this.SAVE_HEADGEAR_MID(0);
      this.SAVE_HEADGEAR_MID_ID(19735);
      this.SAVE_HEADGEAR_MID_NAME(null);
    },
    resetHeadgearBot: function () {
      this.SAVE_HEADGEAR_BOTTOM(0);
      this.SAVE_HEADGEAR_BOTTOM_ID(19783);
      this.SAVE_HEADGEAR_BOTTOM_NAME(null);
    },
    resetGarment: function () {
      this.SAVE_GARMENT(0);
      this.SAVE_GARMENT_ID(20571);
      this.SAVE_GARMENT_NAME(null);
    },
  },
};
</script>
