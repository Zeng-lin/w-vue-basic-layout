<template>
  <div id="app">
    <!--
      toggleSideBar  点击隐藏左侧侧边栏的按钮时触发
      handleClickOutside 手机端的时候点击遮罩层的时候触发
      sidebar 左侧菜单栏的状态数据
      device 是否为手机
      routes 菜单的列表
     -->
    <Layout
      @toggleSideBar="toggleSideBar"
      @handleClickOutside="handleClickOutside"
      @logout="logout"
      :sidebar="sidebar"
      :device="device"
      :routes="routes"
      :userInfo="userInfo"
      :dropdownItemList="dropdownItemList"
    >
      <div id="navdf">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  // 这个mixins是为了初始化状态栏的状态，具体见原文件
  mixins: [ResizeMixin],
  data () {
    return {
      dropdownItemList: [{ icon: 'notice', itemName: '公告', itemChild: [{ itemChildName: '消息', itemChildNum: 3, path: '', link: 'https://www.baidu.com' }] }]
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device', // 设备类型，mobile或者desktop
      'menuList', // 后台请求回来的菜单
      'userInfo' // 用户信息
    ]),
    routes () {
      let myRoutes = []
      this.menuList.map(item => {
        let children = []
        item.child.map(child => {
          children.push({
            path: child.menu_url,
            meta: {
              icon: child.menu_icon || 'form',
              title: child.title
            },
            name: child.title,
            hidden: !child.is_menu
          })
        })
        myRoutes.push({
          path: item.menu_url,
          meta: {
            icon: item.menu_icon || 'form',
            title: item.title
          },
          name: item.title,
          hidden: !item.is_menu,
          children
        })
      })
      this.$store.dispatch('ChangeMyRoutes', myRoutes)
      return myRoutes
    }
  },
  created () {
    if (!this.menuList.length) {
      this.getMenuList()
    }
  },
  methods: {
    toggleSideBar () {
      console.log('dianjicaidan')
      this.$store.dispatch('ToggleSideBar')
    },
    getMenuList () {
      this.$store.dispatch('GetMenuList')
    },
    handleClickOutside () {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    },
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>
