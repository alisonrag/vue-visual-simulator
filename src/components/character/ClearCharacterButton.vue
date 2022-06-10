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
    ...mapMutations(["RESET_CHARACTER", "SAVE_HEADGEAR_TOP", "SAVE_HEADGEAR_MID", "SAVE_HEADGEAR_BOTTOM", "SAVE_GARMENT"]),
    resetCharacter: function () {
      this.RESET_CHARACTER(null);
    },
    resetHeadgearTop: function () {
      this.SAVE_HEADGEAR_TOP(0);
    },
    resetHeadgearMid: function () {
      this.SAVE_HEADGEAR_MID(0);
    },
    resetHeadgearBot: function () {
      this.SAVE_HEADGEAR_BOTTOM(0);
    },
    resetGarment: function () {
      this.SAVE_GARMENT(0);
    },
  },
};
</script>
