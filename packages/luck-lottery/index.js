import LuckDraw from './luck-lottery.vue';

// import './luckLottery.scss';

LuckDraw.install = function(Vue) {
  Vue.component(LuckDraw.name, LuckDraw);
};

export default LuckDraw