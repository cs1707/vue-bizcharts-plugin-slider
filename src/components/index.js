
import Slider from './Slider'

const install = function (Vue, opts = {}) {
  Vue.component(Slider.name, Slider)
}

Slider.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Slider
