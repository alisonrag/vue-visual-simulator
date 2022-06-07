<template>
  <div class="container-content">
    <Navbar :logoImage="logo_url" :logoImageAlt="logo_alt" :projectName="project_name" />
    <router-view />
    <Footer :projectGit="project_git" :authorGit="author_git" :projectName="project_name" />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo_url: process.env.VUE_APP_LOGO_URL,
      logo_alt: process.env.VUE_APP_NAME,
      project_name: process.env.VUE_APP_NAME,
      project_git: process.env.VUE_APP_PROJECT_GITHUB_LINK,
      author_git: process.env.VUE_APP_AUTHOR_GITHUB_LINK
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

