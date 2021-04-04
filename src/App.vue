<template>
  <div id="app">
    <Nav />
    <main>
      <Hero />
      <Collection />
      <HorizontalRule />
      <Biography />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Nav from "./components/Nav.vue"
  import Hero from "./components/Hero.vue"
  import Biography from "./components/Biography.vue"
  import Collection from "./components/Collection.vue"
  import HorizontalRule from "./components/HorizontalRule.vue"
  import Footer from "./components/Footer.vue"

  export default {
    name: 'app',
    components: {
      Nav,
      Hero,
      Biography,
      Collection,
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
    background-color: $site-white;
  }

  a {
    transition: 0.5s all ease;
  }
</style>
