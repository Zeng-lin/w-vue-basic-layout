// 导入单个组件
import Layout from './layout/index'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss' // global css
import './icons' // icon
// 以数组的结构保存组件，便于遍历
const components = [
  Layout
]

// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}