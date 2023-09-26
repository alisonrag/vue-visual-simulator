<template>
  <ul class="ul-item-list">
    <li v-for="(item, index) in items" v-show="item.name.toLowerCase().includes(item_filter.toLowerCase())"
      class="li-item" :key="item.id">
      <img v-lazy="{
        src: 'https://static.divine-pride.net/images/items/item/' +
          item.id +
          '.png', delay: 250 }
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
      "SAVE_HEADGEAR_TOP",
      "SAVE_HEADGEAR_TOP_ID",
      "SAVE_HEADGEAR_TOP_NAME",
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
      // validar interseções
      const state_fortmat =  JSON.parse(JSON.stringify(this.$store.state));

      const database = []
      database.push(state_fortmat.headgear_top_item);
      database.push(state_fortmat.headgear_mid_item);
      database.push(state_fortmat.headgear_bottom_item);
      database.push(state_fortmat.garment_item);
      let novoItem = item_fortmat;

      const itensParaRemover = database.filter(item => (
        (item?.top && novoItem.top) 
        || (item?.mid && novoItem.mid) 
        || (item?.bot && novoItem.bot) 
        || (item?.garment && novoItem.garment)
      ));

      // remove caso estjá vazio 
      const new_dados = database.filter((item) => Object.keys(item).length != 0)
      // Remover os itens filtrados
      itensParaRemover.forEach(item => {
        const index = database.indexOf(item);

        console.log(item, index)
        if (index !== -1) {
          database.splice(index, 1);
        }
      });

      const remover = itensParaRemover.filter((item) => item.id != novoItem.id)

      database.push(novoItem);
      console.log("itensParaRemover: ",novoItem, remover)

      // remover
      for (let index = 0; index < remover.length; index++) {
        const item = remover[index];
        const remove_item = {viewID: 0}

        if (item.top) {
          this.updateHeadgearTop(remove_item);
        }
        if (item.bot) {    
          this.updateHeadgearBot(remove_item);
        }
        if (item.garment) {
          this.updateGarment(remove_item);
        }
      }

      const item_types = [];

      if (item_fortmat.top) {
        item_types.push("TOP");
        this.updateHeadgearTop(item_fortmat);
      }
      if (item_fortmat.mid) {
        item_types.push("MID");
      }
      if (item_fortmat.bot) {
        item_types.push("BOT");
        this.updateHeadgearBot(item_fortmat);
      }
      if (item_fortmat.garment) {
        item_types.push("GARMENT");
        this.updateGarment(item_fortmat);
      }

      item_fortmat.location = item_types;
      this.SAVE_HEADGEAR_MID_ITEM(item_fortmat);
    },
    updateHeadgearTop: function (item) {
      this.SAVE_HEADGEAR_TOP(item.viewID);
      this.SAVE_HEADGEAR_TOP_ITEM(item);
    },
    updateHeadgearMid: function (item) {
      this.SAVE_HEADGEAR_MID(item.viewID);
      this.SAVE_HEADGEAR_MID_ITEM(item);
    },
    updateHeadgearBot: function (item) {
      this.SAVE_HEADGEAR_BOTTOM(item.viewID);
      this.SAVE_HEADGEAR_BOTTOM_ITEM(item);
    },
    updateGarment: function (item) {
      this.SAVE_GARMENT(item.viewID);
      this.SAVE_GARMENT_ITEM(item);
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
