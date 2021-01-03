<template>
  <section class="section" id="about">
    <div class="container">
      <h2 class="title has-text-centered is-capitalized is-2">About</h2>
      <div class="columns">
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
        <div class="column">
          <p>Having spent three years at Toronto tech darling FreshBooks, during a period of immense growth and change, working on the Webby-nominated website as a Front-End Developer, it was my job to not only build a world-class website but also help curate a simple and positive experience for the end-user.</p>
          <br>
          <p>
            My interest in the user’s experience led me to a UX path, where I use
            <strong>research</strong>,
            <strong>storytelling</strong>,
            <strong>empathy</strong>,
            <strong>strategy</strong> and
            <strong>technology</strong> in creating both an incredible and lasting experience for the user.
          </p>
          <br>
          <p>I am currently based in London, England where I work at the Government Digital Service as an interaction designer.</p>
          <br>
          <p>Aside from my interest in UX and Technology, I am a total pop-culture nerd who makes a great effort to attend concerts and the cinema. I love to travel and visit art galleries, museums, and craft breweries.</p>
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
