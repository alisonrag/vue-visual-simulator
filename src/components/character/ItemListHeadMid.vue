<template>
  <ul class="ul-item-list">
    <li v-for="(item, index) in items" v-show="item.name.toLowerCase().includes(item_filter.toLowerCase())"
      class="li-item" :key="item.id">
      <img v-lazy="{
        src: 'https://static.divine-pride.net/images/items/item/' +
          item.id +
          '.png', delay: 500
      }
        " class="img-item" :class="{
    'item-selected': parseInt(item.id) == $store.state.headgear_mid_id,
    'item-disabled': parseInt(item.viewID) == 0,
  }" :viewID="item.viewID" :id="item.id" data-bs-toggle="tooltip" data-bs-placement="top" :title="item.name"
        :name="item.name" :top="item.top" :mid="item.mid" :bot="item.bot" :garment="item.garment"
        @click="clickItem($event)" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
import itemsJson from './item_db/items.json';

export default {
  name: "ItemListHeadMid",
  props: ["item_filter"],
  data() {
    return {
      items: itemsJson.filter(function (item) {
        return item.mid == true;
      }),
      active: false,
    };
  },
  methods: {
    ...mapMutations([
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
      "SAVE_GARMENT_NAME"]),
    clickItem: function (event) {
      if (event.target.getAttribute("top")) {
        this.SAVE_HEADGEAR_TOP(parseInt(event.target.getAttribute("viewID")));
        this.SAVE_HEADGEAR_TOP_ID(parseInt(event.target.getAttribute("id")));
        this.SAVE_HEADGEAR_TOP_NAME(event.target.getAttribute("name"));
      }
      if (event.target.getAttribute("mid")) {
        this.SAVE_HEADGEAR_MID(parseInt(event.target.getAttribute("viewID")));
        this.SAVE_HEADGEAR_MID_ID(parseInt(event.target.getAttribute("id")));
        this.SAVE_HEADGEAR_MID_NAME(event.target.getAttribute("name"));
      }
      if (event.target.getAttribute("bot")) {
        this.SAVE_HEADGEAR_BOTTOM(parseInt(event.target.getAttribute("viewID")));
        this.SAVE_HEADGEAR_BOTTOM_ID(parseInt(event.target.getAttribute("id")));
        this.SAVE_HEADGEAR_BOTTOM_NAME(event.target.getAttribute("name"));
      }
      if (event.target.getAttribute("garment")) {
        this.SAVE_GARMENT(parseInt(event.target.getAttribute("viewID")));
        this.SAVE_GARMENT_ID(parseInt(event.target.getAttribute("id")));
        this.SAVE_GARMENT_NAME(event.target.getAttribute("name"));
      }
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
