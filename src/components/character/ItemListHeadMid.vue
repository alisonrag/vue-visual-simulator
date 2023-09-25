<template>
  <ul class="ul-item-list">
    <li
      v-for="(item, index) in items"
      v-show="item.name.toLowerCase().includes(item_filter.toLowerCase())"
      class="li-item"
      :key="item.id"
    >
      <img
        v-lazy="{ src: 'https://static.divine-pride.net/images/items/item/' +
          item.id +
          '.png', delay: 500 }
        "
        class="img-item"
        :class="{
          'item-selected': parseInt(item.id) == $store.state.headgear_mid_item.id,
          'item-disabled': parseInt(item.viewID) == 0,
        }"
        :viewID="item.viewID"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        :title="item.name"
        :item="JSON.stringify(item)"
        @click="clickItem($event)"
      />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ItemListHeadMid",
  props: ["item_filter"],
  data() {
    return {
      items: this.$store.state.itens.mid,
      active: false,
    };
  },
  methods: {
    ...mapMutations([
      "SAVE_HEADGEAR_MID",
      "SAVE_HEADGEAR_MID_ITEM",
      "SAVE_HEADGEAR_TOP",
      "SAVE_HEADGEAR_TOP_ITEM",
      "SAVE_HEADGEAR_BOTTOM",
      "SAVE_HEADGEAR_BOTTOM_ITEM",
      "SAVE_GARMENT",
      "SAVE_GARMENT_ITEM",
    ]),
    clickItem: function (event) {
      this.SAVE_HEADGEAR_MID(parseInt(event.target.getAttribute("viewID")));
      this.validMid();
    },
    validMid: function () {
      const item_fortmat = JSON.parse(event.target.getAttribute("item"));
      const state_fortmat =  JSON.parse(JSON.stringify(this.$store.state));

      const item_types = [];

      if (item_fortmat.top) {
        item_types.push("TOP");
      }
      if (item_fortmat.mid) {
        item_types.push("MID");
      }
      if (item_fortmat.bot) {
        item_types.push("BOT");
      }
      if (item_fortmat.garment) {
        item_types.push("GARMENT");
      }

      item_fortmat.location = item_types;
      // TOP
      for (let i = 0; i < item_fortmat.location.length; i++) {
        if (state_fortmat.headgear_top_item.location === undefined) break;
        if (
          state_fortmat.headgear_top_item.location.includes(
            item_fortmat.location[i]
          )
        ) {
          this.resetHeadgearTop();
          break;
        }
      }
      // BOT
      for (let i = 0; i < item_fortmat.location.length; i++) {
        if (state_fortmat.headgear_bottom_item.location === undefined)
          break;
        if (
          state_fortmat.headgear_bottom_item.location.includes(
            item_fortmat.location[i]
          )
        ) {
          this.resetHeadgearBot();
          break;
        }
      }
      // GARMENT
      for (let i = 0; i < item_fortmat.location.length; i++) {
        if (state_fortmat.garment_item.location === undefined) break;
        if (
          state_fortmat.garment_item.location.includes(
            item_fortmat.location[i]
          )
        ) {
          this.resetGarment();
          break;
        }
      }

      this.SAVE_HEADGEAR_MID_ITEM(item_fortmat);
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
  },
};
</script>

<style scoped>
.ul-item-list {
  list-style: none;
  padding-top: 2px;
  padding-left: 1rem;
}

.li-item {
  float: left;
  width: 32px;
  height: 32px;
  background: url("~@/assets/img/interface/item-bg.png");
}

.img-item {
  width: 24px;
  height: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.item-selected {
  outline: 2px dashed #0d6efd;
  border-radius: 5px;
  filter: contrast(105%) brightness(110%);
}

.item-disabled {
  opacity: 0.5;
  background: url("~@/assets/img/interface/forbidden_item.png");
}
</style>
