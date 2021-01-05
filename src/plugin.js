import PlwButton from "./components/button.vue";
import PlwButtonBlack from "./components/buttonblack.vue";

const PlwPlugin = {}

PlwPlugin.install = function (Vue) {
  Vue.component(PlwButton.name, PlwButton)
  Vue.component(PlwButtonBlack.name, PlwButtonBlack)
}

export default PlwPlugin