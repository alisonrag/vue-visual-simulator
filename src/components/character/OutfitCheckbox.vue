<template>
  <div>
    <input
      class="form-check-input"
      type="checkbox"
      value="1"
      id="outfit"
      @change="outfitCheck($event)"
      :checked="$store.state.character.outfit"
    />
    <label class="form-check-label px-1" for="outfit">{{ $t("outfit") }}</label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "OutfitCheckbox",
  methods: {
    ...mapMutations(["SAVE_OUTFIT"]),
    outfitCheck: function (event) {
      this.SAVE_OUTFIT(event.target.checked);
    },
  },
};
</script>

<style></style>
