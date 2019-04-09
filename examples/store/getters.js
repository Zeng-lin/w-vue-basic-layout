const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  name: state => state.user.name,
  roles: state => state.user.roles,
  menuList: state => state.app.menuList
}
export default getters
