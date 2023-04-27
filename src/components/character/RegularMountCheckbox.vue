<template>
  <div>
    <input
      class="form-check-input"
      type="checkbox"
      value="1"
      id="regular_mount_checkbox"
      @change="regularMountCheck($event)"
      :checked="$store.state.regular_mount_checked"
    />
    <label class="form-check-label px-1" for="regular_mount_checkbox">{{ $t("regularMount") }}</label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "RegularMountCheckbox",
  methods: {
    ...mapMutations(["SAVE_REGULAR_MOUNT"]),
    regularMountCheck: function (event) {
      this.SAVE_REGULAR_MOUNT(event.target.checked);
    },
  },
};
</script>

<style></style>
