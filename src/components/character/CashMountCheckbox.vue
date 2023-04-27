<template>
  <div>
    <input
      class="form-check-input"
      type="checkbox"
      value="1"
      id="cash_mount_checkbox"
      @change="cashMountCheck($event)"
      :checked="$store.state.cash_mount_checked"
    />
    <label class="form-check-label px-1" for="cash_mount_checkbox">{{ $t("cashMount") }}</label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CashMountCheckbox",
  methods: {
    ...mapMutations(["SAVE_CASH_MOUNT"]),
    cashMountCheck: function (event) {
      this.SAVE_CASH_MOUNT(event.target.checked);
    },
  },
};
</script>

<style></style>
