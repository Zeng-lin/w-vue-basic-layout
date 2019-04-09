// 导入组件，组件必须声明 name
import Layout from './Layout.vue'

// 为组件添加 install 方法，用于按需引入
Layout.install = function (Vue) {
  Vue.component(Layout.name, Layout)
}

export default Layout
