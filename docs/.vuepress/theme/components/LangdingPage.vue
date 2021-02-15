<template>
  <div class="container_nav"></div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@bg: "../images/bg.svg";

.container {
  &_nav {
    width: 100%;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    background: #fff url("@{bg}") 50% / cover no-repeat;
  }
}
</style>