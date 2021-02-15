<template>
  <div class="nav-container" :style="styles.navBar">
    <div class="nav-content">
      <div class="left-content">
        <router-link :to="localePath">
          <img :src="styles.logo" class="icon" />
        </router-link>
      </div>
      <div class="right-content">
        <div v-for="(nav, index) in navs" class="navs-container">
          <router-link :to="nav.link" class="navs">
            {{ nav.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../images/logo-type1.png";

export default {
  data() {
    return {
      alpha: 0,
      navs: [],
    };
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
    this.navs = this.$themeConfig.navs;
  },
  methods: {
    onScroll() {
      const scrollTop = window.scrollY;
      this.alpha = scrollTop / 70;
    },
  },
  computed: {
    localePath() {
      console.log("123:", this.$localePath);
      return this.$localePath;
    },
    title() {
      return this.$themeConfig.title;
    },
    styles() {
      const navBar = {
        backgroundColor: `rgba(255, 255, 255, ${this.alpha})`,
      };

      if (this.alpha >= 1) {
        navBar.boxShadow = "0px 2px 30px 0px rgba(0, 0, 0, 0.1)";
      }

      return {
        logo,
        navBar,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.nav-container {
  width: 100vw;
  position: fixed;
  height: 70px;
  z-index: 1000;
  background-color: white;
  .nav-content {
    width: 1200px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .left-content {
      width: 100px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 100%;
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .navs-container {
        margin-right: 30px;
        .navs {
          color: rgba(102, 102, 102, 1);
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>