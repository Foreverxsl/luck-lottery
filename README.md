# luck-lottery
一个可复用的大转盘组件

## 安装
```
npm i luck-lottery --save
```

## 初始化
在main.js全局引用
```
import luckLottery from 'luck-lottery'
import 'luck-lottery/lib/luck-lottery.css'
Vue.use(luckLottery)
```

在组件中使用
```
<luck-lottery
  class="drawTable"
  ref="luckDrawPrize"
  :luckWidth="luckWidth"
  :luckheight="luckheight"
  :prizeList="prizeList"
  :turnsNumber="turnsNumber"
  :turnsTime="turnsTime"
  :prizeIndex="prizeIndex"
  :styleOpt="styleOpt"
  @endTurns="endTurns"
>
  <template slot="item" slot-scope="scope">
    <div class="drawTable-name">{{ scope.item.prizeName }}</div>
    <div class="drawTable-img">
      <img :src="scope.item.prizeImg">
    </div>
  </template>
</luck-lottery>
```

## 参数说明
参数名 | 描述
----|------|
luckDrawPrize | 用来引用子组件 |
luckWidth | 大转盘宽度 |
luckheight | 大转盘高度  |
prizeList | 转盘上要展示的奖品数据 |
turnsNumber | 转动圈数 |
turnsTime | 转动需要持续的时间(秒) |
prizeIndex | 中奖的奖品的index |
styleOpt | 转盘样式的选项 |
endTurns | 已经转动完转盘触发的函数 |

examples
```
prizeList: [
  {
    id: 'xiaomi',
    prizeName: '小米手机',
    prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/96788/40/337/73706/5dabd0e2E1f166028/7120ca2b421cb0a0.jpg!q70.dpg.webp',
  },
  {
    id: 'blue',
    prizeName: '蓝牙耳机',
    prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/65070/13/4325/183551/5d26e23fE09ab2010/a94eaff8242e6c63.jpg!q70.dpg.webp',
  },
  {
    id: 'apple',
    prizeName: 'apple watch',
    prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/105083/3/4010/126031/5de4aa51E1c7fefc6/0288f4cf3016e061.jpg!q70.dpg.webp',
  },
  {
    id: 'fruit',
    prizeName: '迪士尼苹果',
    prizeImg: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/47486/35/13399/356858/5da3cde2E9b3ec40f/3b3a56d54d5db565.jpg!q80.dpg.webp',
  },
  {
    id: 'fish',
    prizeName: '海鲜套餐',
    prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/109529/24/1330/283533/5dfc836fE33d8ce6b/372adb638802710a.jpg!q70.dpg.webp',
  },
  {
    id: 'thanks',
    prizeName: '谢谢参与',
    prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/104502/28/10892/5123/5e265414Ec167392c/2831c6155895f33d.png',
  }
],
```
```
styleOpt: {
  // 转盘中每一块扇形的背景色,根据奖品的index来取每一块的对应颜色
  prizeBgColors: ['rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)'],
  // 每一个扇形的外边框颜色
  borderColor: '#ff9800',
},
```
转动转盘
```
this.$refs.luckDrawPrize.rotate(index);
```
## github
See [Demo](https://github.com/Foreverxsl/luck-lottery).
