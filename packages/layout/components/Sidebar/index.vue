<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <SidebarTitle />
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '../../../styles/variables.scss'
import SidebarItem from './SidebarItem'
import { Menu, Scrollbar, MenuItem } from 'element-ui'
import Vue from 'vue'
import SidebarTitle from './SidebarTitle'
// import { getSessionStorage } from '../../../utils/common.js'
Vue.use(Menu)
Vue.use(Scrollbar)
Vue.use(MenuItem)
// let defaultSidbar = { opened: true, withoutAnimation: false }

export default {
  components: { SidebarItem, SidebarTitle },
  props: {
    sidebar: {
      type: Object,
      default: () => ({ opened: false, withoutAnimation: false })
    },
    routes: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    ...mapGetters([
      // 'sidebar',
      'menuList'
    ]),
    // routes () {
    //   let myRoutes = []
    //   this.menuList.map(item => {
    //     let children = []
    //     item.child.map(child => {
    //       children.push({
    //         path: child.menu_url,
    //         meta: {
    //           icon: child.menu_icon || 'form',
    //           title: child.title
    //         },
    //         name: child.title,
    //         hidden: !child.is_menu
    //       })
    //     })
    //     myRoutes.push({
    //       path: item.menu_url,
    //       meta: {
    //         icon: item.menu_icon || 'form',
    //         title: item.title
    //       },
    //       name: item.title,
    //       hidden: !item.is_menu,
    //       children
    //     })
    //   })
    //   this.$store.dispatch('ChangeMyRoutes', myRoutes)
    //   return myRoutes
    // },
    variables () {
      return variables
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
  // created () {
  //   if (!this.menuList.length) {
  //     this.getMenuList()
  //   }
  // },

  // methods: {
  //   getMenuList () {
  //     this.$store.dispatch('GetMenuList')
  //   }
  // }
}
</script>
