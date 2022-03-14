<template>
  <div class="container-content">
    <Navbar :logoImage="logo_url" :logoImageAlt="logo_alt" :projectName="project_name" />
    <router-view />
    <Footer :logoImage="logo_url" :logoImageAlt="logo_alt" :projectName="project_name" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo_url: process.env.VUE_APP_LOGO_URL,
      logo_alt: process.env.VUE_APP_NAME,
      project_name: process.env.VUE_APP_NAME
    }
  }
}
</script>

<style scoped>
.container-content {
  background: url("~@/assets/interface/background.jpg");
  background-size: cover;
}
</style>>

