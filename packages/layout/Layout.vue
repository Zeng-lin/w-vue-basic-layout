<template>
  <div id="chuanghui-portal">
    <div :class="classObj" class="chuanghui-portal-wrapper">
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
      <sidebar class="sidebar-container" :sidebar="sidebar" :routes="routes" />
      <div class="main-container">
        <navbar
          @toggleSideBar="toggleSideBar"
          :sidebar="sidebar"
          :userInfo="userInfo"
          @logout="logout"
          :dropdownItemList="dropdownItemList"
        />

        <chuanghui-portal-main>
          <slot></slot>
        </chuanghui-portal-main>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, ChuanghuiPortalMain } from './components'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    ChuanghuiPortalMain
  },
  props: {
    sidebar: {
      type: Object,
      default: () => ({ opened: false, withoutAnimation: false })
    },
    device: {
      type: String,
      default: 'desktop'
    },
    routes: {
      type: Array,
      default: () => ([])
    },
    userInfo: {
      type: Object,
      default: () => ({})
    },
    dropdownItemList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      // sidebar: {
      //   opened: true,
      //   withoutAnimation: false
      // },
      // device: 'desktop'
    }
  },
  // mixins: [ResizeMixin],
  computed: {
    // sidebar () {
    //   return this.$store.state.app.sidebar
    // },
    // device () {
    //   return this.$store.state.app.device
    // },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside () {
      // this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
      this.$emit('handleClickOutside')
    },
    toggleSideBar () {
      // console.log('toggleSideBar')
      this.$emit('toggleSideBar')
    },
    logout () {
      this.$emit('logout')
    }
  },
  created () {
    console.log('userInfo', this.userInfo)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../styles/mixin.scss";

  .chuanghui-portal-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
