<template>
  <section class="section" id="about">
    <div class="container">
      <h2 class="title is-capitalized is-3">About</h2>
      <div class="columns">
        <div class="column is-two-thirds">
          <p>Although he graduated with a degree in film studies, Nikin’s interest in technology and design led him to a career in UX design. From <a href="https://www.freshbooks.com/" rel="noreferrer">Freshbooks</a> to <a href="https://sayyeah.com/" rel="noreferrer">Say Yeah</a>, Nikin helped craft interfaces and front-end code that balanced business and user objectives.</p>

          <p>Having spent all his life in Canada, Nikin recently moved to London, England where he’s now focused on supporting the <a href="https://www.gov.uk/government/organisations/government-digital-service" rel="noreferrer">Government Digital Service</a> as an interaction designer.</p>

          <p>Aside from his day-to-day work, Nikin is an avid photographer, aiming to capture the everyday as cinematic.</p>
        </div>
        <div class="column">
          <figure class="image" v-scroll-reveal="{ delay: 500, origin: 'left' }">
            <lazy-component>
              <img
                src="../assets/images/nikin-animoji.png"
                alt="Animoji of Nikin Nagewadia"
              >
            </lazy-component>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
  @import '../assets/sass/mystyles.scss';

  p {
    padding-bottom: 1em;
  }
</style>
