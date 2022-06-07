<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-danger btn-sm"
      @click="resetCharacter()"
    >
      {{ $t("resetCharacter") }}
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ClearCharacterButton",
  methods: {
    ...mapMutations(["RESET_CHARACTER"]),
    resetCharacter: function () {
      this.RESET_CHARACTER(null);
    },
  },
};
</script>