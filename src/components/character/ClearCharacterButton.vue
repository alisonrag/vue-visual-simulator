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
      :class="{
        'btn-outline-danger': validHeadTop($store.state),
      }"
      :disabled="!validHeadTop($store.state)"
      class="btn btn-sm m-2"
      @click="clickResetHeadgearTop($store.state)"
    >
      {{ $t("top") }}  
    </button>
    <button
      type="button"
      :class="{
        'btn-outline-danger': validHeadMeio($store.state),
      }"
      :disabled="!validHeadMeio($store.state)"
      class="btn btn-sm m-2"
      @click="clickResetHeadgearMid($store.state)"
    >
      {{ $t("mid") }}
    </button>
    <button
      type="button"     
      :class="{
        'btn-outline-danger': validHeadBot($store.state),
      }"
      :disabled="!validHeadBot($store.state)"
      class="btn btn-sm m-2"
      @click="clickResetHeadgearBot($store.state)"
    >
      {{ $t("bot") }}
    </button>
    <button
      type="button"
      :class="{
        'btn-outline-danger': validGarment($store.state),
      }"
      :disabled="!validGarment($store.state)"
      class="btn btn-sm m-2"
      @click="clickResetHeadgearGarment($store.state)"
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
      "SAVE_HEADGEAR_TOP_ITEM",
      "SAVE_HEADGEAR_MID",
      "SAVE_HEADGEAR_MID_ITEM",
      "SAVE_HEADGEAR_BOTTOM",
      "SAVE_HEADGEAR_BOTTOM_ITEM",
      "SAVE_GARMENT",
      "SAVE_GARMENT_ITEM",
    ]),
    resetCharacter: function () {
      this.RESET_CHARACTER(null);
      this.resetHeadgearTop();
      this.resetHeadgearMid();
      this.resetHeadgearBot();
      this.resetGarment();
    },
    clickResetHeadgearTop: function (item) {
      const item_fortmat = JSON.parse(JSON.stringify(item));
      if (item_fortmat.headgear_top_item.location?.includes("TOP")) {
        this.resetHeadgearTop();
      }
      if (item_fortmat.headgear_mid_item.location?.includes("TOP")) {
          this.resetHeadgearMid();
      }
      if (item_fortmat.headgear_bottom_item.location?.includes("TOP")) {
        this.resetHeadgearBot();
      }
      if (item_fortmat.garment_item.location?.includes("TOP")) {
        this.resetGarment();
      }
    },
    clickResetHeadgearMid: function (item) {
      const item_fortmat = JSON.parse(JSON.stringify(item));
      if (item_fortmat.headgear_top_item.location?.includes("MID")) {
        this.resetHeadgearTop();
      }
      if (item_fortmat.headgear_mid_item.location?.includes("MID")) {
          this.resetHeadgearMid();
      }
      if (item_fortmat.headgear_bottom_item.location?.includes("MID")) {
        this.resetHeadgearBot();
      }
      if (item_fortmat.garment_item.location?.includes("MID")) {
        this.resetGarment();
      }
    },
    clickResetHeadgearBot: function (item) {
      const item_fortmat = JSON.parse(JSON.stringify(item));
      if (item_fortmat.headgear_top_item.location?.includes("BOT")) {
        this.resetHeadgearTop();
      }
      if (item_fortmat.headgear_mid_item.location?.includes("BOT")) {
          this.resetHeadgearMid();
      }
      if (item_fortmat.headgear_bottom_item.location?.includes("BOT")) {
        this.resetHeadgearBot();
      }
      if (item_fortmat.garment_item.location?.includes("BOT")) {
        this.resetGarment();
      }
    },
    clickResetHeadgearGarment: function (item) {
      const item_fortmat = JSON.parse(JSON.stringify(item));
      if (item_fortmat.headgear_top_item.location?.includes("GARMENT")) {
        this.resetHeadgearTop();
      }
      if (item_fortmat.headgear_mid_item.location?.includes("GARMENT")) {
          this.resetHeadgearMid();
      }
      if (item_fortmat.headgear_bottom_item.location?.includes("GARMENT")) {
        this.resetHeadgearBot();
      }
      if (item_fortmat.garment_item.location?.includes("GARMENT")) {
        this.resetGarment();
      }
    },
    resetHeadgearTop: function () {
      this.SAVE_HEADGEAR_TOP(0);
      this.SAVE_HEADGEAR_TOP_ITEM({});
    },
    resetHeadgearMid: function () {
      this.SAVE_HEADGEAR_MID(0);
      this.SAVE_HEADGEAR_MID_ITEM({});
    },
    resetHeadgearBot: function () {
      this.SAVE_HEADGEAR_BOTTOM(0);
      this.SAVE_HEADGEAR_BOTTOM_ITEM({});
    },
    resetGarment: function () {
      this.SAVE_GARMENT(0);
      this.SAVE_GARMENT_ITEM({});
    },
    validHeadTop: (item) => {
      const item_fortmat = JSON.parse(JSON.stringify(item));

      let isTop = false;
      if (item_fortmat.headgear_top_item.location?.includes("TOP")) {
        isTop = true;
      }
      if (item_fortmat.headgear_mid_item.location?.includes("TOP")) {
        isTop = true;
      }
      if (item_fortmat.headgear_bottom_item.location?.includes("TOP")) {
        isTop = true;
      }
      if (item_fortmat.garment_item.location?.includes("TOP")) {
        isTop = true;
      }

      return isTop;
    },
    validHeadMeio: (item) => {
      const item_fortmat = JSON.parse(JSON.stringify(item));

      let isMid = false;

      if (item_fortmat.headgear_top_item.location?.includes("MID")) {
        isMid = true;
      }

      if (item_fortmat.headgear_mid_item.location?.includes("MID")) {
        isMid = true;
      }

      if (item_fortmat.headgear_bottom_item.location?.includes("MID")) {
        isMid = true;
      }

      if (item_fortmat.garment_item.location?.includes("MID")) {
        isMid = true;
      }

      return isMid;

    },
    validHeadBot: (item) => {
      const item_fortmat = JSON.parse(JSON.stringify(item));

      let isBot = false;

      if (item_fortmat.headgear_top_item.location?.includes("BOT")) {
        isBot = true;
      }

      if (item_fortmat.headgear_mid_item.location?.includes("BOT")) {
        isBot = true;
      }

      if (item_fortmat.headgear_bottom_item.location?.includes("BOT")) {
        isBot = true;
      }

      if (item_fortmat.garment_item.location?.includes("BOT")) {
        isBot = true;
      }

      return isBot;
    },
    validGarment: (item) => {
      const item_fortmat = JSON.parse(JSON.stringify(item));

      let isGarment = false;

      if (item_fortmat.headgear_top_item.location?.includes("GARMENT")) {
        isGarment = true;
      }

      if (item_fortmat.headgear_mid_item.location?.includes("GARMENT")) {
        isGarment = true;
      }

      if (item_fortmat.headgear_bottom_item.location?.includes("GARMENT")) {
        isGarment = true;
      }

      if (item_fortmat.garment_item.location?.includes("GARMENT")) {
        isGarment = true;
      }

      return isGarment;
    },
  },
};
</script>
