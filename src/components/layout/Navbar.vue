<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-inner">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
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
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link to="/" class="nav-link">{{ $t("home") }}</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/about" class="nav-link">{{
              $t("about")
            }}</router-link>
          </li>
        </ul>
        <ul>
          <li class="navbar-nav ms-auto mb-2 mb-lg-0">
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
.navbar-inner {
  background: transparent;
}

.router-link-exact-active, .navbar-brand {
  color: #fff !important;
  font-weight: 500;
  border-bottom: 1px solid #fff;
}

.nav-link {
  font-size: 1.1em;
}

.navbar-brand {
  border-bottom: none !important;
}
</style>
