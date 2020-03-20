import Vue from 'vue'
import App from './demo.vue'
// import luckLottery from '../packages/luck-lottery/index'
import luckLottery from 'luck-lottery'
import 'luck-lottery/lib/luck-lottery.css'
// console.log(luckLottery);

Vue.config.productionTip = false
Vue.use(luckLottery)

new Vue({
  render: h => h(App),
}).$mount('#app')
