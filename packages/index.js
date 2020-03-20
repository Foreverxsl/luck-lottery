import luckLottery from './luck-lottery/index'

const components = [
  luckLottery
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
  install.installed = true
}

export default {
  install,
  ...components
}