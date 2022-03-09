<template>
  <Navbar/>
  <Footer/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script><style>
</style>
