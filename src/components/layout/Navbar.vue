<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-inner">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          :src="require('../../assets/img/interface/poring_logo.png')"
          :alt="logoImageAlt"
          id="logo"
        />
        {{ projectName }}
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">{{ $t("home") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">{{
              $t("about")
            }}</router-link>
          </li>
          <li class="mx-2">
            <LocaleSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import LocaleSwitcher from "@/components/layout/LocaleSwitcher.vue";

export default {
  name: "Navbar",
  props: ["logoImage", "logoImageAlt", "projectName"],
  components: {
    LocaleSwitcher,
  },
};
</script>

<style scoped>
#logo {
  width: 30px;
  height: 30px;
}
.navbar-inner {
  background: transparent;
}

.router-link-exact-active {
  color: #fff !important;
  font-weight: 500;
}
</style>
