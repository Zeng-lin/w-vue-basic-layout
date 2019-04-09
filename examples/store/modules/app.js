import Cookies from 'js-cookie'
import { getMenuList } from '../../api/menu'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    menuList: [{
      menu_url: '/',
      name: 'home',
      title: 'Example',
      menu_icon: 'example',
      is_menu: true,
      child: [{
        menu_url: 'home2',
        name: 'home2',
        title: 'Example',
        menu_icon: 'example',
        is_menu: true

      },
      {
        menu_url: 'home3',
        name: 'home3',
        title: 'Example',
        menu_icon: 'example',
        is_menu: true
      }]
    },
    {
      menu_url: '/about',
      name: 'about',
      title: 'Example',
      menu_icon: 'example',
      is_menu: true,
      child: []
    }],
    myRoutes: []
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    GET_MENU_LIST: (state, menuList) => {
      state.menuList = menuList
    },
    CHANGE_MY_ROUTES: (state, myRoutes) => {
      state.myRoutes = myRoutes
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar ({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    GetMenuList ({ commit }) {
      getMenuList()
        .then(res => {
          let list = res.data || []
          commit('GET_MENU_LIST', list)
        })
        .catch(error => {
          console.log(error)
        })
    },
    ChangeMyRoutes ({ commit }, myRoutes) {
      commit('CHANGE_MY_ROUTES', myRoutes)
    }
  }
}

export default app
