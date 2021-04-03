<template>
  <div id="app">
    <Nav />
    <main>
      <Hero />
      <CaseStudies />
      <HorizontalRule />
      <About />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Nav from "./components/Nav.vue"
  import Hero from "./components/Hero.vue"
  import About from "./components/About.vue"
  import CaseStudies from "./components/CaseStudies.vue"
  import HorizontalRule from "./components/HorizontalRule.vue"
  import Footer from "./components/Footer.vue"

  export default {
    name: 'app',
    components: {
      Nav,
      Hero,
      About,
      CaseStudies,
      HorizontalRule,
      Footer
    }
  }
</script>

<style lang="scss">
  @import "assets/sass/mystyles.scss";

  #app {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  main {
    background-color: white;
  }

  a {
    transition: 0.5s all ease;
  }
</style>
