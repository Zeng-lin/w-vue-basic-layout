<template>
  <section class="chuanghui-portal-main">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ChuanghuiPortalMain',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style scoped>
.chuanghui-portal-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>
