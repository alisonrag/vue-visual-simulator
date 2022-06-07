<template>
  <select class="form-select language_select" @change="switchLocale($event)">
    <option
      v-for="locale in locales"
      :value="locale"
      :key="locale"
      :selected="locale == current_language"
      class="language_select"
    >
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  mounted() {
    this.loadLanguageFromLocalStorage();
  },
  methods: {
    switchLocale(event) {
      let locale = event.target.value;
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        localStorage.setItem("current_language", locale);
      }
    },
    loadLanguageFromLocalStorage: function () {
      let language = localStorage.getItem("current_language");

      if (language != null && this.$i18n.locale !== language) {
        this.current_language = language;
        this.$i18n.locale = language;
      }
    },
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
      current_language: "en",
    };
  },
};
</script>

<style scoped>
.language_select {
  text-transform: uppercase;
}
</style>
