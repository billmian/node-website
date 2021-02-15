<template>
  <div class="theme-container">
    <div class="container_nav">
      <NavBar></NavBar>
    </div>
    <div v-if="$page.frontmatter.home" class="container_landing">
      <LangdingPage></LangdingPage>
    </div>
    <Page v-else :sidebar-items="sidebarItems" />
    <div v-if="!$page.frontmatter.home">
      <Sidebar :items="sidebarItems"></Sidebar>
    </div>
    <div v-if="$page.frontmatter.home">
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import NavBar from "../components/NavBar";
import LangdingPage from "../components/LangdingPage.vue";
import Page from "@theme/components/Page.vue";
import Footer from "../components/Footer.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util/util";

export default {
  components: {
    LangdingPage,
    NavBar,
    Page,
    Sidebar,
    Footer,
  },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
  },
};
</script>
<style lang="less" scoped>
@bg: "../images/bg.svg";

.theme-container {
  width: 100%;
}
.container {
  &_nav {
  }
}
</style>