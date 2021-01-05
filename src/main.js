import Vue from 'vue'
import PlwButton from "./components/button.vue";
import PlwButtonBlack from "./components/buttonblack.vue";

import Main from "./sandbox/main.vue"
 
 Vue.config.productionTip = false

// utilisation des composants pour toutes les instances de vue qui suivent
Vue.component(PlwButton.name, PlwButton)
Vue.component(PlwButtonBlack.name, PlwButtonBlack)

// Creation de l'instance de vue associé à #app
new Vue({
   render: h => h(Main),
}).$mount('#app')
