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
          'item-selected': parseInt(item.id) == $store.state.headgear_bottom_id,
          'item-disabled': parseInt(item.viewID) == 0,
        }"
        :viewID="item.viewID"
        :id="item.id"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        :title="item.name"
        :name="item.name"
        @click="clickItem($event)"
      />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
import itemsJson from './item_db/bottom.json';

export default {
  name: "ItemListHeadBottom",
  props: ["item_filter"],
  data() {
    return {
      items: itemsJson,
      active: false,
    };
  },
  methods: {
    ...mapMutations([
      "SAVE_HEADGEAR_BOTTOM",
      "SAVE_HEADGEAR_BOTTOM_ID",
      "SAVE_HEADGEAR_BOTTOM_NAME",
    ]),
    clickItem: function (event) {
      this.SAVE_HEADGEAR_BOTTOM(parseInt(event.target.getAttribute("viewID")));
      this.SAVE_HEADGEAR_BOTTOM_ID(parseInt(event.target.getAttribute("id")));
      this.SAVE_HEADGEAR_BOTTOM_NAME(event.target.getAttribute("name"));
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
