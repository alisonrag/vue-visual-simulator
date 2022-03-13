<template>
  <Navbar :logoImage="logo_url" :logoImageAlt="logo_alt" :projectName="project_name" />
  <div class="container">
      <router-view />
  </div>
  <Footer :logoImage="logo_url" :logoImageAlt="logo_alt" :projectName="project_name" />
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
</script><style>
</style>
