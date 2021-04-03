<template>
  <header>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="dropdown navigation">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 757 222" fill-rule="evenodd"><title>Return to Hero</title><path d="M0.656,135.416 L17.936,135.416 L17.936,34.04 L0.656,30.296 L0.656,13.016 L63.728,0.344 L63.728,29.144 L65.456,29.144 C66.8000067,25.3039808 68.671988,21.6080178 71.072,18.056 C73.472012,14.5039822 76.4479822,11.432013 80,8.84 C83.5520178,6.24798704 87.727976,4.18400768 92.528,2.648 C97.328024,1.11199232 102.895968,0.344 109.232,0.344 C127.856093,0.344 141.055961,4.99995344 148.832,14.312 C156.608039,23.6240466 160.496,37.5919069 160.496,56.216 L160.496,135.416 L177.776,135.416 L177.776,155 L98,155 L98,135.416 L113.84,135.416 L113.84,57.656 C113.84,47.863951 112.112017,40.9040206 108.656,36.776 C105.199983,32.6479794 99.4400403,30.584 91.376,30.584 C88.1119837,30.584 84.8480163,31.0159957 81.584,31.88 C78.3199837,32.7440043 75.4400125,34.0399914 72.944,35.768 C70.4479875,37.4960086 68.4320077,39.7519861 66.896,42.536 C65.3599923,45.3200139 64.592,48.6319808 64.592,52.472 L64.592,135.416 L80.432,135.416 L80.432,155 L0.656,155 L0.656,135.416 Z" transform="translate(0 67)"/><path class="target-letter first-i" d="M40.528,52.368 C32.0799578,52.368 25.456024,50.1120226 20.656,45.6 C15.855976,41.0879774 13.456,34.8960394 13.456,27.024 L13.456,25.584 C13.456,17.7119606 15.855976,11.5200226 20.656,7.008 C25.456024,2.49597744 32.0799578,0.24 40.528,0.24 C49.1680432,0.24 55.887976,2.49597744 60.688,7.008 C65.488024,11.5200226 67.888,17.7119606 67.888,25.584 L67.888,27.024 C67.888,34.8960394 65.488024,41.0879774 60.688,45.6 C55.887976,50.1120226 49.1680432,52.368 40.528,52.368 Z M0.208,202.416 L17.488,202.416 L17.488,101.04 L0.208,97.296 L0.208,80.016 L64.144,67.344 L64.144,202.416 L81.424,202.416 L81.424,222 L0.208,222 L0.208,202.416 Z" transform="translate(196)"/><polygon class="target-letter only-k" points=".688 202.416 17.968 202.416 17.968 33.936 .688 30.192 .688 12.912 64.624 .24 64.624 145.104 66.352 145.104 82.768 125.808 117.904 90.384 100.336 90.384 100.336 70.8 166.864 70.8 166.864 90.384 146.416 90.384 113.584 122.064 162.832 202.416 175.792 202.416 175.792 222 98.32 222 98.32 202.416 109.84 202.416 82.48 149.712 64.624 168.432 64.624 202.416 80.464 202.416 80.464 222 .688 222" transform="translate(292)"/><path class="target-letter last-i" d="M40.92,52.368 C32.4719578,52.368 25.848024,50.1120226 21.048,45.6 C16.247976,41.0879774 13.848,34.8960394 13.848,27.024 L13.848,25.584 C13.848,17.7119606 16.247976,11.5200226 21.048,7.008 C25.848024,2.49597744 32.4719578,0.24 40.92,0.24 C49.5600432,0.24 56.279976,2.49597744 61.08,7.008 C65.880024,11.5200226 68.28,17.7119606 68.28,25.584 L68.28,27.024 C68.28,34.8960394 65.880024,41.0879774 61.08,45.6 C56.279976,50.1120226 49.5600432,52.368 40.92,52.368 Z M0.6,202.416 L17.88,202.416 L17.88,101.04 L0.6,97.296 L0.6,80.016 L64.536,67.344 L64.536,202.416 L81.816,202.416 L81.816,222 L0.6,222 L0.6,202.416 Z" transform="translate(479)"/><path class="last-n" d="M0.96,135.416 L18.24,135.416 L18.24,34.04 L0.96,30.296 L0.96,13.016 L64.032,0.344 L64.032,29.144 L65.76,29.144 C67.1040067,25.3039808 68.975988,21.6080178 71.376,18.056 C73.776012,14.5039822 76.7519822,11.432013 80.304,8.84 C83.8560178,6.24798704 88.031976,4.18400768 92.832,2.648 C97.632024,1.11199232 103.199968,0.344 109.536,0.344 C128.160093,0.344 141.359961,4.99995344 149.136,14.312 C156.912039,23.6240466 160.8,37.5919069 160.8,56.216 L160.8,135.416 L178.08,135.416 L178.08,155 L98.304,155 L98.304,135.416 L114.144,135.416 L114.144,57.656 C114.144,47.863951 112.416017,40.9040206 108.96,36.776 C105.503983,32.6479794 99.7440403,30.584 91.68,30.584 C88.4159837,30.584 85.1520163,31.0159957 81.888,31.88 C78.6239837,32.7440043 75.7440125,34.0399914 73.248,35.768 C70.7519875,37.4960086 68.7360077,39.7519861 67.2,42.536 C65.6639923,45.3200139 64.896,48.6319808 64.896,52.472 L64.896,135.416 L80.736,135.416 L80.736,155 L0.96,155 L0.96,135.416 Z" transform="translate(578 67)"/></svg>
          </div>
          <div class="navbar-burger" :class="{ 'is-active': navCloseButton }" @click="toggleMobileNavClose">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': navCloseButton }">
          <div class="navbar-end">
            <a v-for="menuItem in menuItems" :key="menuItem" href="#" class="navbar-item" :id="`nav-${menuItem.toLowerCase().replace(/ /g, '-')}`" @click="navItemClick" v-scroll-to="`#${menuItem.toLowerCase().replace(/ /g, '-')}`">{{ menuItem }}</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        navCloseButton: false,
        menuItems: ['Case studies', 'About'],
      }
    },
    methods: {
      toggleMobileNavClose() {
        this.navCloseButton = ! this.navCloseButton;
      },
      navItemClick() {
        this.navCloseButton = false
      },
      scrollBrand() {
        const hero = document.getElementById("hero");
        const targetLetter = document.getElementsByClassName('target-letter');
        const lastN = document.getElementsByClassName('last-n');
        for (let i = 0; i < targetLetter.length; i++) {
          if (window.scrollY > hero.offsetHeight) {
            targetLetter[i].classList.add("hide-letter");
            lastN[0].classList.add("move-letter");
          } else {
            targetLetter[i].classList.remove("hide-letter");
            lastN[0].classList.remove("move-letter");
          }
        }
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.scrollBrand);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollBrand);
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/sass/mystyles.scss';
  
  .navbar, .navbar-menu {
    background-color: $site-black;
  }

  .navbar {
    border-bottom: 3px solid $site-green;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
    &.is-fixed-top {
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .navbar-item {
    font-weight: $weight-bold;
    color: $site-white;
  }

  .navbar-burger {
    color: white;
    &:hover {
      background: $site-light-green;
      color: $site-green;
    }
  }

  svg {
    height: 27px;
    width: auto;
    fill: $site-white;
    transition: all 0.5s ease;
  }

  .target-letter {
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 1;
  }

  .first-i {
    transform: translate(196.21px, 0);
  }

  .only-k {
    transform: translate(292.69px, 0);
  }

  .last-i {
    transform: translate(479.6px, 0);
  }

  .last-n {
    transform: translate(578.96px, 67px);
    transition: transform 0.5s ease;
  }

  .hide-letter {
    transform: translate(196.21px, 0);
    opacity: 0;
  }

  .move-letter {
    transform: translate(196.21px, 67px);
  }
</style>
