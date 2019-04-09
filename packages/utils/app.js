import Cookies from 'js-cookie'
import { getSessionStorage, setSessionStorage } from './common.js'

export function ToggleSideBar () {
  let defaultSidbar = { opened: true, withoutAnimation: false }
  let sidebar = getSessionStorage('sidebar') || defaultSidbar
  if (sidebar.opened) {
    Cookies.set('sidebarStatus', 1)
  } else {
    Cookies.set('sidebarStatus', 0)
  }
  sidebar.opened = !sidebar.opened
  sidebar.withoutAnimation = false
  setSessionStorage('sidebar', sidebar)
}
