<template>
  <section class="section" id="case-studies">
    <div class="container">
      <h2 class="title has-text-centered is-capitalized is-2">Case Studies</h2>

      <div v-if="loadingState" class="columns is-centered">
        <div class="column is-narrow has-text-centered">
          <svg
            class="rotate"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 129 129"
          >
            <title>Loading Status</title>
            <path
              d="M55.5,0.622906096 L55.5,15.816193 C32.4589376,20.0485 15,40.2353733 15,64.5 C15,91.8380951 37.1619049,114 64.5,114 C91.8380951,114 114,91.8380951 114,64.5 C114,40.2353733 96.5410624,20.0485 73.5,15.816193 L73.5,0.622906096 C104.861969,5.00147027 129,31.9318656 129,64.5 C129,100.122366 100.122366,129 64.5,129 C28.8776336,129 0,100.122366 0,64.5 C0,31.9318656 24.1380307,5.00147027 55.5,0.622906096 Z"
            ></path>
          </svg>
        </div>
      </div>

      <div v-if="errorMessage" class="columns is-centered">
        <div class="column is-narrow">
          <p class="has-text-centered is-size-5" v-scroll-reveal="{ delay: 500 }">
            If you are seeing this message, don't fret. You can read my case studies over at
            <a href="https://nkngwd.medium.com/" target="_blank">Medium</a>.
          </p>
        </div>
      </div>

      <div class="columns is-multiline is-centered">
        <div
          v-for="mediumPost in mediumPosts"
          :key="mediumPost.title"
          class="column is-one-third"
        >
          <div class="card" v-scroll-reveal="{ delay: 500 }">
            <a
              :href="mediumPost.link"
              rel="noopener"
              aria-label="Case Study Available on Medium"
            >
              <div class="card-image">
                <figure class="image is-16by9">
                  <lazy-component>
                    <img :src="mediumPost.thumbnail" alt="Medium Post Image Thumbnail">
                  </lazy-component>
                </figure>
              </div>
              <div class="card-content">
                <h3 class="is-size-5">{{ mediumPost.title }}</h3>
              </div>
              <div class="hover-text has-text-centered">
                <p class="has-text-white">Available on</p>
                <div style="padding-top:10px;">
                  <svg
                    width="150"
                    height="24"
                    viewBox="0 0 150 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="mediumLogoCaseStudy"
                  >
                    <title id="mediumLogoCaseStudy">Medium</title>
                    <path d="M22.6442 11.7335C22.6442 17.968 17.6245 23.0223 11.4322 23.0223C5.23999 23.0223 0.220703 17.9695 0.220703 11.7335C0.220703 5.49746 5.24037 0.445053 11.4322 0.445053C17.6241 0.445053 22.6442 5.49899 22.6442 11.7335Z" fill="#fff"/>
                    <path d="M34.9439 11.7335C34.9439 17.6025 32.4338 22.3599 29.3379 22.3599C26.242 22.3599 23.7319 17.601 23.7319 11.7335C23.7319 5.86598 26.242 1.1071 29.3379 1.1071C32.4338 1.1071 34.9439 5.86598 34.9439 11.7335Z" fill="#fff"/>
                    <path d="M39.9747 11.7335C39.9747 16.9919 39.0918 21.2543 38.003 21.2543C36.9141 21.2543 36.0312 16.9904 36.0312 11.7335C36.0312 6.47665 36.9141 2.21269 38.0034 2.21269C39.0926 2.21269 39.9747 6.47551 39.9747 11.7335Z" fill="#fff"/>
                    <path d="M70.9175 1.42386L70.9488 1.41701V1.17526H64.5726L58.6522 15.0902L52.7317 1.17526H45.8607V1.41701L45.8915 1.42386C47.0554 1.68655 47.6462 2.0783 47.6462 3.49112V20.0311C47.6462 21.4439 47.0531 21.8356 45.8892 22.0983L45.8584 22.1052V22.3477H50.5202V22.1059L50.4894 22.0991C49.3255 21.8364 48.7347 21.4446 48.7347 20.0318V4.45051L56.3401 22.3477H56.7715L64.5985 3.9514V20.4403C64.4988 21.5562 63.9132 21.9007 62.8594 22.1387L62.8282 22.1459V22.3858H70.9488V22.1459L70.9175 22.1387C69.8626 21.9007 69.263 21.5562 69.1632 20.4403L69.1579 3.49112H69.1632C69.1632 2.0783 69.7541 1.68655 70.9175 1.42386V1.42386ZM74.6268 12.3807C74.7597 9.40888 75.8268 7.26396 77.6177 7.22703C78.1701 7.23616 78.6334 7.41738 78.9935 7.76611C79.7588 8.50888 80.1185 10.061 80.063 12.3807H74.6268ZM74.5465 13.2183H84.0642V13.1783C84.0372 10.9058 83.379 9.13819 82.1097 7.92449C81.0125 6.87563 79.388 6.29847 77.6816 6.29847H77.6435C76.758 6.29847 75.6718 6.5132 74.899 6.90228C74.0192 7.30964 73.2433 7.91878 72.5976 8.71827C71.5583 10.0062 70.9286 11.7468 70.7755 13.7029C70.7706 13.7615 70.7664 13.8202 70.7622 13.8788C70.758 13.9374 70.7553 13.99 70.7527 14.0459C70.7474 14.1506 70.7432 14.2557 70.7409 14.3612C70.7371 14.5302 70.7359 14.7004 70.739 14.8717C70.8422 19.302 73.2353 22.8426 77.4859 22.8426C81.2169 22.8426 83.3896 20.1152 83.9314 16.4543L83.6576 16.358C82.7059 18.3255 80.9965 19.5179 79.051 19.3724C76.3952 19.1737 74.3607 16.481 74.5453 13.219L74.5465 13.2183ZM94.8254 19.2221C94.5132 19.9625 93.8618 20.3699 92.9889 20.3699C92.1159 20.3699 91.3179 19.7707 90.751 18.6818C90.1419 17.5131 89.8213 15.8608 89.8213 13.9035C89.8213 9.82994 91.0883 7.19505 93.0494 7.19505C93.8706 7.19505 94.517 7.60241 94.8254 8.31319V19.2221ZM101.139 22.1261C99.9753 21.8509 99.3844 21.4408 99.3844 19.9561V0.201019L92.3135 2.28427V2.53934L92.3569 2.53592C93.3323 2.45711 93.9939 2.59188 94.3781 2.9467C94.6788 3.22462 94.8254 3.65102 94.8254 4.25102V6.95939C94.1283 6.51434 93.2991 6.29771 92.2929 6.29771C90.2523 6.29771 88.3872 7.15698 87.0422 8.71751C85.64 10.3439 84.8988 12.5665 84.8988 15.1443C84.8984 19.7482 87.1647 22.8426 90.5378 22.8426C92.5111 22.8426 94.0986 21.7614 94.8254 19.9378V22.3858H101.17V22.1322L101.139 22.1261ZM107.203 2.88769C107.203 1.45013 106.12 0.365867 104.682 0.365867C103.251 0.365867 102.131 1.47373 102.131 2.88769C102.131 4.30165 103.252 5.40952 104.682 5.40952C106.12 5.40952 107.203 4.32525 107.203 2.88769V2.88769ZM108.872 22.1261C107.709 21.8509 107.118 21.4408 107.118 19.9561H107.113V6.34454L100.768 8.16624V8.4137L100.806 8.41713C102.179 8.53934 102.555 9.01218 102.555 10.6165V22.3858H108.905V22.1322L108.872 22.1261ZM125.131 22.1261C123.967 21.8509 123.376 21.4408 123.376 19.9561V6.34454L117.335 8.10609V8.35431L117.371 8.35812C118.493 8.47614 118.817 8.97601 118.817 10.5876V19.1916C118.443 19.9321 117.741 20.3718 116.891 20.4015C115.511 20.4015 114.752 19.4699 114.752 17.7784V6.34492L108.407 8.16662V8.4137L108.445 8.41713C109.818 8.53895 110.194 9.0118 110.194 10.6165V17.8983C110.191 18.4067 110.235 18.9142 110.326 19.4143L110.44 19.9111C110.977 21.836 112.385 22.8426 114.59 22.8426C116.458 22.8426 118.095 21.6864 118.816 19.8773V22.39H125.161V22.1364L125.131 22.1261ZM149.779 22.3858V22.1318L149.748 22.1246C148.485 21.8334 147.994 21.2844 147.994 20.1666V10.9077C147.994 8.02081 146.372 6.29771 143.656 6.29771C141.676 6.29771 140.007 7.44175 139.364 9.22385C138.854 7.33553 137.385 6.29771 135.212 6.29771C133.304 6.29771 131.809 7.30469 131.167 9.00571V6.34568L124.822 8.09276V8.34175L124.86 8.34517C126.217 8.46548 126.609 8.95203 126.609 10.5152V22.3858H132.529V22.1322L132.498 22.1246C131.491 21.8878 131.165 21.4561 131.165 20.3482V9.73553C131.432 9.11307 131.969 8.37563 133.031 8.37563C134.35 8.37563 135.018 9.28933 135.018 11.0893V22.3858H140.94V22.1322L140.909 22.1246C139.901 21.8878 139.576 21.4561 139.576 20.3482V10.9066C139.579 10.5536 139.551 10.201 139.492 9.85279C139.775 9.17626 140.343 8.37563 141.448 8.37563C142.785 8.37563 143.435 9.26307 143.435 11.0893V22.3858H149.779Z" fill="#fff"/>
                  </svg>
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
  name: "CaseStudies",
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

  .rotate {
    animation: rotation 2.5s infinite linear;
    fill: $site-green;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .card {
    height: 100%;
    position: relative;
    a {
      .card-image {
        overflow: hidden;
      }
      .image.is-16by9,
      .card-content {
        transition: filter 0.5s ease;
      }
      .card-content {
        line-height: 1.125;
      }
    }
    a:before {
      position: absolute;
      content: " ";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 10;
      background-color: rgba(20, 20, 20, 1);
      transition: opacity 0.5s ease;
    }
    a:focus:before,
    a:hover:before {
      opacity: 0.85;
    }
    a:focus,
    a:hover {
      .image.is-16by9 {
        filter: grayscale(1) blur(2px);
      }
      .card-content {
        filter: blur(2px);
      }
      .hover-text {
        opacity: 1;
      }
    }
  }

  .image img {
    object-fit: cover;
  }

  .hover-text {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
</style>
