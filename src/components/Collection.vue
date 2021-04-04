<template>
  <section class="section" id="collection">
    <div class="container">
      <h2 class="title is-capitalized is-3">Collection</h2>

      <div v-if="loadingState" class="columns">
        <div class="column is-two-thirds">
          <p>Loading collection from Medium...</p>
        </div>
      </div>

      <div v-if="errorMessage" class="columns">
        <div class="column is-two-thirds">
          <p v-scroll-reveal="{ delay: 500 }">
            Head over to <a href="https://nkngwd.medium.com/" rel="noreferrer">Medium</a> to view my collection of my articles and case studies.
          </p>
        </div>
      </div>

      <div v-if="mediumPosts">
        <div class="columns">
          <div class="column is-two-thirds">
            <p>Below is a collection of my articles and case studies available on <a href="https://nkngwd.medium.com/" rel="noreferrer">Medium</a>.</p>
          </div>
        </div>
        <div class="columns is-multiline is-centered">
          <div v-for="mediumPost in mediumPosts" :key="mediumPost.title" class="column is-one-third">
            <a :href="mediumPost.link" rel="noopener" aria-label="Redirect to Medium" >
              <div class="card" v-scroll-reveal="{ delay: 500 }">
                <div class="card-image">
                  <figure class="image is-16by9">
                    <lazy-component>
                      <img :src="mediumPost.thumbnail" alt="Medium Post Image Thumbnail">
                    </lazy-component>
                  </figure>
                </div>
                <div class="card-content">
                  <h3>{{ mediumPost.title }}</h3>
                </div>
              </div>
            </a>
          </div>
        </div> 
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Collection",
  data() {
    return {
      loadingState: true,
      errorMessage: null,
      mediumPosts: null
    };
  },
  mounted() {
    const rssUrl = `https://medium.com/feed/@nkngwd`;
    const apiKey = "bfjixbpm6ca46yyiqg1dgftwtnfijloh78hrtczx";

    axios
      .get("https://api.rss2json.com/v1/api.json", {
        params: {
          rss_url: rssUrl,
          api_key: apiKey
        }
      })
      .then(response => [
        (this.loadingState = false),
        (this.errorMessage = false),
        (this.mediumPosts = response.data.items)
      ])
      .catch(error => [
        (this.loadingState = false),
        (this.errorMessage = error),
        (this.mediumPosts = false)
      ]);
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/sass/mystyles.scss';

  .card {
    height: 100%;
    color: $link;
    &:hover {
      color: $link-hover;
    }
  }

  .image img {
    object-fit: cover;
  }
</style>
